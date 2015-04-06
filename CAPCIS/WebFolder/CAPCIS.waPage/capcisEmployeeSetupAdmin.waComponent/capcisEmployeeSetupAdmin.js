
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'capcisEmployeeSetupAdmin';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
	var button3 = {};	// @button
	var dataGrid1 = {};	// @dataGrid
	var button2 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		var myBirthday
		var myHireDate
		var myTerminationDate
		
		var myComboObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:0,minor:6,
			displayName:$$($comp.id + "_textField2").getValue(),
			email:$$($comp.id + "_textField11").getValue(),
			firstName:$$($comp.id + "_textField3").getValue(),
			middleName:$$($comp.id + "_textField4").getValue(),
			birthday:myBirthday,
			hireDate:myHireDate,
			initials:$$($comp.id + "_textField18").getValue(),
			ssn:$$($comp.id + "_textField20").getValue(),
			homePhone:$$($comp.id + "_textField17").getValue(),
			additionalPhone:$$($comp.id + "_textField6").getValue(),
			terminationDate:myTerminationDate,
			address:$$($comp.id + "_textField8").getValue(),
			city:$$($comp.id + "_textField10").getValue(),
			state:$$($comp.id + "_textField21").getValue(),
			zip:$$($comp.id + "_textField22").getValue(),
			emergencyContactName:$$($comp.id + "_textField12").getValue(),
			emergencyContactRelation:$$($comp.id + "_textField16").getValue(),
			emergencyContactPhone:$$($comp.id + "_textField15").getValue(),
			emergencyContactNotes:$$($comp.id + "_textField14").getValue(),
			clientNotes:$$($comp.id + "_textField19").getValue(),};
		
	};// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		var selectedID = sources.employeeSetupDivisions.FXUserDivisionLinkage_ID
		//rpcDDelete this selectedID
	};// @lock

	dataGrid1.onRowClick = function dataGrid1_onRowClick (event)// @startlock
	{// @endlock
		var myUserId = sources.employeeSetupEmployeeInfo.EmployeesUA_UserAccountsID;
		var myEmployeeDivisionObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:5,minor:0,data1:myUserId};
		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				debugger;
		 				adminDivCombo = result;
		 				sources.employeeSetupDivisions.sync();
					},
					'onError': function(error){
						alert(error);
					},
					'params': [myEmployeeDivisionObject]
	});	
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		var selectedDivisionID = $$($comp.id + "_textField7").getValue();
		var myUserID = $$($comp.id + "_textField1").getValue();
		var myComboObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:0,minor:6,myUserID:myUserID,mySelectedDivisionID:selectedDivisionID};
		rpcDInsert.setInsertAsync({
		 			'onSuccess': function(result){
		 				debugger;
		 				var myEmployeeDivisionObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:5,minor:1,data1:myUserId};
						rpcDSelects.getSelectAsync({
		 				'onSuccess': function(comboResult){
		 						debugger;
		 						adminDivCombo = comboResult;
		 						sources.employeeSetupDivisions.sync();
							},
							'onError': function(error){
								alert(error);
							},
							'params': [myEmployeeDivisionObject]
						});
					},
					'onError': function(error){
						alert(error);
					},
					'params': [myComboObject]
		});
	};// @lock


	var myComboObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:0,minor:6};
	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				debugger;
		 				adminDivCombo = result;
		 				sources.adminDivCombo.sync();
					},
					'onError': function(error){
						alert(error);
					},
					'params': [myComboObject]
	});	
	
	
	
	var myEmployeeInfoObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:0,minor:7};
	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				debugger;
		 				adminDivCombo = result;
		 				sources.employeeSetupEmployeeInfo.sync();
					},
					'onError': function(error){
						alert(error);
					},
					'params': [myEmployeeInfoObject]
	});	
	
	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	WAF.addListener(this.id + "_button3", "click", button3.click, "WAF");
	WAF.addListener(this.id + "_dataGrid1", "onRowClick", dataGrid1.onRowClick, "WAF");
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
