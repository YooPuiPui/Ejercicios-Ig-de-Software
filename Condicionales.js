const numero1 = 10;
const numero2 = 20;
const numero3 = 30;

//* Imprimir en consola el mayor de los 3 

let mayor = numero1;

if (numero2 > mayor) {
  mayor = numero2;
}

if (numero3 > mayor) {
    mayor = numero3;
}

console.log("1) El numero mayor de los tres es: ", mayor);

//* Encontrar el menor de los 3 

let menor = numero1;

if( numero2 < menor){

    menor = numero2;
}

if(numero3 < menor){
    menor = numero3;
}

console.log("2) El numero menor de los 3 es: ", menor);

//* Es par o impar

function determinarPar(numero){

    if(numero %2  === 0){
        return "Es par";
    }else{
        return "Es impar";
    }
}

console.log("El numero 1: ", numero1, "es", determinarPar(numero1));
console.log("El numero 2: ", numero2, "es", determinarPar(numero2));
console.log("El numero 3: ", numero3, "es", determinarPar(numero3));

//* Multiplos de 5

function multiplo(numero){

    if(numero %5  === 0){
        return "Es multiplo de 5";
    }else{
        return "No es multiplo de 5";
    }
}

console.log("El numero 1: ", numero1, "es", multiplo(numero1));
console.log("El numero 2: ", numero2, "es", multiplo(numero2));
console.log("El numero 3: ", numero3, "es", multiplo(numero3));