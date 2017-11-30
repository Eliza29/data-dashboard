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
  var limYearProm = document.getElementById('limYearProm');
  var areYearProm = document.getElementById('areYearProm');
  var mexYearProm = document.getElementById('mexYearProm');
  var chilYearProm = document.getElementById('chilYearProm');    
  
  lima.addEventListener('click', function(event) {
    event.preventDefault;
    lima.classList.toggle('active');
    limYearProm.classList.toggle('display-none');
  });
  
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
  /* Seleccionando Promo*/
  var lim1 = document.getElementById('lim-20162');
  lim1.addEventListener('click', selectionPromo);
  function selectionPromo(event){
    event.preventDefault;
    numberEnrollment(limStudents1);
    enrollmentDiv.textContent = counter;   
  }

  var lim2 = document.getElementById('lim-20171');
  lim2.addEventListener('click', selectionPromo);
  function selectionPromo(event){
    event.preventDefault;
    numberEnrollment(aqpStudents1);
    enrollmentDiv.textContent = counter;   
  }

  /* Obteniendo datos de alumnos matriculados*/
  var enrollmentDiv = document.getElementById('enrollment-div').children[0];
  
  var counter = 0;
  /* Promo Lima*/
  var limStudents1 = data['LIM']['2016-2']['students'];
  var limStudents2 = data["LIM"]["2017-1"]['students'];
  var limStudents3 = data["LIM"]["2017-2"]['students'];

  /* Promo Arequipa*/
  var aqpStudents1 = data['AQP']['2016-2']['students'];
  var aqpStudents2 = data["AQP"]["2017-1"]['students'];

  /* Promo Mexico*/
  var cdmxStudents1 = data["CDMX"]["2017-1"]['students'];
  var cdmxStudents2 = data["CDMX"]["2017-2"]['students'];
  
  /* Promo Chile*/
  var chileStudents1 = data["CDMX"]["2017-1"]['students'];
  
  
  
  function numberEnrollment(numberStudents) {
    for (var i = 0; i < numberStudents.length; i++) {
      if (numberStudents[i]['active'] === true) {
        counter++;
      }
    } 
    console.log(counter); 
  };

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
  numberDropout(aqpStudents1);
});
  
  