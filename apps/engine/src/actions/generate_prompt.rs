/**
 * Generate code from prompt,
 * requires generate code prompt as an argument,
 * requires generate code language.
 */
pub fn generate_prompt(prompt: String, language: Option<String>) -> String {
    let lang = language.unwrap_or_else(|| "javascript".to_string());
    format!(
        "Generate a code in a single string for prompt\nPrompt:\n{prompt} in {lang:?} language.\nNote: response does not contain any text explanation and give only code no any explanation text."
    )
}

/**
 * Solve issue in code from prompt,
 * requires code and issue as an argument,
 */
pub fn solve_issue_prompt(code: String, issue: String) -> String {
    format!(
        "code:\n{code:?}\nissue:\n{issue:?}\nFind issue in provided code and solve issue and rewrite this code again.\nNote: response does not contain any text explaination and give only code no any explaination text."
    )
}
