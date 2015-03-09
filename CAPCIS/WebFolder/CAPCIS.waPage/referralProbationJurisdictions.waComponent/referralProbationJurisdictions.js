
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralProbationJurisdictions';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var Close = {};	// @button
	var button3 = {};	// @button
	var dataGrid1 = {};	// @dataGrid
	var pjVoidedCorrespondanceCheck = {};	// @checkbox
	var pjCorCloseButton = {};	// @button
	var pjCorrespondanceGrid = {};	// @dataGrid
	var pjCorrespondanceActiveBox = {};	// @combobox
	var button2 = {};	// @button
	var button16 = {};	// @button
	var button15 = {};	// @button
	var button14 = {};	// @button
	var pjDataGird = {};	// @dataGrid
	// @endregion// @endlock

	// eventHandlers// @lock

	Close.click = function Close_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('ProbationJurisdictionPrevVersionCont')).setSplitPosition(625);
	};// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('ProbationJurisdictionSpecificInfoCont')).setSplitPosition(900);
	};// @lock

	dataGrid1.onRowClick = function dataGrid1_onRowClick (event)// @startlock
	{// @endlock
		
		$$(getHtmlId('ProbationJurisdictionPrevVersionCont')).setSplitPosition(250);
		var date = event.data.row.cells[0].value;
		var assessor = event.data.row.cells[1].value;
		var employee = event.data.row.cells[2].value;
		
		var myObject6 = {token:'7836140170460568' ,id:'1',major:3,minor:19,data1:assessor, data2:date, data3:employee}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	specificBakAttorneyList = rpcDSelects.getSelect(myObject6);
	 	sources.specificBakAttorneyList.sync();
	};// @lock

	pjVoidedCorrespondanceCheck.change = function pjVoidedCorrespondanceCheck_change (event)// @startlock
	{// @endlock
		var status = $$(getHtmlId("pjVoidedCorrespondanceCheck")).getValue();
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

	pjCorCloseButton.click = function pjCorCloseButton_click (event)// @startlock
	{// @endlock
		fillCorrespondance();
		$$(getHtmlId('ProbationJurisdictionCorrCont')).setSplitPosition(1290);
	};// @lock

	pjCorrespondanceGrid.onRowClick = function pjCorrespondanceGrid_onRowClick (event)// @startlock
	{// @endlock
		$$(getHtmlId('ProbationJurisdictionCorrCont')).setSplitPosition(420);
		$$(getHtmlId('ProbationJurisdictionSpecificInfoCont')).setSplitPosition(900);
		currentCorresondanceDate = event.data.row.cells[0].value;
	};// @lock

	pjCorrespondanceActiveBox.change = function pjCorrespondanceActiveBox_change (event)// @startlock
	{// @endlock
		fillCorrespondance();
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		var x = $$(getHtmlId("pjNewCoresspondenceField"));
		var myObject8 = 
			{
				token:'7836140170460568' ,id:'1',major:3,minor:2,
				data1:$$(getHtmlId("pjNewCoresspondenceField")).getValue(),
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

	button16.click = function button16_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('ProbationJurisdictionSpecificInfoCont')).setSplitPosition(420);
		//var name = $$(getHtmlId('assessorNameField')).getValue();
		var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:18,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	bakAttorneyInfo = rpcDSelects.getSelect(myObject5);
	 	sources.bakAttorneyInfo.sync();
	};// @lock

	button15.click = function button15_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('mainProbationJurisdictionCont')).setSplitPosition(1290);
	};// @lock

	button14.click = function button14_click (event)// @startlock
	{// @endlock
		
		
			var myObject7 = 
			{
				token:'7836140170460568' ,id:'1',major:3,minor:3,
				data1:$$(getHtmlId("pjName")).sourceAtt.getValue(),
				data2:$$(getHtmlId("pjPhone")).sourceAtt.getValue(),
				data3:$$(getHtmlId("pjEmail")).sourceAtt.getValue(),
				data4:$$(getHtmlId("pjFax")).sourceAtt.getValue(),
				data5:$$(getHtmlId("pjAddress")).sourceAtt.getValue(),
				data6:$$(getHtmlId("pjCityComboBox")).getValue(),
				data7:$$(getHtmlId("pjState")).sourceAtt.getValue(),
				data8:$$(getHtmlId("pjZip")).sourceAtt.getValue(),
				data9:$$(getHtmlId("pjExt")).sourceAtt.getValue(),
				data10:$$(getHtmlId("pjAdditional")).sourceAtt.getValue(),
				data11:$$(getHtmlId("pjNotes")).sourceAtt.getValue(),
				data12:$$(getHtmlId("pjFullName")).sourceAtt.getValue(),
				data13:$$(getHtmlId("pjReportingComboBox")).getValue(),
				data14:currentID,
				data15:$$(getHtmlId("pjInactive")).getValue(),
				data16:$$(getHtmlId("pjPublicDef")).getValue(),
				data17:$$(getHtmlId("pjStaffInfo")).getValue()
				
				
			}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 		assessorUpdate = rpcDUpdate.setUpdate(myObject7);
	 		bakAssessorInsert = rpcDInsert.setInsert(myObject7);
	 		
		fillMainTable();
		var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:18,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	bakAttorneyInfo = rpcDSelects.getSelect(myObject5);
	 	sources.bakAttorneyInfo.sync();
	};// @lock

	pjDataGird.onRowClick = function pjDataGird_onRowClick (event)// @startlock
	{// @endlock
		
		
		
		
		$$(getHtmlId('mainProbationJurisdictionCont')).setSplitPosition(400);
		$$(getHtmlId('ProbationJurisdictionSpecificInfoCont')).setSplitPosition(2000);
	 	$$(getHtmlId('ProbationJurisdictionPrevVersionCont')).setSplitPosition(1000);
	 	$$(getHtmlId('ProbationJurisdictionCorrCont')).setSplitPosition(1500);
		
		
		
		var name = event.data.row.cells[0].value;
		var city = event.data.row.cells[7].value;
		var reportingMethod = event.data.row.cells[13].value;
		var ids = event.data.row.cells[15].value;
		if(city != "" && city != null)
		{
			$$(getHtmlId('pjCityComboBox')).setValue(city);
		}
		else
		{
			$$(getHtmlId('pjCityComboBox')).setValue("None");
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
	WAF.addListener(this.id + "_Close", "click", Close.click, "WAF");
	WAF.addListener(this.id + "_button3", "click", button3.click, "WAF");
	WAF.addListener(this.id + "_dataGrid1", "onRowClick", dataGrid1.onRowClick, "WAF");
	WAF.addListener(this.id + "_pjVoidedCorrespondanceCheck", "change", pjVoidedCorrespondanceCheck.change, "WAF");
	WAF.addListener(this.id + "_pjCorCloseButton", "click", pjCorCloseButton.click, "WAF");
	WAF.addListener(this.id + "_pjCorrespondanceGrid", "onRowClick", pjCorrespondanceGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_pjCorrespondanceActiveBox", "change", pjCorrespondanceActiveBox.change, "WAF");
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	WAF.addListener(this.id + "_button16", "click", button16.click, "WAF");
	WAF.addListener(this.id + "_button15", "click", button15.click, "WAF");
	WAF.addListener(this.id + "_button14", "click", button14.click, "WAF");
	WAF.addListener(this.id + "_pjDataGird", "onRowClick", pjDataGird.onRowClick, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
