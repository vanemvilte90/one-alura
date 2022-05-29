var campoFiltro = document.querySelector("#filtrar-tabla");

campoFiltro.addEventListener("input", function(){
    //Se obtienen los pacientes
    var pacientes = document.querySelectorAll(".paciente");
    //Se recorren los pacientes
    if(this.value.length > 0) {
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNombre = paciente.querySelector(".info-nombre");
            var nombre = tdNombre.textContent;
            //Se comprueba si el nombre del paciente contiene el texto del filtro
            var expresion = new RegExp(this.value, "i");
        
            if(!expresion.test(nombre)) {
                //Si no contiene el texto, se oculta el paciente
                paciente.classList.add("ocultarPaciente");
            } else {
                //Si contiene el texto, se muestra el paciente
                paciente.classList.remove("ocultarPaciente");
            }
        }
    } else {
        //Si no hay texto, se muestran todos los pacientes
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("ocultarPaciente");
        }
    }

});