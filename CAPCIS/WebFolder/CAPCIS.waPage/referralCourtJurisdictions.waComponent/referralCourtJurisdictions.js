
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralCourtJurisdictions';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		try
		{
			
			var searchCrit = data.userData.searchCrit;
			var searchType = data.userData.searchType;
			if(searchCrit == "" && searchType == 'Active')
			{
				var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:20,data1:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
				var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:20,data1:true}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
				var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:21}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
				var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:23, data1:searchCrit,data2:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
				var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:23, data1:searchCrit,data2:true}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
				var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:22, data1:searchCrit}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:20,data1:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
		
		
		
			
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:20,data1:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						mainListSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
		 	//courtJurisdictionList = rpcDSelects.getSelect(myObject);
		 	//sources.courtJurisdictionList.sync();
		 	
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
				var myObject2 = {token:'7836140170460568' ,id:'1',major:3,minor:25,data1:currentName}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
				var myObject2 = {token:'7836140170460568' ,id:'1',major:3,minor:26,data1:currentName,data2:currentCorrespondanceViewVoided}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
	var closeCourtJurisdictionPreviousButton = {};	// @button
	var button1 = {};	// @button
	var courtJurisdictionPreviousGrid = {};	// @dataGrid
	var button2 = {};	// @button
	var voidCorrespondanceCheck = {};	// @checkbox
	var button5 = {};	// @button
	var correspondanceGrid = {};	// @dataGrid
	var correspondanceActiveBox = {};	// @combobox
	var previousVersionButton = {};	// @button
	var closeCourtJurisdictionCurrentButton = {};	// @button
	var submitButton = {};	// @button
	var courtJurisdictionFullList = {};	// @dataGrid
	// @endregion// @endlock

	// eventHandlers// @lock

	closeCourtJurisdictionPreviousButton.click = function closeCourtJurisdictionPreviousButton_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('container9')).setSplitPosition(625);
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('container3')).setSplitPosition(900);
	};// @lock

	courtJurisdictionPreviousGrid.onRowClick = function courtJurisdictionPreviousGrid_onRowClick (event)// @startlock
	{// @endlock

		$$(getHtmlId('container9')).setSplitPosition(250);
		var date = event.data.row.cells[0].value;
		var assessor = event.data.row.cells[1].value;
		var employee = event.data.row.cells[2].value;
		
		var myObject6 = {token:'7836140170460568' ,id:'1',major:3,minor:6,data1:assessor, data2:date, data3:employee}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	specificBakAssessorList = rpcDSelects.getSelect(myObject6);
	 	sources.specificBakAssessorList.sync();
		
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		fillCorrespondance();
		$$(getHtmlId('container6')).setSplitPosition(1290);
	};// @lock

	voidCorrespondanceCheck.change = function voidCorrespondanceCheck_change (event)// @startlock
	{// @endlock
		debugger;
		var status = $$(getHtmlId("voidCorrespondanceCheck")).getValue();
		var id = sources.courtJurisdictionCorespondance.CourtJurisdictionCorrespondenceID;
		//var id  = $$(getHtmlId('attHiddenCorrId')).getValue();
		var myObject8 = 
			{
				token:'7836140170460568' ,id:'1',major:3,minor:5,
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
				token:'7836140170460568' ,id:'1',major:3,minor:1,
				data1:$$(getHtmlId("newCorrespondanceField")).getValue(),
				data2:currentID
			}; //dontf
			
			var update = rpcDInsert.setInsert(myObject8);
			var myObject2 = {token:'7836140170460568' ,id:'1',major:3,minor:2,data1:currentName}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 			assessorCorespondance = rpcDSelects.getSelect(myObject2);
	 			sources.assessorCorespondance.sync();
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
		debugger;
		var x = sources.courtJurisdictionList;
		$$(getHtmlId('container3')).setSplitPosition(420);
		var name = $$(getHtmlId('assessorNameField')).getValue();
		var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:5,data1:name}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	bakAssessorInfo = rpcDSelects.getSelect(myObject5);
	 	sources.bakAssessorInfo.sync();
	};// @lock

	closeCourtJurisdictionCurrentButton.click = function closeCourtJurisdictionCurrentButton_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('mainAssessorCont')).setSplitPosition(1290);
	};// @lock

	submitButton.click = function submitButton_click (event)// @startlock
	{// @endlock
		debugger;
		changed = false;
		if($$(getHtmlId("courtJurisdictionNameField")).sourceAtt.getValue() != currentName)
		{
			changed = true;
		}
		
		if($$(getHtmlId("courtJurisdictionPhoneField")).sourceAtt.getValue() != currentPhone)
		{
			changed = true;
		}
		if($$(getHtmlId("courtJurisdictionExtField")).sourceAtt.getValue() != currentExt)
		{
			changed = true;
		}
		if($$(getHtmlId("courtJurisdictionAlternateField")).sourceAtt.getValue() != currentMobile)
		{
			changed = true;
		}
		if($$(getHtmlId("courtJurisdictionFaxField")).sourceAtt.getValue() != currentFax)
		{
			changed = true;
		}
		if($$(getHtmlId("courtJurisdictionAddressField")).sourceAtt.getValue() != currentAddress)
		{
			changed = true;
		}
		if($$(getHtmlId("courtJurisdictionStateField")).sourceAtt.getValue() != currentState)
		{
			changed = true;
		}
		if($$(getHtmlId("courtJurisdictionZipField")).sourceAtt.getValue() != currentZip)
		{
			changed = true;
		}
		if($$(getHtmlId("courtJurisdictionEmailField")).sourceAtt.getValue() != currentEmail)
		{
			changed = true;
		}
		if($$(getHtmlId("courtJurisdictionNotesField")).sourceAtt.getValue() != currentNotes)
		{
			changed = true;
		}
		if($$(getHtmlId("cityComboBox")).getValue() != currentCity)
		{
			changed = true;
		}
		if($$(getHtmlId("reportingComboBox")).getValue() != currentReportingMethod)
		{
			changed = true;
		}
		if($$(getHtmlId("courtJurisdictionInactiveCheckBox")).getValue() != currentInactiveInfo)
		{
			changed = true;
		}
		
		if($$(getHtmlId("courtJurisdictionDatabaseField")).sourceAtt.getValue() != currentDatabase)
		{
			changed = true;
		}
		if($$(getHtmlId("courtJurisdictionFormatField")).sourceAtt.getValue() != currentSearchFormat)
		{
			changed = true;
		}
		
		//run update if needed
		if(changed)
		{
			var myObject7 = 
			{
				token:'7836140170460568' ,id:'1',major:3,minor:4,
				data1:$$(getHtmlId("courtJurisdictionNameField")).sourceAtt.getValue(),
				data2:$$(getHtmlId("courtJurisdictionPhoneField")).sourceAtt.getValue(),
				data3:$$(getHtmlId("courtJurisdictionEmailField")).sourceAtt.getValue(),
				data4:$$(getHtmlId("courtJurisdictionFaxField")).sourceAtt.getValue(),
				data5:$$(getHtmlId("courtJurisdictionAddressField")).sourceAtt.getValue(),
				data6:$$(getHtmlId("cityComboBox")).getValue(),
				data7:$$(getHtmlId("courtJurisdictionStateField")).sourceAtt.getValue(),
				data8:$$(getHtmlId("courtJurisdictionZipField")).sourceAtt.getValue(),
				data9:$$(getHtmlId("courtJurisdictionExtField")).sourceAtt.getValue(),
				data10:$$(getHtmlId("courtJurisdictionAlternateField")).sourceAtt.getValue(),
				data11:$$(getHtmlId("courtJurisdictionNotesField")).sourceAtt.getValue(),
				data12:$$(getHtmlId("courtJurisdictionDatabaseField")).sourceAtt.getValue(),
				data13:$$(getHtmlId("reportingComboBox")).getValue(),
				data14:currentID,
				data15:$$(getHtmlId("courtJurisdictionInactiveCheckBox")).getValue(),
				data16:$$(getHtmlId("courtJurisdictionFormatField")).getValue(),
				
				
				
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
	 		
		}
		
	};// @lock



	
	courtJurisdictionFullList.onRowClick = function courtJurisdictionFullList_onRowClick (event)// @startlock
	{// @endlock
		
		debugger;
		
		
		
		$$(getHtmlId('mainCourtJurisdictionCont')).setSplitPosition(400);
		$$(getHtmlId('container3')).setSplitPosition(2000);
	 	$$(getHtmlId('container9')).setSplitPosition(1000);
	 	$$(getHtmlId('container6')).setSplitPosition(1500);
		
		
		
		var name = event.data.row.cells[0].value;
		var city = event.data.row.cells[5].value;
		var reportingMethod = event.data.row.cells[8].value;
		var ids = event.data.row.cells[11].value;
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
		
		debugger;
		var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:24,data1:id}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
		currentCity = city;
		currentReportingMethod = reportingMethod;
		currentPhone = sources.specificCourtJurisdictionList.CourtJurisdictionPhone;
		currentExt = sources.specificCourtJurisdictionList.CourtJurisdictionPhoneExt;
		currentEmail = sources.specificCourtJurisdictionList.CourtJurisdictionEmail;
		currentFax = sources.specificCourtJurisdictionList.CourtJurisdictionFax;
		currentMobile = sources.specificCourtJurisdictionList.CourtJurisdictionAlternatePhone;
		currentAddress = sources.specificCourtJurisdictionList.CourtJurisdictionAddress;
		currentState = sources.specificCourtJurisdictionList.CourtJurisdictionState;
		currentZip = sources.specificCourtJurisdictionList.CourtJurisdictionZipCode;
		currentNotes = sources.specificCourtJurisdictionList.CourtJurisdictionNotes;
		currentSearchFormat = sources.specificCourtJurisdictionList.SearchFormat;
		currentDatabase = sources.specificCourtJurisdictionList.SearchDatabase;
		currentID = ids;
		currentInactiveInfo = sources.specificCourtJurisdictionList.InactiveCourtJurisdictionInfo;
		
		if(currentName == null)
		{
			currentName = "";
			
		}
		if(currentSearchFormat == null)
		{
			currentSearchFormat = "";
			
		}
		if(currentDatabase == null)
		{
			currentDatabase = "";
			
		}
		if(currentCity == null || currentCity == "")
		{
			currentCity = "None";
			
		}
		if(currentReportingMethod == null || currentReportingMethod == "")
		{
			currentReportingMethod = "None";
			
		}
		if(currentPhone == null)
		{
			currentPhone = "";
			sources.specificCourtJurisdictionList.CourtJurisdictionPhone ="";
			
		}
		if(currentExt == null)
		{
			currentExt = "";
			sources.specificCourtJurisdictionList.CourtJurisdictionPhoneExt = "";
			
		}
		if(currentEmail == null)
		{
			currentEmail = "";
			sources.specificCourtJurisdictionList.CourtJurisdictionEmail ="";
			
		}
		if(currentFax == null)
		{
			currentFax = "";
			sources.specificCourtJurisdictionList.CourtJurisdictionFax ="";
			
		}
		if(currentMobile == null)
		{
			currentMobile = "";
			sources.specificCourtJurisdictionList.CourtJurisdictionAlternatePhone ="";
			
		}
		if(currentAddress == null)
		{
			currentAddress = "";
			sources.specificCourtJurisdictionList.CourtJurisdictionAddress ="";
			
		}
		if(currentState == null)
		{
			currentState = "";
			sources.specificCourtJurisdictionList.CourtJurisdictionState ="";
			
		}
		if(currentZip == null)
		{
			currentZip = "";
			sources.specificCourtJurisdictionList.CourtJurisdictionZipCode ="";
			
		}
		if(currentNotes == null)
		{
			currentNotes = "";
			sources.specificCourtJurisdictionList.CourtJurisdictionNotes ="";
			
		}
		if(currentSearchFormat == null)
		{
			currentNotes = "";
			sources.specificCourtJurisdictionList.SearchFormat ="";
			
		}
		if(currentDatabase == null)
		{
			currentNotes = "";
			sources.specificCourtJurisdictionList.SearchDatabase ="";
			
		}
		
		
		
		
				

		
		fillCorrespondance();
		
		
		
		
	};// @lock
	
	
	function mainListSuccess(result)
	{
		
		courtJurisdictionList = result;
		sources.courtJurisdictionList.sync();
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
		
		specificCourtJurisdictionList = result;
		sources.specificCourtJurisdictionList.sync();
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
		
		courtJurisdictionCorespondance = result;
		sources.courtJurisdictionCorespondance.sync();
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

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_closeCourtJurisdictionPreviousButton", "click", closeCourtJurisdictionPreviousButton.click, "WAF");
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	WAF.addListener(this.id + "_courtJurisdictionPreviousGrid", "onRowClick", courtJurisdictionPreviousGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	WAF.addListener(this.id + "_voidCorrespondanceCheck", "change", voidCorrespondanceCheck.change, "WAF");
	WAF.addListener(this.id + "_button5", "click", button5.click, "WAF");
	WAF.addListener(this.id + "_correspondanceGrid", "onRowClick", correspondanceGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_correspondanceActiveBox", "change", correspondanceActiveBox.change, "WAF");
	WAF.addListener(this.id + "_previousVersionButton", "click", previousVersionButton.click, "WAF");
	WAF.addListener(this.id + "_closeCourtJurisdictionCurrentButton", "click", closeCourtJurisdictionCurrentButton.click, "WAF");
	WAF.addListener(this.id + "_submitButton", "click", submitButton.click, "WAF");
	WAF.addListener(this.id + "_courtJurisdictionFullList", "onRowClick", courtJurisdictionFullList.onRowClick, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
