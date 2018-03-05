"use strict";

(function() {

    var AddAccountController =  function(accountService, $log, $state) {
        
        var vm = this;
		vm.fName;
        vm.lName;
        vm.accNumber;

        vm.add = function(){
        	var obj = {
        		firstName : vm.fName,
        		secondName : vm.lName,
        		accountNumber : vm.accNumber
        	}
        	accountService.addAccount(obj);
        	$log.log(obj);
            $state.go('account');

        }
};
 angular.module('accountApp').controller('AddAccountController', ['accountService','$log','$state' ,AddAccountController]);
}());