pub fn generate_prompt(code: String, issue: String) -> String {
  format!("code:\n{}\nissue:\n{}\nFind issue in provided code and solve issue and rewrite this code again.\nNote: response does not contain any text explaination and give only code no any explaination text.", code, issue)
}