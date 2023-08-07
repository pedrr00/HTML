document.addEventListener("DOMContentLoaded", function (){
    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", function(event){
        event.preventDefault();
        
        const formData = new FormData(formulario);

        formData.forEach((value, campo) => {
           console.log(campo + ":" + value);
            
        });
        //logica para processar o formulario
        alert("formulario enviado com sucesso");
    });
    
});
