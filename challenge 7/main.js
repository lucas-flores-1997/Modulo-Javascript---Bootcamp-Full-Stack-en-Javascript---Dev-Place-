const prompt = require("prompt-sync")({ sigint: true});
//EJERCICIO 1
function mostrarMeses (){
let meses = new Array ("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre")
console.log(meses)
}

//EJERCICIO 2
function esPar(n){
    if (n % 2 == 0){
        return true;
    }
    else return false;
}

function mostrarEsPar (m){
if (esPar(m)){
    console.log("el numero es par")
} 
else console.log("no es par")
}

//EJERCICIO 3
 function verificarCadena (cadena){
    let resultado = "La cadena \""+cadena+"\" ";
    if(cadena == cadena.toUpperCase()) {
        resultado += " está formada sólo por mayúsculas";
      }
      else if(cadena == cadena.toLowerCase()) {
        resultado += " está formada sólo por minúsculas";
      }
      else {
        resultado += " está formada por mayúsculas y minúsculas";
      }
    
      return resultado;

 }
function imprimirResultado(){
    let cadena = prompt('ingrese una cadena: ');
    console.log(verificarCadena(cadena));

}

//EJERCICO 4

function factorial (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}

function imprimirFactorial (n){
    console.log(factorial(n));
}

