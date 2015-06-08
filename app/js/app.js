
var app = require('./bootstrap/bootstrap');
var eventManager = require('./core/eventManager');
var recipyActions = require('./recipy/recipyActions');
var recipySearchCtrl = require('./recipy/recipySearchCtrl');
var recipyEditionCtrl = require('./recipy/recipyEditionCtrl');

app.service('eventManager', eventManager)
  .service('recipyActions', recipyActions)
  .controller('recipySearchCtrl', recipySearchCtrl)
  .controller('recipyEditionCtrl', recipyEditionCtrl);