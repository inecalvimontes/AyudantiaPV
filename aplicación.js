$(document).ready(function(){
    $("#mostrar").click(function(){
      $("#d4").show('fast');
    });
  
    $("#ocultar").click(function(){
      $("#d4").hide('fast');
    });

    $("#cambiarcolor").click(function(){
      $("#d3").fadeTo("fast", 0.5)
    });

    $("#cambiartexto").click(function(){
        $("#titulo").text("¿Quién es Wisu?")
      });
  });