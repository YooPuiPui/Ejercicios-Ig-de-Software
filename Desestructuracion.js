const usuario = {
    nombre: 'Diego',
    apellido: 'Salazar',
    edad: 21,
    direccion: {
      calle: 'Villa los corales',
      numero: 123,
      ciudad: 'Concepción',
      pais: 'Chile'
    },
    contactos: {
      telefono: '123456789',
      email: 'diegosalazar@example.com',
      redesSociales: {
        instagram: '@diego',
      }
    },
    intereses: ['Programación', 'Música', 'Ajedrez']
};

//? Extraer el nombre, el apellido y la ciudad en variables separadas
const {nombre, apellido} = usuario;
const {ciudad} = usuario.direccion;

//? Extrae el primer interés en una variable llamada "primerInteres"
const [primerInteres] = usuario.intereses;

//?  Extrae el email y el instagram en variables separadas
const {email} = usuario.contactos;
const {instagram} = usuario.contactos.redesSociales;

//? Extrae la calle y el número de la dirección y renómbralos como "calleUsuario" y "numeroUsuario"
const {calle: calleUsuario, numero: numeroUsuario} = usuario.direccion;

//* Imprime en consola todas las variables que extrajiste.
console.log(nombre);            
console.log(apellido);         
console.log(ciudad);            
console.log(primerInteres);     
console.log(email);             
console.log(instagram);         
console.log(calleUsuario);      
console.log(numeroUsuario);