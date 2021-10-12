var minhaFuncao = () => {
    var elementoP = document.getElementsByTagName('p');
    var exibirTexto = document.getElementsByClassName('exibirTexto');

    for(i = 0; i <= elementoP.length; i++){
        exibirTexto[i].innerHTML = elementoP[i].innerHTML.toLocaleUpperCase();
    };
};

var mudarDeCor = () => {
    var mudarCor = document.getElementById('titulo');
    mudarCor.style.color = 'red'
}