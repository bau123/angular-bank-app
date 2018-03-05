"use strict";

(function () {

    function Dal ($http, $q, $log) {
    	
        this.http = (function serviceCaller() {
            return {

                GET: function (apiPath) {
                    var deferred = $q.defer();
                    $log.log("Dal get")
                    $http.get(apiPath).then(function (result) {
                        deferred.resolve(result.data);
                    }, function (e) {
                        deferred.reject(e);
                    });
                    return deferred.promise;
                },

                POST: function (apiPath, itemToSave) {
                    $log.log(apiPath + " - " + itemToSave);
                    var deferred = $q.defer();
                    $http(
                        {
                            method: "post",
                            url: apiPath,
                            headers: {
                                "Accept": "application/json, text/plain, */*",
                                "Content-Type": "application/json;charset=UTF-8"
                            },
                            data: JSON.stringify(itemToSave)
                        }
                    ).then(function (results) {
                            deferred.resolve(results.data);
                        }, function (e) {
                            deferred.reject(e);
                        });
                    return deferred.promise;
                },

                PUT: function (apiPath, itemToSave) {
                    var deferred = $q.defer();
                    $http(
                        {
                            method: "put",
                            url: apiPath,
                            headers: {
                                "Accept": "application/json, text/plain, */*",
                                "Content-Type": "application/json;charset=UTF-8"
                            },
                            data: JSON.stringify(itemToSave)
                        }
                    ).then(function (results) {
                            deferred.resolve(results);
                        }, function (e) {
                            deferred.reject(e);
                        });
                    return deferred.promise;
                },

                DELETE: function (apiPath, itemToDelete) {
                    var deferred = $q.defer();
                    $log.log("Dal Delete");
                    $log.log(itemToDelete);
                    $log.log(apiPath);
                    $log.log(itemToDelete.id);
                    $http.delete("http://localhost:8080/customer-app/rest/account/json/" + itemToDelete.id).then(function () {
                   
                    $log.log("Dal Delete = Success");
                        deferred.resolve();
                    }, function (e) {
                    $log.log("Dal Delete = fail");

                        deferred.reject(e);
                    });
                    return deferred.promise;
                }
            }
        })();
        
        $log.debug("DAL Instantiated");
    }
    angular.module("accountApp").service("dal", ["$http", "$q", "$log", Dal]);
}());