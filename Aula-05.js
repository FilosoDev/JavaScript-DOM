document.getElementsByTagName('div')[1].innerHTML = "Elemento por tagname";


setTimeout(function () {
    document.getElementsByTagName('p')[2].innerHTML = "Aparacendo em 3 2 1....";
}, 3000);