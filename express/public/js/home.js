let burgerMenu = document.querySelector('figure');
let menu = document.getElementById('menu');

console.log("hola");

burgerMenu.addEventListener('click', function(){
    menu.classList.toggle('mostrar');
});

menu.addEventListener('mouseleave', function(){
    this.classList.toggle('mostrar');
});
