'use strict';

angular.module('myApp.search', ['ui.router'])

.config(function($stateProvider) {

    $stateProvider
        .state('search', {
            url: '/search',
            templateUrl: 'search/search.html',
            controller: 'search',
        });

})
.controller('search', ['$scope', '$http', function($scope, $http) {

    $scope.search = function() {

        $http({
            method: 'GET',
            url: 'https://api.github.com/search/repositories?q='+$scope.text
        }).then(
            function successCallback(response){ $scope.items = response.data.items; },
            function errorCallback(response){ $scope.error = response.data.message; }
            );

    };

}]);