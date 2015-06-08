"use strict";
var CONFIG = require("./recipyEditionConfig");
function Controller(actions){
  this.actions = actions;
  this.state = {
    fields: CONFIG.fields,
    data: {}
  };
}
Controller.$inject = ['recipyActions'];

module.exports = Controller;