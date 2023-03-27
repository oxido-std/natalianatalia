use std::fs;
// use std::fs::File;
// use std::io::prelude::*;

pub fn load_file_json(path:String,file_name: String) -> String{

    let file_path = format!("{}/{}", path, file_name);
    match fs::read_to_string(file_path) {
        Ok(content) => content,
        Err(e) => panic!("Error al cargar archivo JSON: {}", e),
    }
}