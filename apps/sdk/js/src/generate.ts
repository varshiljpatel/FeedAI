import axios, { AxiosResponse } from "axios";
import { FEEDAI_BASE_URL, FEEDAI_VERSION } from "./constants";
import type { IGenerateBody, ISendResponse } from "./types";
import { sendResponse } from "./actions/sendResponse";

export async function generateResponse(d: IGenerateBody) {
	let url: string = `${FEEDAI_BASE_URL}/${FEEDAI_VERSION}/generate`;

	// Get prompt from d as argument
	let data: IGenerateBody = d;

	try {
		let response: AxiosResponse = await axios.post(url, data);
		if (response.status != 200) {
			return sendResponse({
				text: "Failed to fetch response.",
				success: false,
			});
		}
		return sendResponse({
			text: response.data.response.text,
			success: true,
		});
	} catch (error: any) {
		return sendResponse({
			text: error.message,
			success: false,
		});
	}
}
