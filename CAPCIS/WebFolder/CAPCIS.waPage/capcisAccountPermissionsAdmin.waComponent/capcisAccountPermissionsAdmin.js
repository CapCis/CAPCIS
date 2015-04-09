﻿
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'capcisAccountPermissionsAdmin';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var dataGrid1 = {};	// @dataGrid
	// @endregion// @endlock

	// eventHandlers// @lock

	dataGrid1.onRowClick = function dataGrid1_onRowClick (event)// @startlock
	{// @endlock
		var selectedUserId = sources.employeeSetupEmployeeInfo.EmployeesUA_UserAccountsID;
		var myEmployeeDivisionObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:5,minor:0,data1:selectedUserId};
		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				debugger;
		 				employeeSetupDivisions = result;
		 				sources.employeeSetupDivisions.sync();		 				
					},
					'onError': function(error){
						alert(error);
					},
					'params': [myEmployeeDivisionObject]
		});
	};// @lock
	
	
	var myEmployeeInfoObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:5,minor:1};
	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				debugger;
		 				employeeSetupEmployeeInfo = result;
		 				sources.employeeSetupEmployeeInfo.sync();		 				
					},
					'onError': function(error){
						alert(error);
					},
					'params': [myEmployeeInfoObject]
	});
	// @region eventManager// @startlock
	WAF.addListener(this.id + "_dataGrid1", "onRowClick", dataGrid1.onRowClick, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
