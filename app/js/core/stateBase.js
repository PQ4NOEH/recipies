"use strict"
var objUtils = require("./objectUtils");
module.exports = stateFactory

function stateFactory(initialState){
  var result = {
    state: initialState || {},
    onChangeListeners: []
  };
  result.changeState = changeState.bind(result);
  result.executeOnChangeListeners = executeOnChangeListeners.bind(result);
  result.onStateChange = onStateChange.bind(result);
  return result;
}

function changeState(newState){
  objUtils.extend(this.state, newState, true);
  this.executeOnChangeListeners();
}

function executeOnChangeListeners(){
  var state = this.state;
  this.onChangeListeners.forEach(function callListener(l){
    l(state);
  });
}

function onStateChange(cb){
  if(typeof cb !== "function") throw new Error("cb must be a function");
  this.onChangeListeners.push(cb);
}

