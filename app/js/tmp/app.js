(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require('./bootstrap/bootstrap');
require('./core/eventManager');
require('./recipy/recipyActions');
require('./recipy/recipySearchCtrl');






},{"./bootstrap/bootstrap":2,"./core/eventManager":3,"./recipy/recipyActions":4,"./recipy/recipySearchCtrl":5}],2:[function(require,module,exports){
"use strict";
(function(){
  angular.module("recetario", ["firebase"]);
})();
},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
//Recetario actions
(function(){
  var _firebase = null;
  var _recipies = null;
  var _eventManager = null;
  angular.module("recetario").service('recipyActions', serviceFactory);
  function serviceFactory(eventManager, fb){
    _firebase = fb;
    _eventManager = eventManager;
    _firebase(new Firebase("https://mykidrecipies.firebaseio.com/recipies")).$loaded(loadRecipies);
    return {
      findRecipy : findRecipy,
      createRecipy : createRecipy
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

  function createRecipy(recipyData){
    t
  }
})();
},{}],5:[function(require,module,exports){
"use strict";
(function(){
  angular.module("recetario").controller('recipySearchCtrl', Controller);
  function Controller(actions){
    this.avalaibleRecipies = [];
    this.recipyName = "";
    this.findRecipy = actions.findRecipy.bind(this);
  }
  Controller.$inject = ['recipyActions'];
})();
},{}]},{},[1])