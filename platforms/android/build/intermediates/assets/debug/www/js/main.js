$(document).ready(mifuncion);

function mifuncion () {


  if (localStorage.getItem('listado')) {
      $('#section1 p').html(localStorage.getItem('listado'));
    }
    
  
    if (localStorage.getItem('listado2')) {
      $('#section2 p').html(localStorage.getItem('listado2'));
    }
    
  
    if (localStorage.getItem('listado3')) {
      $('#section3 p').html(localStorage.getItem('listado3'));
    }
  ////////////////


  $("#section1 p").click(function() {
    $("#linea2 #section1 a").css({"display":"inline-block"});
  });
  $("#section2 p").click(function() {
    $("#linea2 #section2 a").css({"display":"inline-block"});
  });
  $("#section3 p").click(function() {
    $("#linea2 #section3 a").css({"display":"inline-block"});
  });    
  ///////
  $("#section1 #guardar").click(function() {
    localStorage.setItem('listado', $('#section1 p').html());
    location.reload();
    console.log('guardado1');
  });
  $("#section2 #guardar").click(function() {
    localStorage.setItem('listado2', $('#section2 p').html());
    location.reload();
    console.log('guardado2');
  });
  $("#section3 #guardar").click(function() {
    localStorage.setItem('listado3', $('#section3 p').html());
    location.reload();
    console.log('guardado3');
  });
  //--------------
   $("#section1 #cancelar").click(function() {
    location.reload();
  });
  $("#section2 #cancelar").click(function() {
    location.reload();
  });
  $("#section3 #cancelar").click(function() {
    location.reload();
  });



  //localStorage.clear('listado');
  //localStorage.clear('listado2');
  //localStorage.clear('listado3');

  /*$.ajax({
      url:"js/areas.json",
      dataType: 'json',
      type: 'get',
      success: function (data) {
        $(data.areas).each(function (index, value) {
          console.log(index);


          if (index == 0) {
            $("#section1 h3").text(value.titulo);
            $("#section1 p").text(value.descrip);
          }else if (index == 1) {
            $("#section2 h3").text(value.titulo);
            $("#section2 p").text(value.descrip);
          }else if (index == 2) {
            $("#section3 h3").text(value.titulo);
            $("#section3 p").text(value.descrip);
          };

          

        });
      }
    });*/

} 

