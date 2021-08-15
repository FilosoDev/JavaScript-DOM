// Criar um elemento <li> e o nó de texto
// Criar o nó do texto
//var elemento = document.createElement('li');
//var texto = document.createTextNode('item da lista adicionado');
//elemento.appendChild(texto);

// Recuperando o elemento lista e
//anexando o elemeno <li> ao final da lista
//var lista = document.getElementsByTagName('ul')[0];
//lista.appendChild(elemento);

//inserBefore
var lista = document.getElementsByTagName('ul')[0];
var itens = lista.getElementsByTagName('li');

//criando o elemento
var elemento = document.createElement('li');
elemento.textContent = 'outro item';

// inserindo valor em posição específica
//lista.insertBefore(elemento, itens[1]);


// removechild
lista.removeChild(itens[3]);