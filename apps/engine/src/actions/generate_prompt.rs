pub fn generate_prompt(input_string: String) -> String {
  format!("Generate a code for task: {}", input_string)
}