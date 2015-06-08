"use strict";
function Controller(actions){
  this.avalaibleRecipies = [];
  this.recipyName = "";
  this.findRecipy = actions.findRecipy.bind(this);
}
Controller.$inject = ['recipyActions'];

module.exports = Controller;