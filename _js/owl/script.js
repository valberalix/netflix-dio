let filme = document.querySelector('div#play')

function assistir (){
    filme.style.display = 'flex'
}
function voltar() {
    filme.style.display = 'none'
}

let ins = document.getElementById('botao1')
let del = document.getElementById('botao2')

function adcionar() {
    ins.style.display = 'none'
    del.style.display = 'inline'
}
function deletar() {
    del.style.display = 'none'
    ins.style.display = 'inline'
}