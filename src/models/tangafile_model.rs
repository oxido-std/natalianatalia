use serde::{Deserialize, Serialize};

use crate::helpers::load_file_json;

#[derive(Debug,Serialize,Deserialize)]
pub struct TangaInfo{
    pub name:String,
    pub data:String,
    pub data_type:String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct TangaFile{
    pub tanga:Vec<TangaInfo>
}

impl TangaFile{
    pub fn new(path: String,file_name:String) -> Self{
        
        let tanga_file=load_file_json(path, file_name);
        
        return serde_json::from_str(&tanga_file).expect("Error al convertir el archivo a json");
    }

}