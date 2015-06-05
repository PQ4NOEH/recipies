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