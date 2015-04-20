
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'capcisAccountPermissionsAdmin';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var dataGrid3 = {};	// @dataGrid
	var dataGrid2 = {};	// @dataGrid
	var dataGrid1 = {};	// @dataGrid
	// @endregion// @endlock

	// eventHandlers// @lock

	dataGrid3.onRowClick = function dataGrid3_onRowClick (event)// @startlock
	{// @endlock
		availablePages.push
		({
			FxMainSelectWebComponentNamesID: sources.employeePages.FxMainSelectWebComponentNamesID,
			PrimaryHeaderOption: sources.employeePages.PrimaryHeaderOption,
			SubHeaderOption: sources.employeePages.SubHeaderOption,
			WebComponentSort: sources.employeePages.WebComponentSort
		});
		sources.availablePages.orderBy("WebComponentSort asc");
		
		var updateEmployeePageObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:5,minor:1,
			ComponentNamesID: sources.employeePages.FxMainSelectWebComponentNamesID,
			userAccountsID: sources.employeeSetupEmployeeInfo.EmployeesUA_UserAccountsID};
		
		rpcDDelete.setDeleteAsync({
		 			'onSuccess': function(result){
		 				
					},
					'onError': function(error){
						
						alert(error);
					},
					'params': [updateEmployeePageObject]
		});
		sources.employeePages.removeCurrent();
		sources.employeePages.orderBy("WebComponentSort asc");
	};// @lock

	dataGrid2.onRowClick = function dataGrid2_onRowClick (event)// @startlock
	{// @endlock
		
		employeePages.push
		({
			FxMainSelectWebComponentNamesID: sources.availablePages.FxMainSelectWebComponentNamesID,
			PrimaryHeaderOption: sources.availablePages.PrimaryHeaderOption,
			SubHeaderOption: sources.availablePages.SubHeaderOption,
			WebComponentSort: sources.availablePages.WebComponentSort,
			FK_UserAccountsID: sources.availablePages.FK_UserAccountsID
		});
		sources.employeePages.orderBy("WebComponentSort asc");
		var updateEmployeePageObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:5,minor:1,
			fxMainSelectWebComponentNamesID: sources.availablePages.FxMainSelectWebComponentNamesID,
			userAccountsID: sources.employeeSetupEmployeeInfo.EmployeesUA_UserAccountsID};
		
		rpcDInsert.setInsertAsync({
		 			'onSuccess': function(result){
					},
					'onError': function(error){
						alert(error);
					},
					'params': [updateEmployeePageObject]
		});
		sources.availablePages.removeCurrent();
		sources.availablePages.orderBy("WebComponentSort asc");
		
		
	};// @lock

	dataGrid1.onRowClick = function dataGrid1_onRowClick (event)// @startlock
	{// @endlock
		var selectedUserId = sources.employeeSetupEmployeeInfo.EmployeesUA_UserAccountsID;
		var myEmployeePagesObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:5,minor:2,UserAccountsID:selectedUserId};
		
		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				employeePages = result;
		 				sources.employeePages.sync();
		 				availablePages = [];
		 				sources.availablePages.sync();
		 				for (x = 0; x < allPages.length; x++)
						{
							var foundItem = false;
							for (y = 0; y < employeePages.length; y++)
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
									FxMainSelectWebComponentNamesID: allPages[x].FxMainSelectWebComponentNamesID,
									PrimaryHeaderOption: allPages[x].PrimaryHeaderOption,
									SubHeaderOption: allPages[x].SubHeaderOption,
									WebComponentSort: allPages[x].WebComponentSort
								});
							}
							
						}
						sources.availablePages.orderBy("WebComponentSort asc");
					},
					'onError': function(error){
						alert(error);
					},
					'params': [myEmployeePagesObject]
		});
		
		
		
	};// @lock
	
	
	var myEmployeeInfoObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:5,minor:1};
	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				employeeSetupEmployeeInfo = result;
		 				sources.employeeSetupEmployeeInfo.orderBy("WebComponentSort asc");		 				
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
	WAF.addListener(this.id + "_dataGrid3", "onRowClick", dataGrid3.onRowClick, "WAF");
	WAF.addListener(this.id + "_dataGrid2", "onRowClick", dataGrid2.onRowClick, "WAF");
	WAF.addListener(this.id + "_dataGrid1", "onRowClick", dataGrid1.onRowClick, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
