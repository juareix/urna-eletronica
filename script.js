//selecionando as informações para poder manipular
let seuVotoPara = document.querySelector('.d-1-1 span');

let cargo = document.querySelector('.d-1-2 span');

let descricao = document.querySelector('.d-1-4');

let aviso = document.querySelector('.d-2');

let lateral = document.querySelector('.d-1-right');

let numeros = document.querySelector('.d-1-3');

//variaveis de ambiente
let etapaAtual = 0; //para saber em qual etapa eu me encontro do processo

let numero = ''; //pra saber o numer    q    ta sendo preendchifp

function comecarEtapa(){
    let etapa = etapas[etapaAtual]; //ta puxando os dados da string etapas no outro arquivo js
    
    let numeroHtml = '';

    for(let i=0; i<etapa.numeros; i++){
        if(i === 0){
            numeroHtml += '<div class="numero pisca"></div>';
        }
        else{
            numeroHtml += '<div class="numero"></div>';
        }
    }

    seuVotoPara.style.display = 'none'

    cargo.innerHTML = etapa.titulo;

    descricao.innerHTML = '';

    aviso.style.display = 'none';

    lateral.innerHTML = '';

    numeros.innerHTML = numeroHtml;
}

function atualizaInterface(){

}

function clicou(n){
    let elNumero = document.querySelector('.numero.pisca');
    if(elNumero !== null){
        elNumero.innerHTML = n; 
        numero = `${numero}${n}`;

        elNumero.classList.remove('pisca');

        if(elNumero.nextElementSibling !== null){
            elNumero.nextElementSibling.classList.add('pisca');
        }
        else{
            atualizaInterface()
        }
    }
}
function branco() {
    
}
function corrige(){

}
function confirma(){

}

comecarEtapa();