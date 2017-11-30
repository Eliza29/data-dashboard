/*
 * Funcionalidad de tu producto
*/
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
   
  /* Seleccionando Promo lima*/
  var lim1 = document.getElementById('lim-20162');
  var lim2 = document.getElementById('lim-20171');
  var lim3 = document.getElementById('lim-20172');
 
  limYearProm.addEventListener('click', selectionPromo);
  function selectionPromo(){
    if(lim1){
      enrollmentDiv.textContent = ""; 
      numberEnrollment(limStudents1);
      numberDropout(limStudents1)
    }
    else if(lim2){
      numberEnrollment(limStudents2);
    }
    else if (lim3){
      numberEnrollment(limStudents3); 
    }
  }
 /* Seleccionando Promo Arequipa*/
 var aqp1 = document.getElementById('aqp-2016');
 var aqp2 = document.getElementById('aqp-2017');

 areYearProm.addEventListener('click', selectionPromo);
 function selectionPromo(){
   if(aqp1){
     numberEnrollment(aqpStudents1);
   }
   else if(aqp2){
     numberEnrollment(aqpStudents2);
   }
 }
 /*Seleccionando Promo Mexico*/
 var mex1 = document.getElementById('mex20171');
 var mex2 = document.getElementById('mex20172');
 mexYearProm.addEventListener('click', selectionPromo);
 function selectionPromo(){
   if(mex1){
     numberEnrollment(cdmxStudents1);
   }
   else if(mex2){
     numberEnrollment(cdmxStudents2);
   }
 }
 /*Seleccionando promo Chile*/
 var chile1 = document.getElementById('chile-2016');
 var chile2 = document.getElementById('chile-20171');
 var chile3 = document.getElementById('chile-20172');
 
 chilYearProm.addEventListener('click', selectionPromo);
 function selectionPromo(){
   if(chile1){
     numberEnrollment(chileStudents1);
     
   }
   else if(chile2){
     numberEnrollment(chileStudents2);
   }
   else if(chile3){
    numberEnrollment(chileStudents3);
  }
 }
   /* Variables Promo Lima*/
   var limStudents1 = data["LIM"]["2016-2"]['students'];
   var limStudents2 = data["LIM"]["2017-1"]['students'];
   var limStudents3 = data["LIM"]["2017-2"]['students'];
 
   /* Variables Promo Arequipa*/
   var aqpStudents1 = data['AQP']['2016-2']['students'];
   var aqpStudents2 = data["AQP"]["2017-1"]['students'];
 
   /* Variables Promo Mexico*/
   var cdmxStudents1 = data["CDMX"]["2017-1"]['students'];
   var cdmxStudents2 = data["CDMX"]["2017-2"]['students'];
   
   /* Variables Promo Chile*/
   var chileStudents1 = data["SCL"]["2016-2"]['students'];
   var chileStudents2 = data["SCL"]["2017-1"]['students'];
   var chileStudents3 = data["SCL"]["2017-2"]['students'];
  
   /* Obteniendo datos de alumnos matriculados*/
  var enrollmentDiv = document.getElementById('enrollment-div').children[0];
  var dropout = document.getElementById('dropout').children[0];
 
  var counter = 0; 
  function numberEnrollment(numberStudents) {
    for (var i = 0; i < numberStudents.length; i++) {
      if (numberStudents[i]['active'] === true) {
        counter++;
      }
      enrollmentDiv.textContent = counter; 
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
    dropout.textContent = counterDropout; 
    console.log(percentage + '%');
  };
});
  
  