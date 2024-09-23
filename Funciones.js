
//* Converit de Minusculas a Mayusculas


console.log("1) ");

function ConvertirMayusculas(texto){
    return texto.toUpperCase();

}


const texto = "twice";
console.log("Texto en minusculas: ", texto);


const textoMayusculas = ConvertirMayusculas(texto);
console.log("Texto en mayusculas: ", textoMayusculas);



//* Converir Mayusculsa a Minusculas
console.log("2) ");

function ConvertirMinusculas(texto){
    return texto.toLowerCase();
}

const texto2 = "FRAN";
console.log("Texto en mayusculas: ", texto2);

const textoMinusculas = ConvertirMinusculas(texto2);
console.log("Texto en minusculas: ", textoMinusculas);


//* Restar 2 numeros 
console.log("3) ");

function restar(numero1, numero2){
    return numero1 - numero2;
}

const resultado = restar(10,5);
console.log("El resultado de la resta es: ", resultado);


//* Dividir dos numeros 
console.log("4) ");

function Dividir(numero1, numero2){
    return numero1 / numero2;
}

const resultado2 = Dividir(10,5);
console.log("El resultado de la division es: ", resultado2);


//* Multiplicar 2 numeros 
console.log("5) ");


function Multiplicar(numero1, numero2){
    return numero1 * numero2;
}

let resultado3 = Multiplicar(10,5);
console.log("El resultado de la multiplicaion es: ", resultado3);



//* Recibir un string y devolver la lingitud
console.log("6) ");

function obtenerLongitud(texto) {
    return texto.length;
}

const texto4 = "jeongyeon";
const longitudTexto = obtenerLongitud(texto4);
console.log("La logitud es de: ",longitudTexto);
