/**
 * ProgrammeController
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
   *    `/programme/view`
   */
   view: function (req, res) {
    var myresult;
    Programmes.listAll(res, function(err, result){
      var myresult = JSON.stringify(result);
      console.log('CONTROLLER:' + myresult)      
      console.log('raw' + result);
      return res.view('Programmes/listAll', {Model : result });  
    });
    
  },

  details: function(req, res){
    var programmeId = req.param('Id');
    var isRest = Boolean(req.param('isRest'));
    ProgrammeService.getProgrammeDetails(programmeId, function(result){

      // TODO : REFACTOR
      // Reformat JSON
      var programmeDetails = new Object();
      programmeDetails.Programme = result.Programme;
      programmeDetails.Sections = result.Sections;
      for(i in result.Sections){
        var field = [];
        for(n in result.Fields){
          if (result.Fields[n].SectionId == result.Sections[i].id){
             field.push(result.Fields[n]);
          }
        }
        programmeDetails.Sections[i].Fields = field;
      }
      if (isRest){
        return res.json(200, programmeDetails);
      }
      else{
        return res.view('Programmes/details', result);
      }
    });
  },




  /**
   * Action blueprints:
   *    `/programme/add`
   */
   add: function (req, res) {
    var name = req.param('Name');
    Programmes.add({
      Name: name
    }, function(result, err){
        return res.json({
          record: result,
          error: err
        });
    });

    // Send a JSON response
  },




  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to ProgrammeController)
   */
  _config: {}

  
};
