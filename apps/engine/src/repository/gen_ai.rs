use reqwest::Client;
use crate::{
    actions::filter_response::filter,
    repository::constants::{ GENAI_API_VERSION, GENAI_BASE_URL, GENAI_MODEL },
};
use serde::Deserialize;
use serde_json::json;

#[allow(dead_code)]
#[derive(Debug, Deserialize)]
struct ApiResponse {
    candidates: Vec<Candidate>,
    usage_metadata: Option<UsageMetadata>,
}

#[allow(dead_code)]
#[derive(Debug, Deserialize)]
struct Candidate {
    content: Content,
    finish_reason: Option<String>,
    index: usize,
    safety_ratings: Option<Vec<SafetyRating>>,
}

#[allow(dead_code)]
#[derive(Debug, Deserialize)]
struct Content {
    parts: Vec<Part>,
    role: String,
}

#[allow(dead_code)]
#[derive(Debug, Deserialize)]
struct Part {
    text: String,
}

#[allow(dead_code)]
#[derive(Debug, Deserialize)]
struct SafetyRating {
    category: String,
    probability: String,
}

#[allow(dead_code)]
#[derive(Debug, Deserialize)]
struct UsageMetadata {
    prompt_token_count: usize,
    candidates_token_count: usize,
    total_token_count: usize,
}

pub async fn generate_response_from_prompt(prompt: String) -> String {
    let genai_api_key = std::env
        ::var("GOOGLE_API_KEY")
        .expect("Google gemini api key is not found in env!");

    let url = format!(
        "{base_url}/{version}/{model}:generateContent?key={api_key}",
        base_url = GENAI_BASE_URL,
        version = GENAI_API_VERSION,
        model = GENAI_MODEL,
        api_key = genai_api_key
    );

    let client: Client = Client::new();

    let body =
        json!({
      "contents": [{
        "parts": [{
            "text": prompt
        }]
      }]
    });

    let response = client.post(url).json(&body).send().await.expect("Failed to request");

    let api_response = response.json::<ApiResponse>().await;

    match api_response {
        Ok(api_response) => {
            return filter(api_response.candidates[0].content.parts[0].text.to_string());
        }
        Err(e) => {
            return format!("Response is unavailabe due to some errors: {:?}", e);
        }
    }
}
