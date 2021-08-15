document.getElementsByClassName('minhaClasse')[1].innerHTML = "<b>Conteúdo do inner...</b>";
document.getElementsByClassName('minhaClasse')[0].innerText = "Conteúdo em texto...";


setTimeout(function () {
    document.getElementsByClassName('minhaClasse')[2].innerText = "Conteúdo em texto em 3 segundos...";
}, 3000);