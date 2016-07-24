$(document).ready(mifuncion);

function mifuncion () {


	if ($(window).width() >= 310) {  

        $("p").text("Plantee metas en su vida relacionadas con estos tres aspectos. Utilice la Tarjeta del Plan del Area para escribir sus metas.");
        
	}

	$("#section1").click(function() {
		console.log("sigo funcionando 1");
	});
	$("#section2").click(function() {
		console.log("sigo funcionando 2");
	});
	$("#section3").click(function() {
		console.log("sigo funcionando 3");
	});

	$.ajax({
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
  	});

}	

