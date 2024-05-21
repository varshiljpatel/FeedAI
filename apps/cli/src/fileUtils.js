import fs from "fs";
import chalk from "chalk";

export async function writeIssueToFile(filename, data) {
    fs.writeFileSync(filename, data);
    return;
}

export function readFileContent(filename) {
    try {
        fs.readFileSync(filename, "utf-8");
    } catch (error) {
        if (error.code === "ENOENT") {
            console.log(
                `File \"${import.meta.dirname + filename}\" doesn't exist.`,
            );
            return process.exit(1);
        } else {
            console.log(`Error reading file "${filename}": ${error.message}`);
        }
    }
}

export function displayLoadingAnimation() {
    const animation1 = ["-  ", " - ", "  -"];
    let i = 0;
    return setInterval(() => {
        process.stdout.write(
            `\r[ ${chalk.bold(animation1[i++ % animation1.length])} ] Loading...`,
        );
    }, 250);
}
