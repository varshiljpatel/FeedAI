use std::env;
use dotenv::dotenv;

mod actions;
mod controllers;
mod routes;

#[tokio::main]
async fn main() {
    dotenv().ok();

    // Get gemini key from environment variable.
    env::var("GOOGLE_API_KEY").expect("Google gemini api key is not found in env!");

    let app = routes::initial_routes::initialize_routes().nest("/v1", routes::v1::router());

    let addr: &str = "0.0.0.0:8080";
    let listener = tokio::net::TcpListener::bind::<&str>(addr).await.unwrap();

    println!("Server is running on port {}", addr);

    axum::serve(listener, app).await.unwrap();
}
