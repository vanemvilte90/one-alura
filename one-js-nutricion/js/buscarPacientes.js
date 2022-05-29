var botonBuscar = document.querySelector("#buscar-paciente");  

botonBuscar.addEventListener("click", function(){
    //Se crea la petición
    var xhr = new XMLHttpRequest;
    //Se abre la petición
    xhr.open("GET", "https://alura-es-cursos.github.io/api-pacientes/pacientes11.json");
    //Se ejecuta la petición
    xhr.addEventListener("load", function(){
        var errorAjax = document.querySelector("#errorAjax");
        //Se obtiene el resultado de la petición
        if(xhr.status == 200) {
            errorAjax.classList.add("ocultarMensaje")
            var respuesta = xhr.responseText;
            //Se convierte la respuesta a un objeto
            var pacientes = JSON.parse(respuesta);
            //Se recorren los pacientes obtenidos en la petición
            pacientes.forEach(function(paciente){
                agregarPacienteEnTabla(paciente);
            });       
        } else {
            errorAjax.classList.remove("ocultarMensaje")
        }
    });
    xhr.send();
}); 