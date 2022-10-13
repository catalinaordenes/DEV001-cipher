import cipher from './cipher.js';

//console.log(cipher);

window.addEventListener("load", inicio, true);

//Toma el texto que digita el usuario y lo convierte todo en mayúsculas
function inicio() {
    document.getElementById("mensaje").addEventListener("keyup", function() {
        this.value = this.value.toUpperCase();
    }, true)
}

//1.Llama al botón cifrar y le crea un evento al momento de hacer click
//2.Toma el texto y con value se centra en lo que contiene el texto
//3.Toma el botón desplazamiento y con value analiza la posición
//4.Llama al mensaje 2 que es el mensaje de cifrado/descifrado, y se crea la función cifrar con los parámetros texto y desplazamiento
document.getElementById("encode").addEventListener("click", function() {
    let texto = document.getElementById("mensaje").value;
    let desplazamiento = document.getElementById("desplazamiento").value;
    document.getElementById("mensaje2").value = cipher.encode(desplazamiento, texto); //Se crea una función que tome el elemento texto y desplazamiento y evalúa el contenido del texto
}, true);

document.getElementById("decode").addEventListener("click", function() {
    let texto = document.getElementById("mensaje").value;
    let desplazamiento = document.getElementById("desplazamiento").value;
    document.getElementById("mensaje2").value = cipher.decode(desplazamiento, texto); //Se crea una función que tome el elemento texto y desplazamiento y evalúa el contenido del texto
}, true);