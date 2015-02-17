
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralAttorneys';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		/*
		$$(getHtmlId('container3')).setSplitPosition(900);
	 	$$(getHtmlId('container9')).setSplitPosition(1000);
	 	$$(getHtmlId('container6')).setSplitPosition(1500);
	 	$$(getHtmlId('mainAssessorCont')).setSplitPosition(1290);
		*/
		
		
		
	 	/*
	 	$$(getHtmlId('attCorrCont')).setSplitPosition(900);
	 	$$(getHtmlId('attPrevVersionCont')).setSplitPosition(1000);
	 	$$(getHtmlId('attSpecificInfoCont')).setSplitPosition(1500);
	 	$$(getHtmlId('mainAttorneyCont')).setSplitPosition(1290);
	 	*/
		//mainAssessorCont.style.visibility = 'visible';
		try
		{
			
			var searchCrit = data.userData.searchCrit;
			var searchType = data.userData.searchType;
			if(searchCrit == "" && searchType == 'Active')
			{
				var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:11,data1:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		attorneyList = rpcDSelects.getSelect(myObject);
		 		sources.attorneyList.sync();
			}
			else if(searchCrit == '' && searchType == 'Inactive')
			{
				var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:11,data1:true}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		attorneyList = rpcDSelects.getSelect(myObject);
		 		sources.attorneyList.sync();
			}
			else if(searchCrit == '' && searchType == 'All')
			{
				var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:12}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		attorneyList = rpcDSelects.getSelect(myObject);
		 		sources.attorneyList.sync();
			}
			else if (searchCrit != '' && searchType == 'Active')
			{
				var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:14, data1:searchCrit,data2:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		attorneyList = rpcDSelects.getSelect(myObject);
		 		sources.attorneyList.sync();
			}
			else if (searchCrit != '' && searchType == 'Inactive')
			{
				var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:14, data1:searchCrit,data2:true}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		attorneyList = rpcDSelects.getSelect(myObject);
		 		sources.attorneyList.sync();
			}
			else if (searchCrit != '' && searchType == 'All')
			{
				var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:13, data1:searchCrit}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		attorneyList = rpcDSelects.getSelect(myObject);
		 		sources.attorneyList.sync();
			}
			
		}
		catch(err)
		{
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:11,data1:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 	attorneyList = rpcDSelects.getSelect(myObject);
		 	sources.attorneyList.sync();
		}
	 	var myObject3 = {token:'7836140170460568' ,id:'1',major:3,minor:3}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	city = rpcDSelects.getSelect(myObject3);
	 	var tempCity= city[0];
	 	city[0] = {CityListing: "None"};
	 	city[city.length] = tempCity;
	 	sources.city.sync();
	 	
	 	var myObject4 = {token:'7836140170460568' ,id:'1',major:3,minor:4}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	reporting = rpcDSelects.getSelect(myObject4);
	 	var tempReporting = reporting[0];
	 	reporting[0] = {ReportingMethod: "None"};
	 	reporting[reporting.length] = tempReporting;
	 	sources.reporting.sync();
		
		function fillCorrespondance()
		{
			debugger;
			var currentCorrespondenceActiveSelected = $$(getHtmlId('attCorrespondanceActiveBox')).getValue();
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
				var myObject2 = {token:'7836140170460568' ,id:'1',major:3,minor:16,data1:currentName}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 			attorneyCorespondance = rpcDSelects.getSelect(myObject2);
	 			sources.attorneyCorespondance.sync();
		
			}
			else
			{
				var myObject2 = {token:'7836140170460568' ,id:'1',major:3,minor:17,data1:currentName,data2:currentCorrespondanceViewVoided}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 			attorneyCorespondance = rpcDSelects.getSelect(myObject2);
	 			sources.attorneyCorespondance.sync();
			}	
		}
	// @region namespaceDeclaration// @startlock
	var attVoidedCorrespondanceCheck = {};	// @checkbox
	var button2 = {};	// @button
	var attCorCloseButton = {};	// @button
	var attCorrespondanceGrid = {};	// @dataGrid
	var attCorrespondanceActiveBox = {};	// @combobox
	var attorneyDataGird = {};	// @dataGrid
	// @endregion// @endlock

	// eventHandlers// @lock

	attVoidedCorrespondanceCheck.change = function attVoidedCorrespondanceCheck_change (event)// @startlock
	{// @endlock
		var status = $$(getHtmlId("attVoidedCorrespondanceCheck")).getValue();
		var id  = $$(getHtmlId('attHiddenCorrId')).getValue();
		var myObject8 = 
			{
				token:'7836140170460568' ,id:'1',major:3,minor:1,
				data1:currentCorresondanceDate,
				data2:status,
				data3: id
			}; //dontf
		assessorUpdate = rpcDUpdate.setUpdate(myObject8);
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		var x = $$(getHtmlId("attNewCoresspondenceField"));
		var myObject8 = 
			{
				token:'7836140170460568' ,id:'1',major:3,minor:2,
				data1:$$(getHtmlId("attNewCoresspondenceField")).getValue(),
				data2:currentID
			}; //dontf
			var update = rpcDInsert.setInsert(myObject8);
			fillCorrespondance();
			/*
			var myObject2 = {token:'7836140170460568' ,id:'1',major:3,minor:2,data1:currentName}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 			assessorCorespondance = rpcDSelects.getSelect(myObject2);
	 			sources.assessorCorespondance.sync();
	 			*/
	};// @lock

	attCorCloseButton.click = function attCorCloseButton_click (event)// @startlock
	{// @endlock
		fillCorrespondance();
		$$(getHtmlId('attCorrCont')).setSplitPosition(1290);
	};// @lock

	attCorrespondanceGrid.onRowClick = function attCorrespondanceGrid_onRowClick (event)// @startlock
	{// @endlock
		$$(getHtmlId('attCorrCont')).setSplitPosition(420);
		$$(getHtmlId('attSpecificInfoCont')).setSplitPosition(900);
		currentCorresondanceDate = event.data.row.cells[0].value;
	};// @lock

	attCorrespondanceActiveBox.change = function attCorrespondanceActiveBox_change (event)// @startlock
	{// @endlock
		fillCorrespondance();
	};// @lock

	attorneyDataGird.onRowClick = function attorneyDataGird_onRowClick (event)// @startlock
	{// @endlock
		
		
		
		
		$$(getHtmlId('mainAttorneyCont')).setSplitPosition(400);
		$$(getHtmlId('attSpecificInfoCont')).setSplitPosition(2000);
	 	$$(getHtmlId('attPrevVersionCont')).setSplitPosition(1000);
	 	$$(getHtmlId('attCorrCont')).setSplitPosition(1500);
		
		
		
		var name = event.data.row.cells[0].value;
		var city = event.data.row.cells[7].value;
		var reportingMethod = event.data.row.cells[13].value;
		if(city != "" && city != null)
		{
			$$(getHtmlId('attCityComboBox')).setValue(city);
		}
		else
		{
			$$(getHtmlId('attCityComboBox')).setValue("None");
		}
		
		if(reportingMethod != "" && reportingMethod != null)
		{
				
			$$(getHtmlId('attReportingComboBox')).setValue(reportingMethod);
		}
		else
		{
				
			$$(getHtmlId('attReportingComboBox')).setValue("None");
		}
		
		
		var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:15,data1:name}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	specificAttorneyList = rpcDSelects.getSelect(myObject);
	 	sources.specificAttorneyList.sync();
		
		
		
		///////////////////////////////////////////////////////////get data
		
		currentName = name;
		currentCity = city;
		currentReportingMethod = reportingMethod;
		currentPhone = sources.specificAttorneyList.AssessorPhone;
		currentExt = sources.specificAttorneyList.AssessorPhoneExt;
		currentEmail = sources.specificAttorneyList.AssessorEmail;
		currentFax = sources.specificAttorneyList.AssessorFax;
		currentMobile = sources.specificAttorneyList.AssessorMobilePhone;
		currentAddress = sources.specificAttorneyList.AssessorAddress;
		currentState = sources.specificAttorneyList.AssessorState;
		currentZip = sources.specificAttorneyList.AssessorZipCode;
		currentNotes = sources.specificAttorneyList.AssessorNotes;
		currentDisplay = sources.specificAttorneyList.AssessorFullNameDisplay;
		currentID = sources.specificAttorneyList.AssessorInformationID;
		
		if(currentName == null)
		{
			currentName = "";
			
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
			
		}
		if(currentExt == null)
		{
			currentExt = "";
			
		}
		if(currentEmail == null)
		{
			currentEmail = "";
			
		}
		if(currentFax == null)
		{
			currentFax = "";
			
		}
		if(currentMobile == null)
		{
			currentMobile = "";
			
		}
		if(currentAddress == null)
		{
			currentAddress = "";
			
		}
		if(currentState == null)
		{
			currentState = "";
			
		}
		if(currentZip == null)
		{
			currentZip = "";
			
		}
		if(currentNotes == null)
		{
			currentNotes = "";
			
		}
		if(currentDisplay == null)
		{
			currentDisplay = "";
			
		}
		
		fillCorrespondance();
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_attVoidedCorrespondanceCheck", "change", attVoidedCorrespondanceCheck.change, "WAF");
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	WAF.addListener(this.id + "_attCorCloseButton", "click", attCorCloseButton.click, "WAF");
	WAF.addListener(this.id + "_attCorrespondanceGrid", "onRowClick", attCorrespondanceGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_attCorrespondanceActiveBox", "change", attCorrespondanceActiveBox.change, "WAF");
	WAF.addListener(this.id + "_attorneyDataGird", "onRowClick", attorneyDataGird.onRowClick, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
