(function() {

    var TransactionResult_Controller = function ($state) {

        var vm = this;

        console.log($state.params);
        vm.list = $state.params.transactionList;


    }
    angular.module('accountApp').
    controller('transactionResult_Controller', ['$state', TransactionResult_Controller]);
}());