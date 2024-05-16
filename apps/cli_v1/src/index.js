import cliConfig from "./cliConfig.js";
import {
    readFileContent,
    displayLoadingAnimation,
    writeIssueToFile,
} from "./fileUtils.js";
import chalk from "chalk";
import { solveIssueWithFeedAi } from "./feedAiClient.js";

export async function solveIssue() {
    const cli = cliConfig;
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
                    `\r${chalk.bgGreenBright.black(" SUCCESS ")} Successfully solved issue \"${issue.slice(0, 10) + "..."}\" in file \"${file}\"`,
                );
            } catch (error) {
                console.error("\rSomething went wrong:", error);
            }
        }, 2000);
    } else {
        console.error("\rPlease provide both --file and --issue options.");
        cli.showHelp(1);
    }
}
