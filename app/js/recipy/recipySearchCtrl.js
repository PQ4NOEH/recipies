"use strict";
function Controller(actions, state){
  this.state = state.state;
  state.onStateChange(function(newState){
    this.state = newState;
  }.bind(this));
  this.findRecipy = actions.findRecipy.bind(this);
}
Controller.$inject = ['recipyActions', 'recipiesState'];

module.exports = Controller;