import meow from "meow";

export default meow(
    `
  Usage
    $ feed <service> --file <filename> --issue <text>
    $ feed <service> --file <filename> --prompt <text>

  Options
    --file, -f  Filename.
    --issue, -i  Issue to write in the file.
    --language, -l  Code generation language.
    --prompt, -p  Prompt for generation of code.

  Arguments
    generate: For generating code in file.
    solve: For solving code in file.
`,
    {
        importMeta: import.meta,
        // argv: ["generate", "solve"],
        flags: {
            file: {
                type: "string",
                shortFlag: "f",
                isRequired: false,
            },
            issue: {
                type: "string",
                shortFlag: "i",
                isRequired: false,
            },
            language: {
                type: "string",
                shortFlag: "l",
                isRequired: false,
            },
            prompt: {
                type: "string",
                shortFlag: "p",
                isRequired: false,
            },
        },
    },
);
