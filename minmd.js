// h = l =>
//     l.split`
// `.map(l => (
//             v = l.match(/^#{1,6} /)[0].length,
// 			l[0] == "#" ? `<h${v}>${l.slice(v).trim()}</h${v}>`
//                 		: l
//         ))
//         .join`<br>`

//console.log(h("# header\n## header2\n### header3\n#### header4\n##### header5\n###### header6\n####### header7"))
String.prototype.r=String.prototype.replace
i = l => "<p>" + l.r(/(?<!\\)(\*\*|__)(?=\S)(.*?)(?<=[^\\\s])\1/g, "<b>$2</b>")				// bold
    .r(/(?<!\\)([*_])(?=\S)(.*?)(?<=[^\\\s])\1/g, "<i>$2</i>") // emphasis
    .r(/!\[(.*?)]\((.*?)\)/g, '<img alt="$1" src="$2"/>')	// image
    .r(/\[(.*?)]\((.*?)\)/g, '<a href="$2">$1</a>')			// link
    .r(/^> (.*)/gm, "</p><blockquote><p>$1</p></blockquote><p>")			// blockquote
    .r(/`(.*)`/g, "<code>$1</code>")						// inline code
    .r(/^-{3,}$/gm, "<hr/>")								// horizontal rule
    .r(/^```\w*\n([\s\S]*?)\n```$/gm, "</p><pre><code>$1</code></pre><p>")	// code block
	.r(/^(#{1,6}) (.*?)(\n|$)/gm, (_, h, c) => `<h${h.length}>${c}</h${h.length}>`)	// headers
	.r(/^(.+?)\n=+$/gm, "<h1>$1</h1>")
	.r(/\n{2,}/g, "</p><p>").r(/(\s{2,}\n)|(\\\n)/g, "<br/>")		// line breaks
	.r(/\\([\\*_])/g, "$1")									// unescape