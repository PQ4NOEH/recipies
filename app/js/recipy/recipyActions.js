"use strict";
var _firebase = null;
var _recipies = null;
var _eventManager = null;
module.exports = serviceFactory

function serviceFactory(eventManager, fb){
  _firebase = fb;
  _eventManager = eventManager;
  _firebase(new Firebase("https://mykidrecipies.firebaseio.com/recipies")).$loaded(loadRecipies);
  return {
    findRecipy : findRecipy,
    saveRecipy : saveRecipy
  };
}
serviceFactory.$inject = ['eventManager', '$firebaseObject'];


function loadRecipies(data){
  _recipies = [];
  data.forEach(function(r){
    _recipies.push(r);
  });
}

function findRecipy(recipyName){
  this.avalaibleRecipies = [];
  if(recipyName && recipyName.length > 2){
    this.avalaibleRecipies = _recipies.filter(function(r){ 
      return new RegExp(recipyName, 'i').test(r.name);
    });
  }
}

function saveRecipy(recipyData){
  alert("The recipy has been saved: " + JSON.stringify(recipyData));
}