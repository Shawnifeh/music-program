use actix_web::{get, App, HttpServer, Responder};
use serde::Serialize;
use std::{thread, time::Duration};

#[derive(Serialize)]
struct AudioFrame {
    volume: f32,
    beat: bool,
}

#[get("/stream")]
async fn stream() -> impl Responder {
    let frame = AudioFrame {
        volume: rand::random::<f32>(),
        beat: rand::random::<bool>(),
    };

    serde_json::to_string(&frame)
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| App::new().service(stream))
        .bind("127.0.0.1:8080")?
        .run()
        .await
}