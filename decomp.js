d = async i => {
    A = Uint8Array.from(atob(i),x=>x.charCodeAt(0))
    B = new Blob([A]).stream().pipeThrough(new DecompressionStream('gzip'))
    R = []
    for await (M of B) {
        R.push(M);
    }
    return await new Blob(R).text()
}

d(k).then(x=>document.head.innerHTML+=`<style>${x}</style>`)
d(j).then(x=>eval(x))
