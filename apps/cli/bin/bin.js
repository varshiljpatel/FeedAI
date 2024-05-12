#!/usr/bin/env node

import readline from "readline";
import startServer from "../index.js";
import { sendCommandToServer } from "../adapter/sendCommand.js";

startCLI();

export default function startCLI() {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	const port = 3110;

	rl.question(">> ", async (command) => {
		command = command.trim();
		if (
			command != "" &&
			command.length > 0 &&
			command != undefined &&
			command != null
		) {
			console.log(`Feed initializing...`);
			await startServer(port);
			sendCommandToServer(command);
		} else {
			console.log("Command is empty. Please type something ");
			rl.close();
			startCLI();
		}
	});
}
