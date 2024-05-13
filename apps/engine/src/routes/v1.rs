use axum::{routing::post, Router};
use crate::controllers::generate::handle_generate;

pub fn router() -> Router {
  Router::new().route("/generate", post(handle_generate))
}