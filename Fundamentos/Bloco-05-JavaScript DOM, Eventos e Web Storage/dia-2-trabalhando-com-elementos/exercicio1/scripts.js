document.querySelector('#elementoOndeVoceEsta');
document.querySelector('#elementoOndeVoceEsta').parentNode.style.color = 'black';
document.querySelector('#primeiroFilhoDoFilho').innerHTML = 'Primeiro filho do filho';
document.querySelector('#pai').firstElementChild;
document.querySelector('#elementoOndeVoceEsta').previousElementSibling;
document.querySelector('#elementoOndeVoceEsta').nextSibling;
document.querySelector('#elementoOndeVoceEsta').nextElementSibling;
document.querySelector('#pai').firstElementChild.nextElementSibling.nextElementSibling;

//Crie um irmão para elementoOndeVoceEsta.
let pai = document.querySelector('#pai');

let newSection = document.createElement('section');

newSection.id = 'irmao';

pai.appendChild(newSection);

//Crie um filho para elementoOndeVoceEsta.
let elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');

let newChild = document.createElement('section');

newChild.id = 'filho';

elementoOndeVoceEsta.appendChild(newChild);

//Crie um filho para primeiroFilhoDoFilho.
let primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');

let newChildChild = document.createElement('section');

newChildChild.id = 'filhoDoFilho';

primeiroFilhoDoFilho.appendChild(newChildChild);


//A partir desse filho criado, acesse terceiroFilho.
document.querySelector('#filhoDoFilho').parentElement.parentElement.nextElementSibling;

//Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho.

let pai = document.querySelector('#pai');

for (index = pai.childNodes.length - 1; index >= 0; index -= 1){
    let currentChildren = pai.childNodes[index];
    if(currentChildren.id !== 'elementoOndeVoceEsta'){
        currentChildren.remove();
    }
}
let segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoEUltimoFilhoDoFilho.remove();


