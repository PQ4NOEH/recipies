"use strict";
var _subcriptions = {};

module.exports = serviceFactory

function serviceFactory(){
  return {
    emit : emit,
    subscribe: subscribe
  };
}

function emit(eName, eData){
  (_subcriptions[eName] || []).forEach(function(cb){
    cb(eData);
  });
}

function subscribe(eventName, cb){
  if(typeof cb === "function"){
    _subcriptions[eventName] = _subcriptions[eventName] || [];
    _subcriptions[eventName].push(cb);
  }
}