/*	$.ajax({
  		url:"js/areas.json",
  		dataType: 'json',
  		type: 'get',
  		success: function (data) {
  			$(data.areas).each(function (index, value) {
  				console.log(index);

  				if (index == 0) {
  					$("h2").text(value.titulo);
  					$("textarea").val(value.descrip);
  				};
  			});
  		}
  	});*/

$(document).ready(mifuncion);

function mifuncion() {

  if (localStorage.getItem('meta1')) {
      $('#txtarea textarea').html(localStorage.getItem('meta1'));
    }
    $('#txtarea textarea').html("pplantee metas en su vida relacionadas con estos tres aspectos. Utilice la Tarjeta del Plan del Area para escribir sus metas.")
  

  $("a").click(function() {
    localStorage.setItem('meta1', $('#txtarea textarea').val());
    var mensa = $('#txtarea textarea').val();
    console.log(mensa);

    /*$.ajax({
      url:"js/areas.json",
      dataType: 'json',
      type: 'post',
      success: function (data) {
        $(data.areas).each(function (index, value) {
          if (index == 0) {
              

            };

          });
        }
      })*/


  });
}