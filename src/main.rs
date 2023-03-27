use actix_web::{middleware::Logger};
use actix_files as fs;
use actix_web::{App, HttpServer };
use dotenv::dotenv;
use std::env;

mod features;
mod db_conn;
mod helpers;
mod models;

#[actix_web::main]
async fn main() -> std::io::Result<()> {

    // app info
    const APP_NAME: &str = env!("CARGO_PKG_NAME");
    const APP_VERSION: &str = env!("CARGO_PKG_VERSION");

    dotenv().ok();

    let server_host=env::var("SERVER_HOST").unwrap();
    let server_port=env::var("SERVER_PORT").unwrap();
    let server_port=server_port.parse::<u16>().unwrap();

    if std::env::var_os("RUST_LOG").is_none() {
        std::env::set_var("RUST_LOG", "actix_web=info");
    }
    env_logger::init();

    println!("👮-----------------------------------------------------------👮");
    println!("                  📜 {} [{}]",APP_NAME,APP_VERSION);
    println!("   🚀 Server started successfully at http://{}:{}",server_host,server_port);
    println!("   🔗 View in webbrowser at http://{}:{}/",server_host,server_port);
    println!("👮-----------------------------------------------------------👮");

    HttpServer::new(move || {
        App::new()
            // Projects
            .service(features::new_project::project_setup)

            // Tangas
            .service(features::tangas::find_all_tangas)

            // Scripts
            .service(features::scripts::find_all_scripts)
            .service(features::scripts::execute_one_script)

            // STATIC
            .service(fs::Files::new("/","./ui").index_file("index.html"))
            .wrap(Logger::default())
    })
    .bind((server_host, server_port))?
    .run()
    .await
}
