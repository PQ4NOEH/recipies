"use strict";
var _state = require("../core/stateBase")({});
module.exports = serviceFactory

function serviceFactory(eventManager){
  eventManager.subscribe('recipiesLoaded', saveRecipiesInMemory);
  eventManager.subscribe('findedRecipies', saveFindedRecipies);
  return _state;
}
serviceFactory.$inject = ['eventManager'];


function saveRecipiesInMemory(data){
  _state.changeState({recipies: data});
}

function saveFindedRecipies(data){
  _state.changeState({findedRecipies: data});
} 
