function tocaSom(idElementoAudio){ document.querySelector(idElementoAudio).play();

const ListaDeTeclas = document.querySelectorAll(".tecla");

for(let contador = 0; contador < listaDeTeclas.length; contador++){ const tecla = listaDeTeclas[contador];

const efeito = tecla.classList[1];

const idAudio = `#som_${efeito}`;

tecla.onclick = function (){

tocaSom(idAudio);

}

}
