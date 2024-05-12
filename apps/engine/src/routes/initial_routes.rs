use axum::{routing::{get, post}, Router};
use crate::controllers::{generate::handle_generate, not_found};

pub fn initialize_routes() -> Router {
    Router::new()
        .route(
            "/",
            get(|| async { "Hello, world!" })
        ).route("/generate", post(handle_generate))
        .fallback(not_found::handle_404)
}
