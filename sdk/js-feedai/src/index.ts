import { generateResponse } from "./generate";
import type { IGenerateBody } from "./types";

type GenerateOptions = IGenerateBody;

export class FeedAiClient {
	public generate(prompt: GenerateOptions) {
		if (!prompt.text)
			throw new Error("Argument prompt has missing field text");
		return generateResponse(prompt);
	}
}

export type { GenerateOptions };
