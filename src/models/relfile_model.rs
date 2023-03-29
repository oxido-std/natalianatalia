use std::path;

use serde::{Deserialize, Serialize};

use crate::helpers::load_file_json;

use super::tangafile_model::TangaFile;

#[derive(Debug,Serialize,Deserialize,Clone)]
pub struct RelInfo{
    pub rule:usize,
    pub args:Vec<String>,
    pub replace_to:Vec<String>,
}

#[derive(Debug, Serialize, Deserialize,Clone)]
pub struct RelFile{
    pub comment:String,
    pub rules_file:String,
    pub tanga_file:String,
    pub rels:Vec<RelInfo>
}

impl RelFile{
    pub fn new(path: String,file_name:String) -> Self{
        let rel_file=load_file_json(path, file_name);

        return serde_json::from_str(&rel_file).expect("Error al convertir el archivo a json");
    }

    pub fn get_tanga(&self,path:String) -> TangaFile{
        return TangaFile::new(path, self.tanga_file.clone());
    }

}