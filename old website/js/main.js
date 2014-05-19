/*
 * main.js
 * 
 */



//resume.html

//hide and show MechE Classes
$('.ME-show').hide();
$(document).ready(function(){
  $('.ME-open').click(function(){
    var link = $(this);
    $('.ME-show').slideToggle('slow', function() {
      if ($(this).is(":visible")) {
        link.text('Mechanical Engineering [-]');                
      } else {
        link.text('Mechanical Engineering [+]');                
      }  
    });
  });  
});

//hide and show EECS Classes
$('.EECS-show').hide();
$(document).ready(function(){
  $('.EECS-open').click(function(){
    var link = $(this);
    $('.EECS-show').slideToggle('slow', function() {
      if ($(this).is(":visible")) {
        link.text('EECS [-]');                
      } else {
        link.text('EECS [+]');                
      }  
    });
  });  
});

//hide and show all other Classes
$('.REST-show').hide();
$(document).ready(function(){
  $('.REST-open').click(function(){
    var link = $(this);
    $('.REST-show').slideToggle('slow', function() {
      if ($(this).is(":visible")) {
        link.text('Requirements [-]');                
      } else {
        link.text('Requirements [+]');                
      }  
    });
  });  
});






//hide and show OBL
var research = 'Research Programmer for Berkeley Orthopaedic Biomechanics Laboratory';
$('.OBL-show').hide();
$(document).ready(function(){
  $('.OBL-open').click(function(){
    var link = $(this);
    $('.OBL-show').slideToggle('slow', function() {
      if ($(this).is(":visible")) {
        link.text(research + ' [-]');                
      } else {
        link.text(research + ' [+]');                
      }  
    });
  });  
});

//hide and show CTC
var ctc = 'Project Manager for Code the Change';
$('.CTC-show').hide();
$(document).ready(function(){
  $('.CTC-open').click(function(){
    var link = $(this);
    $('.CTC-show').slideToggle('slow', function() {
      if ($(this).is(":visible")) {
        link.text(ctc +' [-]');                
      } else {
        link.text(ctc +' [+]');                
      }  
    });
  });  
});

//hide and show Robo-Ops
var ops = 'Mechanical Team Member of AIAA Robo-Ops';
$('.ROBO-show').hide();
$(document).ready(function(){
  $('.ROBO-open').click(function(){
    var link = $(this);
    $('.ROBO-show').slideToggle('slow', function() {
      if ($(this).is(":visible")) {
        link.text(ops +' [-]');                
      } else {
        link.text(ops +' [+]');                
      }  
    });
  });  
});

//hide and show CalSol
var cal = 'Electrical Team Member of CalSol';
$('.CALSOL-show').hide();
$(document).ready(function(){
  $('.CALSOL-open').click(function(){
    var link = $(this);
    $('.CALSOL-show').slideToggle('slow', function() {
      if ($(this).is(":visible")) {
        link.text(cal +' [-]');                
      } else {
        link.text(cal +' [+]');                
      }  
    });
  });  
});

//hide and show 61a
var cs = 'Academic Intern (Lab Assistant) for CS61A';
$('.TA-show').hide();
$(document).ready(function(){
  $('.TA-open').click(function(){
    var link = $(this);
    $('.TA-show').slideToggle('slow', function() {
      if ($(this).is(":visible")) {
        link.text(cs +' [-]');                
      } else {
        link.text(cs +' [+]');                
      }  
    });
  });  
});

//hide and show webdev
var dev = 'Freelance Website Developer';
$('.WEB-show').hide();
$(document).ready(function(){
  $('.WEB-open').click(function(){
    var link = $(this);
    $('.WEB-show').slideToggle('slow', function() {
      if ($(this).is(":visible")) {
        link.text(dev +' [-]');                
      } else {
        link.text(dev +' [+]');                
      }  
    });
  });  
});




//projects.html

//$('.personalProjects').scrollspy({ target: '#js-pp' });

/*$(document).ready(function(){
  $('.yes').click(function(){
$('yes').scrollspy({ target: '.websites' });
  });  
});
*/