//hasAttribute - pergunta se tem algum atributo
//document.write(document.getElementById('idQualquer').hasAttribute('class'));

//document.write(document.querySelector('.classeQualquer').hasAttribute('id'));

//getAttribute - perguntar se tem e traz o valor
//var atributoDiv = document.getElementById("idQualquer");

// vai retornar o valor que está dentro da classe
//document.write(atributoDiv.getAttribute('class'));




//setAttribute - altera ou aplica o atributo
//selecionando a div
var atributoDiv = document.getElementById('idQualquer');

// aplicando um estilo direto
atributoDiv.setAttribute('style', 'background: blue');
