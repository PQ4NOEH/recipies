(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var app = require('./bootstrap/bootstrap');
var eventManager = require('./core/eventManager');
var recipyActions = require('./recipy/recipyActions');
var recipySearchCtrl = require('./recipy/recipySearchCtrl');
var recipyEditionCtrl = require('./recipy/recipyEditionCtrl');

app.service('eventManager', eventManager)
  .service('recipyActions', recipyActions)
  .controller('recipySearchCtrl', recipySearchCtrl)
  .controller('recipyEditionCtrl', recipyEditionCtrl);






},{"./bootstrap/bootstrap":2,"./core/eventManager":4,"./recipy/recipyActions":5,"./recipy/recipyEditionCtrl":7,"./recipy/recipySearchCtrl":8}],2:[function(require,module,exports){
"use strict";
var SITEMAP = require("../config/sitemap");
var app = angular.module("recetario", ["firebase","formly","formlyBootstrap","ui.router"]);
app.config(['$stateProvider', '$urlRouterProvider', defineRoutes]);
module.exports = app;


function defineRoutes(sp, urp) {
    var k, route;
    for (k in SITEMAP) {
        route = SITEMAP[k];
        sp.state(route.state, {
            url: route.path,
            templateUrl: route.template,
            controller: route.controller + ' as ' + k
        });
    };
    return urp.otherwise(SITEMAP.recipySearch.name);
}
},{"../config/sitemap":3}],3:[function(require,module,exports){
module.exports={
  recipyEdition: {
    state: 'recipyEdition',
    name:'recipyEdition',
    path: '/recipyEdition',
    template: 'js/recipy/recipyEdition.html',
    controller: 'recipyEditionCtrl'
  },
  recipySearch: {
    state: 'recipySearch',
    name:'recipySearch',
    path: '/recipySearch',
    template: 'js/recipy/recipySearch.html',
    controller: 'recipySearchCtrl'
  }
}
},{}],4:[function(require,module,exports){
"use strict";
var eventFlow = {};
var subcriptions = {};

module.exports = serviceFactory

function serviceFactory(){
  registerSubcribers()
  return {
    emit : emit
  };
}

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
},{}],5:[function(require,module,exports){
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
},{}],6:[function(require,module,exports){
module.exports = {
  fields: [
    { 
      key: "name", 
      type: "input", 
      templateOptions:{
        label:"Name"
      } 
    }
  ]
};
},{}],7:[function(require,module,exports){
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
},{"./recipyEditionConfig":6}],8:[function(require,module,exports){
"use strict";
function Controller(actions){
  this.avalaibleRecipies = [];
  this.recipyName = "";
  this.findRecipy = actions.findRecipy.bind(this);
}
Controller.$inject = ['recipyActions'];

module.exports = Controller;
},{}]},{},[1])