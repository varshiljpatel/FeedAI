use dotenv::dotenv;

mod actions;
mod controllers;
mod routes;
mod repository;

#[tokio::main]
async fn main() {
    dotenv().ok();
    
    let app = routes::initial_routes::initialize_routes().nest("/v1", routes::v1::router());
    
    let addr: &str = "0.0.0.0:8080";
    let listener = tokio::net::TcpListener::bind::<&str>(addr).await.unwrap();
    
    println!("Server is running on port {}", addr);
    repository::gen_ai::generate_response_from_prompt(String::from("Hello")).await;
    
    axum::serve(listener, app).await.unwrap();
}
