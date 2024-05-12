import { exec } from "child_process";

export async function execCommands(vecCommands) {
  // vecCommands is an array of commands.
	for (command in vecCommands) {
		let result = await execCommand(command);
		if (result == 0) {
			console.log(
				"Something went wrong while running command " + command
			);
			break;
		}
	}
}

// Execute all single commands from an array of commands
async function execCommand(command) {
	exec(command, (error, stdout, stderr) => {
    if (error) return 0;
    if (stderr) return 0;
    return 1;
  });
}
