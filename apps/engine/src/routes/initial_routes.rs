use axum::{routing::get, Router};
use crate::controllers::not_found;

pub fn initialize_routes() -> Router {
    Router::new()
        .route(
            "/",
            get(|| async { "Hello, world!" })
        )
        .fallback(not_found::handle_404)
}
