/**
 * SectionController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    
  
  /**
   * Action blueprints:
   *    `/section/Add`
   */
   Add: function (req, res) {
    console.log('section add controller');
    var name = req.param('Name');
    var programmeId = req.param('ProgrammeId');
    ProgrammeSections.add({
      Name: name,
      ProgrammeId: programmeId
    }, function(result, err){
        return res.json({
          record: result,
          error: err
        });
    });
  },

  GetSectionsByProgramme: function(req, res){
    var programmeId = req.param('ProgrammeId');
    ProgrammeSections.find({ProgrammeId: programmeId}).exec(function (error, result){
      return res.json(result);
    });
  },


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to SectionController)
   */
  _config: {}

  
};
