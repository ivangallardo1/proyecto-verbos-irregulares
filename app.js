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
