"use strict";

(function () {

    angular.module('accountApp').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/dashboard");

        $stateProvider.state("dashboard", {
            url: "/dashboard",
            templateUrl: "app/feature/dashboard/dashboard.html"
        }).state("account", {
                url: "/account",
                templateUrl: "app/feature/account/account.html"
        }).state("addaccount", {
                url: "/addaccount",
                templateUrl: "app/feature/addaccount/addaccount.html"
        }).state("updateaccount", {
            url: "/updateaccount",
            params : {firstName : null, secondName : null, accountNumber : null, id : null},
            templateUrl: "app/feature/updateaccount/updateaccount.html"
        })
    });
}());