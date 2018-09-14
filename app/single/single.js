'use strict';

angular.module('myApp.single', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/single/:owner/:repo', {
    templateUrl: 'single/single.html',
    controller: 'Single'
  });
}])

.controller('Single', ['$http', '$routeParams', function($http, $routeParams) {

    $http({
        method: 'GET',
        url: 'https://api.github.com/repos/'+$routeParams.owner+'/'+$routeParams.repo
    }).then(function successCallback(response) {

        console.log(response);

    }, function errorCallback(response) {

        $scope.error = response.data.message;

    });

}]);