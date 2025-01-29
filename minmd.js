String.prototype.r=String.prototype.replace
p = l => l
	// tabs to spaces
	.r(/\t/g, "    ")
	.r("\n", " ")
	// hr
	.r(/^ *[*-](?: *[*-])* *$/gm, "<hr/>")
	// bold
	.r(/(?<!\\)(\*\*|__)(?=\S)(.*?)(?<=[^\\\s])\1/g, "<b>$2</b>")
	// italic
    .r(/(?<!\\)([*_])(?=\S)(.*?)(?<=[^\\\s])\1/g, "<i>$2</i>")
	// lists
	.r(/^ *(\*|- )(.*)(\n\1.*)*/gm, (m, _1, _2, _3) => `<ul>\n${m}\n</ul>`)
	.r(/^ *(\d+\. )(.*)(\n\d+\..*)*/gm, (m, _1, _2, _3) => `<ol>\n${m}\n</ol>`)
	.r(/^ *(\d+\) )(.*)(\n\d+\).*)*/gm, (m, _1, _2, _3) => `<ol>\n${m}\n</ol>`)
	.r(/^ *(\d+\.|\d\)|\*|-) (.*?)(\n|$)/gm, (_, t, c) => `<li>${c}</li>`)
	// image
    .r(/!\[(.*?)]\((.*?)\)/g, '<img alt="$1" src="$2"/>')
	// link
    .r(/\[(.*?)]\((.*?)\)/g, '<a href="$2">$1</a>')
	// blockquote
	.r(/^(>+ )(.*)(\n\1.*)*/gm, (m, _1, _2, _3) => `<blockquote>${m.r(/>+ /g, "")}</blockquote>`)
	// code block
    .r(/^```\w*\n([\s\S]*?)\n```$/gm, (m, g1) => `<pre><code>${g1.r(/</g, "&lt;").r(/>/g, "&gt;")}</code></pre>`)
	.r(/( {4})(.*)(\n\1.*)*/gm, (m, _1, _2, _3) => `<pre><code>${m.r(/^ {4}/gm, "").r(/</g, "&lt;").r(/>/g, "&gt;")}</code></pre>`)
	// inline code
	.r(/`(.*)`/g, (m, g1) => `<code>${g1.r(/</g, "&lt;").r(/>/g, "&gt;")}</code>`)
	// headers
	.r(/^(#{1,6}) (.*?)(\n|$)/gm, (_, h, c) => `<h${h.length}>${c}</h${h.length}>`)
	.r(/^(((.+?)\n)+)=+$/gm, "<h1>$1</h1>")
	.r(/^(((.+?)\n)+)-+$/gm, "<h2>$1</h2>")
	// line breaks
	.r(/( {2,}\n)|(\\\n)|(\n{2,})/g, "<br/>")
	// unescape
	.r(/\\([\\*_#->`])/g, "$1")
	// remove excess spaces
	.r(/ {2,}/g, " ")