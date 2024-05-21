import { FeedAiClient } from "@ascen/feedai";
import markdownIt from "markdown-it";

export async function solveIssueWithFeedAi(code, issue) {
    const client = new FeedAiClient();
    const res = await client.solve({ code, issue });

    if (!res.success) {
        console.error("\rFeedAi service failed to solve the issue");
        return process.exit(1);
    }

    if (
        res.content.text.trim().startsWith("```") &&
        res.content.text.trim().endsWith("```")
    ) {
        let md = new markdownIt();
        res.content.text = md.render(res.content.text);
    }

    return res;
}

export async function generateCodeWithFeedAi(prompt, language) {
    const client = new FeedAiClient();
    const res = await client.generate({ prompt, language });

    if (!res.success) {
        console.error("\rFeedAi service failed to generate code.");
        return process.exit(1);
    }

    // if (
    //     res.content.text.trim().startsWith("```") &&
    //     res.content.text.trim().endsWith("```")
    // ) {
    //     let md = new markdownIt();
    //     res.content.text = md.render(res.content.text);
    // }

    return res;
}
