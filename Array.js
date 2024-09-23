//* Funcion que suma todos los numeros de un array

function sumarNumeros(array) {
    return array.reduce((acumulador, numero) => acumulador + numero, 0);
}

const numeros = [1, 2, 3, 4, 5];
console.log("Suma de números:", sumarNumeros(numeros));


//* Funcion que calcula el promedio de los numeros de un array
function promedioNumeros(array) {
    const suma = sumarNumeros(array);
    return suma / array.length;
}

  // Ejemplo de uso:
console.log("Promedio de números:", promedioNumeros(numeros)); 

//* Funcion que convierte los strings a mayusculas
function convertirMayusculas(array) {
    return array.map(str => str.toUpperCase());
}


const palabras = ["hola", "didudo"];
console.log("Palabras en mayúsculas:", convertirMayusculas(palabras));

//* Funcion que devuelve solo los numeros pares
function filtrarPares(arr) {
    return arr.filter(numero => numero % 2 === 0);
}

console.log("Números pares:", filtrarPares(numeros));
