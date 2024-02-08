//MomentJS

const diaHoy = new Date();

moment.locale('es');

//Manejo de diferentes formatos.
console.log( moment().format('h:mm a D MMMM YYY'));
console.log( moment().format('LLLL', diaHoy));
console.log(moment().add(3, 'days').calendar());