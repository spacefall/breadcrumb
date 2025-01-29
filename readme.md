# breadcrumb
breadcrumb is an experiment (initally started for [say cheese!](https://saycheese.hackclub.com/index.html)) to make a 
Markdown editor small enough to fit on a QR Code (less that 3KB) without any online resources. It was also an excuse to 
learn more about regex.

## Features
- Markdown editor with 2 panes (editor and preview)
- Quick save shortcut (Ctrl + S)
- Dark mode
- Responsive design
- No online resources, the built html file is also under 3KB
- Kinda decent synced scrolling (scrolling one side scrolls the other)
- Everforest colorscheme

## How to use
To use this you can:
- Use the version hosted on [GitHub Pages](https://spacefall.github.io/breadcrumb/) (same as the others, so still 3KB, but easier to access)
- Download the [index.html from the build branch](https://github.com/spacefall/breadcrumb/blob/build/index.html)
- Extract it from this QR Code (the previously mentioned ysws offers a convenient way to do it [here](https://saycheese.hackclub.com/tryout.html))
![breadcrumb QR Code](https://spacefall.github.io/breadcrumb/qr.png)

## How is it so small?
breadcrumb is made small due to a few (bad) design decisions, but in short:
- HTML is minified and all "useless" tags are removed (e.g. `<html>`, `<head>`, `<body>`)
- CSS is just minified
- JS minified and cut down a lot by removing keywords like `function` and `let` and thus using implicit variables and arrow 
functions (other bad practices are also used)
- After minification, JS and CSS (the biggest parts), are compressed with gzip (actually pigz's zopfli implementation to compress slightly better)
then encoded in base64 and added in an inline script tag in the HTML as variables
- A decompressor (about 300b) is added to the HTML to decompress the JS and CSS, then it evals the JS and injects the CSS

Also, the Markdown parser is as minimal as possible, since even Snarkdown was too big for this project.

## Final thoughts
This wasn't a fun project, it was fun at first but after messing about for days with compression to use less than about 2KB 
with Snarkdown (2kb instead of 3kb so that project would fit into a QR Code with a data uri in base64) it became a chore.

I really wanted to finish it, so I could move on to other stuff without thinking about how to make it smaller.
Thus, I decided to make a basic Markdown parser using regex to hopefully make it fit.

This is the result, it took about 2 weeks and I don't think I'll be working on it anymore.
The parsing is kind of finicky, but I'm kind of burnt out and don't want to work on it anymore, 
the code is also a mess, since the objective was to keep it small so maintaining it is probably 
not worth it (and would probably balloon over 3k quickly)