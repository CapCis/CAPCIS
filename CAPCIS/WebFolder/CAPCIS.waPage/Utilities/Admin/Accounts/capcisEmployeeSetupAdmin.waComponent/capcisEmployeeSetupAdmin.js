﻿
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
		
		var myBirthday = $$(getHtmlId("jQDateTime3"));
		var myBirthdayFormated = 'NULL';
		var myHireDate = $$(getHtmlId("jQDateTime1"));
		var myHireDateFormated = 'NULL';
		var myTerminationDate = $$(getHtmlId("jQDateTime2"));
		var myTerminationDateFormated = 'NULL';
		
		try
		{
			if (myBirthday.getValue() != "" && myBirthday.getValue != "undefined")
			{
				var myBirthdayDate = myBirthday.getDate();
				var myBirthDayMonth = (myBirthdayDate.getMonth() + 1).toString();
				//var myMonth = myDate.getMonth().toString();
				var myBirthDayDay = myBirthdayDate.getDate().toString();
				if (myBirthDayDay.length == 1){myBirthDayDay = "0" + myBirthDayDay}
				if (myBirthDayMonth.length == 1){myBirthDayMonth = "0" + myBirthDayMonth}
				myBirthdayFormated = ("'" +myBirthdayDate.getFullYear() + "-" + myBirthDayMonth + "-" + myBirthDayDay + "'");
			}
		}
		catch(err)
		{
			alert("Incorrect Birthday");
			return;
		}
		
		try
		{
			if (myHireDate.getValue() != "" && myHireDate.getValue != "undefined")
			{
				var myHDate = myHireDate.getDate();
				var myHireMonth = (myHDate.getMonth() + 1).toString();
				//var myMonth = myDate.getMonth().toString();
				var myHireDay = myHDate.getDate().toString();
				if (myHireDay.length == 1){myHireDay = "0" + myHireDay}
				if (myHireMonth.length == 1){myHireMonth = "0" + myHireMonth}
				myHireDateFormated = ("'" + myHDate.getFullYear() + "-" + myHireMonth + "-" + myHireDay + "'");
			}
		}
		catch(err)
		{
			alert("Incorrect Hire Date");
			return;
		}
		
		try
		{
			if (myTerminationDate.getValue() != "" && myTerminationDate.getValue != "undefined")
			{
				var myTDate = myTerminationDate.getDate();
				var myTerminationMonth = (myTDate.getMonth() + 1).toString();
				//var myMonth = myDate.getMonth().toString();
				var myTerminationDay = myTDate.getDate().toString();
				if (myTerminationDay.length == 1){myTerminationDay = "0" + myTerminationDay}
				if (myTerminationMonth.length == 1){myTerminationMonth = "0" + myTerminationMonth}
				myTerminationDateFormated = ("'" + myTDate.getFullYear() + "-" + myTerminationMonth + "-" + myTerminationDay + "'");
			}
		}
		catch(err)
		{
			alert("Incorrect Termination Date");
			return;
		}
		
		var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:5,minor:0,
			displayName:$$($comp.id + "_textField2").getValue(),
			email:$$($comp.id + "_textField11").getValue(),
			firstName:$$($comp.id + "_textField3").getValue(),
			middleName:$$($comp.id + "_textField9").getValue(),
			lastName:$$($comp.id + "_textField5").getValue(),
			birthday:myBirthdayFormated,
			hireDate:myHireDateFormated,
			initials:$$($comp.id + "_textField18").getValue(),
			ssn:$$($comp.id + "_textField20").getValue(),
			homePhone:$$($comp.id + "_textField17").getValue(),
			additionalPhone:$$($comp.id + "_textField6").getValue(),
			terminationDate:myTerminationDateFormated,
			address:$$($comp.id + "_textField8").getValue(),
			city:$$($comp.id + "_textField10").getValue(),
			state:$$($comp.id + "_textField21").getValue(),
			zip:$$($comp.id + "_textField22").getValue(),
			emergencyContactName:$$($comp.id + "_textField12").getValue(),
			emergencyContactRelation:$$($comp.id + "_textField16").getValue(),
			emergencyContactPhone:$$($comp.id + "_textField15").getValue(),
			emergencyContactNotes:$$($comp.id + "_textField14").getValue(),
			clientNotes:$$($comp.id + "_textField19").getValue(),
			employeeInfoId:sources.employeeSetupEmployeeInfo.EmployeeInformationID};
			
		debugger;
		rpcDUpdate.setUpdateAsync({
		 			'onSuccess': function(result){
		 				debugger;
		 				alert("Record Updated");
					},
					'onError': function(error){
						alert(error);
					},
					'params': [myObject]
		});	
	};// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		debugger;		
		var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:5,minor:0,divID:sources.employeeSetupDivisions.FXUserDivisionLinkage_ID};		
		rpcDDelete.setDeleteAsync({
		 			'onSuccess': function(result){
		 				var myEmployeeDivisionObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:5,minor:0,data1:sources.employeeSetupEmployeeInfo.EmployeesUA_UserAccountsID};
						rpcDSelects.getSelectAsync({
		 				'onSuccess': function(comboResult){
		 						
		 						employeeSetupDivisions = comboResult;
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
					'params': [myObject]
		});	
		//rpcDDelete this selectedID
	};// @lock

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
		$$(getHtmlId("jQDateTime1")).setValue(sources.employeeSetupEmployeeInfo.HireDate);
		$$(getHtmlId("jQDateTime2")).setValue(sources.employeeSetupEmployeeInfo.TerminationDate);
		$$(getHtmlId("jQDateTime3")).setValue(sources.employeeSetupEmployeeInfo.EmployeeBirtdate);
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		//var selectedDivisionID = $$($comp.id + "_textField7").getValue();
		//var myUserID = $$($comp.id + "_textField1").getValue();
		var myComboObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:5,minor:0,
							mySelectedDivisionID:sources.adminDivCombo.DivisionInformationID,
							mySelectedEmpID:sources.employeeSetupEmployeeInfo.EmployeesUA_UserAccountsID};
		rpcDInsert.setInsertAsync({
		 			'onSuccess': function(result){		 				
		 				var myEmployeeDivisionObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:5,minor:0,data1:sources.employeeSetupEmployeeInfo.EmployeesUA_UserAccountsID};
						rpcDSelects.getSelectAsync({
		 				'onSuccess': function(comboResult){
		 						
		 						employeeSetupDivisions = comboResult;
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
	
	
	
	var myEmployeeInfoObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:5,minor:1};
	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				debugger;
		 				employeeSetupEmployeeInfo = result;
		 				sources.employeeSetupEmployeeInfo.sync();
		 				var selectedUserId = sources.employeeSetupEmployeeInfo.EmployeesUA_UserAccountsID;
						var myEmployeeDivisionObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:5,minor:0,data1:selectedUserId};
						$$(getHtmlId("jQDateTime1")).setValue(sources.employeeSetupEmployeeInfo.HireDate);
						$$(getHtmlId("jQDateTime2")).setValue(sources.employeeSetupEmployeeInfo.TerminationDate);
						$$(getHtmlId("jQDateTime3")).setValue(sources.employeeSetupEmployeeInfo.EmployeeBirtdate);
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
