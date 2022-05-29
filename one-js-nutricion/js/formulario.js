var botonAgregar = document.querySelector("#agregar-paciente");

botonAgregar.addEventListener("click",function(event){
    event.preventDefault();
    //Obtengo los datos del formulario
    var form = document.querySelector("#formulario");
    //Obtengo los datos del formulario a través de la función capturarDatosPaciente
    var paciente = capturarDatosPaciente(form);
    
    //Validar paciente
    var errores = validarPaciente(paciente);
    //console.log(errores);
    if (errores.length > 0) {
        mostrarMensajesError(errores);
        return;
    }
    //Se llama a la función agregarPacienteEnTabla
    agregarPacienteEnTabla(paciente)

    //Se limpia el formulario
    form.reset();

    //Se limpia el mensaje de error, una vez que se agrega un paciente de forma correcta 
    var mensajesErrores = document.querySelector("#mensajes-error");
    mensajesErrores.innerHTML = "";
});

// Se traen los pacientes de una base externa
function agregarPacienteEnTabla(paciente) {
    var pacienteTr = construirTr(paciente);
    var tabla = document.querySelector("#tabla-pacientes");  
    //Se agrega la fila a la tabla
    tabla.appendChild(pacienteTr);
}

//Se capturan los datos del formulario
function capturarDatosPaciente(form) {
    var paciente = {
        nombre: form.nombre.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function construirTr(paciente) {
    //Se crea la fila y se agregan las class
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    //Se pasa la información a la tabla
    pacienteTr.appendChild(construirTd(paciente.nombre, "info-nombre"));
    pacienteTr.appendChild(construirTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(construirTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(construirTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(construirTd(paciente.imc, "info-imc"));
    return pacienteTr;
}


function construirTd(dato, clase) {
    //Se crean las celdas y se agregan las class
    var td = document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;
    return td;
}

function validarPaciente(paciente) {
    var errores = [];
    
    //Se valida que se hayan ingresado datos
    if(paciente.nombre.length === 0) {
        errores.push("El nombre no puede estar vacío.")
    }
    
    if(paciente.peso.length === 0) {
        errores.push("El peso no puede estar vacío.")
    }
    
    if(paciente.altura.length === 0) {
        errores.push("La altura no puede estar vacía.")
    }

    if(paciente.gordura.length === 0) {
        errores.push("El porcentaje de gordura no puede estar vacío.")
    }

    //Se valida que los datos ingresados sean correctos
    if(!validarPeso(paciente.peso)) {
        errores.push("El peso es incorrecto.");
    } 
    
    if(!validarAltura(paciente.altura)) {
        errores.push("La altura es incorrecta.");
    }

    return errores;
}

function mostrarMensajesError(errores) {
    var ul = document.querySelector("#mensajes-error");
    //Se limpian los mensajes de error
    ul.innerHTML = "";
    errores.forEach(function(error){
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    })
    for(i = 0; i < errores.length; i++) {

    }

}