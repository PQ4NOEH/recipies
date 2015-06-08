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