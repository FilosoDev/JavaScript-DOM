//document.getElementsByName('nomeDiv')[0].innerText = "Texto da div...";
//document.getElementsByName('nomeDiv')[2].innerHTML = "<b>Div por nome no JS...</b>";


setTimeout(function () {
    document.getElementsByName('nomeDiv')[0].innerHTML = "<b>Div por nome no JS...</b>";
}, 3000);