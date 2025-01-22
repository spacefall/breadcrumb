const div = [inp, out];
function edit() {
    div[1].innerHTML = i(div[0].innerText);
}

function sync(elem) {
    div[+!elem].scrollTop = div[elem].scrollTop;
}