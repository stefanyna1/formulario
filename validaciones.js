let mainform= document.getElementById("mainform");
let input_nom= document.getElementById("nombre");
let input_edad= document.getElementById("edad");
let input_codigo_postal= document.getElementById("codigo_postal");
mainform.addEventListener("submit", function(event){
    event.preventDefault();
    alert("uy quietos");
    console.log("El nombre es:" + input_nom.value);
    if(input_codigo_postal.value.length == 5){
        console.log("el codigo postal es correcto:" + input_codigo_postal.value);
        
    }else{
        console.log("codigo postal invalido");
    }
    if(isNaN(input_edad.value) == true){
        console.log("la edad no es numerica");
    }else{
        console.log("la edad es numerica");
    }

    let carrera_de_interes= ["ingenieria, ciencias_computacion"];

    let input_carrera=document.querySelector("input[name='carrera']:checked");
    console.log("la carrera selecconada es: " + input_carrera.value);

    if(carreras_de_interes.indexOf(input_carrera.value) != -1){
        console.log("la carrera es valida");
    }else{
        
        console.log("la carera es invalida");
    }
});

