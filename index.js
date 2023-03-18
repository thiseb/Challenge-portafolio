//const labelName = document.querySelector("#label__nombre");
//labelName.addEventListener("click", (evento) => {
//    agregarNombre(evento.target)});
//
//function agregarNombre() {
//    labelName.innerHTML = "Nombre";
//}
var valorNombre = "";
var valorCorreo = "";
var valorAsunto = "";
var valorMensaje ="";

const inputName = document.querySelector("#nombre");
inputName.addEventListener("blur", (evento) => {
    validarNombre(evento.target);
});
function validarNombre(input){
    nombre =input.value;
    valorNombre = nombre.length;
 //   console.log(valorNombre);
    validarDatos(valorNombre,valorCorreo,valorAsunto);
};

const inputEmail = document.querySelector("#correo");
inputEmail.addEventListener("blur", (evento) => {
    validarEmail(evento.target);
});
function validarEmail(input){
    correo = input.value;
    valorCorreo = correo.length;
 //   console.log(valorCorreo);
    validarDatos(valorNombre,valorCorreo,valorAsunto);
};

const inputAsunto = document.querySelector("#asunto");
inputAsunto.addEventListener("blur", (evento) => {
    validarAsunto(evento.target);
});
function validarAsunto(input){
const asunto = input.value;
valorAsunto = asunto.length;
//    console.log(valorAsunto);
    validarDatos(valorNombre,valorCorreo,valorAsunto);
};

const inputMensaje = document.querySelector("#mensaje");
inputMensaje.addEventListener("blur", (evento) => {
    validarMensaje(evento.target);    
});
function validarMensaje(input){
    const mensaje = input.value;
    valorMensaje = mensaje.length;
 //   console.log(valorMensaje);    
};

function validarDatos () {
    if (valorNombre > 0 && valorCorreo > 0 && valorAsunto > 0 ) {
        document.querySelector("#boton__form").disabled = false;
    } else document.querySelector("#boton__form").disabled = true;
};





