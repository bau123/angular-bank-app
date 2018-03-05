"use strict";

(function() {

    var UpdateAccountController =  function(accountService, $log, $stateParams,$state) {

        var vm = this;

        vm.fName = $stateParams.firstName;
        vm.lName = $stateParams.secondName;
        vm.accNo = $stateParams.accountNumber;
        vm.accId = $stateParams.id;
        
        
        vm.updateAcc = function () {
            var obj = {
                firstName : vm.fName,
                secondName : vm.lName,
                accountNumber : vm.accNo,
                id : vm.accId
            }
            $log.log(obj);
            $log.log()
            accountService.changeAccount(obj);

            $state.go('account')
        }
    }

    angular.module('accountApp').controller('UpdateAccountController', ['accountService','$log','$stateParams','$state', UpdateAccountController]);
}());