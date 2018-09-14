'use strict';

angular.module('myApp.search', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/search', {
    templateUrl: 'search/search.html',
    controller: 'Search'
  });
}])

.controller('Search', ['$scope', '$http', function($scope, $http) {

    $scope.search = function() {

        $http({
            method: 'GET',
            url: 'https://api.github.com/search/repositories?q='+$scope.text
        }).then(function successCallback(response) {

            $scope.items = response.data.items;

            console.log(response.data.items);

        }, function errorCallback(response) {

            $scope.error = response.data.message;

        });

    };

}])