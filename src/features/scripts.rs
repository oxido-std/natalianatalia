use actix_web::{get,post,patch,delete, HttpResponse, Responder, web};

use serde_json::json;

use rusqlite::{ Connection};

use super::super::db_conn::get_db_connection;
use super::super::models::script_model::{Script,SQLScript,DtoScript};
use super::super::models::scriptfile_model::{ScriptFile};


#[get("/scripts")]
async fn find_all_scripts() -> impl Responder {
    
    let conn=get_db_connection();
    
    let sql="SELECT * FROM scripts WHERE is_deleted=0";
    let result_vec=execute_query_and_parse(&conn, &sql);

    HttpResponse::Ok().json(json!({"status": "200","scripts": result_vec}))
}

#[get("/scripts/execute")]
async fn execute_one_script() -> impl Responder {

    // Esto es de ejemplo porque estos datos se obtienen de la base de datos
    let path=String::from("project_example/exec_rules");
    let file_name=String::from("hello_world.execrule.json");
    
    let rules:ScriptFile=ScriptFile::new(path,file_name);
    
    // dbg!(&rules);
    dbg!(&rules.name);
    dbg!(&rules.path);
    dbg!(&rules.rules);
    
    dbg!("ejecuta rule 0");
    rules.execute(0);
    // dbg!("ejecuta rule 1");
    // rules.execute(1);
    dbg!("ejecuta rule 2");
    rules.execute(2);

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