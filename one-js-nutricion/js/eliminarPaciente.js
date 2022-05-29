var pacientes = document.querySelectorAll(".paciente");
//Se obtiene la tabla
var tabla = document.querySelector("#tabla-pacientes");

tabla.addEventListener("dblclick", function(event) {
    //Se obtiene el elemento que se ha dobleclicado
    event.target.parentNode.classList.add("fadeOut") 
    setTimeout(function(){
        //Se elimina la fila
        event.target.parentNode.remove();
    }, 300); 
})

/* pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function() {
        console.log("Se realizaron dos clics");
        this.remove();
    });
}); */