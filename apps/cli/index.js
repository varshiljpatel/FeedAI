import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

export default function startServer(port) {
	app.post("/command", (req, res) => {
		const prompt = req.body.prompt;

    // Pass prompt to openai api function.
		const result = parsePrompt(prompt);

		return res.status(200).json({
			status: 200,
			message: result,
			success: true,
		});
	});

	app.listen(port, () => {
		console.log(`Feed is running on port : ${port}`);
	});
}

function parsePrompt(prompt, callback) {
	// Request on OpenAI's api
}
