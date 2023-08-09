document.addEventListener("DOMContentLoaded", function (){
    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", function(event){
        event.preventDefault();
        
        const formData = new FormData(formulario);

        const data = {
            nome:"",
            email:"",
            senha:"",
            idade:"",
            genero:"",
            interesse:"",
            pais:"",
            mensagem:"",
        };

        formData.forEach((value, campo) => {
            data[campo] = value;            
        });

        console.log(data);
        //logica para processar o formulario
        alert("formulario enviado com sucesso");
    });
    
});


