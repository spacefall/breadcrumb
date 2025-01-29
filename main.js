i = inp
o = out
a = [i,o]
b = 0
c = () => o.innerHTML = p(i.innerText)

s = e => {
    a[+!e].onscroll = ""
    clearTimeout(b)
    b = setTimeout(() =>  a[+!e].onscroll = () => sync(+!e), 10)
    a[+!e].scrollTop = (a[e].scrollTop/(a[e].scrollHeight-a[e].offsetHeight))*(a[+!e].scrollHeight-a[+!e].offsetHeight)
}

document.addEventListener("keydown",e=>{
    if((e.metaKey||e.ctrlKey)&&e.code==="KeyS") {
        e.preventDefault();m=document.createElement("a");
        m.href=URL.createObjectURL(new Blob([i.innerText]));
        m.download="doc.md";
        m.click();
        URL.revokeObjectURL(m.href)
    }
});