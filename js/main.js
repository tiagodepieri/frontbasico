// app/js/main.js

'use strict'
angular.module("efaApp", ["ngRoute"]);

angular.module("efaApp").config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "partials/home.html"
        })
        .when("/contato", {
            templateUrl: "partials/contato.html"
        })
        .when("/produtos", {
            templateUrl: "partials/produtos.html"
        })
		.when("/login", {
            templateUrl: "partials/login.html",
            controller: "LoginCtrl"
        })
        .when('/404', {
            templateUrl: "partials/404.html"
        })
        .otherwise("/404");
    $locationProvider.html5Mode(false).hashPrefix('!');
}]);
