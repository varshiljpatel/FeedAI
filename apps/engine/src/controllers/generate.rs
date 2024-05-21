use axum::Json;
use serde::{Deserialize, Serialize};
use crate::actions::{generate_prompt::generate_prompt, response::{send_response, Response, SendResponse}};
use crate::repository::gen_ai;

#[derive(Debug, Serialize, Deserialize)]
pub struct Prompt {
    prompt: String,
    language: Option<String>
}

pub async fn handle_generate(Json(body): Json<Prompt>) -> Json<Response> {
  if body.prompt.trim().is_empty() {
    return send_response(Response {
      status: 400,
      success: false,
      message: Some(String::from("Body does not contain code and issuex field")),
      response: None
    });
  }
  let updataed_prompt: String = generate_prompt(body.prompt, body.language);

  // Generate an api response from gen_ai repository
  let api_response = gen_ai::generate_response_from_prompt(updataed_prompt).await;

  send_response(Response {
    message: Some(String::from("Code generated successfully!")),
    status: 200,
    success: true,
    response: Some(SendResponse {
      text: Some(String::from(api_response))
    })
  })
}