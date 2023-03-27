use std::fs::DirBuilder;
use std::fs::File;
use std::io::Write;

use actix_web::{HttpResponse, Responder, get};
use serde_json::json;

// use super::db_conn::get_db_connection;

#[get("/new_project/")]
pub async fn project_setup() -> impl Responder {
  setup();
  const MESSAGE: &str = "Nuevo proyecto creado.";

  HttpResponse::Ok().json(json!({"status": "200","message": MESSAGE}))
}

pub fn setup() {

  // El nombre del proyecto lo obtiene del parámetro que se le envía

  let project_dir="project_example";
  create_directories(project_dir.to_string());
  create_tanga_example(project_dir.to_string());
  create_exec_rules(project_dir.to_string());
  // Ahora tiene que crear el log en una base datos sqlite
  // una tabla de execution rules?

  
}

fn create_directories(project_dir:String){
  let builder = DirBuilder::new();

  let directories=vec![
    "exec_rules",
    "logs",
    "tangas",
  ];

  builder.create(&project_dir).expect("Error al crear la carpeta");
  for d in directories{
    builder.create(format!("{}/{}",&project_dir,d)).expect("Error al crear la carpeta: {d}");
  }
}

fn create_tanga_example(project_dir:String){
  let content="{
    \"Pepito\":[
        {
            \"name\":\"Email\",
            \"val\":\"Pepito@hotmail.com\",
            \"type\":\"String\"
        },
        {
            \"name\":\"Twitter\",
            \"val\":\"pepito_3copas\",
            \"type\":\"String\"
        },
        {
            \"name\":\"edad\",
            \"val\":\"21\",
            \"type\":\"i8\"
        },
        {
            \"name\":\"Facebook\",
            \"val\":\"Pepito Rodriguez del Río\",
            \"type\":\"String\"
        }
    ]
}";
  //create file
  let mut file=File::create(format!("{}/tangas/tanga.example.json",project_dir)).expect("Error al crear el archivo: tanga.example.json");
  file.write_all(content.as_bytes()).expect("Error al crear el archivo.");

}

fn create_exec_rules(project_dir:String){
  let content="{
    {
      \"name\":\"Sherlock\",
      \"path\":\"sherlock.py\",
      \"comment\":\"\",
      \"date\":\"2023-03-01\",
      \"rules\":
      [
          {
              \"name\":\"Encuentra el usuario y el alias\",
              \"command\":\" -u {twitter} -alias {alias} - \"
          },
          {
              \"name\":\"Encuentra el usuario por email\",
              \"command\":\" -email {}\"
          }
      ]
  }";
  //create file
  let mut file=File::create(format!("{}/exec_rules/exec_rules.example.json",project_dir)).expect("Error al crear el archivo: exec_rules.example.json");
  file.write_all(content.as_bytes()).expect("Error al crear el archivo.");

}