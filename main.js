const div = [inp, out]
let timeout

const edit = () => {
    out.innerHTML = parse(inp.innerText)
}

const sync = elem => {
    div[+!elem].onscroll = ""
    clearTimeout(timeout)
    timeout = setTimeout(() =>  div[+!elem].onscroll = () => sync(+!elem), 10)
    div[+!elem].scrollTop = (div[elem].scrollTop/(div[elem].scrollHeight-div[elem].offsetHeight))*(div[+!elem].scrollHeight-div[+!elem].offsetHeight)
}