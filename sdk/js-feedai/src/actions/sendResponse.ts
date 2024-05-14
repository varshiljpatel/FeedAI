import { ISendResponse } from "./types";

export interface ISendResponseOptions {
	text: string;
  /**
   * default success is false
   */
	success: boolean;
}

export function sendResponse(options: ISendResponseOptions) {
	return {
		content: {
			text: options.text,
		},
		success: options.success || false,
	} as ISendResponse;
}
