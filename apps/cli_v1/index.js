#!/usr/bin/env node

import * as fs from "fs";
import path from "path";
import cliConfig from "./cliConfig.js";
import { FeedAiClient } from "@ascen/feedai";
import chalk from "chalk";

const cli = cliConfig;

function writeIssueToFile(filename, issue) {
    return fs.writeFileSync(filename, issue);
}

function readFileContent(filename) {
    try {
        return fs.readFileSync(filename, "utf-8");
    } catch (error) {
        if (error.code === "ENOENT") {
            return console.log(
                `File \"${import.meta.dirname + filename}\" doesn't exist.`,
            );
        }
        console.error(`Error reading file "${filename}":`, error);
    }
}

function displayLoadingAnimation() {
    const animation = "|/-\\";
    let i = 0;
    return setInterval(() => {
        process.stdout.write(
            `\r${chalk.yellow(animation[i++ % animation.length])} Writing to file...`,
        );
    }, 100);
}

if (cli.flags.file && cli.flags.issue) {
    const { file, issue } = cli.flags;
    const fileContent = readFileContent(cli.flags.file);

    const client = new FeedAiClient();

    const loadingInterval = displayLoadingAnimation();

    setTimeout(async () => {
        const res = await client.generate({
            code: fileContent,
            issue: issue,
        });

        if (res.success === false) throw new Error("Something went wrong");
        writeIssueToFile(file, res.content.text);
        clearInterval(loadingInterval);
        console.log(
            `\n${chalk.bgGreenBright.black(" SUCCESS ")} Successfully solved issue \"${issue.slice(0, 10) + "..."}\" in file \"${file}\"`,
        );
    }, 2000);
} else {
    console.error("Please provide both --file and --issue options.");
    cli.showHelp(1);
}
