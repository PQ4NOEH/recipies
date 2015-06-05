"use strict";
(function(){
  var eventFlow = {};
  var subcriptions = {};
  
  angular.module("recetario"). service('eventManager', serviceFactory);

  function serviceFactory(){
    registerSubcribers()
    return {
      emit : emit
    };
  }
  serviceFactory.$inject = [];

  function registerSubcribers(){
    var injector = angular.element(document.body).injector();
    Object.keys(eventFlow).forEach(function(eventName) {
      (eventFlow[eventName] || []).forEach(function(s) {
        var service = injector.get(s.serviceName);
        subcriptions[eventName] = subcriptions[eventName] || [];
        subcriptions[eventName].push(service[s.method]);
      });
    });
  }
  function emit(eName, eData){
    (subcriptions[eName] || []).forEach(function(cb){
      cb(eData);
    });
  }
})();