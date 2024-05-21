use axum::Json;
use serde::{Deserialize, Serialize};
use crate::actions::{generate_prompt::solve_issue_prompt, response::{send_response, Response, SendResponse}};
use crate::repository::gen_ai;

#[derive(Debug, Serialize, Deserialize)]
pub struct Prompt {
    code: String,
    issue: String
}

pub async fn handle_solve(Json(body): Json<Prompt>) -> Json<Response> {
  if body.code.trim().is_empty() || body.issue.trim().is_empty() {
    return send_response(Response {
      status: 400,
      success: false,
      message: Some(String::from("Body does not contain code and issuex field")),
      response: None
    });
  }
  let updataed_prompt: String = solve_issue_prompt(body.code, body.issue);

  // Generate an api response from gen_ai repository
  let api_response = gen_ai::generate_response_from_prompt(updataed_prompt).await;

  send_response(Response {
    message: None,
    status: 200,
    success: false,
    response: Some(SendResponse {
      text: Some(String::from(api_response))
    })
  })
}