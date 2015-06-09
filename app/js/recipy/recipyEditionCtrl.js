"use strict";
var CONFIG = require("./recipyEditionConfig");
function Controller(actions, params){
  this.actions = actions;
  if(params.recipyId){
    this.state = {
      fields: CONFIG.fields,
      data: actions.getRecipy(params.recipyId)
    };
  }else{
    this.state = {
      fields: CONFIG.fields,
      data: {}
    };
  }
 
}
Controller.$inject = ['recipyActions', '$stateParams'];

module.exports = Controller;