use reqwest::Client;
use serde::{ Deserialize, Serialize };

#[derive(Debug, Serialize, Deserialize)]
struct ApiResponse {
    message: String,
    success: bool,
}

pub async fn generate_response_from_prompt(prompt: String) {
    let url: &str = prompt.as_str();

    let client: Client = Client::new();

    // let body = json!({
    //   "text": prompt
    // });

    let response = client.get(url).send().await.expect("Failed to request");

    let api_response: Result<ApiResponse, reqwest::Error> = response.json::<ApiResponse>().await;

    match api_response {
        Ok(api_response) => { println!("Message {:?}\n.", api_response.message) }
        Err(e) => { println!("Error parsing {:?}", e) }
    }
}
