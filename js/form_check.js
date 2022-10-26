let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");

let checkbox = document.getElementById("term_cond");
let formulario = document.getElementById("formulario");

formulario.addEventListener('submit',function(evt){
    evt.preventDefault();
    let error = document.getElementById("error");
    let validacion = document.getElementById("validacion");
    const mensajesError = [];
    if(esVacio(nombre)){
        mensajesError.push("Ingresa tu nombre");
    }

    if(esVacio(apellido)){
        mensajesError.push("Ingresa tu apellido");
    }
    if(mensajesError != []){
         error.innerHTML = mensajesError.join(", ");
    }else if(mensajesError==[]){
        validacion.innerHTML = "Datos enviados"
    }
    
});

function esVacio(dato){
    return dato.value === ""
}