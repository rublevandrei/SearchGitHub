'use strict';

angular.module('myApp.single', ['ui.router'])

.config(function($stateProvider) {

    $stateProvider
        .state('single', {
            url: '/single/:owner/:repo',
            templateUrl: 'single/single.html',
            controller: 'single',
        });

})
.controller('single', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {

    $http({
        method: 'GET',
        url: 'https://api.github.com/repos/'+$stateParams.owner+'/'+$stateParams.repo
    }).then(
        function successCallback(response){ $scope.item = response.data; },
        function errorCallback(response){ $scope.error = response.data.message; }
        );

}]);