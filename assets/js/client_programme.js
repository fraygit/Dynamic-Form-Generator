var programmeId = $("#hdnProgrammId").val();

var clientProgramme = {


	init: function(){
		// ADD EVENTS
		$("#btnAdd").click(function(){
			clientProgramme.addProgramme();
		});

		$("#btnAddField").click(function(){
			clientProgramme.addField();
		});

		$("#btnAddSection").click(function(){
			clientProgramme.addSection();
		});

		clientProgramme.getSections(); //POPULATE SECTION DROPDOWN
	},

	testFunc: function(){
		console.log('this is client');
	},

	getSections: function(){
		$.ajax({
			type: "POST",
			url: "/section/GetSectionsByProgramme", // CALL CONTROLLER
			data: {Name: name, ProgrammeId: programmeId},
			success: function(result){
				for (i in result){
					var o = new Option(result[i].Name, result[i].id);
					console.log('Field Name = ' + result[i].Name);
					$("#slctSection").append(o);
				}
			}
		});
	},

	addSection: function(){
		var name = $("#txtSectionName").val();
		if (!/^\s*$/.test(name)){ // CHECK IF BLANK
			console.log('add');
			$.ajax({
				type: "POST",
				url: "/section/add", // CALL CONTROLLER
				data: {Name: name, ProgrammeId: programmeId},
				success: function(result){
					if (result.error == null){
						location.reload();
					}
					else{
						alert('Error: ' + JSON.stringify(result.error));
					}
				}
			});
		}
		else{
			alert('blank section name!');
		}
	},

	addField: function(){
		var name = $("#txtFieldName").val();
		var type = $("#slctType").val();
		var section = $("#slctSection").val();
		if (!/^\s*$/.test(name) && !/^\s*$/.test(type)){ // CHECK IF BLANK
			console.log('add');
			$.ajax({
				type: "POST",
				url: "/fields/add", // CALL CONTROLLER
				data: {Name: name, Type: type, SectionId: section},
				success: function(result){
					if (result.error == null){
						location.reload();
					}
					else{
						alert('Error: ' + JSON.stringify(result.error));
					}
				}
			});
		}
		else{
			alert('blank programme name!');
		}
	},

	addProgramme: function(){
		var name = $("#txtProgrammeName").val();
		if (!/^\s*$/.test(name)){ // CHECK IF BLANK
			console.log('add');
			$.ajax({
				type: "POST",
				url: "/programme/add", // CALL CONTROLLER
				data: {Name: name},
				success: function(result){
					if (result.error == null){
						location.reload();
					}
					else{
						alert('Error: ' + result.error);
					}
				}
			});
		}
		else{
			alert('blank programme name!');
		}
	}
}


clientProgramme.testFunc();
clientProgramme.init();