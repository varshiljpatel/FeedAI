/**
 * Convert
 * ```javascript
 * function addNumbers(num1, num2, num3) {
 * return num1 + num2 + num3;
 * }
 * ```
 * To:
 * function addNumbers(num1, num2, num3) {
 * return num1 + num2 + num3;
 * }
 */

pub fn filter(response_string: String) -> String {
    let words: Vec<&str> = response_string.split(" ").collect();
    let first_word: Vec<&str> = words[0].split("\n").collect();
    let last_word: Vec<&str> = words[words.len() - 1].split("\n").collect();
    let remove_front: String = response_string.replace(format!("{}\n", first_word[0].to_string()).as_str(), "");
    let remove_back: String = remove_front.replace(last_word[last_word.len() - 1], "");
    return remove_back;
}
