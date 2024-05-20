import { generateResponse } from "./generate";
import { solveResponse } from "./solve";
import type { IGenerateBody, ISolveBody } from "./types";

type GenerateOptions = IGenerateBody;
type SolveOptions = ISolveBody;

export class FeedAiClient {
    public generate(prompt: GenerateOptions) {
        if (!prompt.prompt)
            throw new Error("Argument prompt has missing fields");
        return generateResponse(prompt);
    }

    public solve(prompt: SolveOptions) {
        if (!prompt.code || !prompt.issue)
            throw new Error("Argument prompt has missing fields");
        return solveResponse(prompt);
    }
}

export type { GenerateOptions, SolveOptions };
