/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
// console.log(data);

window.addEventListener('load', function() {

  var lima = document.getElementById('lima');
  var arequipa = document.getElementById('arequipa');
  var mexico = document.getElementById('mexico');
  var chile = document.getElementById('chile');
      
  var sedes = [ lima, arequipa, mexico, chile];
  var promos = ['limYearProm', 'areYearProm', 'mexYearProm','chilYearProm'];
  
  lima.addEventListener('click', function(event) {
    event.preventDefault;
    lima.classList.toggle('active');
    limYearProm.classList.toggle('display-none');
  });
  
  var limYearProm = document.getElementById('limYearProm');
  var areYearProm = document.getElementById('areYearProm');
  var mexYearProm = document.getElementById('mexYearProm');
  var chilYearProm = document.getElementById('chilYearProm');
  

  arequipa.addEventListener('click', function(event) {
    event.preventDefault;
    arequipa.classList.toggle('active');
    areYearProm.classList.toggle('display-none');
  });
  
  mexico.addEventListener('click', function(event) {
    event.preventDefault;
    mexico.classList.toggle('active');
    mexYearProm.classList.toggle('display-none');
  });
  
  chile.addEventListener('click', function(event) {
    event.preventDefault;
    chile.classList.toggle('active');
    chilYearProm.classList.toggle('display-none');
  });

  /* Obteniendo datos de alumnos matriculados arequipa 2016-2 */
  var enrollmentDiv = document.getElementById('enrollment-div').children[0];
  

  var counter = 0;
  var aqpStudents = data['AQP']['2016-2']['students'];
  var limStudents = data[''] 
  
  function numberEnrollment(numberStudents) {
  
    for (var i = 0; i < numberStudents.length; i++) {
      if (numberStudents[i]['active'] === true) {
        counter++;
      }
    } 
    console.log(counter); 
  };
  numberEnrollment(aqpStudents);
  enrollmentDiv.textContent = counter;

  var counterDropout = 0;
  function numberDropout(numberStudents) {
    for (var i = 0; i < numberStudents.length; i++) {
      if (numberStudents[i]['active'] === false) {
        counterDropout++;
      }
      var percentage = (counterDropout / numberStudents.length) * 100; 
      percentage + '%';   
    } 
    console.log(counterDropout);
    console.log(percentage + '%');
  };
  numberDropout(aqpStudents);
});
  
  