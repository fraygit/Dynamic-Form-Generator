/**
 * Sections
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

  	ProgrammeId: {
  		type: 'integer',
  	}
  },

  add: function (input, cb){
  	ProgrammeSections.create({
  		Name: input.Name,
  		ProgrammeId: input.ProgrammeId
  	}).exec(function (err, any){
      cb(any, err);
  	});
  },   

};
