
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
	}
	 	
		
		function fillCorrespondance()
		{
			
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
	var button14 = {};	// @button
	var button15 = {};	// @button
	var button3 = {};	// @button
	var Close = {};	// @button
	var dataGrid1 = {};	// @dataGrid
	var button16 = {};	// @button
	var attVoidedCorrespondanceCheck = {};	// @checkbox
	var button2 = {};	// @button
	var attCorCloseButton = {};	// @button
	var attCorrespondanceGrid = {};	// @dataGrid
	var attCorrespondanceActiveBox = {};	// @combobox
	var attorneyDataGird = {};	// @dataGrid
	// @endregion// @endlock

	// eventHandlers// @lock

	button14.click = function button14_click (event)// @startlock
	{// @endlock
		
		
			var myObject7 = 
			{
				token:'7836140170460568' ,id:'1',major:3,minor:3,
				data1:$$(getHtmlId("attName")).sourceAtt.getValue(),
				data2:$$(getHtmlId("attPhone")).sourceAtt.getValue(),
				data3:$$(getHtmlId("attEmail")).sourceAtt.getValue(),
				data4:$$(getHtmlId("attFax")).sourceAtt.getValue(),
				data5:$$(getHtmlId("attAddress")).sourceAtt.getValue(),
				data6:$$(getHtmlId("attCityComboBox")).getValue(),
				data7:$$(getHtmlId("attState")).sourceAtt.getValue(),
				data8:$$(getHtmlId("attZip")).sourceAtt.getValue(),
				data9:$$(getHtmlId("attExt")).sourceAtt.getValue(),
				data10:$$(getHtmlId("attAdditional")).sourceAtt.getValue(),
				data11:$$(getHtmlId("attNotes")).sourceAtt.getValue(),
				data12:$$(getHtmlId("attFullName")).sourceAtt.getValue(),
				data13:$$(getHtmlId("attReportingComboBox")).getValue(),
				data14:currentID,
				data15:$$(getHtmlId("attInactive")).getValue(),
				data16:$$(getHtmlId("attPublicDef")).getValue(),
				data17:$$(getHtmlId("attStaffInfo")).getValue()
				
				
			}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 		assessorUpdate = rpcDUpdate.setUpdate(myObject7);
	 		bakAssessorInsert = rpcDInsert.setInsert(myObject7);
	 		
		fillMainTable();
		var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:18,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	bakAttorneyInfo = rpcDSelects.getSelect(myObject5);
	 	sources.bakAttorneyInfo.sync();
	};// @lock

	button15.click = function button15_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('mainAttorneyCont')).setSplitPosition(1290);
	};// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('attSpecificInfoCont')).setSplitPosition(900);
	};// @lock

	Close.click = function Close_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('attPrevVersionCont')).setSplitPosition(625);
	};// @lock

	dataGrid1.onRowClick = function dataGrid1_onRowClick (event)// @startlock
	{// @endlock
		
		$$(getHtmlId('attPrevVersionCont')).setSplitPosition(250);
		var date = event.data.row.cells[0].value;
		var assessor = event.data.row.cells[1].value;
		var employee = event.data.row.cells[2].value;
		
		var myObject6 = {token:'7836140170460568' ,id:'1',major:3,minor:19,data1:assessor, data2:date, data3:employee}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	specificBakAttorneyList = rpcDSelects.getSelect(myObject6);
	 	sources.specificBakAttorneyList.sync();
	};// @lock

	button16.click = function button16_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('attSpecificInfoCont')).setSplitPosition(420);
		//var name = $$(getHtmlId('assessorNameField')).getValue();
		var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:18,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	bakAttorneyInfo = rpcDSelects.getSelect(myObject5);
	 	sources.bakAttorneyInfo.sync();
	};// @lock

	attVoidedCorrespondanceCheck.change = function attVoidedCorrespondanceCheck_change (event)// @startlock
	{// @endlock
		var status = $$(getHtmlId("attVoidedCorrespondanceCheck")).getValue();
		var id  = $$(getHtmlId('attHiddenCorrId')).getValue();
		var myObject8 = 
			{
				token:'7836140170460568' ,id:'1',major:3,minor:2,
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
			x.setValue("");
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
		var ids = event.data.row.cells[15].value;
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
		
		currentID = ids;
		
		fillCorrespondance();
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button14", "click", button14.click, "WAF");
	WAF.addListener(this.id + "_button15", "click", button15.click, "WAF");
	WAF.addListener(this.id + "_button3", "click", button3.click, "WAF");
	WAF.addListener(this.id + "_Close", "click", Close.click, "WAF");
	WAF.addListener(this.id + "_dataGrid1", "onRowClick", dataGrid1.onRowClick, "WAF");
	WAF.addListener(this.id + "_button16", "click", button16.click, "WAF");
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
