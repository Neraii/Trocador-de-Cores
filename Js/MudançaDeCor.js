function mudandoDeCor() {
    //Pega a cor e faz o fundo mudar de cor
    let sequencia = pegaSequenciaAleatoria();
    document.body.style.backgroundColor = "#" + sequencia;

}

function pegaSequenciaAleatoria() {
    //feito para fazer uma sequencia hexadecimal
    let array = '';
    for (let i = 0; i < 8; i++) {
        
        numero = Math.round(Math.random() * 15);
        array += numero.toString(16);
    }
    return array
}

let botao = document.querySelector("#botao");
botao.addEventListener("click", mudandoDeCor);

mudandoDeCor();

