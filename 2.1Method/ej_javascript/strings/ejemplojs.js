var letra = "a";
var numero = 3;
var frase = "hola mundo";
var entero = 35;
var decimal = 3.3539;

alert("letra" + letra);
alert("numero" + numero);
alert("frase" + frase);
alert("entero" + entero);
alert("decimal" + decimal);

alert(letra + "es del tipo" + typeof(letra));
alert(numero + "es del tipo" + typeof(numero));
alert(frase + "es del tipo" + typeof(frase));
alert(entero + "es del tipo" + typeof(entero));
alert(decimal + "es del tipo" + typeof(decimal));

function saludar(){
    return frase;
}

saludar();