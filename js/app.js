/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
//console.log(data);
// carga la visualización API
/*
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
*/
window.addEventListener('load', function() {
/* Obteniendo datos de alumnos matriculadoss */
  var activeStudents = data['AQP']['2016-2']['students'];
  var counter = 0;
  for (var i = 0; i < activeStudents.length; i++)
    if (activeStudents[i] === true) {
      counter ++;
    }






})