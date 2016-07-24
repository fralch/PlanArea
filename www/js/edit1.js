	$.ajax({
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
  	});

$(document).ready(mifuncion);

function mifuncion() {

  $("a").click(function() {
    var x = $("textarea").val();
    console.log(x);

    $.ajax({
      url:"js/areas.json",
      dataType: 'json',
      type: 'post',
      success: function (data) {
        $(data.areas).each(function (index, value) {
          if (index == 0) {
              

            };

          });
        }
      })
  });
}