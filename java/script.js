const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas"); 
const caixaAlternativas = document.querySelector(".caixa-aternativas"); 
const caixaResultados = document.querySelector(".caixa-resultados");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente= document.querySelector(".novamente-botao"); 
const telaInicial = document.querySelector(".tela-inicial"); 
const botaoIniciar = document.querySelector(".iniciar-botao");

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
function mostraAfirmacoes(){
    for(const afirmacoes of perguntaAtual.afirmacoes){

    }
}
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + "";
    if (opcaoSelecionada.proxima !== undefined){
        atual = opcaoSelecionada.proxima;
    }else{
        mostraResultado();
        return; 
    }
    mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent = 'Em 2050, ${nome}';
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultados.classList.add("mostrar");
    botaoJogarNovamente.addEventListener("click", jogaNovamente);
}
function jogaNovamente(){
    atual = 0;
    historiaFinal = "";
    caixaResultados.classList.remove("mostrar");
    mostraPergunta();
}
function substituiNome(){
    for (const pergunta of perguntas){
        pergunta.enunciado = pergunta.eninciado.replace(/você/g, nome);
    }
}
substituiNome();