import { config as dotenvConfig } from "dotenv";
dotenvConfig();

const configMut = {
	openaiKey: process.env.OPEN_AI_KEY,
};

export default config = Object.freeze(configMut);
