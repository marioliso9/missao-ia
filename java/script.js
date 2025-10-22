let atual= 0;
let perguntaAtual;
let historiaFinal = "";

botaoInicial.addEventListener('click,iniciaJogo');
function iniciaJogo (){
    atual = 0;
    historiaFinal = "";
    telaInicial.style.display = 'none';
    caixaPerguntas.classList.remove("mostrar");
    caixaAlternativas.classlist.remove("mostrar");
    caixaResultados.classlist.remove("mostrar");
    mostraPergunta();
}
function mostraPergunta (){
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }
perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
caixaAlternativas.textContent = "";
mostraAlternativa();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas);{
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
}
}