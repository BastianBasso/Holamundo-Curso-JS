// ## Ejercicio 2: Sistema de Citas Médicas 🩺

/**
 * **Objetivo:** Desarrollar un sistema para gestionar citas médicas, combinando objetos y arreglos.

1.  **Define un objeto `paciente`** con propiedades como `nombre`, `edad`, y un arreglo `historialMedico` que inicialmente esté vacío.
2.  **Define un objeto `medico`** con `nombre`, `especialidad` y un arreglo `citas` que también esté vacío.
3.  **Crea una función `agendarCita`** que tome un objeto `medico`, un objeto `paciente`, una `fecha` y un `motivo`. La función debe agregar un nuevo objeto `cita` (con `paciente`, `fecha` y `motivo`) al arreglo `citas` del `medico`.
4.  **Crea una función `consultarHistorial`** que reciba un objeto `paciente` y un `medico`. La función debe recorrer las citas del médico y, si el paciente está en una de ellas, agregar un nuevo objeto (`{medico: medico.nombre, fecha: cita.fecha, motivo: cita.motivo}`) al `historialMedico` del paciente.
*/

//1
let paciente = {
    nombre: "",
    edad: 0,
    hisorialMedico: [],
};

//2 
let medico = {
    nombre:"",
    especialidad:"",
    citas: [],
}

let drSmith = { nombre: "Dr. Smith", especialidad: "Cardiólogo", citas: [] };
let draGomez = { nombre: "Dra. Gómez", especialidad: "Dermatología", citas: [] };
let juan = { nombre: "Juan", edad: 45, historialMedico: [] };
let ana = { nombre: "Ana", edad: 32, historialMedico: [] };
let luis = { nombre: "Luis", edad: 28, historialMedico: [] };

//3
/**
 * 3.  **Crea una función `agendarCita`** que tome un objeto `medico`, un objeto `paciente`, una `fecha` y un `motivo`. La función debe agregar un nuevo objeto `cita` (con `paciente`, `fecha` y `motivo`) al arreglo `citas` del `medico`.
 */

function agendarCita (medico, paciente, fecha , motivo){
    let cita = {
        paciente:paciente.nombre,
        fecha:fecha,
        motivo:motivo,
    }
    medico.citas.push(cita);
}

agendarCita(drSmith, juan, "2025-12-25", "Dolor de pecho");
agendarCita(drSmith, ana, "2025-12-26", "Chequeo anual");
agendarCita(draGomez, luis, "2025-12-27", "Revisión de lunares");
agendarCita(drSmith, juan, "2026-01-10", "Control de presión");
//console.log(drSmith);


//consultarHistorial(juan, drSmith);
//console.log(juan.historialMedico);

/*    
4.  **Crea una función `consultarHistorial`** que reciba un objeto `paciente` y un `medico`. La función debe recorrer las citas del médico y, si el paciente está en una de ellas, agregar un nuevo objeto (`{medico: medico.nombre, fecha: cita.fecha, motivo: cita.motivo}`) al `historialMedico` del paciente.
*/

function consultarHistorial (paciente, medico){
    for (p of medico.citas){
        if (paciente.nombre === p.paciente){

            let nuevo = { 
                medico: medico.nombre,
                fecha: p.fecha,
                motivo: p.motivo
            }
            paciente.historialMedico.push(nuevo);
           // console.log(p);
            //console.log(paciente.historialMedico);
        }
    }
}

consultarHistorial(juan, drSmith);
console.log(juan.historialMedico);
