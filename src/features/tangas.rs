use actix_web::{get,post,patch,delete, HttpResponse, Responder, web};
use serde_json::json;
use rusqlite::{ Connection};

use crate::models::tanga_model::SQLTanga;

use super::super::db_conn::get_db_connection;
use super::super::helpers::{load_file_json};
use super::super::models::tanga_model::{Tanga,DtoTanga};

#[get("/tangas")]
async fn find_all_tangas() -> impl Responder {
    
    let conn=get_db_connection();
    
    let sql="SELECT * FROM tangas WHERE is_deleted=0";
    let result_vec=execute_query_and_parse(&conn, &sql);

    HttpResponse::Ok().json(json!({"status": "200","tangas": result_vec}))
}

///
/// this function make a preperare statemen and execute a query.
/// Then the results is parsed into a vector to serialize as json
/// 

fn execute_query_and_parse(conn: &Connection, sql:&str) -> Vec<Tanga>{
    let mut stmt = conn.prepare(&sql).unwrap();
    let elements_iter = stmt.query_map([], |row| {
        Ok(Tanga {
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