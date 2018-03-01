(function() {

    var TransactionController =  function($state) {
        
    	var vm = this;
        vm.isHidden = true;
        vm.transactionTable = true;
        vm.setAccFound = false;
        vm.transHidden = true;
        vm.accounts = [
            {'firstName': 'Declan', 'secondName': 'Cordial','accountNumber': '1234'},
            {'firstName': 'Niall','secondName': 'Mulready','accountNumber': '1235'},
            {'firstName': 'Ian','secondName': 'Cunningham','accountNumber': '1236'},
            {'firstName': 'Brendan','secondName': 'Greene','accountNumber': '1237'},
            {'firstName': 'Nicholas','secondName': 'Tsang','accountNumber': '1238'},
            {'firstName': 'Sean','secondName': 'McGee','accountNumber': '1239'},
            {'firstName': 'Anthony','secondName': 'Shannon','accountNumber': '1240'},
            {'firstName': 'Conor','secondName': 'Harney','accountNumber': '1241'},
            {'firstName': 'Decland','secondName': 'Horlick','accountNumber': '1242'},
            {'firstName': 'Joshua','secondName': 'Sherwood','accountNumber': '1243'},
            {'firstName': 'Bau','secondName': 'Nguyen','accountNumber': '1243'},
            {'firstName': 'Kennedy','secondName': 'Bowers','accountNumber': '1243'},
            {'firstName': 'Daleel','secondName': 'Ramjan','accountNumber': '1243'},
            {'firstName': 'Ismael','secondName': 'Omar','accountNumber': '1243'}
        ];

        vm.transactionList = [
            {'accountNumber': 1234, 'transactionID' : '1', 'testValue' : 'sdfgsfg'},
            {'accountNumber': 1234, 'transactionID' : '2', 'testValue' : 'zasdf'},
            {'accountNumber': 1234, 'transactionID' : '3', 'testValue' : 'ghjfjf'},
            {'accountNumber': 1235, 'transactionID' : '4', 'testValue' : 'fgdfghdh'},
        ];



        vm.setacc = function (accountNum)
        {
            vm.setHidden();
            vm.account = accountNum;
            console.log(vm.account);
        };
        vm.setHidden = function()
        {
            vm.isHidden = false;
        };

        vm.selectedTrans = function(transID)
        {
            console.log(transID);
            var obj;
            for (var i = 0; i < vm.transactionList.length; ++i){
                if (vm.transactionList[i].transactionID == transID){
                    obj = vm.transactionList[i];
                    console.log(obj);
                }
            }
            $state.go('transactionResult', {transactionList: obj});

        }
    };

    angular.module('accountApp').controller('transactionController', ['$state',TransactionController]);
}());