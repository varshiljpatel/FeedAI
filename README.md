<style>.gray {
  color: gray;
}</style>

<h2 style="text-align: center;">Feed_AI</h2>

<h3>Usage:</h3>

<p>Add required env variables in <code>.env</code> files.</p>
<p>Navigato to engine directory and run the engine</p>

<ul>
  <li>
    <code>
    cd apps/engine
    </code>
  <br />
  </li>
  <li>
    <code>
    cargo run
    </code>
  </li>
</ul>

<h3>Link with cli</h3>

<p>Run below command for link binary with cli to access feed from anywhere.</p>

<ul>
  <li>
    <code>cd apps/cli_v1</code>
  </li>
  <li>
    <code>npm link</code>
  </li>
</ul>

<h3>Execute:</h3>

<code>
  feed_ai --file &lt;filename&gt; --issue &lt;issue&gt;
</code>

<br />

<h5>Options:</h5>

<ul>
  <li><i>&lt;filename&gt;</i>:</li>
  <p class="gray">Filename in which error is occured.</p>
  <p style="color: yellow;">Note: mentioning file extension is required.</p>
  <br />
  <li><i>&lt;issue&gt;</i>:</li>
  <p class="gray">Issue to be occured in &lt;filename&gt;.</p>
</ul>
