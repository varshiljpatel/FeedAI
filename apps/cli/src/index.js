import cliConfig from "./cliConfig.js";
import {
    readFileContent,
    displayLoadingAnimation,
    writeIssueToFile,
} from "./fileUtils.js";
import chalk from "chalk";
import {
    generateCodeWithFeedAi,
    solveIssueWithFeedAi,
} from "./feedAiClient.js";

export async function solveIssue() {
    const cli = cliConfig;

    if (cli.input[0] === "solve") {
        if (cli.flags.file && cli.flags.issue) {
            const { file, issue } = cli.flags;

            const loadingInterval = displayLoadingAnimation();
            const fileContent = readFileContent(cli.flags.file);

            setTimeout(async () => {
                try {
                    const res = await solveIssueWithFeedAi(fileContent, issue);

                    writeIssueToFile(file, res.content.text);
                    clearInterval(loadingInterval);
                    console.log(
                        `\r${chalk.greenBright("Success:")} Successfully solved issue \"${issue.slice(0, 10) + "..."}\" in file \"${file}\"`,
                    );
                } catch (error) {
                    console.error(
                        `\r${chalk.red("Error:")}Something went wrong: ${error.message}`,
                    );
                }
            }, 2000);
        } else {
            console.error(
                chalk.red("Error:"),
                "Please provide filename & issue options.",
            );
            cli.showHelp(1);
        }
    } else if (cli.input[0] === "generate") {
        if (cli.flags.prompt && cli.flags.file) {
            const { file, prompt, language } = cli.flags;

            const loadingInterval = displayLoadingAnimation();

            setTimeout(async () => {
                try {
                    const res = await generateCodeWithFeedAi(prompt, language);

                    writeIssueToFile(file, res.content.text);
                    clearInterval(loadingInterval);
                    console.log(
                        `\r${chalk.greenBright("Success:")} Successfully generated code for \"${prompt.slice(0, 10) + "..."}\" in file \"${file}\"`,
                    );
                } catch (error) {
                    console.error(
                        `\r${chalk.red("Error:")}Something went wrong: ${error.message}`,
                    );
                }
            }, 2000);
        } else {
            console.error(
                chalk.red("Error:"),
                "Please provide prompt, file & language(optional) options.",
            );
            cli.showHelp(1);
        }
    } else {
        console.log(
            chalk.red("Error:"),
            "Please provide appropriate service name.",
        );
        cli.showHelp(1);
    }
}
