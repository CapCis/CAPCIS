
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralAssessors';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
		
	 	/*
		mainAssessorCont = document.getElementById(getHtmlId('container3'));
		mainAssessorCont.style.transitionProperty = "all";
		mainAssessorCont.style.transitionDelay = "0s";
		mainAssessorCont.style.transitionDuration = ".5s";
		
		bakAssessorCont = document.getElementById(getHtmlId('container10'));
		bakAssessorCont.style.transitionProperty = "all";
		bakAssessorCont.style.transitionDelay = "0s";
		bakAssessorCont.style.transitionDuration = "1s";
		bakAssessorSpecific = document.getElementById(getHtmlId("container11"));
		bakAssessorSpecific.style.transitionProperty = "all";
		bakAssessorSpecific.style.transitionDelay = "0s";
		bakAssessorSpecific.style.transitionDuration = "1s";
		
		assessorCorespondanceCont = document.getElementById(getHtmlId('container8'));
		assessorCorespondanceCont.style.transitionProperty = "all";
		assessorCorespondanceCont.style.transitionDelay = "0s";
		assessorCorespondanceCont.style.transitionDuration = "1s";
		*/
		
		$$(getHtmlId('container3')).setSplitPosition(900);
	 	$$(getHtmlId('container9')).setSplitPosition(1000);
	 	$$(getHtmlId('container6')).setSplitPosition(1500);
	 	$$(getHtmlId('mainAssessorCont')).setSplitPosition(1290);
		
		
		//mainAssessorCont.style.visibility = 'visible';
		try
		{
			debugger;
			var searchCrit = data.userData.searchCrit;
			var searchType = data.userData.searchType;
			
		}
		catch(err)
		{
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:0,data1:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 	assessorList = rpcDSelects.getSelect(myObject);
		 	sources.assessorList.sync();
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
	 	
	 	
	// @region namespaceDeclaration// @startlock
	var correspondanceActiveBox = {};	// @combobox
	var voidCorrespondanceCheck = {};	// @checkbox
	var button5 = {};	// @button
	var submitButton = {};	// @button
	var button1 = {};	// @button
	var button2 = {};	// @button
	var correspondanceGrid = {};	// @dataGrid
	var assesorPreviousGrid = {};	// @dataGrid
	var closeAssesorCurrentButton = {};	// @button
	var closeAssesorPreviousButton = {};	// @button
	var previousVersionButton = {};	// @button
	var assessorFullList = {};	// @dataGrid
	// @endregion// @endlock

	// eventHandlers// @lock

	correspondanceActiveBox.change = function correspondanceActiveBox_change (event)// @startlock
	{// @endlock
		fillCorrespondance();
	};// @lock

	voidCorrespondanceCheck.change = function voidCorrespondanceCheck_change (event)// @startlock
	{// @endlock
		debugger;
		var status = $$(getHtmlId("voidCorrespondanceCheck")).getValue();
		var myObject8 = 
			{
				token:'7836140170460568' ,id:'1',major:3,minor:1,
				data1:currentCorresondanceDate,
				data2:status
			}; //dontf
		assessorUpdate = rpcDUpdate.setUpdate(myObject8);
		
		
		
		
		
	};// @lock
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
				var myObject2 = {token:'7836140170460568' ,id:'1',major:3,minor:7,data1:currentName}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 			assessorCorespondance = rpcDSelects.getSelect(myObject2);
	 			sources.assessorCorespondance.sync();
		
			}
			else
			{
				var myObject2 = {token:'7836140170460568' ,id:'1',major:3,minor:2,data1:currentName,data2:currentCorrespondanceViewVoided}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 			assessorCorespondance = rpcDSelects.getSelect(myObject2);
	 			sources.assessorCorespondance.sync();
			}	
		}

	button5.click = function button5_click (event)// @startlock
	{// @endlock
		debugger;
		
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

	submitButton.click = function submitButton_click (event)// @startlock
	{// @endlock
		debugger;
		changed = false;
		if($$(getHtmlId("assessorNameField")).sourceAtt.getValue() != currentName)
		{
			changed = true;
		}
		if($$(getHtmlId("assessorFullNameField")).sourceAtt.getValue() != currentDisplay)
		{
			changed = true;
		}
		if($$(getHtmlId("assessorPhoneField")).sourceAtt.getValue() != currentPhone)
		{
			changed = true;
		}
		if($$(getHtmlId("assesorExtField")).sourceAtt.getValue() != currentExt)
		{
			changed = true;
		}
		if($$(getHtmlId("assesorMobileField")).sourceAtt.getValue() != currentMobile)
		{
			changed = true;
		}
		if($$(getHtmlId("assesorFaxField")).sourceAtt.getValue() != currentFax)
		{
			changed = true;
		}
		if($$(getHtmlId("assesorAddressField")).sourceAtt.getValue() != currentAddress)
		{
			changed = true;
		}
		if($$(getHtmlId("assesorStateField")).sourceAtt.getValue() != currentState)
		{
			changed = true;
		}
		if($$(getHtmlId("assesorZipField")).sourceAtt.getValue() != currentZip)
		{
			changed = true;
		}
		if($$(getHtmlId("assesorEmailField")).sourceAtt.getValue() != currentEmail)
		{
			changed = true;
		}
		if($$(getHtmlId("assesorNotesField")).sourceAtt.getValue() != currentNotes)
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
		if($$(getHtmlId("assessorInactiveCheckBox")).getValue() == sources.specificAssessorList.InactiveAssessorInfo)
		{
			changed = true;
		}
		
		//run update if needed
		if(changed)
		{
			var myObject7 = 
			{
				token:'7836140170460568' ,id:'1',major:3,minor:0,
				data1:$$(getHtmlId("assessorNameField")).sourceAtt.getValue(),
				data2:$$(getHtmlId("assessorPhoneField")).sourceAtt.getValue(),
				data3:$$(getHtmlId("assesorEmailField")).sourceAtt.getValue(),
				data4:$$(getHtmlId("assesorFaxField")).sourceAtt.getValue(),
				data5:$$(getHtmlId("assesorAddressField")).sourceAtt.getValue(),
				data6:$$(getHtmlId("cityComboBox")).getValue(),
				data7:$$(getHtmlId("assesorStateField")).sourceAtt.getValue(),
				data8:$$(getHtmlId("assesorZipField")).sourceAtt.getValue(),
				data9:$$(getHtmlId("assesorExtField")).sourceAtt.getValue(),
				data10:$$(getHtmlId("assesorMobileField")).sourceAtt.getValue(),
				data11:$$(getHtmlId("assesorNotesField")).sourceAtt.getValue(),
				data12:$$(getHtmlId("assessorFullNameField")).sourceAtt.getValue(),
				data13:$$(getHtmlId("reportingComboBox")).getValue(),
				data14:currentID,
				data15:$$(getHtmlId("assessorInactiveCheckBox")).getValue()
			}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 		assessorUpdate = rpcDUpdate.setUpdate(myObject7);
	 		bakAssessorInsert = rpcDInsert.setInsert(myObject7);
	 		
		}
		
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('container3')).setSplitPosition(900);
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		fillCorrespondance();
		$$(getHtmlId('container6')).setSplitPosition(1290);
	};// @lock

	correspondanceGrid.onRowClick = function correspondanceGrid_onRowClick (event)// @startlock
	{// @endlock
		$$(getHtmlId('container6')).setSplitPosition(420);
		$$(getHtmlId('container3')).setSplitPosition(900);
		currentCorresondanceDate = event.data.row.cells[0].value;
	};// @lock

	assesorPreviousGrid.onRowClick = function assesorPreviousGrid_onRowClick (event)// @startlock
	{// @endlock

		$$(getHtmlId('container9')).setSplitPosition(250);
		var date = event.data.row.cells[0].value;
		var assessor = event.data.row.cells[1].value;
		var employee = event.data.row.cells[2].value;
		
		var myObject6 = {token:'7836140170460568' ,id:'1',major:3,minor:6,data1:assessor, data2:date, data3:employee}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	specificBakAssessorList = rpcDSelects.getSelect(myObject6);
	 	sources.specificBakAssessorList.sync();
		
	};// @lock

	closeAssesorCurrentButton.click = function closeAssesorCurrentButton_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('mainAssessorCont')).setSplitPosition(1290);
	};// @lock

	closeAssesorPreviousButton.click = function closeAssesorPreviousButton_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('container9')).setSplitPosition(625);
	};// @lock

	previousVersionButton.click = function previousVersionButton_click (event)// @startlock
	{// @endlock
		
		$$(getHtmlId('container3')).setSplitPosition(420);
		var name = $$(getHtmlId('assessorNameField')).getValue();
		var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:5,data1:name}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	bakAssessorInfo = rpcDSelects.getSelect(myObject5);
	 	sources.bakAssessorInfo.sync();
	};// @lock

	assessorFullList.onRowClick = function assessorFullList_onRowClick (event)// @startlock
	{// @endlock
		
		debugger;
		
		
		
		$$(getHtmlId('mainAssessorCont')).setSplitPosition(400);
		$$(getHtmlId('container3')).setSplitPosition(2000);
	 	$$(getHtmlId('container9')).setSplitPosition(1000);
	 	$$(getHtmlId('container6')).setSplitPosition(1500);
		
		
		
		var name = event.data.row.cells[0].value;
		var city = event.data.row.cells[8].value;
		var reportingMethod = event.data.row.cells[6].value;
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
		
		
		var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:1,data1:name}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	specificAssessorList = rpcDSelects.getSelect(myObject);
	 	sources.specificAssessorList.sync();
		
		
		
		///////////////////////////////////////////////////////////get data
		
		currentName = name;
		currentCity = city;
		currentReportingMethod = reportingMethod;
		currentPhone = sources.specificAssessorList.AssessorPhone;
		currentExt = sources.specificAssessorList.AssessorPhoneExt;
		currentEmail = sources.specificAssessorList.AssessorEmail;
		currentFax = sources.specificAssessorList.AssessorFax;
		currentMobile = sources.specificAssessorList.AssessorMobilePhone;
		currentAddress = sources.specificAssessorList.AssessorAddress;
		currentState = sources.specificAssessorList.AssessorState;
		currentZip = sources.specificAssessorList.AssessorZipCode;
		currentNotes = sources.specificAssessorList.AssessorNotes;
		currentDisplay = sources.specificAssessorList.AssessorFullNameDisplay;
		currentID = sources.specificAssessorList.AssessorInformationID;
		
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
	WAF.addListener(this.id + "_correspondanceActiveBox", "change", correspondanceActiveBox.change, "WAF");
	WAF.addListener(this.id + "_voidCorrespondanceCheck", "change", voidCorrespondanceCheck.change, "WAF");
	WAF.addListener(this.id + "_button5", "click", button5.click, "WAF");
	WAF.addListener(this.id + "_submitButton", "click", submitButton.click, "WAF");
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	WAF.addListener(this.id + "_correspondanceGrid", "onRowClick", correspondanceGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_assesorPreviousGrid", "onRowClick", assesorPreviousGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_closeAssesorCurrentButton", "click", closeAssesorCurrentButton.click, "WAF");
	WAF.addListener(this.id + "_closeAssesorPreviousButton", "click", closeAssesorPreviousButton.click, "WAF");
	WAF.addListener(this.id + "_previousVersionButton", "click", previousVersionButton.click, "WAF");
	WAF.addListener(this.id + "_assessorFullList", "onRowClick", assessorFullList.onRowClick, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
