use actix_web::{get,post,patch,delete, HttpResponse, Responder, web};

use serde::{Deserialize, Serialize};
use serde_json::json;

use rusqlite::{ Connection};

use std::process::Command;

use crate::models::script_model::SQLScript;

use super::super::db_conn::get_db_connection;
use super::super::helpers::{load_file_json};
use super::super::models::script_model::{Script,ExecRule,Rule,DtoScript};

fn execute(){
    let output = Command::new("nmap")
        .args(&["-sS", "-T4", "-p1-100", "localhost"])
        .output()
        .expect("failed to execute process");

    let result = String::from_utf8_lossy(&output.stdout);

    println!("Nmap output:\n{}", result);
}

fn execute_py(){
    let output = Command::new("python")
        .arg("mi_script.py")
        .output()
        .expect("Fallo al ejecutar el comando");

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
    
    // let conn=get_db_connection();
    
    // let sql="SELECT * FROM scripts WHERE is_deleted=0";
    // let result_vec=execute_query_and_parse(&conn, &sql);

    // HttpResponse::Ok().json(json!({"status": "200","scripts": result_vec}))

    // script=load_file_json(file_name);
    let path=String::from("project_example/exec_rules");
    let rules=load_file_json(path,String::from("hello_world.execrule.json"));
    let rules: ExecRule=serde_json::from_str(&rules).expect("Error al convertir el archivo a json");
    dbg!(&rules);
    dbg!(&rules.name);
    execute_py();

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