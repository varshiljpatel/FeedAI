export interface ISolveBody {
    code: string;
    issue: string;
}

export interface IGenerateBody {
    prompt: string;
    language?: string;
}

export interface ISendResponse {
    content: {
        text: string;
    };
    success: boolean;
}
