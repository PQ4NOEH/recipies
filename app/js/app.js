
var app = require('./bootstrap/bootstrap');
var eventManager = require('./core/eventManager');
var recipyActions = require('./recipy/recipyActions');
var recipySearchCtrl = require('./recipy/recipySearchCtrl');
var recipyEditionCtrl = require('./recipy/recipyEditionCtrl');
var recipiesState = require('./recipy/recipiesState');

app.service('eventManager', eventManager)
  .service('recipyActions', recipyActions)
  .service('recipiesState', recipiesState)
  .controller('recipySearchCtrl', recipySearchCtrl)
  .controller('recipyEditionCtrl', recipyEditionCtrl);