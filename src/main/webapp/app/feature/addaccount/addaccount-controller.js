"use strict";

(function() {

    var AddAccountController =  function(accountService, $log) {
        
        var vm = this;
		vm.fName;
        vm.lName;
        vm.accNumber;

        vm.add = function(){
        	var obj = {
        		firstName : vm.fName,
        		lastName : vm.lName,
        		accountNumber : vm.accNumber
        	}
        	accountService.addAccount(obj);
        	$log.log(obj);
        }
};
 angular.module('accountApp').controller('AddAccountController', ['accountService','$log', AddAccountController]);
}());