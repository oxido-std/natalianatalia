use std::fs;
use std::process::Command;
use std::path::PathBuf;
use std::env;

use serde::{Deserialize, Serialize};

use crate::{helpers::load_file_json, models::relfile_model::RelFile};
use super::super::models::tangafile_model::{TangaFile};

#[derive(Debug,Serialize,Deserialize)]
pub struct Rule{
    pub name:String,
    pub comment:String,
    pub args:Vec<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct ScriptFile{
    pub name:String,
    pub path:String,
    pub comment:String,
    pub date:String,
    pub rules:Vec<Rule>,
}

impl ScriptFile{
    pub fn new(path: String,file_name:String) -> Self{
        
        let rules=load_file_json(path, file_name);
        
        return serde_json::from_str(&rules).expect("Error al convertir el archivo a json");
    }

    pub fn execute_py(&self,path:String){
        let output = Command::new("python")
            .arg(path)
            .output()
            .expect("Fallo al ejecutar el comando");
        
        dbg!(&output);
        println!("{}", String::from_utf8_lossy(&output.stdout));
    }

    // check if the args is not empty and then if the elements contains the character {} else return an empty vector
    pub fn check_args(&self, rule_id:usize) -> bool{
        let rule=&self.rules[rule_id];
        if !rule.args.is_empty() && rule.args.iter().any(|x| x.contains("{")){
            return true;
        }else{
            return false;
        }
    }

    // todo
    // mirar el código y probarlo.
    // this works for parse the args and replace the {} with the value of the tangas file.
    pub fn parse_args(&self, rule_id:usize) -> Vec<String>{
        let mut args=&self.rules[rule_id].args;
        let mut result=vec![];

        // get rel.
        let rel_path=String::from("project_example/rels");
        let rel_file_path=String::from("rules_2_tangas.json");
        
        let rel=RelFile::new(rel_path, rel_file_path);
        let tanga=rel.get_tanga(String::from("project_example/tangas"));

        // check if args is not empty and then if the elements contains the character {}
        if !args.is_empty() && args.iter().any(|x| x.contains("{")){
            dbg!(args);
            for arg_filtered in rel.rels.iter().filter(|x| x.rule==rule_id){
                dbg!(arg_filtered);
                for new_arg in &arg_filtered.args{
                    // for arg_to_replace in args.iter_mut(){
                    //     if arg_to_replace.contains("{"){
                    //     }
                    // }
                }
            }
        }
        dbg!(&result);
        return result;
    }

    pub fn execute(&self,rule:usize){
        
        let mut args=vec![];
        if self.check_args(rule){
            args=self.parse_args(rule);
        }

        let output = Command::new(&self.path)
            .args(&args)
            .output()
            .expect("Fallo al ejecutar el comando");
        
        // dbg!(&output);
        // println!("{}", String::from_utf8_lossy(&output.stdout));
    }
}