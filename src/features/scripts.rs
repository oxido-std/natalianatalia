use actix_web::{get,post,patch,delete, HttpResponse, Responder, web};

use std::process::Command;
use std::path::PathBuf;
use std::env;
use serde_json::json;

use rusqlite::{ Connection};

use crate::models::script_model::SQLScript;

use super::super::db_conn::get_db_connection;
use super::super::helpers::{load_file_json};
use super::super::models::script_model::{Script,ExecRule,Rule,DtoScript};

async fn execute(path:String){
    let output = Command::new(path)
        // .args(&["-sS", "-T4", "-p1-100", "localhost"])
        .output()
        .expect("failed to execute process");

    let result = String::from_utf8_lossy(&output.stdout);

    dbg!(&output);
    println!("ipconfig output:\n{}", result);
}

async fn execute_py(path:String){
    dbg!("Execute python");
    
    let exe_path=env::current_dir().unwrap();
    let exe_path=exe_path.to_str().unwrap().replace("\\", "/");
    let script_path=format!("{}/{}",exe_path,path);
    
    // dbg!(&script_path);
    // let absolute_path = PathBuf::from(script_path);
    // dbg!(&absolute_path);
    // let absolute_path = absolute_path.canonicalize().unwrap();
    // dbg!(&absolute_path);
    // let script_path = absolute_path.to_str().unwrap();
    // dbg!(&script_path);

    let output = Command::new(format!("program {}",script_path))
        // .arg(script_path)
        .output()
        .expect("Fallo al ejecutar el comando");
    
    dbg!(&output);
    println!("{}", String::from_utf8_lossy(&output.stdout));
}

#[get("/scripts")]
async fn find_all_scripts() -> impl Responder {
    
    let conn=get_db_connection();
    
    let sql="SELECT * FROM scripts WHERE is_deleted=0";
    let result_vec=execute_query_and_parse(&conn, &sql);

    HttpResponse::Ok().json(json!({"status": "200","scripts": result_vec}))
}

#[get("/scripts/execute")]
async fn execute_one_script() -> impl Responder {

    let path=String::from("project_example/exec_rules");
    let rules=load_file_json(path,String::from("hello_world.execrule.json"));
    let rules: ExecRule=serde_json::from_str(&rules).expect("Error al convertir el archivo a json");
    dbg!(&rules);
    dbg!(&rules.name);
    dbg!(&rules.path);
    // execute_py(rules.path).await;

    execute(rules.path).await;


    HttpResponse::Ok().json(json!({"status": "200","scripts": "Rules"}))
}

///
/// this function make a preperare statemen and execute a query.
/// Then the results is parsed into a vector to serialize as json
/// 

fn execute_query_and_parse(conn: &Connection, sql:&str) -> Vec<Script>{
    let mut stmt = conn.prepare(&sql).unwrap();
    let elements_iter = stmt.query_map([], |row| {
        Ok(Script {
            id: row.get(0)?,
            name: row.get(1)?,
            created_at: row.get(2)?,
            updated_at: row.get(3)?,
            is_deleted: row.get(4)?,
        })
    }).unwrap();

    let mut result_vec=vec![];

    for element in elements_iter {
        result_vec.push(element.unwrap());
    }
    return result_vec;
}