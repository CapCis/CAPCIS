
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralDHSOfficers';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
		
		try {
			searchCrit = data.userData.searchCrit;
			searchType = data.userData.searchType;
			
		} catch (e) {
			
		}
			fillMainTable();
		
		function fillMainTable()
		{
			try
		{
			
			
			if(searchCrit == "" && searchType == 'Active')
			{
				var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:29,data1:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						mainListSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			}
			else if(searchCrit == '' && searchType == 'Inactive')
			{
				var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:29,data1:true}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						mainListSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			}
			else if(searchCrit == '' && searchType == 'All')
			{
				var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:30}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						mainListSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			}
			else if (searchCrit != '' && searchType == 'Active')
			{
				var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:32, data1:searchCrit,data2:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						mainListSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			}
			else if (searchCrit != '' && searchType == 'Inactive')
			{
				var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:32, data1:searchCrit,data2:true}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						mainListSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			}
			else if (searchCrit != '' && searchType == 'All')
			{
				var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:31, data1:searchCrit}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						mainListSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			}
			
		}
		catch(err)
		{
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:29,data1:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						mainListSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			
		}
		}
			
			
		 	
		 	function fillCorrespondance()
		{
			
			var currentCorrespondenceActiveSelected = $$(getHtmlId('correspondanceActiveBox')).getValue();
			var currentCorrespondanceViewVoided;
			var currentCorrespondanceAll;
			
			if(currentCorrespondenceActiveSelected == 'Active')
			{
				currentCorrespondanceViewVoided = false;
			}
			else if (currentCorrespondenceActiveSelected == 'Voided')
			{
				currentCorrespondanceViewVoided = true;
			}
			else
			{
				currentCorrespondanceAll = true;
			}
			
			if(currentCorrespondanceAll != null)
			{
				var myObject2 = {token:'7836140170460568' ,id:'1',major:3,minor:34,data1:currentName}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 			rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						corrListSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject2]
				});
	 			
		
			}
			else
			{
				var myObject2 = {token:'7836140170460568' ,id:'1',major:3,minor:35,data1:currentName,data2:currentCorrespondanceViewVoided}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 			rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						corrListSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject2]
				});
	 			
			}	
		}

	// @region namespaceDeclaration// @startlock
	var dhsFullNameField = {};	// @textField
	var closeAssesorPreviousButton = {};	// @button
	var button1 = {};	// @button
	var dhsPreviousGrid = {};	// @dataGrid
	var button2 = {};	// @button
	var voidCorrespondanceCheck = {};	// @checkbox
	var button5 = {};	// @button
	var correspondanceGrid = {};	// @dataGrid
	var correspondanceActiveBox = {};	// @combobox
	var previousVersionButton = {};	// @button
	var closeAssesorCurrentButton = {};	// @button
	var submitButton = {};	// @button
	var dhsFullList = {};	// @dataGrid
	// @endregion// @endlock

	// eventHandlers// @lock

	dhsFullNameField.change = function dhsFullNameField_change (event)// @startlock
	{// @endlock
	
	};// @lock

	closeAssesorPreviousButton.click = function closeAssesorPreviousButton_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('container9')).setSplitPosition(625);
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('container3')).setSplitPosition(900);
	};// @lock

	dhsPreviousGrid.onRowClick = function dhsPreviousGrid_onRowClick (event)// @startlock
	{// @endlock
		
		
		$$(getHtmlId('container9')).setSplitPosition(250);
		var id = sources.bakDhsInfo.BAKDhsInformationID;
		
	
		
		var myObject6 = {token:'7836140170460568' ,id:'1',major:3,minor:37,data1:id}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	//specificBakCourtJurisdictionList = rpcDSelects.getSelect(myObject6);
	 	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						specificBakListSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject6]
				});
		
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		fillCorrespondance();
		$$(getHtmlId('container6')).setSplitPosition(1290);
	};// @lock

	voidCorrespondanceCheck.change = function voidCorrespondanceCheck_change (event)// @startlock
	{// @endlock
		
		var status = $$(getHtmlId("voidCorrespondanceCheck")).getValue();
		var id = sources.dhsCorespondance.DhsCorrespondenceID;
		//var id  = $$(getHtmlId('attHiddenCorrId')).getValue();
		var myObject8 = 
			{
				token:'7836140170460568' ,id:'1',major:3,minor:6,
				data1:currentCorresondanceDate,
				data2:status,
				data3: id
			}; //dontf
			
			
			rpcDUpdate.setUpdateAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject8]
				});
		
		
		
	};// @lock

	button5.click = function button5_click (event)// @startlock
	{// @endlock
		
		
			var x = $$(getHtmlId("newCorrespondanceField"));
		var myObject8 = 
			{
				token:'7836140170460568' ,id:'1',major:3,minor:6,
				data1:$$(getHtmlId("newCorrespondanceField")).getValue(),
				data2:currentID
			}; //dontf
			
			rpcDInsert.setInsertAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject8]
				});
			
			$$(getHtmlId('newCorrespondanceField')).setValue("");
			fillCorrespondance();
	};// @lock

	correspondanceGrid.onRowClick = function correspondanceGrid_onRowClick (event)// @startlock
	{// @endlock
		$$(getHtmlId('container6')).setSplitPosition(420);
		$$(getHtmlId('container3')).setSplitPosition(900);
		currentCorresondanceDate = event.data.row.cells[0].value;
	};// @lock

	correspondanceActiveBox.change = function correspondanceActiveBox_change (event)// @startlock
	{// @endlock
		fillCorrespondance();
	};// @lock

	previousVersionButton.click = function previousVersionButton_click (event)// @startlock
	{// @endlock
			 
		var x = sources.courtJurisdictionList;
		$$(getHtmlId('container3')).setSplitPosition(420);
		var name = $$(getHtmlId('dhsNameField')).getValue();
		var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:36,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						bakListSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject5]
				});
	};// @lock

	closeAssesorCurrentButton.click = function closeAssesorCurrentButton_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('mainAssessorCont')).setSplitPosition(1290);
	};// @lock

	submitButton.click = function submitButton_click (event)// @startlock
	{// @endlock

		changed = false;
		
			var myObject7 = 
			{
				token:'7836140170460568' ,id:'1',major:3,minor:7,
				data1:$$(getHtmlId("dhsNameField")).sourceAtt.getValue(),
				data2:$$(getHtmlId("dhsPhoneField")).sourceAtt.getValue(),
				data3:$$(getHtmlId("dhsEmailField")).sourceAtt.getValue(),
				data4:$$(getHtmlId("dhsFaxField")).sourceAtt.getValue(),
				data5:$$(getHtmlId("dhsAddressField")).sourceAtt.getValue(),
				data6:$$(getHtmlId("cityComboBox")).getValue(),
				data7:$$(getHtmlId("dhsStateField")).sourceAtt.getValue(),
				data8:$$(getHtmlId("dhsZipField")).sourceAtt.getValue(),
				data9:$$(getHtmlId("dhsExtField")).sourceAtt.getValue(),
				data10:$$(getHtmlId("dhsMobileField")).sourceAtt.getValue(),
				data11:$$(getHtmlId("dhsNotesField")).sourceAtt.getValue(),
				data12:$$(getHtmlId("dhsFullNameField")).sourceAtt.getValue(),
				data13:$$(getHtmlId("reportingComboBox")).getValue(),
				data14:currentID,
				data15:$$(getHtmlId("dhsInactiveCheckBox")).getValue()
			}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 		rpcDUpdate.setUpdateAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject7]
				});
				
	 		rpcDInsert.setInsertAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject7]
				});
				
				
	 		fillMainTable();
	 		
			var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:36,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						bakListSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject5]
				});
		
	};// @lock

	dhsFullList.onRowClick = function dhsFullList_onRowClick (event)// @startlock
	{// @endlock
		
		
		
		
		
		$$(getHtmlId('mainDhsCont')).setSplitPosition(400);
		$$(getHtmlId('container3')).setSplitPosition(2000);
	 	$$(getHtmlId('container9')).setSplitPosition(1000);
	 	$$(getHtmlId('container6')).setSplitPosition(1500);
		
		
		
		var name = sources.dhsList.DhsName;
		var city = sources.dhsList.DhsCity;
		var reportingMethod = sources.dhsList.DhsPreferredReportingMethod;
		var ids = sources.dhsList.DhsInformationID;
		if(city != "" && city != null)
		{
			$$(getHtmlId('cityComboBox')).setValue(city);
		}
		else
		{
			$$(getHtmlId('cityComboBox')).setValue("None");
		}
		
		if(reportingMethod != "" && reportingMethod != null)
		{
				
			$$(getHtmlId('reportingComboBox')).setValue(reportingMethod);
		}
		else
		{
				
			$$(getHtmlId('reportingComboBox')).setValue("None");
		}
		
		
		var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:33,data1:ids}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						specificListSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
	 
		///////////////////////////////////////////////////////////get data
		
		
		currentName = name;
		currentID = ids;

		fillCorrespondance();
		
		
	};// @lock
	
	
	function mainListSuccess(result)
	{
		
		dhsList = result;
		sources.dhsList.sync();
	}
	function mainListError(event)
	{
		var errMessage;
				for (var x = 0;x < event.error.length;x++)
				{
					errMessage += (event.error[x].message + ",");
				}
				alert(errMessage);
	}
	function specificListSuccess(result)
	{
		
		specificDhsList = result;
		sources.specificDhsList.sync();
	}
	function specificListError(event)
	{
		var errMessage;
				for (var x = 0;x < event.error.length;x++)
				{
					errMessage += (event.error[x].message + ",");
				}
				alert(errMessage);
	}
	function corrListSuccess(result)
	{
		
		dhsCorespondance = result;
		sources.dhsCorespondance.sync();
	}
	function corrListError(event)
	{
		var errMessage;
				for (var x = 0;x < event.error.length;x++)
				{
					errMessage += (event.error[x].message + ",");
				}
				alert(errMessage);
	}
	
	function bakListSuccess(result)
	{
		
		bakDhsInfo = result;
		sources.bakDhsInfo.sync();
	}
	function bakListError(event)
	{
		var errMessage;
				for (var x = 0;x < event.error.length;x++)
				{
					errMessage += (event.error[x].message + ",");
				}
				alert(errMessage);
	}
	function specificBakListSuccess(result)
	{
		
		specificBakDhsList = result;
		sources.specificBakDhsList.sync();
	}
	function specificBakListError(event)
	{
		var errMessage;
				for (var x = 0;x < event.error.length;x++)
				{
					errMessage += (event.error[x].message + ",");
				}
				alert(errMessage);
	}

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_dhsFullNameField", "change", dhsFullNameField.change, "WAF");
	WAF.addListener(this.id + "_closeAssesorPreviousButton", "click", closeAssesorPreviousButton.click, "WAF");
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	WAF.addListener(this.id + "_dhsPreviousGrid", "onRowClick", dhsPreviousGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	WAF.addListener(this.id + "_voidCorrespondanceCheck", "change", voidCorrespondanceCheck.change, "WAF");
	WAF.addListener(this.id + "_button5", "click", button5.click, "WAF");
	WAF.addListener(this.id + "_correspondanceGrid", "onRowClick", correspondanceGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_correspondanceActiveBox", "change", correspondanceActiveBox.change, "WAF");
	WAF.addListener(this.id + "_previousVersionButton", "click", previousVersionButton.click, "WAF");
	WAF.addListener(this.id + "_closeAssesorCurrentButton", "click", closeAssesorCurrentButton.click, "WAF");
	WAF.addListener(this.id + "_submitButton", "click", submitButton.click, "WAF");
	WAF.addListener(this.id + "_dhsFullList", "onRowClick", dhsFullList.onRowClick, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
