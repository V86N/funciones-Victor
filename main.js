//FUNCIONES

function resta (a,b){
    return a - b
}
  console.log(resta(8,4))


  function clasificarNota() {
    const nota = parseFloat(prompt("Introduce una nota del 0 al 10:"));

    switch (true) {
        case (nota >= 0 && nota <= 4):
            console.log("Insuficiente.");
            break;
        case (nota >= 5 && nota <= 6):
            console.log("Suficiente.");
            break;
        case (nota >= 7 && nota <= 8):
            console.log("Notable.");
            break;
        case (nota >= 9 && nota <= 10):
            console.log("Sobresaliente.");
            break;
        
    }
}

//clasificarNota(); comentado para que no salga el prompt

function duplicaNumero (a){
    
    if (typeof a !== 'number') {
        return 'Debo ser ejecutada con un número'
    }
    return a * 2
}
console.log(duplicaNumero('4'))


function caracterInicial (a){
    if (typeof a !== 'string'){
        return 'Debo ser ejecutada con una string'
    }
    
    if (a.length === 0){
        return 'Debo de ser ejecutada con un string no vacío'
    }
   
     return a.charAt(0)
}
console.log(caracterInicial('Hola'));


function ultimoCaracter (b){
    if (typeof b !== 'string'){
        return 'Debo ser ejecutada con un string'
    }

    if (b.length === 0) {
        return 'Debo ser ejecutada con un string no vacío'
    }
}
console.log(ultimoCaracter(12));


function cuentaCaracteres (c){
    if (typeof c !== 'string') {
        return 'Debo ser ejecutada con un string'
    }

    let num = 0 
    for (let caracter of c) { //Preguntar esta parte
        num += 1
    }
    return num
}
console.log(cuentaCaracteres('hola'));


function esPalindromo(cadena) {
    if (typeof cadena !== 'string' || cadena.trim() === '') {
        return 'no es un formato correcto'
    }

    const esPalindromo = cadena === cadena.split('').reverse().join('')

    return esPalindromo
}
console.log(esPalindromo('rallar'))
console.log(esPalindromo('hola'));

//no entiendo el ejercicio de los decimales

function division(num1,num2){
    return num1/num2
}
console.log(division(8,4))


const numeros = [2,25,1,3,85,5]
function cincoMas(array1) {
 return array1.filter(numero => numero >= 5)
}
const resultado = cincoMas(numeros)
console.log(resultado)


function esPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true; 
}

const numero = parseInt(prompt("Introduce un número:"), 10);
const resultado1 = esPrimo(numero);
console.log(`El número ${numero} ${resultado1 ? 'es' : 'no es'} primo.`);

//Este último ejercicio sacado tal cual de chatgpt. He intentado entenderlo pero es too much for me :(









   



