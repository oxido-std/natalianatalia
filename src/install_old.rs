use actix_web::{HttpResponse, Responder, get};
use serde_json::json;

use super::db_conn::get_db_connection;

#[get("/install")]
pub async fn req_seed_setup() -> impl Responder {
    setup();
    populate_categories();
    const MESSAGE: &str = "Creating DB with Tables & populate tables";

    HttpResponse::Ok().json(json!({"status": "success","message": MESSAGE}))
}

pub fn setup() {

    let conn=get_db_connection();
    
    // todo: para la próxima versión agregar esto.
    // Tangas es el nombre de los targets.
    
    // conn.execute("CREATE TABLE tangas (
    //     id INTEGER PRIMARY KEY AUTOINCREMENT,
    //     name VARCHAR(50) NOT NULL,
    //     created_at TEXT NOT NULL,
    //     updated_at TEXT NULL,
    //     is_deleted BOOLEAN NOT NULL,
    //   )", []).unwrap();

    // Datos de la tanga.
    // Al momento de hacer el QUERY utilizar la función TYPEOF(val) para obtener el tipo de dato y así manejarlo mejor en RUST.
    // EJ. email, nombre, alias, etc.
    
    conn.execute("CREATE TABLE data_tangas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(50) NOT NULL,
        val VARCHAR(255) NOT NULL,
        created_at TEXT NOT NULL,
        updated_at TEXT NULL,
        is_deleted BOOLEAN NOT NULL,
      )", []).unwrap();

    // TODO: Para la próxima versión agrego la tabla de tangas
    // conn.execute("CREATE TABLE data_tangas (
    //     id INTEGER PRIMARY KEY AUTOINCREMENT,
    //     name VARCHAR(50) NOT NULL,
    //     val VARCHAR(255) NOT NULL,
    //     id_tanga INTEGER NOT NULL,
    //     created_at TEXT NOT NULL,
    //     updated_at TEXT NULL,
    //     is_deleted BOOLEAN NOT NULL,
    //     FOREIGN KEY (id_tanga)
    //       REFERENCES tangas (id) 
    //   )", []).unwrap();

    // Listado de scripts
    // Status: 0- No instalado / 1- Instalado /3 Error

    conn.execute("CREATE TABLE scripts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name VARCHAR(50) NOT NULL,
      path VARCHAR(255) NOT NULL,
      comment TEXT,
      status INTEGER NOT NULL,
      created_at TEXT NOT NULL,
      updated_at TEXT NULL,
      is_deleted BOOLEAN NOT NULL,
    )", []).unwrap();

    // Comandos del script
    // todo: Acá debería ver como enlazo los datos con los comandos.
    
    conn.execute("CREATE TABLE scripts_commands (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      command_name VARCHAR(50) NOT NULL,
      command VARCHAR(50) NOT NULL,
      comment TEXT,
      created_at TEXT NOT NULL,
      updated_at TEXT NULL,
      is_deleted BOOLEAN NOT NULL,
    )", []).unwrap();

    // reglas de ejecución:
    // All AT ONCE = Crea un gran commando Ej. sherlock -u pepe1 -u2 pepe2 -u3 email@gmail.com
    // 1By1 = Ejecuta el comando para cada uno de los datos asociados al comando.
    // CUSTOM = Crea una regla especial de ejecución.

    // Todas estas reglas se almacenan en un log de ejecución.
    
    conn.execute("CREATE TABLE scripts_exec_rules (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      id_script INTEGER NOT NULL,
      name VARCHAR(50) NOT NULL,
      created_at TEXT NOT NULL,
      updated_at TEXT NULL,
      is_deleted BOOLEAN NOT NULL,
      FOREIGN KEY (id_script)
          REFERENCES scripts (id)
    )", []).unwrap();

    // Estatabla vincula las reglas de ejecución con la data

    conn.execute("CREATE TABLE exec_rules_2_data (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      id_exec_rule INTEGER NOT NULL,
      id_data INTEGER NOT NULL,
      is_deleted BOOLEAN NOT NULL,
      FOREIGN KEY (id_exec_rule)
          REFERENCES scripts_exec_rules (id)
      FOREIGN KEY (id_data)
          REFERENCES data_tangas (id)
    )", []).unwrap();

    // Log de ejecuciones. Almacena los comandos y si guardó un archivo.
    
    conn.execute("CREATE TABLE log_exec (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      id_script INTEGER NOT NULL,
      id_exec_rule INTEGER NOT NULL,
      created_at TEXT NOT NULL,
      is_deleted BOOLEAN NOT NULL,
      FOREIGN KEY (id_script)
          REFERENCES scripts (id)
      FOREIGN KEY (id_exe_rule)
        REFERENCES scripts_exe_rules (id)
    )", []).unwrap();

    
}

pub fn populate_categories(){

  todo!();
  // let conn=get_db_connection();

  // let categories_arr=[""];

  // for cat in categories_arr{
  //   conn.execute("INSERT INTO categories (name,created_at,updated_at,is_deleted) VALUES (?1,datetime('now'),datetime('now'),false)",
  //   &[&cat.to_string()]).unwrap();
  // }

}