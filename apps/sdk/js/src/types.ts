export interface IGenerateBody {
    code: string;
    issue: string;
}

export interface ISendResponse {
    content: {
        text: string;
    };
    success: boolean;
}
