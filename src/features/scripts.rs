use actix_web::{get,post,patch,delete, HttpResponse, Responder, web};
use serde_json::json;
use rusqlite::{ Connection};

use crate::models::script_model::SQLScript;

use super::super::db_conn::get_db_connection;
use super::super::models::script_model::{Script,DtoScript};

fn load_file(){
    
}

#[get("/scripts")]
async fn find_all_scripts() -> impl Responder {
    
    let conn=get_db_connection();
    
    let sql="SELECT * FROM scripts WHERE is_deleted=0";
    let result_vec=execute_query_and_parse(&conn, &sql);

    HttpResponse::Ok().json(json!({"status": "200","scripts": result_vec}))
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