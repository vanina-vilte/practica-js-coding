console.log('Entramos a la página');

function alerta() {
    alert('Hiciste click');
    console.log('hizo click en el continuar leyendo');
}

function cambiaTexto(elemento) {
    console.log(elemento);
    var texto = elemento.innerText;
    if (texto == 'Otro proyecto') {
        elemento.innerText = 'La mode';
    } else {
        elemento.innerText = 'Otro proyecto';
    }
}

function cambiarImg (imagen) {
    imagen.src = 'img/mongodb.png';
}

function regresaImg(imagenCambiada) {
    imagenCambiada.src = 'img/php.png';
}

function eliminar(elemento) {
    elemento.remove();
}

contador = 0;
function hizoClick(boton) {
    contador++;
    var mensaje = '';
    if (contador == 1) {
        mensaje = `Haz hecho click ${contador} vez`;
    } else if (contador > 15){
        mensaje = `Haz hecho click ${contador} veces. Los humanos nos entretenemos con tan poco`;
    } else {
        mensaje = `Haz hecho click ${contador} veces`;
    }
    alert(mensaje);

    //background-color: blue;
    // boton.style.backgroundColor = 'red';

    if (contador % 2 == 0) {
        boton.style.backgroundColor = 'red';
    } else {
        boton.style.backgroundColor = 'green';
    }
}

function cambioPerfil() {
    var nombre = document.querySelector('.container h1');
    nombre.innerText = 'Vanina Vilte'

    var cargo = document.querySelector('h2');
    cargo.innerText = 'Fullstack developer';
    cargo.style.color = 'purple';

    var p = document.querySelector('#parrafo1');
    p.innerHTML = 'Vani está estudiando con la mejor profesora del mundo. <br> Estamos en el stack de fundamentos de la web ♥';
}

function switchMode() {
    var container = document.querySelector('.container');

    if (container.classList.contains('darkMode')) {
        container.classList.remove('darkMode');
    } else {
        container.classList.add('darkMode')
    }
}