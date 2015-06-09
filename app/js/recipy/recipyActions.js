"use strict";
var _firebase = null;
var _recipies = null;
var _eventManager = null;
var _state = null;
var objUtils = require('../core/objectUtils');
var _ = require('lodash');
module.exports = serviceFactory

function serviceFactory(eventManager, fb, state){
  _firebase = fb;
  _eventManager = eventManager;
  _state = state;
  _firebase(new Firebase("https://mykidrecipies.firebaseio.com/recipies"))
    .$loaded(emitRecipiesLoaded);
  return {
    findRecipy: findRecipy,
    saveRecipy: saveRecipy,
    getRecipy: getRecipy
  };
}
serviceFactory.$inject = ['eventManager', '$firebaseObject', 'recipiesState'];


function emitRecipiesLoaded(data){
  _eventManager.emit('recipiesLoaded', objUtils.fromFirebaseCollectionToArray(data));
}

function findRecipy(recipyName){
  var finded = [];
  if(recipyName && recipyName.length > 2){
    finded = _state.state.recipies.filter(generateRegexpFilter(recipyName, 'name', true));
  }
  _eventManager.emit("findedRecipies", finded);
}

function generateRegexpFilter(RegExpStr, objectProperty, invariant){
  return function filter(i){
    return new RegExp(RegExpStr, invariant ? 'i' : '').test(objectProperty ? i[objectProperty] : i);
  }
}

function saveRecipy(recipyData){
  alert("The recipy has been saved: " + JSON.stringify(recipyData));
}

function getRecipy(recipyCode){
  return _.find(_state.state.recipies, function(i){
    return i._code === recipyCode;
  })
}