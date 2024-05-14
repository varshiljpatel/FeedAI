import { generateResponse } from "./generate";
import type { IGenerateBody } from "./types";

export class FeedAiClient {
	public generate(prompt: IGenerateBody) {
		if (!prompt.text)
			throw new Error("Argument prompt has missing field text");
		generateResponse(prompt);
	}
}

export type { IGenerateBody };
