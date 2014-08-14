/**
 * FieldsController
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
   *    `/fields/add`
   */
   add: function (req, res) {
    console.log('ADD FIELDS CONTROLLER ');
    var name = req.param('Name');
    var type = req.param('Type');
    var sectionId = req.param('SectionId');
    ProgrammeFields.add({
      Name: name,
      Type: type,
      SectionId: sectionId
    }, function(result, err){
        return res.json({
          record: result,
          error: err
        });
    });
  },




  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to FieldsController)
   */
  _config: {}

  
};
