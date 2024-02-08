//Fechas.

const diaHoy = new Date();

let valor;

valor = diaHoy;
//Obtener el año.
valor = diaHoy.getFullYear();
//Obtener el mes.
valor = diaHoy.getMonth();
//Obtener los minutos de la hora actual.
valor = diaHoy.getMinutes();
//Obtener la hora actual sin minutos..
valor = diaHoy.getHours();
//Obtener milisegundos desde 1970. (Igual al Dane.now())
valor = diaHoy.getTime();

console.log(valor);