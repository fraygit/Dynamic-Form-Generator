module.exports = {

	getProgrammeDetails: function(programmeId, cb){
    // and example of Promises JS using then/spead/fail methods
    // retrieving hierarchical data
	    console.log('START');
	    var fieldItems = [];
	    Programmes.findOne({id:programmeId}).then(function(programmes){
	      var sections = ProgrammeSections.find({ProgrammeId : programmes.id}).then(function(sections){
	        for (var i=0; i < sections.length; i++){
	          var fields = ProgrammeFields.find({SectionId : sections[i].id}).then(function(fields){
	            for (f in fields){
	              fieldItems.push(fields[f]);  
	            }            
	            return fields;
	          });
	        }
	        var SectionFields = {Section: sections, Fields: fields};
	        return [sections, fields];
	      }).spread(function(sections, fields){        
	        
	        var details = {Programme: programmes, Sections: sections, Fields: fieldItems};
	        console.log(JSON.stringify(details.Fields));
	        cb(details);
	      }).fail(function(errorinner){
	        console.log("ERROR:" + errorinner);
	      });
	    });

 	}

}