/*
 * main.js
 * 
 */



//put in resume show/hide here

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
        link.text('Other Requirements [-]');                
      } else {
        link.text('Other Requirements [+]');                
      }  
    });
  });  
});