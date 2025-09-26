// Continuando con Objetos importantes implementados en Js



// Crear fechas
const ahora = new Date(); // Fecha y hora actual
const fecha = new Date('December 11 1986 14:15 GMT'); // Fecha específica

// Métodos para obtener información de la fecha
ahora.getFullYear();    // Año (ej: 2025)
ahora.getMonth();       // Mes (0 = Enero, 11 = Diciembre)
ahora.getDate();        // Día del mes (1-31)
ahora.getDay();         // Día de la semana (0 = Domingo, 6 = Sábado)
ahora.getHours();       // Hora (0-23)
ahora.getMinutes();     // Minutos (0-59)
ahora.getSeconds();     // Segundos (0-59)
ahora.getMilliseconds();// Milisegundos (0-999)
ahora.getTime();        // Milisegundos desde el 1 de enero de 1970 (timestamp)

// Métodos para modificar la fecha
ahora.setFullYear(2030);    // Cambia el año
ahora.setMonth(5);          // Cambia el mes (0 = Enero)
ahora.setDate(20);          // Cambia el día del mes
ahora.setHours(10);         // Cambia la hora
ahora.setMinutes(30);       // Cambia los minutos

// Métodos para formato de fecha
ahora.toDateString();       // "Mon Sep 22 2025"
ahora.toTimeString();       // "18:45:00 GMT+0000 (Coordinated Universal Time)"
ahora.toISOString();        // "2025-09-22T18:45:00.000Z"
ahora.toLocaleDateString(); // Fecha en formato local (ej: "22/9/2025")
ahora.toLocaleTimeString(); // Hora en formato local (ej: "18:45:00")

// Ejemplo: Obtener el año y el mes actual
const año = ahora.getFullYear();
const mes = ahora.getMonth() + 1; // Sumar 1 porque los meses empiezan en 0

// Ejemplo: Comparar fechas
const fecha1 = new Date('2025-09-22');
const fecha2 = new Date('2025-09-23');
if (fecha1 < fecha2) {
    console.log("fecha1 es anterior a fecha2");
}