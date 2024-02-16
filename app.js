let verbBase = document.getElementById('base');
let inputTexto = document.querySelectorAll('.textoInput');
const verbPastSimple = document.getElementById('resultado-past-simple');
const verbPastParticiple = document.getElementById('resultado-past-participle');
const meaning = document.getElementById('resultado-meaning');
const btnResultado = document.getElementById('btn-resultado');
const btnBorrar = document.getElementById('btn-borrar');
const botonCambiarVerbo = document.getElementById('btn-cambiar-verbo');

function generarEnteroAleatorio (min, max){
  // Sin incluir max en los valores posibles.
  return Math.floor(Math.random() * (max - min) + min);  
}

let indiceAleatorio;

function mostrarResultados() {
  verbPastSimple.innerText = verbos[indiceAleatorio]["Past-simple"];
  verbPastParticiple.innerText = verbos[indiceAleatorio]["Past-Participle"];
  meaning.innerText = verbos[indiceAleatorio].Meaning;
}

function cambiarVerbo() {
  indiceAleatorio = generarEnteroAleatorio(0, verbos.length);
  verbBase.innerText = `"${verbos[indiceAleatorio].Base}"`;

  verbPastSimple.textContent = "";
  verbPastParticiple.textContent = "";
  meaning.textContent = "";
  
  // Borrar contenido de los inputs
  inputTexto.forEach(function(input) {
    input.value = '';
  });
}

cambiarVerbo();
botonCambiarVerbo.addEventListener('click', cambiarVerbo);
btnResultado.addEventListener('click', mostrarResultados);
btnBorrar.addEventListener('click', () => { 
  inputTexto.forEach(function(input) {
    input.value = '';
});  
})


/**
Tenemos un objeto que es parte de una colección de discos musicales
Cada album tiene un número de identificación único (id) asociado a otras propiedades
No todos los albumes tienen información completa
*/

var coleccionDiscos = {
  7853: {
    tituloAlbum: "Bee Gees Greatest",
    artista: "Bee Gees",
    canciones: ["Stayin Alive"]
  },
  5439: {
    tituloAlbum: "Abba Gold"
  }
};

/**
Define la función actualizarDiscos que tome los siguientes parámetros:
- discos (el objeto que representa la colección de discos)
- id 
- propiedad ("artista" o "canciones")
- valor

Tu meta es completar la función implementando las siguientes reglas para modificar el objeto pasado a la función
- si "valor" es una cadena vacía, elimina la propiedad del album correspondiente.

- Si "propiedad" es igual a la cadena de caracteres de "canciones" pero el album no tiene propiedad llamada
"canciones", crea un arreglo vacío y agrega "valor" a ese arreglo.

- Si "propiedad" es igual a la cadena de caracteres de "canciones" y "valor" no es una cadena vacía, agrega 
"valor" al final del arreglo de canciones del album correspondiente.

- Si "valor" no es una cadena vacía y "propiedad" no es igual a "canciones", asigna el valor del parámetro 
"valor" a la propiedad. Si la propiedad no existe, debes crearla y asignar ese valor
*/
/**
function actualizarDiscos(discos, id, propiedad, valor) {
  if(valor == ""){
    delete discos[id][propiedad];
  } else if (propiedad === "canciones") {
    discos[id][propiedad] = discos[id][propiedad] || [] ; // Si no existe la propiedad crea un array vacío
    discos[id][propiedad].push(valor);    
  } else {
    discos[id][propiedad] = valor;
  }
}

console.log(coleccionDiscos[5439].artista);
actualizarDiscos(coleccionDiscos, 5439, "artista", "Abba");
console.log(coleccionDiscos[5439].artista);
 */
