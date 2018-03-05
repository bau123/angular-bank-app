"use strict";

(function() {

    var AccountController =  function(accountService, $log, $state) {
        
        var vm = this;
        
        vm.isHidden = false;
        
        vm.hideTable = function()
        {
            vm.isHidden = !vm.isHidden
        };

        vm.deleteAcc = function(account)
        {
            $log.log("account-controller: vm.deleteAccount")
            accountService.deleteAccount(account).then(function (results){
            $log.log(results);
            }, function(error){
                vm.error = true;
                vm.errorMessage = error;
            });
            init();
        };
        
        vm.updateAccount = function (fName, lName, accNo, accID) {
            var obj = {
                firstName : fName,
                secondName : lName,
                accountNumber : accNo,
                id : accID
            };

            $log.log(obj);

            $state.go('updateaccount', obj);
        }
        
        function init() {
            accountService.getAccounts().then(function (results) {
            vm.accounts = results;
            $log.log("In the account controller the value of the result promise is ");
            $log.log(JSON.stringify(vm.accounts));
            }, function (error) {
                vm.error = true;
                vm.errorMessage = error;
            });
       }
       
       init();
            
    };

    angular.module('accountApp').controller('accountController', ['accountService','$log','$state', AccountController]);
}());