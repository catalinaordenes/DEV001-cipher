const cipher = {
    encode: function(desplazamiento, texto) {
        if (texto === undefined || desplazamiento === undefined) {
            throw new TypeError("No has ingresado la orden")
        } else if (texto === typeof 0 || desplazamiento === 0) {
            throw new TypeError("Sólo puedes ingresar letras")
        }
        const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        //Con esto procuramos que el número del desplazamiento sea siempre positivo aunque entre un número negativo
        desplazamiento = (desplazamiento % 26 + 26) % 26;

        //El if valida que el usuario ingrese un texto
        //Con replace se remplaza el texto con la cadena de carácteres dada x el desplazamiento
        //el [a-z] es todas las letras mayúsculas que se encuentren entre la a y la z
        // con c=> va recorriendo una a una las letras que se encuentran en esa cadena dentro del texto
        //Luego revisa en el index la posición original y le genera el desplazamiento

        return texto.replace(/[A-Z]/ig, c => letras[(letras.indexOf(c) + desplazamiento) % 26])
    },



    decode: function(desplazamiento, texto) {
        if (texto === undefined || desplazamiento === undefined) {
            throw new TypeError("No has ingresado la orden")
        } else if (texto === typeof 0 || desplazamiento === 0) {
            throw new TypeError("Sólo puedes ingresar letras")
        }
        const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        desplazamiento = (desplazamiento % 26 - 26) % 26;

        //misma operación que en cifrar sólo que éste es una resta
        return texto.replace(/[A-Z]/ig, c => letras[(letras.indexOf(c) - desplazamiento) % 26]);
    }
}

export default cipher;
//Esto va en cipher