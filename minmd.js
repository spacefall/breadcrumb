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
i = l => l.r(/(\*\*|__)(.*?)\1/g, "<b>$2</b>")				// bold
    .r(/([*_])(.*?)\1/g, "<i>$1</i>")						// emphasis
    .r(/!\[(.*?)]\((.*?)\)/g, '<img alt="$1" src="$2"/>')	// image
    .r(/\[(.*?)]\((.*?)\)/g, '<a href="$2">$1</a>')			// link
    .r(/^> (.*)/gm, "<blockquote>$1</blockquote>")			// blockquote
    .r(/`(.*)`/g, "<code>$1</code>")						// inline code
    .r(/^-{3,}$/gm, "<hr/>")								// horizontal rule
    .r(/^```\w*\n([\s\S]*?)\n```$/gm, "<pre><code>$1</code></pre>")	// code block
	.r(/^(#{1,6}) (.*?)(\n|$)/gm, (_, h, c) => `<h${h.length}>${c}</h${h.length}>`)	// headers
	.r(/^(.+?)\n=+$/gm, "<h1>$1</h1>")
	.r(/\n{2,}/g, "<br/>").r(/\s{2,}\n/, "<br/>")			// line breaks