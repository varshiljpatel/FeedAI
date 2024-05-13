use axum::Json;
use serde::{Deserialize, Serialize};
use crate::actions::{generate_prompt::generate_prompt, response::{send_response, Response, SendResponse}};

#[derive(Debug, Serialize, Deserialize)]
pub struct Prompt {
    text: String,
}

pub async fn handle_generate(Json(body): Json<Prompt>) -> Json<Response> {
  if body.text.trim().is_empty() {
    return send_response(Response {
      status: 400,
      success: false,
      message: Some(String::from("Body does not contain text field")),
      response: None
    });
  }
  let updataed_prompt: String = generate_prompt(body.text);
  send_response(Response {
    message: None,
    status: 200,
    success: false,
    response: Some(SendResponse {
      text: Some(String::from(updataed_prompt))
    })
  })
}