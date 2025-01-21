const editdiv = document.querySelector('#input');
const res = document.querySelector('#result');
function edit() {
    let r = editdiv.innerText;
    console.log(r);
    res.innerHTML = i(r);
}
function first() {
    editdiv.oninput = edit;
    editdiv.onclick = editdiv.classList = "";
}