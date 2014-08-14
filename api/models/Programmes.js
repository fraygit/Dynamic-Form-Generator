/**
 * Programmes
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	
  	id: {
  		type: 'integer',
  		autoIncrement: true
  	},

    Name: {
    	type: 'string'
    }
  },

  add: function (input, cb){
  	Programmes.create({
  		Name: input.Name
  	}).exec(function (err, any){
      cb(any, err);
  	});
  },


  listAll: function(res, cb){
  	Programmes.query('Select * from programmes', function(err, queryResult){
  		cb(err, queryResult);
  	});
  },

  getProgrammeSections: function(inputParam, cb){
    Programmes.query('Select * from sections where ProgrammeId=' + inputParam.id, function(err, sections){
      for (section in sections){

      }
      cb(err, queryResult);
    });
  },


  getSectionFields: function(id, cb){
    Programmes.query('Select * from Fields where SectionId=' + id, function(err, queryResult){
      cb(err, queryResult);
    });
  }

};
