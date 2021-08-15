// getElementById
//document.getElementById('idCustomizada').innerHTML = "<b>Eu sou conteúdo HTML do JS...</b>";
document.getElementById('idCustomizadaDois').innerText = "Eu sou um texto simples do JS...";

// com timeout
setTimeout(function () {
    document.getElementById('idCustomizada').innerHTML = "<b>Eu sou conteúdo HTML do JS...</b>";
}, 3000);