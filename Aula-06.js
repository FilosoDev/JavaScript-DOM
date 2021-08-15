// querySelector
document.querySelector('#idQualquerQuatro').innerHTML = "<b>Conteúdo da id qualquer quatro</b>";

//document.querySelector('#idQualquerSete').innerHTML = "<b>Conteúdo da id qualquer sete</b>";

document.querySelector('p').innerHTML = "Conteúdo do p";

document.querySelector('.classeQualquerNove').innerText = "texto comum...";


// querySelectorAll
document.querySelectorAll('#idQualquer')[2].innerHTML = '<b>QuerySelectorAll...</b>';

document.querySelectorAll('.classeQualquer')[0].innerText = "QuerySelector com classe";

document.querySelectorAll('div')[1].innerHTML = "Última query";