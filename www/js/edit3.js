	$.ajax({
  		url:"js/areas.json",
  		dataType: 'json',
  		type: 'get',
  		success: function (data) {
  			$(data.areas).each(function (index, value) {
  				console.log(index);

  				if (index == 0) {
  					$("h2").text(value.titulo);
  					$("#section1 p").text(value.descrip);
  				};
  			});
  		}
  	});