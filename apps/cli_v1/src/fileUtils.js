import fs from "fs";
import chalk from "chalk";

export function writeIssueToFile(filename, issue) {
    fs.writeFileSync(filename, issue);
}

export function readFileContent(filename) {
    try {
        return fs.readFileSync(filename, "utf-8");
    } catch (error) {
        if (error.code === "ENOENT") {
            console.log(
                `File \"${import.meta.dirname + filename}\" doesn't exist.`,
            );
        }
        throw new Error(`Error reading file "${filename}": ${error}`);
    }
}

export function displayLoadingAnimation() {
    const animation = ["-  ", " - ", "  -"];
    let i = 0;
    return setInterval(() => {
        process.stdout.write(
            `\r${chalk.bold(animation[i++ % animation.length])} Loading...`,
        );
    }, 250);
}
