(function() {

    var AccountController =  function() {
        
    	var vm = this;
        
        vm.isHidden = false;
        vm.myColName;
        vm.isRed;
        vm.isBlue;
        vm.isYellow;
        
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
        	{'firstName': 'Kennedy','secondName': 'Kiwi','accountNumber': '1243'},
        	{'firstName': 'Daneel','secondName': 'Ramjan','accountNumber': '1243'},
        	{'firstName': 'Ismael','secondName': 'Omar','accountNumber': '1243'}
        	];
        
        vm.hideTable = function()
        {
        	vm.isHidden = !vm.isHidden
        };
        
        vm.ordermyCol = function(bigBadBau)
        		{
        		vm.myColName = bigBadBau;
        		};
        		
        vm.isRed = function(col){
        	vm.myColName = col;
        };
        
       
       
    };

    angular.module('accountApp').controller('accountController', [AccountController]);
}());