use std::fs;
use std::process::Command;
use std::path::PathBuf;
use std::env;

use serde::{Deserialize, Serialize};

use crate::helpers::load_file_json;

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

    pub fn load_file_json(path:String,file_name: String) -> String{

        let file_path = format!("{}/{}", path, file_name);
        match fs::read_to_string(file_path) {
            Ok(content) => content,
            Err(e) => panic!("Error al cargar archivo JSON: {}", e),
        }
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
        if !rule.args.is_empty() && rule.args.iter().any(|x| x.contains("{}")){
            dbg!(true);
            return true;
        }else{
            dbg!(false);
            return false;
        }
    }

    // todo
    // mirar el código y probarlo.
    // this works for parse the args and replace the {} with the value of the tangas file.
    pub fn parse_args(&self, rule_id:usize) -> Vec<String>{
        let args=&self.rules[rule_id].args;
        let mut result=vec![];
        // check if args is not empty and then if the elements contains the character {}
        if !args.is_empty() && args.iter().any(|x| x.contains("{}")){
            for arg in args{
                if arg.contains("{") && arg.contains("}"){
                    let arg_name=arg.replace("{", "").replace("}", "");
                    // todo! reemplazar el valor por el valor de la tanga.
                    let arg_value=env::var(arg_name).unwrap();
                    result.push(arg_value);
                }else{
                    result.push(arg.to_string());
                }
            }
        } 

        dbg!(&result);
        return result;
    }

    pub fn execute(&self,rule:usize){
        // let mut path = env::current_dir().unwrap();
        // path.push("project_example");
        // path.push("exec_rules");
        // path.push("hello_world.py");
        // dbg!(&path);
        
        let mut args=vec![];
        dbg!("check if args is not empty and then if the elements contains the character { }");
        if self.check_args(rule){
            args=self.parse_args(rule);
        }

        let output = Command::new(&self.path)
            .args(&args)
            .output()
            .expect("Fallo al ejecutar el comando");
        
        dbg!(&output);
        println!("{}", String::from_utf8_lossy(&output.stdout));
    }
}