import { generateResponse } from "./generate";
import type { IGenerateBody } from "./types";

type GenerateOptions = IGenerateBody;
type GenerateSolveOptions = IGenerateBody;

export class FeedAiClient {
    public generate(prompt: GenerateOptions) {
        if (!prompt.code || !prompt.issue)
            throw new Error("Argument prompt has missing fields");
        return generateResponse(prompt);
    }

    public solve(prompt: GenerateSolveOptions) {
        if (!prompt.code || !prompt.issue)
            throw new Error("Argument prompt has missing fields");
        return generateResponse(prompt);
    }
}

export type { GenerateOptions, GenerateSolveOptions };
