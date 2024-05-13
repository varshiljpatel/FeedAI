use std::env;
use dotenv::dotenv;

mod actions;
mod controllers;
mod routes;
mod repository;

#[tokio::main]
async fn main() {
    dotenv().ok();
    
    // Get gemini key from environment variable.
    env::var("GOOGLE_API_KEY").expect("Google gemini api key is not found in env!");
    
    let app = routes::initial_routes::initialize_routes().nest("/v1", routes::v1::router());
    
    let addr: &str = "0.0.0.0:8080";
    let listener = tokio::net::TcpListener::bind::<&str>(addr).await.unwrap();
    
    println!("Server is running on port {}", addr);
    repository::gen_ai::generate_response_from_prompt(String::from("https://ai-zora.vercel.app/api/suggestions")).await;
    
    axum::serve(listener, app).await.unwrap();
}
