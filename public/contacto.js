const enviarBoton = document.getElementById("btn_enviar");
const inputNombreCompleto = document.getElementById("inputNombreCompleto");
const inputEmail = document.getElementById("inputEmail");
const inputAsunto = document.getElementById("inputAsunto");
const inputMensaje = document.getElementById("inputMensaje");

enviarBoton.addEventListener('click', async () => {
    //alert("se realiza reserva");

    let nombre = inputNombreCompleto.value;
    let email= inputEmail.value;    
    let asunto= inputAsunto.value;  
    let mensaje= inputMensaje.value;      

    let hayError  = false;

    if (nombre){
        console.log(`nombre ingresado : ${nombre}`);
        if ( nombre.length <= 2 ) {
            hayError = true;
            alert(`el nombre "${nombre}" debe tener un largo mayor a 2 caracteres`);
            console.log(`el nombre "${nombre}" debe tener un largo mayor a 2 caracteres`);
        }
    } else {
        hayError = true;
        alert(`debe ingresar un nombre`);
        console.log(`debe ingresar un nombre`);       
    }   

    if (email){
        console.log(`email ingresado :  ${email}`);
        if ( !email.includes("@") ){
            hayError = true;
            alert(`el email "${email}" debe contener caracter @`);
            console.log(`el email "${email}" debe contener caracter @`)
        }
  
    }  else {
            hayError = true;
            alert(`debe ingresar un email`);
            console.log(`debe ingresar un email`);       
    } 


    if (asunto){
        console.log(`asunto ingresado : ${nombre}`);
        if ( asunto.length <= 2 ) {
            hayError = true;
            alert(`el asunto "${asunto}" debe tener un largo mayor a 2 caracteres`);
            console.log(`el asunto "${nombre}" debe tener un largo mayor a 2 caracteres`);
        }
    } else {
        hayError = true;
        alert(`debe ingresar un asunto`);
        console.log(`debe ingresar un asunto`);       
    }   

    if (mensaje){
        console.log(`mensaje ingresado : ${nombre}`);
        if ( asunto.length <= 2 ) {
            hayError = true;
            alert(`el mensaje "${asunto}" debe tener un largo mayor a 2 caracteres`);
            console.log(`el mensaje "${nombre}" debe tener un largo mayor a 2 caracteres`);
        }
    } else {
        hayError = true;
        alert(`debe ingresar un mensaje`);
        console.log(`debe ingresar un mensaje`);       
    }       
  


    if (hayError === true ){
        alert("vuelta a intentar tomando en cuenta los errores indicados");
    }
    else{
        alert(`Se realizo el envio de contacto a nombre de  ${nombre}`);
    }



});