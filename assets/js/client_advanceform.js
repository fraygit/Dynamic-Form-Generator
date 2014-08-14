
var advanceforms = {

	init: function (argument) {
		$(document).ready(function(e) {
    		$('#templates').load('/templates/gasp.html',function(){
    			advanceforms.testtemplate();
    		});
		});
	},

	testtemplate: function(){
		var template = $("#template-gasp").html();

		$.ajax({
			type: "POST",
			url: "/programme/details", // CALL CONTROLLER
			data: {Id: 1013, isRest: true},
			success: function(result){
				var rendered = Mustache.render(template, result);
				$("#formCanvas").html(rendered);
			}
		});


	}
}
advanceforms.init();
