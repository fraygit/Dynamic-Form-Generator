/**
 * Fields
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
    },

    Type: {
    	type: 'string'
    },

    SectionId: {
    	type: 'integer'
    },
    
  },

  add: function (input, cb){
  	ProgrammeFields.create({
  		Name: input.Name,
  		Type: input.Type,
  		SectionId: input.SectionId
  	}).exec(function (err, any){
      cb(any, err);
  	});
  },  



};
