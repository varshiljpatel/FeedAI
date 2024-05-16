use axum::{ routing::post, Router };
use crate::controllers::{ generate::handle_generate, solve_issue::handle_solve };

pub fn router() -> Router {
    Router::new()
    .route("/generate", post(handle_generate))
    .route("/solve", post(handle_solve))
}
