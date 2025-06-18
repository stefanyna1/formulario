let form = document.getElementById("mainform");
let nombre = document.getElementById("nombre");
let edad = document.getElementById("edad");
let codigo = document.getElementById("codigo_postal");
let pais = document.getElementById("pais");
let imagen = document.getElementById("imagen");

form.addEventListener("submit", function(event){
  event.preventDefault();

  console.log("Nombre:", nombre.value);
   console.log("Edad:", edad.value);
  console.log("Código Postal:", codigo.value);

  if (codigo.value.length != 5) {
    console.log("Código postal inválido");
  } else {
    console.log("Código postal correcto");
  }

  if (isNaN(edad.value) || edad.value == "") {
    console.log("La edad no es válida");
  } else {
    console.log("Edad válida");
  }

  let genero = document.querySelector("input[name='genero']:checked");
  if (genero) {
    console.log("Género:", genero.value);
  } else {
    console.log("No seleccionaste género");
  }

  let intereses = document.querySelectorAll("input[name='interes']:checked");
  if (intereses.length === 0) {
    console.log("No seleccionaste intereses");
  } else {
   for (let i = 0; i < intereses.length; i++) {
      console.log("Interés:", intereses[i].value);
    }
  }

  if (pais.value == "") {
    console.log("Debes seleccionar un país");
  } else {
    console.log("País:", pais.value);
  }

  if (imagen.files.length == 0) {
    console.log("No subiste ninguna imagen");
  } else {
    console.log("Imagen cargada:", imagen.files[0].name);
  }

  console.log("Formulario listo para enviar");
});