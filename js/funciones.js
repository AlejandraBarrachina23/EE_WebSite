
const botonHamburguesa = document.querySelector("#btn-responsive");

botonHamburguesa.addEventListener('click',mostrarDiv);



function mostrarDiv(){
   
    const menu = document.querySelector(".menu");
    menu.classList.toggle('mostrar-barra');
}

function mostarSubmenu(){


}