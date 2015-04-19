
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
		var myEmployeePagesObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:5,minor:2,UserAccountsID:selectedUserId};
		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				debugger;
		 				employeePages = result;
		 				sources.employeePages.sync();
					},
					'onError': function(error){
						alert(error);
					},
					'params': [myEmployeePagesObject]
		});
		
		for (x = 0; x < allPages.length; x++)
		{
			debugger;
			var foundItem = false;
			for (y = 0; y < availablePages.length; x++)
			{
				if (allPages[x].FxMainSelectWebComponentNamesID == employeePages[y].FxMainSelectWebComponentNamesID)
				{
					foundItem = true;	
				}
			}
			if (foundItem)
			{}
			else
			{
				availablePages.push
				({
					FxMainSelectWebComponentNamesID: allPages[x].FxMainSelectWebComponentNamesID
				});
			}
		}
		
	};// @lock
	
	
	var myEmployeeInfoObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:5,minor:1};
	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				employeeSetupEmployeeInfo = result;
		 				sources.employeeSetupEmployeeInfo.sync();		 				
					},
					'onError': function(error){
						alert(error);
					},
					'params': [myEmployeeInfoObject]
	});
	var allPagesObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:5,minor:3};
	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				allPages = result;
		 				sources.allPages.sync();		 				
					},
					'onError': function(error){
						alert(error);
					},
					'params': [allPagesObject]
	});
	
	
	
	
	// @region eventManager// @startlock
	WAF.addListener(this.id + "_dataGrid1", "onRowClick", dataGrid1.onRowClick, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
