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
window.addEventListener('load',function(){
  var lima= document.getElementById('lima');
  var arequipa= document.getElementById('arequipa');
  var mexico= document.getElementById('mexico');
  var chile= document.getElementById('chile');
  
  var sedes = [ 'lima', 'arequipa', 'mexico', 'chile'];
  var promos = ['limYearProm','areYearProm','mexYearProm','chilYearProm'];
  
  var limYearProm= document.getElementById('limYearProm');
  var areYearProm= document.getElementById('areYearProm');
  var mexYearProm= document.getElementById('mexYearProm');
  var chilYearProm= document.getElementById('chilYearProm');
  
  lima.addEventListener('click', function(event){
    event.preventDefault;
    lima.classList.toggle('active');
    limYearProm.classList.toggle('display-none');
  })
  
  arequipa.addEventListener('click', function(event){
    event.preventDefault;
    arequipa.classList.toggle('active');
    areYearProm.classList.toggle('display-none');
  })
  
  mexico.addEventListener('click', function(event){
    event.preventDefault;
    mexico.classList.toggle('active');
    mexYearProm.classList.toggle('display-none');
  })
  
  chile.addEventListener('click', function(event){
    event.preventDefault;
    chile.classList.toggle('active');
    chilYearProm.classList.toggle('display-none');
  })
  
  
  })
  
  