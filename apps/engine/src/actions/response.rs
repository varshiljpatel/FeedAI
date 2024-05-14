use axum::Json;
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct SendResponse {
  pub text: Option<String>
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Response {
    pub status: u32,
    pub success: bool,
    pub message: Option<String>,
    pub response: Option<SendResponse>
}

pub fn send_response(response: Response) -> Json<Response> {
  Json::<Response>(response)
}