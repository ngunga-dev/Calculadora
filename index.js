const displayValorAnterior=document.getElementById('valor-anterior');
const displayValorAtual=document.getElementById('valor-atual');
const bottaoNumeros=document.querySelectorAll('.numero');
const bottaoOperadores=document.querySelectorAll('.operadores');

const display = new Display(displayValorAnterior, displayValorAtual);

bottaoNumeros.forEach(boton => {
    boton.addEventListener('click', () =>
        display.agregarNumero(boton.innerHTML)
    );
});
bottaoOperadores.forEach(boton => {
    boton.addEventListener('click',()=> display.computar(boton.value));
});