use dotenv::dotenv;

mod actions;
mod controllers;
mod routes;
mod repository;

#[tokio::main]
async fn main() {
    dotenv().ok();
    
    let app = routes::initial_routes::initialize_routes().nest("/v1", routes::v1::router());
    
    let addr: &str = "0.0.0.0:3110";
    let listener = tokio::net::TcpListener::bind::<&str>(addr).await.unwrap();
    
    println!("Server is running on port {}", addr);
    
    axum::serve(listener, app).await.unwrap();
}
