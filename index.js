//Je crée mes variables prenant les ID des boutons du DOM HTML
const open = document.getElementById('open');
const close = document.getElementById('close');

//Je crée une variable selectionnant la classe 'container'
const container = document.querySelector('.container');

//J'ajoute un addEventListener a mes boutons 'open' ou 'close' DANS la classe 'container' 
//permettant d'y Ajouter/Enlever une nouvelle classe 'show-nav' au click
open.addEventListener('click', () => 
    container.classList.add('show-nav'));
close.addEventListener('click', () =>
    container.classList.remove('show-nav'));