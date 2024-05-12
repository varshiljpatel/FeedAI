use axum::Json;
use serde::{Deserialize, Serialize};
use crate::actions::generate_prompt::generate_prompt;

#[derive(Debug, Serialize, Deserialize)]
pub struct Prompt {
    text: String,
}

pub async fn handle_generate(Json(prompt): Json<Prompt>) -> String {
  let updataed_prompt: String = generate_prompt(prompt.text);
  return updataed_prompt;
}