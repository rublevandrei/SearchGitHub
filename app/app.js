'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ui.router',
  'myApp.single',
  'myApp.search',
])
.config(function($urlRouterProvider) {
    $urlRouterProvider.when('', '/search');

});
