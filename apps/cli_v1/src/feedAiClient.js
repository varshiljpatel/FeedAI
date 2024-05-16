import { FeedAiClient } from "@ascen/feedai";
import markdownIt from "markdown-it";

export async function solveIssueWithFeedAi(code, issue) {
    const client = new FeedAiClient();
    const res = await client.solve({ code, issue });

    if (!res.success)
        throw new Error("FeedAi service failed to solve the issue");

    if (
        res.content.text.trim().startsWith("```") &&
        res.content.text.trim().endsWith("```")
    ) {
        let md = new markdownIt();
        res.content.text = md.render(res.content.text);
    }

    return res;
}
