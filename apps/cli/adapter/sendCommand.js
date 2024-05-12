import axios from "axios";
import {execCommands} from "./execCommands.js";

export async function sendCommandToServer(command) {
  try {
    if (!command) throw new Error("Command is empty");
		let sendCommandPost = await axios.post("http://localhost:3110/command", {
			prompt: command,
		});
		console.log(sendCommandPost.data);
    execCommands();
	} catch (error) {
		console.log(
			"Unexpected error occured while sending command",
			error.message
		);
	}
}
