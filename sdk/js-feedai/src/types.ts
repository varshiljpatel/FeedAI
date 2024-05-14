export interface IGenerateBody {
  text: string;
}

export interface ISendResponse {
  content: {
    text: string
  };
  success: boolean;
}