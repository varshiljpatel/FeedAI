<h2 align="center">Feed_AI ⚪</h2>
<h3>Usage:</h3>

<p>Add required env variables in <code>.env</code> files.</p>
<p>Navigate to engine directory and run the engine</p>

-   `cd apps/engine`
-   > Note: currently not supported!
    ```
    docker compose up --build
    ```
    or run below commands step by step
    ```
    cargo build --release --locked
    cd target/release
    ./engine
    ```

<h3>Link with cli:</h3>

<p>Run below command for link binary with cli to access feed from anywhere.</p>

<ul>
  <li>
    <code>cd apps/cli</code>
  </li>
  <li>
    <code>npm link</code>
  </li>
</ul>

<h3>Execute:</h3>

```
feed <service> --option <text>
```

<h3>Options:</h3>

<ul>
  <li><i>&lt;filename&gt;</i>:</li>
  <p>Filename in which error is occured.</p=>
  <p>Note: mentioning file extension is required.</p>

  <li><i>&lt;issue&gt;</i>:</li>
  <p>Issue to be occured in &lt;filename&gt;.</p>

  <li><i>&lt;language&gt;</i>:</li>
  <p>It is optional flag for generated code language. <code>javascript</code> by default.</p>

  <li><i>&lt;prompt&gt;</i>:</li>
  <p>Prompt to generate code for purpose.</p>
</ul>

<h3>Arguments:</h3>

-   <h3>solve:</h3>
    <p>In this example solving problem "," expected in ./demo.js file.</p>

    **example**

    ```
    feed solve --file demo.js --issue "',' expected"
    ```

-   <h3>generate:</h3>
    <p>In this example generating code for adding two numbers in function using rust as a language.</p>

    **example**

    ```
    feed generate --file demo.rs --prompt "Adding two numbers using function" --language "rust"
    ```

<h3>Help:</h3>

<p>Run <code>feed --help</code> command for getting help.</p>

```
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
```
