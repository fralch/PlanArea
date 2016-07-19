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


}	

