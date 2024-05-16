import meow from "meow";

export default meow(
    `
  Usage
    $ feed_ai --file <filename> --issue <text>

  Options
    --file, -f  Filename
    --issue, -i  Issue to write in the file
`,
    {
        importMeta: import.meta,
        flags: {
            file: {
                type: "string",
                shortFlag: "f",
            },
            issue: {
                type: "string",
                shortFlag: "i",
            },
        },
    },
);
