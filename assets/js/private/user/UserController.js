'use strict';

var app = angular.module('myApp');

app.controller('UserController', 
    ['$scope', '$http', '$q', 'Nto1Factory',
    function clinicController ($scope, $http, $q, Nto1Factory) {

    console.log('loaded user controller');        

    $scope.Clinics = {};

    $scope.initialize = function(id) {
        console.log('load ' + id);

        $http.get('/clinic')
            .success ( function (response) {
                console.log("Initialized User page");

                $scope.Clinics = response;
                console.log(JSON.stringify(response));
            })
            .error (function (error) {
                console.log("Error loading clinics");
                console.log(error);
            });  
    }

}]);
