﻿
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralMain';
	// @endregion// @endlock
		
	this.load = function (data) {// @lock
		
		//debugger;
		
		/*
		setTimeout(callAssessor,0);	
		
		setTimeout(callAttorney,0);			
		
		setTimeout(callDHS,0);
		
		setTimeout(callJudge,0);
		
		setTimeout(callOtherMonitor,0);
		
		setTimeout(callProsecutor,0);
		
		setTimeout(callProbationOfficer,0);
		
		setTimeout(callProbationJurisdiction,0);
		
		setTimeout(callCourtJurisdiction,0);
		
		*/
		refreshData();
		
		
		
		oldVisContainer = "";
		oldVisComponent = "";
		
		
		
		newAssessor = document.getElementById(getHtmlId('newAssesorComponent'));
		newAttorney = document.getElementById(getHtmlId('newAttorneyComponent'));
		newDHS = document.getElementById(getHtmlId('newDHSOfficerComponent'));
		newJudges = document.getElementById(getHtmlId('newJudgeComponent'));
		newOther = document.getElementById(getHtmlId('newOtherMoniterComponent'));
		newProsecutor = document.getElementById(getHtmlId('newProsecutorsComponent'));
		newPO = document.getElementById(getHtmlId('newPOComponent'));
		newPJ = document.getElementById(getHtmlId('newProbationJurisdictionComponent'));
		newCJ = document.getElementById(getHtmlId('newCourtJurisdictionComponent'));
		
		var myObject3 = {
	    token: '7836140170460568',
	    id: '1',
	    major: 3,
	    minor: 3
		}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		
		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						citySuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject3]
				});
		
		var myObject4 = {
		    token: '7836140170460568',
		    id: '1',
		    major: 3,
		    minor: 4
		}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						reportingSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject4]
				});
	
	
		getTotals();
		
		

	// @region namespaceDeclaration// @startlock
	var dataGrid16 = {};	// @dataGrid
	var textField123 = {};	// @textField
	var button56 = {};	// @button
	var button55 = {};	// @button
	var button54 = {};	// @button
	var button53 = {};	// @button
	var probationOfficerDataGird = {};	// @dataGrid
	var dataGrid14 = {};	// @dataGrid
	var button49 = {};	// @button
	var pjCityComboBox = {};	// @textField
	var button48 = {};	// @button
	var button47 = {};	// @button
	var button46 = {};	// @button
	var pjDataGird = {};	// @dataGrid
	var button42 = {};	// @button
	var prosJurisdiction = {};	// @textField
	var dataGrid12 = {};	// @dataGrid
	var dataGrid11 = {};	// @dataGrid
	var button41 = {};	// @button
	var prosCityComboBox = {};	// @textField
	var button40 = {};	// @button
	var button39 = {};	// @button
	var button38 = {};	// @button
	var prosecutorDataGird = {};	// @dataGrid
	var dataGrid9 = {};	// @dataGrid
	var button34 = {};	// @button
	var omCityComboBox = {};	// @textField
	var button33 = {};	// @button
	var button32 = {};	// @button
	var button31 = {};	// @button
	var otherMonitorsDataGird = {};	// @dataGrid
	var judgeJurisdictionGrid = {};	// @dataGrid
	var button27 = {};	// @button
	var judgeJurisdiction = {};	// @textField
	var dataGrid7 = {};	// @dataGrid
	var button26 = {};	// @button
	var textField50 = {};	// @textField
	var button25 = {};	// @button
	var closeJudgeCurrentButton = {};	// @button
	var button24 = {};	// @button
	var judgeFullList = {};	// @dataGrid
	var dataGrid5 = {};	// @dataGrid
	var button19 = {};	// @button
	var textField33 = {};	// @textField
	var button18 = {};	// @button
	var button17 = {};	// @button
	var button13 = {};	// @button
	var dhsFullList = {};	// @dataGrid
	var dataGrid3 = {};	// @dataGrid
	var button9 = {};	// @button
	var textField1 = {};	// @textField
	var button8 = {};	// @button
	var closeCourtJurisdictionCurrentButton = {};	// @button
	var button7 = {};	// @button
	var courtJurisdictionFullList = {};	// @dataGrid
	var dataGrid1 = {};	// @dataGrid
	var attCityComboBox = {};	// @textField
	var button16 = {};	// @button
	var button15 = {};	// @button
	var button14 = {};	// @button
	var attorneyDataGird = {};	// @dataGrid
	var cityComboboxGrid = {};	// @dataGrid
	var button3 = {};	// @button
	var cityComboBox = {};	// @textField
	var previousVersionButton = {};	// @button
	var closeAssesorCurrentButton = {};	// @button
	var submitButton = {};	// @button
	var assessorFullList = {};	// @dataGrid
	var newProbJ = {};	// @menuItem
	var newCourtJ = {};	// @menuItem
	var newOtherM = {};	// @menuItem
	var newPros = {};	// @menuItem
	var newPOfficer = {};	// @menuItem
	var newJudge = {};	// @menuItem
	var newDHSO = {};	// @menuItem
	var newAtt = {};	// @menuItem
	var newAss = {};	// @menuItem
	var courtJurisdictionButton = {};	// @menuItem
	var probationJurisdictionButton = {};	// @menuItem
	var probationOfficerButton = {};	// @menuItem
	var prosecutorsButton = {};	// @menuItem
	var otherButton = {};	// @menuItem
	var judgesButton = {};	// @menuItem
	var dhsButton = {};	// @menuItem
	var assessorButton = {};	// @menuItem
	var SearchReferralButton = {};	// @button
	var attorneyButton = {};	// @menuItem
	// @endregion// @endlock

	// eventHandlers// @lock

	dataGrid16.onRowClick = function dataGrid16_onRowClick (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('judgeJurisdictionGrid'));
		grid.style.display = 'none';
		
		var recValue = $$(getHtmlId('judgeJurisdictionGrid')).sourceAtt.getValue();
		$$(getHtmlId('judgeJurisdiction')).setValue(recValue);
	};// @lock

	textField123.keyup = function textField123_keyup (event)// @startlock
	{// @endlock
		if(event.keyCode ===13)
		{
			var currentInput = $$($comp.id+'_judgeJurisdiction').getValue();
			$$($comp.id+'_judgeJurisdiction').setValue(sources.poJurisdiction.JurisdictionName);
			var grid = document.getElementById($comp.id+'_judgeJurisdictionGrid');
			grid.style.display = 'none';
		}
		
		else
		{
			
			poJurisdiction=tempStore2;
			sources.poJurisdiction.sync();

			var grid = document.getElementById($comp.id+'_judgeJurisdictionGrid');
			grid.style.display = 'block';

			var currentInput = $$($comp.id+'_judgeJurisdiction').getValue();//textInput.value;
			sources.poJurisdiction.query('JurisdictionName = :1 order by JurisdictionName', { params: [currentInput + "*"]});
		}
	};// @lock

	textField123.blur = function textField123_blur (event)// @startlock
	{// @endlock
		var currentInput = $$($comp.id+'_judgeJurisdiction').getValue();
			$$($comp.id+'_judgeJurisdiction').setValue(sources.poJurisdiction.JurisdictionName);
			var grid = document.getElementById($comp.id+'_judgeJurisdictionGrid');
			grid.style.display = 'none';
		
	};// @lock

	button56.click = function button56_click (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('judgeJurisdictionGrid'));
		if(grid.style.display == 'none')
		{
			grid.style.display = 'block';
		}
		else
		{
			grid.style.display = 'none';
		}
	};// @lock

	button55.click = function button55_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('poSpecificInfoCont')).setSplitPosition(420);
		
		var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:72,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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

	button54.click = function button54_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('mainProbationOfficerCont')).setSplitPosition(1290);
	};// @lock

	button53.click = function button53_click (event)// @startlock
	{// @endlock
			debugger;
			var myObject7 = {
				token:userConfigObj.secToken ,id: userConfigObj.userID,major:3,minor: 15,
				data1:$$(getHtmlId("poName")).getValue(),
				data2:$$(getHtmlId("poPhone")).getValue(),
				data3:$$(getHtmlId("poEmail")).getValue(),
				data4:$$(getHtmlId("poFax")).getValue(),
				data8:$$(getHtmlId("")).getValue(),
				data9:$$(getHtmlId("poExt")).getValue(),
				data10:$$(getHtmlId("poAdditional")).getValue(),
				data11:$$(getHtmlId("notes")).getValue(),
				data12:$$(getHtmlId("poFullName")).getValue(),
				data13:$$(getHtmlId("poReportingComboBox")).getValue(),
				data14:currentID,
				data15:$$(getHtmlId("poInactive")).getValue()
				}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 		rpcDUpdate.setUpdateAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);vo
					},
					'params': [myObject7]
				});
				
	 		
	 		
			var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:72,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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

	probationOfficerDataGird.onRowClick = function probationOfficerDataGird_onRowClick (event)// @startlock
	{// @endlock
		
		tempStore2 =  poJurisdiction;
		$$(getHtmlId('mainProbationOfficerCont')).setSplitPosition(450);
		$$(getHtmlId('poSpecificInfoCont')).setSplitPosition(2000);
	 	$$(getHtmlId('poPrevVersionCont')).setSplitPosition(1000);
	 	$$(getHtmlId('poCorrCont')).setSplitPosition(420);
				
		var name = sources.probationOfficerList.POName;
		var reportingMethod = sources.probationOfficerList.POPreferredReportingMethod;
		var ids = sources.probationOfficerList.POInformationID;
		var juri = sources.probationOfficerList.JurisdictionName;
		
		if(juri != "" && juri != null)
		{
			$$(getHtmlId('judgeJurisdiction')).setValue(juri);
		}
		else
		{
			$$(getHtmlId('judgeJurisdiction')).setValue("None");
		}
		
		if(reportingMethod != "" && reportingMethod != null)
		{
				
			$$(getHtmlId('poReportingComboBox')).setValue(reportingMethod);
		}
		
		else
		{
				
			$$(getHtmlId('poReportingComboBox')).setValue("None");
		}
		
		
		
	 
		///////////////////////////////////////////////////////////get data
		
		
		currentName = name;
		currentID = ids;

		fillCorrespondance();
	};// @lock

	dataGrid14.onRowClick = function dataGrid14_onRowClick (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('cityComboboxGrid'));
		grid.style.display = 'none';
		
		var recValue = $$(getHtmlId('cityComboboxGrid')).sourceAtt.getValue();
		$$(getHtmlId('pjCityComboBox')).setValue(recValue);
	};// @lock

	button49.click = function button49_click (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('cityComboboxGrid'));
		if(grid.style.display == 'none')
		{
			grid.style.display = 'block';
		}
		else
		{
			grid.style.display = 'none';
		}
	};// @lock

	pjCityComboBox.keyup = function pjCityComboBox_keyup (event)// @startlock
	{// @endlock
		if(event.keyCode ===13)
		{
			var currentInput = $$($comp.id+'_pjCityComboBox').getValue();
			$$($comp.id+'_pjCityComboBox').setValue(sources.city.CityListing);
			var grid = document.getElementById($comp.id+'_cityComboboxGrid');
			grid.style.display = 'none';
		}
		
		else
		{
			
			city=tempStore;
			sources.city.sync();

			var grid = document.getElementById($comp.id+'_cityComboboxGrid');
			grid.style.display = 'block';

			var currentInput = $$($comp.id+'_pjCityComboBox').getValue();//textInput.value;
			sources.city.query('CityListing = :1 order by CityListing', { params: [currentInput + "*"]});
		}
	};// @lock

	pjCityComboBox.blur = function pjCityComboBox_blur (event)// @startlock
	{// @endlock
		var grid = document.getElementById($comp.id+'_cityComboboxGrid');
			grid.style.display = 'none';
	};// @lock

	button48.click = function button48_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('pjSpecificInfoCont')).setSplitPosition(420);
		var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:63,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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

	button47.click = function button47_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('mainProbationJurisdictionCont')).setSplitPosition(1290);
	};// @lock

	button46.click = function button46_click (event)// @startlock
	{// @endlock
		var currentCity = $$($comp.id + "_pjCityComboBox").getValue();
		var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:83,data1:currentCity}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	city = rpcDSelects.getSelect(myObject5);
		
		if( city.length ===0)
		{
			
			var myObject7 = {token:'7836140170460568' ,id:'1',major:3,minor:18,data1:currentCity};
			rpcDInsert.setInsertAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject7]
				});
		}
		var myObject7 = {
				token:'7836140170460568' ,id:'1',major:3,minor: 13,
				data1:$$(getHtmlId("pjName")).getValue(),
				data2:$$(getHtmlId("pjPhone")).getValue(),
				data4:$$(getHtmlId("pjFax")).getValue(),
				data5:$$(getHtmlId("pjAddress")).getValue(),
				data6:$$(getHtmlId("pjCityComboBox")).getValue(),
				data7:$$(getHtmlId("pjState")).getValue(),
				data8:$$(getHtmlId("pjZip")).getValue(),
				data11:$$(getHtmlId("pjNotes")).getValue(),
				data14:currentID,
				data15:$$(getHtmlId("pjInactive")).getValue()
		}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 		rpcDInsert.setInsertAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject7]
				});
				
				
	 			 		
		var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:63,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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

	pjDataGird.onRowClick = function pjDataGird_onRowClick (event)// @startlock
	{// @endlock
		
		$$(getHtmlId('mainProbationJurisdictionsCont')).setSplitPosition(450);
		$$(getHtmlId('pjSpecificInfoCont')).setSplitPosition(2000);
	 	$$(getHtmlId('pjPrevVersionCont')).setSplitPosition(1000);
	 	$$(getHtmlId('pjCorrCont')).setSplitPosition(420);
		
		
		
		var name = sources.probationJurisdictionList.JurisdictionName;
		var city = sources.probationJurisdictionList.JurisdictionCity;
		var ids = sources.probationJurisdictionList.POJurisdictionID;
		if(city != "" && city != null)
		{
			$$(getHtmlId('pjCityComboBox')).setValue(city);
		}
		else
		{
			$$(getHtmlId('pjCityComboBox')).setValue("None");
		}
		

			 
		///////////////////////////////////////////////////////////get data
		
		
		currentName = name;
		currentID = ids;

		fillCorrespondance();
	};// @lock

	button42.click = function button42_click (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('judgeJurisdictionGrid'));
		if(grid.style.display == 'none')
		{
			grid.style.display = 'block';
		}
		else
		{
			grid.style.display = 'none';
		}
	};// @lock

	prosJurisdiction.keyup = function prosJurisdiction_keyup (event)// @startlock
	{// @endlock
		if(event.keyCode ===13)
		{
			debugger;
			var currentInput = $$($comp.id+'_prosJurisdiction').getValue();
			$$($comp.id+'_prosJurisdiction').setValue(sources.jurisdiction.CourtJurisdiction);
			var grid = document.getElementById($comp.id+'_judgeJurisdictionGrid');
			grid.style.display = 'none';
		}
		
		else
		{
			
			jurisdiction=tempStore2;
			sources.jurisdiction.sync();

			var grid = document.getElementById($comp.id+'_judgeJurisdictionGrid');
			grid.style.display = 'block';

			var currentInput = $$($comp.id+'_prosJurisdiction').getValue();//textInput.value;
			sources.jurisdiction.query('CourtJurisdiction = :1 order by CourtJurisdiction', { params: [currentInput + "*"]});
		}
	};// @lock

	prosJurisdiction.blur = function prosJurisdiction_blur (event)// @startlock
	{// @endlock
		var currentInput = $$($comp.id+'_prosJurisdiction').getValue();
			$$($comp.id+'_prosJurisdiction').setValue(sources.city.CityListing);
			var grid = document.getElementById($comp.id+'_judgeJurisdictionGrid');
			grid.style.display = 'none';
		
	};// @lock

	dataGrid12.onRowClick = function dataGrid12_onRowClick (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('judgeJurisdictionGrid'));
		grid.style.display = 'none';
		
		var recValue = $$(getHtmlId('judgeJurisdictionGrid')).sourceAtt.getValue();
		$$(getHtmlId('prosJurisdiction')).setValue(recValue);
	};// @lock

	dataGrid11.onRowClick = function dataGrid11_onRowClick (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('cityComboboxGrid'));
		grid.style.display = 'none';
		
		var recValue = $$(getHtmlId('cityComboboxGrid')).sourceAtt.getValue();
		$$(getHtmlId('prosCityComboBox')).setValue(recValue);
	};// @lock

	button41.click = function button41_click (event)// @startlock
	{// @endlock
		debugger;
		var grid = document.getElementById(getHtmlId('cityComboboxGrid'));
		if(grid.style.display == 'none')
		{
			grid.style.display = 'block';
		}
		else
		{
			grid.style.display = 'none';
		}
	};// @lock

	prosCityComboBox.keyup = function prosCityComboBox_keyup (event)// @startlock
	{// @endlock
		if(event.keyCode ===13)
		{
			var currentInput = $$($comp.id+'_prosCityComboBox').getValue();
			$$($comp.id+'_prosCityComboBox').setValue(sources.city.CityListing);
			var grid = document.getElementById($comp.id+'_cityComboboxGrid');
			grid.style.display = 'none';
		}
		
		else
		{
			
			city=tempStore;
			sources.city.sync();

			var grid = document.getElementById($comp.id+'_cityComboboxGrid');
			grid.style.display = 'block';

			var currentInput = $$($comp.id+'_prosCityComboBox').getValue();//textInput.value;
			sources.city.query('CityListing = :1 order by CityListing', { params: [currentInput + "*"]});
		}
	};// @lock

	prosCityComboBox.blur = function prosCityComboBox_blur (event)// @startlock
	{// @endlock
		var grid = document.getElementById($comp.id+'_cityComboboxGrid');
			grid.style.display = 'none';
	};// @lock

	button40.click = function button40_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('prosSpecificInfoCont')).setSplitPosition(420);
		
		var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:81,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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

	button39.click = function button39_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('mainProsecutorCont')).setSplitPosition(1290);
	};// @lock

	button38.click = function button38_click (event)// @startlock
	{// @endlock
		var currentCity = $$($comp.id + "_prosCityComboBox").getValue();
		var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:83,data1:currentCity}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	city = rpcDSelects.getSelect(myObject5);
		
		if( city.length ===0)
		{
			
			var myObject7 = {token:'7836140170460568' ,id:'1',major:3,minor:18,data1:currentCity};
			rpcDInsert.setInsertAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject7]
				});
		}
		var myObject7 = 
			{
				
				token:'7836140170460568' ,id:'1',major:3,minor: 17,
				data1:$$(getHtmlId("prosName")).getValue(),
				data2:$$(getHtmlId("prosPhone")).getValue(),
				data3:$$(getHtmlId("prosEmail")).getValue(),
				data4:$$(getHtmlId("prosFax")).getValue(),
				data5:$$(getHtmlId("prosAddress")).getValue(),
				data6:$$(getHtmlId("prosCityComboBox")).getValue(),
				data7:$$(getHtmlId("prosState")).getValue(),
				data8:$$(getHtmlId("prosZip")).getValue(),
				data9:$$(getHtmlId("prosExt")).getValue(),
				data10:$$(getHtmlId("prosAdditional")).getValue(),
				data11:$$(getHtmlId("prosNotes")).getValue(),
				data12:$$(getHtmlId("prosFullName")).getValue(),
				data13:$$(getHtmlId("prosReportingComboBox")).getValue(),
				data14:currentID,
				data15:$$(getHtmlId("prosInactive")).getValue(),
				data16:$$(getHtmlId("prosJurisdiction")).getValue()
			}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 		rpcDUpdate.setUpdateAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);vo
					},
					'params': [myObject7]
				});
				
	 		
			var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:81,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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

	prosecutorDataGird.onRowClick = function prosecutorDataGird_onRowClick (event)// @startlock
	{// @endlock
		tempStore2 =  jurisdiction;
		$$(getHtmlId('mainProsecutorCont')).setSplitPosition(450);
		$$(getHtmlId('prosSpecificInfoCont')).setSplitPosition(2000);
	 	$$(getHtmlId('prosPrevVersionCont')).setSplitPosition(1000);
	 	$$(getHtmlId('prosCorrCont')).setSplitPosition(420);
		
		
		
		var name = sources.prosecutorList.Prosecutor;
		var city = sources.prosecutorList.ProsecutorCity;
		var reportingMethod = sources.prosecutorList.ProsPreferredReportingMethod;
		var ids = sources.prosecutorList.ProsecutorsID;
		var juri = sources.prosecutorList.ProsecutorJurisdiction;
		if(juri != "" && juri != null)
		{
			$$(getHtmlId('prosJurisdiction')).setValue(juri);
		}
		else
		{
			$$(getHtmlId('prosJurisdiction')).setValue("None");
		}
		if(city != "" && city != null)
		{
			$$(getHtmlId('prosCityComboBox')).setValue(city);
		}
		else
		{
			$$(getHtmlId('prosCityComboBox')).setValue("None");
		}
		
		if(reportingMethod != "" && reportingMethod != null)
		{
				
			$$(getHtmlId('prosReportingComboBox')).setValue(reportingMethod);
		}
		else
		{
				
			$$(getHtmlId('prosReportingComboBox')).setValue("None");
		}
		///////////////////////////////////////////////////////////get data
		
		
		currentName = name;
		currentID = ids;
		fillCorrespondance();
		
	};// @lock

	dataGrid9.onRowClick = function dataGrid9_onRowClick (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('cityComboboxGrid'));
		grid.style.display = 'none';
		
		var recValue = $$(getHtmlId('cityComboboxGrid')).sourceAtt.getValue();
		$$(getHtmlId('omCityComboBox')).setValue(recValue);
	};// @lock

	button34.click = function button34_click (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('cityComboboxGrid'));
		if(grid.style.display == 'none')
		{
			grid.style.display = 'block';
		}
		else
		{
			grid.style.display = 'none';
		}
	};// @lock

	omCityComboBox.keyup = function omCityComboBox_keyup (event)// @startlock
	{// @endlock
		if(event.keyCode ===13)
		{
			var currentInput = $$($comp.id+'_omCityComboBox').getValue();
			$$($comp.id+'_omCityComboBox').setValue(sources.city.CityListing);
			var grid = document.getElementById($comp.id+'_cityComboboxGrid');
			grid.style.display = 'none';
		}
		
		else
		{
			
			city=tempStore;
			sources.city.sync();

			var grid = document.getElementById($comp.id+'_cityComboboxGrid');
			grid.style.display = 'block';

			var currentInput = $$($comp.id+'_omCityComboBox').getValue();//textInput.value;
			sources.city.query('CityListing = :1 order by CityListing', { params: [currentInput + "*"]});
		}
	};// @lock

	omCityComboBox.blur = function omCityComboBox_blur (event)// @startlock
	{// @endlock
		var grid = document.getElementById($comp.id+'_cityComboboxGrid');
			grid.style.display = 'none';
	};// @lock

	button33.click = function button33_click (event)// @startlock
	{// @endlock
		
		$$(getHtmlId('omSpecificInfoCont')).setSplitPosition(420);
		
		var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:54,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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

	button32.click = function button32_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('mainOtherMonitorsCont')).setSplitPosition(1290);
	};// @lock

	button31.click = function button31_click (event)// @startlock
	{// @endlock
		var currentCity = $$($comp.id + "_omCityComboBox").getValue();
		var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:83,data1:currentCity}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	city = rpcDSelects.getSelect(myObject5);
		
		if( city.length ===0)
		{
			
			var myObject7 = {token:'7836140170460568' ,id:'1',major:3,minor:18,data1:currentCity};
			rpcDInsert.setInsertAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject7]
				});
		}
			var myObject7 = 
			{
				
				token:'7836140170460568' ,id:'1',major:3,minor: 11,
				data1:$$(getHtmlId("omName")).getValue(),
				data2:$$(getHtmlId("omPhone")).getValue(),
				data3:$$(getHtmlId("omEmail")).getValue(),
				data4:$$(getHtmlId("omFax")).getValue(),
				data5:$$(getHtmlId("omAddress")).getValue(),
				data6:$$(getHtmlId("omCityComboBox")).getValue(),
				data7:$$(getHtmlId("omState")).getValue(),
				data8:$$(getHtmlId("omZip")).getValue(),
				data9:$$(getHtmlId("omExt")).getValue(),
				data10:$$(getHtmlId("omAdditional")).getValue(),
				data11:$$(getHtmlId("omNotes")).getValue(),
				data12:$$(getHtmlId("omFullName")).getValue(),
				data13:$$(getHtmlId("omReportingComboBox")).getValue(),
				data14:currentID,
				data15:$$(getHtmlId("omInactive")).getValue()
			}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 		rpcDUpdate.setUpdateAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);vo
					},
					'params': [myObject7]
				});
				
	 		
				
				
	 		
	 		
			var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:54,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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

	otherMonitorsDataGird.onRowClick = function otherMonitorsDataGird_onRowClick (event)// @startlock
	{// @endlock
		$$(getHtmlId('mainOtherMonitorsCont')).setSplitPosition(450);
		$$(getHtmlId('omSpecificInfoCont')).setSplitPosition(2000);
	 	$$(getHtmlId('omPrevVersionCont')).setSplitPosition(1000);
	 	$$(getHtmlId('omCorrCont')).setSplitPosition(420);
		
		
		
		var name = sources.otherMonitorList.OtherMonitors;
		var city = sources.otherMonitorList.OtherMonitorsCity;
		var reportingMethod = sources.otherMonitorList.OMPreferredReportingMethod;
		var ids = sources.otherMonitorList.OtherMonitorsID;
		if(city != "" && city != null)
		{
			$$(getHtmlId('omCityComboBox')).setValue(city);
		}
		else
		{
			$$(getHtmlId('omCityComboBox')).setValue("None");
		}
		
		if(reportingMethod != "" && reportingMethod != null)
		{
				
			$$(getHtmlId('omReportingComboBox')).setValue(reportingMethod);
		}
		else
		{
				
			$$(getHtmlId('omReportingComboBox')).setValue("None");
		}
		
		
		
	 
		///////////////////////////////////////////////////////////get data
		
		
		currentName = name;
		currentID = ids;

		fillCorrespondance();
	};// @lock

	judgeJurisdictionGrid.onRowClick = function judgeJurisdictionGrid_onRowClick (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('judgeJurisdictionGrid'));
		grid.style.display = 'none';
		
		var recValue = $$(getHtmlId('judgeJurisdictionGrid')).sourceAtt.getValue();
		$$(getHtmlId('judgeJurisdiction')).setValue(recValue);
	};// @lock

	button27.click = function button27_click (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('judgeJurisdictionGrid'));
		if(grid.style.display == 'none')
		{
			grid.style.display = 'block';
		}
		else
		{
			grid.style.display = 'none';
		}
	};// @lock

	judgeJurisdiction.keyup = function judgeJurisdiction_keyup (event)// @startlock
	{// @endlock
		if(event.keyCode ===13)
		{
			var currentInput = $$($comp.id+'_judgeJurisdiction').getValue();
			$$($comp.id+'_judgeJurisdiction').setValue(sources.jurisdiction.CourtJurisdiction);
			var grid = document.getElementById($comp.id+'_judgeJurisdictionGrid');
			grid.style.display = 'none';
		}
		
		else
		{
			
			jurisdiction=tempStore2;
			sources.jurisdiction.sync();

			var grid = document.getElementById($comp.id+'_judgeJurisdictionGrid');
			grid.style.display = 'block';

			var currentInput = $$($comp.id+'_judgeJurisdiction').getValue();//textInput.value;
			sources.jurisdiction.query('CourtJurisdiction = :1 order by CourtJurisdiction', { params: [currentInput + "*"]});
		}
	};// @lock

	judgeJurisdiction.blur = function judgeJurisdiction_blur (event)// @startlock
	{// @endlock
		var currentInput = $$($comp.id+'_judgeJurisdiction').getValue();
			$$($comp.id+'_judgeJurisdiction').setValue(sources.city.CityListing);
			var grid = document.getElementById($comp.id+'_judgeJurisdictionGrid');
			grid.style.display = 'none';
		
	};// @lock

	dataGrid7.onRowClick = function dataGrid7_onRowClick (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('cityComboboxGrid'));
		grid.style.display = 'none';
		
		var recValue = $$(getHtmlId('cityComboboxGrid')).sourceAtt.getValue();
		$$(getHtmlId('cityComboBox')).setValue(recValue);
	};// @lock

	button26.click = function button26_click (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('cityComboboxGrid'));
		if(grid.style.display == 'none')
		{
			grid.style.display = 'block';
		}
		else
		{
			grid.style.display = 'none';
		}
	};// @lock

	textField50.keyup = function textField50_keyup (event)// @startlock
	{// @endlock
		if(event.keyCode ===13)
		{
			var currentInput = $$($comp.id+'_cityComboBox').getValue();
			$$($comp.id+'_cityComboBox').setValue(sources.city.CityListing);
			var grid = document.getElementById($comp.id+'_cityComboboxGrid');
			grid.style.display = 'none';
		}
		
		else
		{
			
			city=tempStore;
			sources.city.sync();

			var grid = document.getElementById($comp.id+'_cityComboboxGrid');
			grid.style.display = 'block';

			var currentInput = $$($comp.id+'_cityComboBox').getValue();//textInput.value;
			sources.city.query('CityListing = :1 order by CityListing', { params: [currentInput + "*"]});
		}
	};// @lock

	textField50.blur = function textField50_blur (event)// @startlock
	{// @endlock
			var grid = document.getElementById($comp.id+'_cityComboboxGrid');
			grid.style.display = 'none';
	};// @lock

	button25.click = function button25_click (event)// @startlock
	{// @endlock
			 
		
		$$(getHtmlId('container3')).setSplitPosition(420);
		
		var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:45,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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

	closeJudgeCurrentButton.click = function closeJudgeCurrentButton_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('mainJudgeCont')).setSplitPosition(1290);
	};// @lock

	button24.click = function button24_click (event)// @startlock
	{// @endlock
		var currentCity = $$($comp.id + "_cityComboBox").getValue();
		var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:83,data1:currentCity}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	city = rpcDSelects.getSelect(myObject5);
		
		if( city.length ===0)
		{
			
			var myObject7 = {token:'7836140170460568' ,id:'1',major:3,minor:18,data1:currentCity};
			rpcDInsert.setInsertAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject7]
				});
		}
			var myObject7 = 
			{
				
				token:'7836140170460568' ,id:'1',major:3,minor:9,
				data1:$$(getHtmlId("judgeNameField")).sourceAtt.getValue(),
				data2:$$(getHtmlId("judgePhoneField")).sourceAtt.getValue(),
				data3:$$(getHtmlId("judgeEmailField")).sourceAtt.getValue(),
				data4:$$(getHtmlId("judgeFaxField")).sourceAtt.getValue(),
				data5:$$(getHtmlId("judgeAddressField")).getValue(),
				data6:$$(getHtmlId("cityComboBox")).getValue(),
				data7:$$(getHtmlId("judgeStateField")).sourceAtt.getValue(),
				data8:$$(getHtmlId("judgeZipField")).sourceAtt.getValue(),
				data9:$$(getHtmlId("judgeExtField")).sourceAtt.getValue(),
				data10:$$(getHtmlId("judgeMobileField")).sourceAtt.getValue(),
				data11:$$(getHtmlId("judgeNotesField")).sourceAtt.getValue(),
				data12:$$(getHtmlId("judgeFullNameField")).sourceAtt.getValue(),
				data13:$$(getHtmlId("reportingComboBox")).getValue(),
				data14:currentID,
				data15:$$(getHtmlId("judgeInactiveCheckBox")).getValue(),
				data16:$$(getHtmlId("judgeJurisdiction")).getValue()
			}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 		rpcDUpdate.setUpdateAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject7]
				});
				
	 		
	 		
			var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:45,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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

	judgeFullList.onRowClick = function judgeFullList_onRowClick (event)// @startlock
	{// @endlock
		tempStore2 =  jurisdiction;
	$$(getHtmlId('mainJudgeCont')).setSplitPosition(450);
		$$(getHtmlId('container3')).setSplitPosition(2000);
	 	$$(getHtmlId('container9')).setSplitPosition(1000);
	 	$$(getHtmlId('container6')).setSplitPosition(420);
		
		
		
		var name = sources.judgeList.Judge;
		var city = sources.judgeList.JudgeCity;
		var reportingMethod = sources.judgeList.JPreferredReportingMethod;
		var ids = sources.judgeList.JudgesID;
		var juri = sources.judgeList.JudgeJurisdiction;
		if(juri != "" && juri != null)
		{
			$$(getHtmlId('judgeJurisdiction')).setValue(juri);
		}
		else
		{
			$$(getHtmlId('judgeJurisdiction')).setValue("None");
		}
		
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
		
		
		
	 
		///////////////////////////////////////////////////////////get data
		
		
		currentName = name;
		currentID = ids;

		fillCorrespondance();
	};// @lock

	dataGrid5.onRowClick = function dataGrid5_onRowClick (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('cityComboboxGrid'));
		grid.style.display = 'none';
		
		var recValue = $$(getHtmlId('cityComboboxGrid')).sourceAtt.getValue();
		$$(getHtmlId('cityComboBox')).setValue(recValue);
	};// @lock

	button19.click = function button19_click (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('cityComboboxGrid'));
		if(grid.style.display == 'none')
		{
			grid.style.display = 'block';
		}
		else
		{
			grid.style.display = 'none';
		}
	};// @lock

	textField33.keyup = function textField33_keyup (event)// @startlock
	{// @endlock
		if(event.keyCode ===13)
		{
			var currentInput = $$($comp.id+'_cityComboBox').getValue();
			$$($comp.id+'_cityComboBox').setValue(sources.city.CityListing);
			var grid = document.getElementById($comp.id+'_cityComboboxGrid');
			grid.style.display = 'none';
		}
		
		else
		{
			
			city=tempStore;
			sources.city.sync();

			var grid = document.getElementById($comp.id+'_cityComboboxGrid');
			grid.style.display = 'block';

			var currentInput = $$($comp.id+'_cityComboBox').getValue();//textInput.value;
			sources.city.query('CityListing = :1 order by CityListing', { params: [currentInput + "*"]});
		}
	};// @lock

	textField33.blur = function textField33_blur (event)// @startlock
	{// @endlock
		var grid = document.getElementById($comp.id+'_cityComboboxGrid');
			grid.style.display = 'none';
	};// @lock

	button18.click = function button18_click (event)// @startlock
	{// @endlock
			 

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

	button17.click = function button17_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('mainAssessorCont')).setSplitPosition(1290);
	};// @lock

	button13.click = function button13_click (event)// @startlock
	{// @endlock
		var currentCity = $$($comp.id + "_cityComboBox").getValue();
		var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:83,data1:currentCity}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	city = rpcDSelects.getSelect(myObject5);
		
		if( city.length ===0)
		{
			
			var myObject7 = {token:'7836140170460568' ,id:'1',major:3,minor:18,data1:currentCity};
			rpcDInsert.setInsertAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject7]
				});
		}
		

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
		
		
		
		
		
		$$(getHtmlId('mainDhsCont')).setSplitPosition(450);
		$$(getHtmlId('container3')).setSplitPosition(2000);
	 	$$(getHtmlId('container9')).setSplitPosition(1000);
	 	$$(getHtmlId('container6')).setSplitPosition(420);
		
		
		
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
		
		
		
		
		currentName = name;
		currentID = ids;

		fillCorrespondance();
		
		
	};// @lock

	dataGrid3.onRowClick = function dataGrid3_onRowClick (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('cityComboboxGrid'));
		grid.style.display = 'none';
		
		var recValue = $$(getHtmlId('cityComboboxGrid')).sourceAtt.getValue();
		$$(getHtmlId('cityComboBox')).setValue(recValue);
	};// @lock

	button9.click = function button9_click (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('cityComboboxGrid'));
		if(grid.style.display == 'none')
		{
			grid.style.display = 'block';
		}
		else
		{
			grid.style.display = 'none';
		}
	};// @lock

	textField1.keyup = function textField1_keyup (event)// @startlock
	{// @endlock
		if(event.keyCode ===13)
		{
			var currentInput = $$($comp.id+'_cityComboBox').getValue();
			$$($comp.id+'_cityComboBox').setValue(sources.city.CityListing);
			var grid = document.getElementById($comp.id+'_cityComboboxGrid');
			grid.style.display = 'none';
		}
		
		else
		{
			
			city=tempStore;
			sources.city.sync();

			var grid = document.getElementById($comp.id+'_cityComboboxGrid');
			grid.style.display = 'block';

			var currentInput = $$($comp.id+'_cityComboBox').getValue();//textInput.value;
			sources.city.query('CityListing = :1 order by CityListing', { params: [currentInput + "*"]});
		}
	};// @lock

	textField1.blur = function textField1_blur (event)// @startlock
	{// @endlock
		var grid = document.getElementById($comp.id+'_cityComboboxGrid');
			grid.style.display = 'none';
	};// @lock

	button8.click = function button8_click (event)// @startlock
	{// @endlock
		
		
		$$(getHtmlId('container3')).setSplitPosition(420);
		
		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:27,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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

	closeCourtJurisdictionCurrentButton.click = function closeCourtJurisdictionCurrentButton_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('mainCourtJurisdictionCont')).setSplitPosition(1290);
	};// @lock

	button7.click = function button7_click (event)// @startlock
	{// @endlock
		var currentCity = $$($comp.id + "_cityComboBox").getValue();
		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:83,data1:currentCity}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	city = rpcDSelects.getSelect(myObject5);
		
		if( city.length ===0)
		{
			
			var myObject7 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:18,data1:currentCity};
			rpcDInsert.setInsertAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject7]
				});
		}
		
		
		//run update if needed
		
			var myObject7 = 
			{
				token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:4,
				data1:$$(getHtmlId("courtJurisdictionNameField")).getValue(),
				data2:$$(getHtmlId("courtJurisdictionPhoneField")).getValue(),
				data3:$$(getHtmlId("courtJurisdictionEmailField")).getValue(),
				data4:$$(getHtmlId("courtJurisdictionFaxField")).getValue(),
				data5:$$(getHtmlId("courtJurisdictionAddressField")).getValue(),
				data6:$$(getHtmlId("cityComboBox")).getValue(),
				data7:$$(getHtmlId("courtJurisdictionStateField")).getValue(),
				data8:$$(getHtmlId("courtJurisdictionZipField")).getValue(),
				data9:$$(getHtmlId("courtJurisdictionExtField")).getValue(),
				data10:$$(getHtmlId("courtJurisdictionAlternateField")).getValue(),
				data11:$$(getHtmlId("courtJurisdictionNotesField")).getValue(),
				data12:$$(getHtmlId("courtJurisdictionDatabaseField")).getValue(),
				data13:$$(getHtmlId("reportingComboBox")).getValue(),
				data14:currentID,
				data15:$$(getHtmlId("courtJurisdictionInactiveCheckBox")).getValue(),
				data16:$$(getHtmlId("courtJurisdictionFormatField")).getValue()
				
				
				
			}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 		
	 		rpcDUpdate.setUpdateAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject7]
				});
				
	 		
			var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:27,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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

	courtJurisdictionFullList.onRowClick = function courtJurisdictionFullList_onRowClick (event)// @startlock
	{// @endlock
		
		
		
		
		
		$$(getHtmlId('mainCourtJurisdictionCont')).setSplitPosition(450);
		$$(getHtmlId('container3')).setSplitPosition(2000);
	 	$$(getHtmlId('container9')).setSplitPosition(1000);
	 	$$(getHtmlId('container6')).setSplitPosition(420);
		
		
		
		var name = sources.courtJurisdictionList.CourtJurisdiction;
		var city = sources.courtJurisdictionList.CourtJurisdictionCity;
		var reportingMethod = sources.courtJurisdictionList.CourtJurisdictionPreferredReportingMethod;
		var ids = sources.courtJurisdictionList.CourtJurisdictionID;
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
		
		
		
	 
		///////////////////////////////////////////////////////////get data
		
		currentName = name;
		
		currentID = ids;
		
		
		
		fillCorrespondance();
		
		
		
		
	};// @lock

	dataGrid1.onRowClick = function dataGrid1_onRowClick (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('cityComboboxGrid'));
		grid.style.display = 'none';
		
		var recValue = $$(getHtmlId('cityComboboxGrid')).sourceAtt.getValue();
		$$(getHtmlId('attCityComboBox')).setValue(recValue);
	};// @lock

	attCityComboBox.keyup = function attCityComboBox_keyup (event)// @startlock
	{// @endlock
		if(event.keyCode ===13)
		{
			var currentInput = $$($comp.id+'_attCityComboBox').getValue();
			$$($comp.id+'_attCityComboBox').setValue(sources.city.CityListing);
			var grid = document.getElementById($comp.id+'_cityComboboxGrid');
			grid.style.display = 'none';
		}
		
		else
		{
			
			city=tempStore;
			sources.city.sync();

			var grid = document.getElementById($comp.id+'_cityComboboxGrid');
			grid.style.display = 'block';

			var currentInput = $$($comp.id+'_attCityComboBox').getValue();//textInput.value;
			sources.city.query('CityListing = :1 order by CityListing', { params: [currentInput + "*"]});
		}
	};// @lock

	attCityComboBox.blur = function attCityComboBox_blur (event)// @startlock
	{// @endlock
		var grid = document.getElementById($comp.id+'_cityComboboxGrid');
			grid.style.display = 'none';
	};// @lock

	button16.click = function button16_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('attSpecificInfoCont')).setSplitPosition(420);
		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:18,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	
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

	button15.click = function button15_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('mainAttorneyCont')).setSplitPosition(1290);
	};// @lock

	button14.click = function button14_click (event)// @startlock
	{// @endlock
			var currentCity = $$($comp.id + "_attCityComboBox").getValue();
		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:83,data1:currentCity}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	city = rpcDSelects.getSelect(myObject5);
		
		if( city.length ===0)
		{
			
			var myObject7 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:18,data1:currentCity};
			rpcDInsert.setInsertAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject7]
				});
		}
		
			var myObject7 = 
			{
				token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:3,
				data1:$$(getHtmlId("attName")).getValue(),
				data2:$$(getHtmlId("attPhone")).getValue(),
				data3:$$(getHtmlId("attEmail")).getValue(),
				data4:$$(getHtmlId("attFax")).getValue(),
				data5:$$(getHtmlId("attAddress")).getValue(),
				data6:$$(getHtmlId("attCityComboBox")).getValue(),
				data7:$$(getHtmlId("attState")).getValue(),
				data8:$$(getHtmlId("attZip")).getValue(),
				data9:$$(getHtmlId("attExt")).getValue(),
				data10:$$(getHtmlId("attAdditional")).getValue(),
				data11:$$(getHtmlId("attNotes")).getValue(),
				data12:$$(getHtmlId("attFullName")).getValue(),
				data13:$$(getHtmlId("attReportingComboBox")).getValue(),
				data14:currentID,
				data15:$$(getHtmlId("attInactive")).getValue(),
				data16:$$(getHtmlId("attPublicDef")).getValue(),
				data17:$$(getHtmlId("attStaffInfo")).getValue()
				
				
			}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 		
	 		rpcDUpdate.setUpdateAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject7]
				});

		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:18,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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

	attorneyDataGird.onRowClick = function attorneyDataGird_onRowClick (event)// @startlock
	{// @endlock
		
		
		
		
		$$(getHtmlId('mainAttorneyCont')).setSplitPosition(450);
		$$(getHtmlId('attSpecificInfoCont')).setSplitPosition(2000);
	 	$$(getHtmlId('attPrevVersionCont')).setSplitPosition(1000);
	 	$$(getHtmlId('attCorrCont')).setSplitPosition(420);
		
		
		/*
		var name = sources.attorneyList.AttorneyName;
		var city = sources.attorneyList.AttorneyCity;
		var reportingMethod = sources.attorneyList.AttPreferredReportingMethod;
		var ids = sources.attorneyList.AttorneyInformationID;
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
		
		
		
		
		
		
		///////////////////////////////////////////////////////////get data
		
		currentName = name;
		
		currentID = ids;
		
		fillCorrespondance();
		*/
	};// @lock

	cityComboboxGrid.onRowClick = function cityComboboxGrid_onRowClick (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('cityComboboxGrid'));
		grid.style.display = 'none';
		
		var recValue = $$(getHtmlId('cityComboboxGrid')).sourceAtt.getValue();
		$$(getHtmlId('cityComboBox')).setValue(recValue);
	};// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('cityComboboxGrid'));
		if(grid.style.display == 'none')
		{
			grid.style.display = 'block';
		}
		else
		{
			grid.style.display = 'none';
		}
	};// @lock

	cityComboBox.keyup = function cityComboBox_keyup (event)// @startlock
	{// @endlock
		
		if(event.keyCode ===13)
		{
			var currentInput = $$($comp.id+'_cityComboBox').getValue();
			$$($comp.id+'_cityComboBox').setValue(sources.city.CityListing);
			var grid = document.getElementById($comp.id+'_cityComboboxGrid');
			grid.style.display = 'none';
		}
		
		else
		{
			
			city=tempStore;
			sources.city.sync();

			var grid = document.getElementById($comp.id+'_cityComboboxGrid');
			grid.style.display = 'block';

			var currentInput = $$($comp.id+'_cityComboBox').getValue();//textInput.value;
			sources.city.query('CityListing = :1 order by CityListing', { params: [currentInput + "*"]});
		}
	};// @lock

	cityComboBox.blur = function cityComboBox_blur (event)// @startlock
	{// @endlock
		var grid = document.getElementById($comp.id+'_cityComboboxGrid');
			grid.style.display = 'none';
	};// @lock

	previousVersionButton.click = function previousVersionButton_click (event)// @startlock
	{// @endlock
			 
		$$(getHtmlId('container3')).setSplitPosition(420);
		//var name = $$(getHtmlId('assessorNameField')).getValue();
		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:5,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	
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
		debugger;
		var currentCity = $$($comp.id + "_cityComboBox").getValue();
		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:83,data1:currentCity}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	city = rpcDSelects.getSelect(myObject5);
		
		if( city.length ===0)
		{
			
			var myObject7 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:18,data1:currentCity};
			rpcDInsert.setInsertAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject7]
				});
		}
		var phone = $$(getHtmlId("assessorPhoneField")).getValue();
		var fax = $$(getHtmlId("assesorFaxField")).getValue();
		var mobile = $$(getHtmlId("assesorMobileField")).getValue();
		
		
		var myObject7 = {
    token: userConfigObj.secToken,
    id: userConfigObj.userID,
    major: 3,
    minor: 0,
    data1: $$(getHtmlId("assessorNameField")).getValue(),
    data2: phone,
    data3: $$(getHtmlId("assesorEmailField")).getValue(),
    data4: fax,
    data5: $$(getHtmlId("assesorAddressField")).getValue(),
    data6: $$(getHtmlId("cityComboBox")).getValue(),
    data7: $$(getHtmlId("assesorStateField")).getValue(),
    data8: $$(getHtmlId("assesorZipField")).getValue(),
    data9: $$(getHtmlId("assesorExtField")).getValue(),
    data10: mobile,
    data11: $$(getHtmlId("assesorNotesField")).getValue(),
    data12: $$(getHtmlId("assessorFullNameField")).getValue(),
    data13: $$(getHtmlId("reportingComboBox")).getValue(),
    data14: currentID,
    data15: $$(getHtmlId("assessorInactiveCheckBox")).getValue()
}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID

	rpcDUpdate.setUpdateAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject7]
				});



var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:5,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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

	assessorFullList.onRowClick = function assessorFullList_onRowClick (event)// @startlock
	{// @endlock
		
		sources.reporting;

		$$(getHtmlId('mainAssessorCont')).setSplitPosition(450);
		$$(getHtmlId('container3')).setSplitPosition(2000);
	 	$$(getHtmlId('container9')).setSplitPosition(1000);
	 	$$(getHtmlId('container6')).setSplitPosition(420);
		
		
		
		var name = sources.assessorList.AssessorName;
		var city = sources.assessorList.AssessorCity;
		var reportingMethod = sources.assessorList.AssPreferredReportingMethod;
		var ids = sources.assessorList.AssessorInformationID;
		if(city != "" && city != null && city != "null")
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
		
		
		///////////////////////////////////////////////////////////get data
		
		currentName = name;
		
		currentID = ids;
		
		
		fillCorrespondance();
		
		
		
		
	};// @lock

	newProbJ.click = function newProbJ_click (event)// @startlock
	{// @endlock
		newPJ.style.zIndex = '10';
		newPJ.style.visibility = 'visible';
		WAF.loadComponent ( {											
		id: 	$comp.id+'_newProbationJurisdictionComponent', 											
		path: 	'/CAPCIS.waPage/referralProbationJurisdictions.waComponent'});
	};// @lock

	newCourtJ.click = function newCourtJ_click (event)// @startlock
	{// @endlock
		newCJ.style.zIndex = '10';
		newCJ.style.visibility = 'visible';
		WAF.loadComponent ( {											
		id: 	$comp.id+'_newCourtJurisdictionComponent', 											
		path: 	'/CAPCIS.waPage/referralNewCourtJurisdictions.waComponent'});
	};// @lock

	newOtherM.click = function newOtherM_click (event)// @startlock
	{// @endlock
		newOther.style.zIndex = '10';
		newOther.style.visibility = 'visible';
		WAF.loadComponent ( {											
		id: 	$comp.id+'_newOtherMoniterComponent', 											
		path: 	'/CAPCIS.waPage/referralNewOtherMonitors.waComponent'});
	};// @lock

	newPros.click = function newPros_click (event)// @startlock
	{// @endlock
		newProsecutor.style.zIndex = '10';
		newProsecutor.style.visibility = 'visible';
		WAF.loadComponent ( {											
		id: 	$comp.id+'_newProsecutorsComponent', 											
		path: 	'/CAPCIS.waPage/referralProsecutors.waComponent'});
	};// @lock

	newPOfficer.click = function newPOfficer_click (event)// @startlock
	{// @endlock
		newPO.style.zIndex = '10';
		newPO.style.visibility = 'visible';
		WAF.loadComponent ( {											
		id: 	$comp.id+'_newPOComponent', 											
		path: 	'/CAPCIS.waPage/referralProbationOfficers.waComponent'});
	};// @lock

	newJudge.click = function newJudge_click (event)// @startlock
	{// @endlock
		newJudges.style.zIndex = '10';
		newJudges.style.visibility = 'visible';
		WAF.loadComponent ( {											
		id: 	$comp.id+'_newJudgeComponent', 											
		path: 	'/CAPCIS.waPage/referralNewJudges.waComponent'});
	
	};// @lock

	newDHSO.click = function newDHSO_click (event)// @startlock
	{// @endlock
		newDHS.style.zIndex = '10';
		newDHS.style.visibility = 'visible';
		WAF.loadComponent ( {											
		id: 	$comp.id+'_newDHSOfficerComponent', 											
		path: 	'/CAPCIS.waPage/referralNewDHSOfficers.waComponent'});
	};// @lock

	newAtt.click = function newAtt_click (event)// @startlock
	{// @endlock
		newAttorney.style.zIndex = '10';
		newAttorney.style.visibility = 'visible';
		WAF.loadComponent ( {											
		id: 	$comp.id+'_newAttorneyComponent', 											
		path: 	'/CAPCIS.waPage/referralNewAttorneys.waComponent'});
	};// @lock

	newAss.click = function newAss_click (event)// @startlock
	{// @endlock
		
		newAssessor.style.zIndex = '10';
		newAssessor.style.visibility = 'visible';
		WAF.loadComponent ( {											
		id: 	$comp.id+'_newAssesorComponent', 											
		path: 	'/CAPCIS.waPage/referralNewAssessors.waComponent'});
	};// @lock















































	courtJurisdictionButton.click = function courtJurisdictionButton_click (event)// @startlock
	{// @endlock
		changeWindow("CourtJursidictionContainer","CourtJursidictionComponent");
		var searchCrit = $$(getHtmlId('searchField')).getValue();
		var searchType = $$(getHtmlId('searchOptionsBox')).getValue();
		
		
		/*
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id+'_CourtJursidictionComponent', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/referralCourtJurisdictions.waComponent',		
		userData: 	{searchCrit: searchCrit, searchType: searchType},					//data that you want to send to the webcomponent
		onSuccess: function () {}	
		});
		*/
		//var test = $$(getHtmlId("CourtJursidictionContainer"));
		//test.domNode.style.visibility = "visible";
		//$$(getHtmlId("CourtJursidictionContainer")).domNode.style.visibility = "visible";
		//$$(getHtmlId("CourtJursidictionContainer")).domNode.style.zIndex = "10";
		//$$(getHtmlId(oldRefVis)).domNode.style.visibility = "hidden";
		//$$(getHtmlId(oldRefVis)).domNode.style.zIndex = "0";
		//oldRefVis = id;
		
	};// @lock

	probationJurisdictionButton.click = function probationJurisdictionButton_click (event)// @startlock
	{// @endlock
		changeWindow("ProbationJursidictionContainer","ProbationJursidictionComponent");
		var searchCrit = $$(getHtmlId('searchField')).getValue();
		var searchType = $$(getHtmlId('searchOptionsBox')).getValue();
		
		/*
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id+'_ProbationJursidictionComponent', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/referralProbationJurisdictions.waComponent',
		userData: 	{searchCrit: searchCrit, searchType: searchType},			//data that you want to send to the webcomponent
		onSuccess: function () {}
		});
		*/
		
		
		
	};// @lock

	probationOfficerButton.click = function probationOfficerButton_click (event)// @startlock
	{// @endlock
		changeWindow("ProbationOfficerContainer","ProbationOfficerComponent");
		var searchCrit = $$(getHtmlId('searchField')).getValue();
		var searchType = $$(getHtmlId('searchOptionsBox')).getValue();
		
		/*
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id+'_ProbationOfficerComponent', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/referralProbationOfficers.waComponent',	
		userData: 	{searchCrit: searchCrit, searchType: searchType},				//data that you want to send to the webcomponent
		onSuccess: function () {}
		});
		*/
	};// @lock

	prosecutorsButton.click = function prosecutorsButton_click (event)// @startlock
	{// @endlock
		changeWindow("ProsecutorContainer","ProsecutorComponent");
		var searchCrit = $$(getHtmlId('searchField')).getValue();
		var searchType = $$(getHtmlId('searchOptionsBox')).getValue();
		
		
		/* WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id+'_ProsecutorComponent', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/referralProsecutors.waComponent',
		userData: 	{searchCrit: searchCrit, searchType: searchType},				//data that you want to send to the webcomponent
		onSuccess: function () {}
		});
		*/
	};// @lock

	otherButton.click = function otherButton_click (event)// @startlock
	{// @endlock
		changeWindow("OtherMonitorContainer","OtherMonitorComponent");
		var searchCrit = $$(getHtmlId('searchField')).getValue();
		var searchType = $$(getHtmlId('searchOptionsBox')).getValue();
		
		
		/* WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id+'_OtherMonitorComponent', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/referralOtherMonitors.waComponent',
		userData: 	{searchCrit: searchCrit, searchType: searchType},				//data that you want to send to the webcomponent
		onSuccess: function () {}
		});
		*/
	};// @lock

	judgesButton.click = function judgesButton_click (event)// @startlock
	{// @endlock
		changeWindow("JudgeContainer","JudgeComponent");
		var searchCrit = $$(getHtmlId('searchField')).getValue();
		var searchType = $$(getHtmlId('searchOptionsBox')).getValue();
		
		
		/* WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id+'_JudgeComponent', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/referralJudges.waComponent',
		userData: 	{searchCrit: searchCrit, searchType: searchType},			//data that you want to send to the webcomponent
		onSuccess: function () {}
		});
		*/
	};// @lock

	dhsButton.click = function dhsButton_click (event)// @startlock
	{// @endlock
		changeWindow("DHSOfficerContainer","DHSOfficerComponent");		
		var searchCrit = $$(getHtmlId('searchField')).getValue();
		var searchType = $$(getHtmlId('searchOptionsBox')).getValue();
		
		
		/* WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id+'_DHSOfficerComponent', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/referralDHSOfficers.waComponent',
		userData: 	{searchCrit: searchCrit, searchType: searchType},					//designate the webcomponent to load
		onSuccess: function () {}							//data that you want to send to the webcomponent
		});
		*/
		
	};// @lock

	assessorButton.click = function assessorButton_click (event)// @startlock
	{// @endlock
		changeWindow("AssessorContainer","AssessorComponent");
		var searchCrit = $$(getHtmlId('searchField')).getValue();
		var searchType = $$(getHtmlId('searchOptionsBox')).getValue();
		
		
		/* WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id+'_AssessorComponent', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/referralAssessors.waComponent',
		userData: 	{searchCrit: searchCrit, searchType: searchType},					//designate the webcomponent to load
		onSuccess: function () {}							//data that you want to send to the webcomponent
		});
		
		*/

	};// @lock

	SearchReferralButton.click = function SearchReferralButton_click (event)// @startlock
	{// @endlock
		
		getTotals();
		refreshData();

	};// @lock

	attorneyButton.click = function attorneyButton_click (event)// @startlock
	{// @endlock
		
		changeWindow("AttorneyContainer","AttorneyComponent");
		var searchCrit = $$(getHtmlId('searchField')).getValue();
		var searchType = $$(getHtmlId('searchOptionsBox')).getValue();
		
		
		/*WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id+'_AttorneyComponent', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/referralAttorneys.waComponent',
		userData: 	{searchCrit: searchCrit, searchType: searchType},					//designate the webcomponent to load
		onSuccess: function () {}							//data that you want to send to the webcomponent
		});
		*/
		
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_dataGrid16", "onRowClick", dataGrid16.onRowClick, "WAF");
	WAF.addListener(this.id + "_textField123", "keyup", textField123.keyup, "WAF");
	WAF.addListener(this.id + "_textField123", "blur", textField123.blur, "WAF");
	WAF.addListener(this.id + "_button56", "click", button56.click, "WAF");
	WAF.addListener(this.id + "_button55", "click", button55.click, "WAF");
	WAF.addListener(this.id + "_button54", "click", button54.click, "WAF");
	WAF.addListener(this.id + "_button53", "click", button53.click, "WAF");
	WAF.addListener(this.id + "_probationOfficerDataGird", "onRowClick", probationOfficerDataGird.onRowClick, "WAF");
	WAF.addListener(this.id + "_dataGrid14", "onRowClick", dataGrid14.onRowClick, "WAF");
	WAF.addListener(this.id + "_button49", "click", button49.click, "WAF");
	WAF.addListener(this.id + "_pjCityComboBox", "keyup", pjCityComboBox.keyup, "WAF");
	WAF.addListener(this.id + "_pjCityComboBox", "blur", pjCityComboBox.blur, "WAF");
	WAF.addListener(this.id + "_button48", "click", button48.click, "WAF");
	WAF.addListener(this.id + "_button47", "click", button47.click, "WAF");
	WAF.addListener(this.id + "_button46", "click", button46.click, "WAF");
	WAF.addListener(this.id + "_pjDataGird", "onRowClick", pjDataGird.onRowClick, "WAF");
	WAF.addListener(this.id + "_button42", "click", button42.click, "WAF");
	WAF.addListener(this.id + "_prosJurisdiction", "keyup", prosJurisdiction.keyup, "WAF");
	WAF.addListener(this.id + "_prosJurisdiction", "blur", prosJurisdiction.blur, "WAF");
	WAF.addListener(this.id + "_dataGrid12", "onRowClick", dataGrid12.onRowClick, "WAF");
	WAF.addListener(this.id + "_dataGrid11", "onRowClick", dataGrid11.onRowClick, "WAF");
	WAF.addListener(this.id + "_button41", "click", button41.click, "WAF");
	WAF.addListener(this.id + "_prosCityComboBox", "keyup", prosCityComboBox.keyup, "WAF");
	WAF.addListener(this.id + "_prosCityComboBox", "blur", prosCityComboBox.blur, "WAF");
	WAF.addListener(this.id + "_button40", "click", button40.click, "WAF");
	WAF.addListener(this.id + "_button39", "click", button39.click, "WAF");
	WAF.addListener(this.id + "_button38", "click", button38.click, "WAF");
	WAF.addListener(this.id + "_prosecutorDataGird", "onRowClick", prosecutorDataGird.onRowClick, "WAF");
	WAF.addListener(this.id + "_dataGrid9", "onRowClick", dataGrid9.onRowClick, "WAF");
	WAF.addListener(this.id + "_button34", "click", button34.click, "WAF");
	WAF.addListener(this.id + "_omCityComboBox", "keyup", omCityComboBox.keyup, "WAF");
	WAF.addListener(this.id + "_omCityComboBox", "blur", omCityComboBox.blur, "WAF");
	WAF.addListener(this.id + "_button33", "click", button33.click, "WAF");
	WAF.addListener(this.id + "_button32", "click", button32.click, "WAF");
	WAF.addListener(this.id + "_button31", "click", button31.click, "WAF");
	WAF.addListener(this.id + "_otherMonitorsDataGird", "onRowClick", otherMonitorsDataGird.onRowClick, "WAF");
	WAF.addListener(this.id + "_judgeJurisdictionGrid", "onRowClick", judgeJurisdictionGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_button27", "click", button27.click, "WAF");
	WAF.addListener(this.id + "_judgeJurisdiction", "keyup", judgeJurisdiction.keyup, "WAF");
	WAF.addListener(this.id + "_judgeJurisdiction", "blur", judgeJurisdiction.blur, "WAF");
	WAF.addListener(this.id + "_dataGrid7", "onRowClick", dataGrid7.onRowClick, "WAF");
	WAF.addListener(this.id + "_button26", "click", button26.click, "WAF");
	WAF.addListener(this.id + "_textField50", "keyup", textField50.keyup, "WAF");
	WAF.addListener(this.id + "_textField50", "blur", textField50.blur, "WAF");
	WAF.addListener(this.id + "_button25", "click", button25.click, "WAF");
	WAF.addListener(this.id + "_closeJudgeCurrentButton", "click", closeJudgeCurrentButton.click, "WAF");
	WAF.addListener(this.id + "_button24", "click", button24.click, "WAF");
	WAF.addListener(this.id + "_judgeFullList", "onRowClick", judgeFullList.onRowClick, "WAF");
	WAF.addListener(this.id + "_dataGrid5", "onRowClick", dataGrid5.onRowClick, "WAF");
	WAF.addListener(this.id + "_button19", "click", button19.click, "WAF");
	WAF.addListener(this.id + "_textField33", "keyup", textField33.keyup, "WAF");
	WAF.addListener(this.id + "_textField33", "blur", textField33.blur, "WAF");
	WAF.addListener(this.id + "_button18", "click", button18.click, "WAF");
	WAF.addListener(this.id + "_button17", "click", button17.click, "WAF");
	WAF.addListener(this.id + "_button13", "click", button13.click, "WAF");
	WAF.addListener(this.id + "_dhsFullList", "onRowClick", dhsFullList.onRowClick, "WAF");
	WAF.addListener(this.id + "_dataGrid3", "onRowClick", dataGrid3.onRowClick, "WAF");
	WAF.addListener(this.id + "_button9", "click", button9.click, "WAF");
	WAF.addListener(this.id + "_textField1", "keyup", textField1.keyup, "WAF");
	WAF.addListener(this.id + "_textField1", "blur", textField1.blur, "WAF");
	WAF.addListener(this.id + "_button8", "click", button8.click, "WAF");
	WAF.addListener(this.id + "_closeCourtJurisdictionCurrentButton", "click", closeCourtJurisdictionCurrentButton.click, "WAF");
	WAF.addListener(this.id + "_button7", "click", button7.click, "WAF");
	WAF.addListener(this.id + "_courtJurisdictionFullList", "onRowClick", courtJurisdictionFullList.onRowClick, "WAF");
	WAF.addListener(this.id + "_dataGrid1", "onRowClick", dataGrid1.onRowClick, "WAF");
	WAF.addListener(this.id + "_attCityComboBox", "keyup", attCityComboBox.keyup, "WAF");
	WAF.addListener(this.id + "_attCityComboBox", "blur", attCityComboBox.blur, "WAF");
	WAF.addListener(this.id + "_button16", "click", button16.click, "WAF");
	WAF.addListener(this.id + "_button15", "click", button15.click, "WAF");
	WAF.addListener(this.id + "_button14", "click", button14.click, "WAF");
	WAF.addListener(this.id + "_attorneyDataGird", "onRowClick", attorneyDataGird.onRowClick, "WAF");
	WAF.addListener(this.id + "_cityComboboxGrid", "onRowClick", cityComboboxGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_button3", "click", button3.click, "WAF");
	WAF.addListener(this.id + "_cityComboBox", "keyup", cityComboBox.keyup, "WAF");
	WAF.addListener(this.id + "_cityComboBox", "blur", cityComboBox.blur, "WAF");
	WAF.addListener(this.id + "_previousVersionButton", "click", previousVersionButton.click, "WAF");
	WAF.addListener(this.id + "_closeAssesorCurrentButton", "click", closeAssesorCurrentButton.click, "WAF");
	WAF.addListener(this.id + "_submitButton", "click", submitButton.click, "WAF");
	WAF.addListener(this.id + "_assessorFullList", "onRowClick", assessorFullList.onRowClick, "WAF");
	WAF.addListener(this.id + "_newProbJ", "click", newProbJ.click, "WAF");
	WAF.addListener(this.id + "_newCourtJ", "click", newCourtJ.click, "WAF");
	WAF.addListener(this.id + "_newOtherM", "click", newOtherM.click, "WAF");
	WAF.addListener(this.id + "_newPros", "click", newPros.click, "WAF");
	WAF.addListener(this.id + "_newPOfficer", "click", newPOfficer.click, "WAF");
	WAF.addListener(this.id + "_newJudge", "click", newJudge.click, "WAF");
	WAF.addListener(this.id + "_newDHSO", "click", newDHSO.click, "WAF");
	WAF.addListener(this.id + "_newAtt", "click", newAtt.click, "WAF");
	WAF.addListener(this.id + "_newAss", "click", newAss.click, "WAF");
	WAF.addListener(this.id + "_courtJurisdictionButton", "click", courtJurisdictionButton.click, "WAF");
	WAF.addListener(this.id + "_probationJurisdictionButton", "click", probationJurisdictionButton.click, "WAF");
	WAF.addListener(this.id + "_probationOfficerButton", "click", probationOfficerButton.click, "WAF");
	WAF.addListener(this.id + "_prosecutorsButton", "click", prosecutorsButton.click, "WAF");
	WAF.addListener(this.id + "_otherButton", "click", otherButton.click, "WAF");
	WAF.addListener(this.id + "_judgesButton", "click", judgesButton.click, "WAF");
	WAF.addListener(this.id + "_dhsButton", "click", dhsButton.click, "WAF");
	WAF.addListener(this.id + "_assessorButton", "click", assessorButton.click, "WAF");
	WAF.addListener(this.id + "_SearchReferralButton", "click", SearchReferralButton.click, "WAF");
	WAF.addListener(this.id + "_attorneyButton", "click", attorneyButton.click, "WAF");
	// @endregion// @endlock
/*
	};// @lock
*/
	function getTotals()
	{
		var searchCrit = $$(getHtmlId('searchField')).getValue();
		var searchType = $$(getHtmlId('searchOptionsBox')).getValue();
		var searchBool;
		if(searchType == 'Inactive')
		{
			searchBool = true;
		}
		else
		{
			searchBool = false;
		}
			
		
		if(searchType == 'All')
		{
			
			var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:86,data1:searchCrit}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 		rpcDSelects.getReferralCountAsync({
		 			'onSuccess': function(result){
						totalSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject5]
				});
		}
		else
		{
			var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:87,data1:searchCrit,data2:searchBool}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 		rpcDSelects.getReferralCountAsync({
		 			'onSuccess': function(result){
						totalSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject5]
				});
		}
	}
	
	function refreshData()
	{
		var searchCrit = $$(getHtmlId('searchField')).getValue();
		var searchType = $$(getHtmlId('searchOptionsBox')).getValue();
		
		if (searchCrit == "" && searchType == 'Active')
        {
            var myObject = {
                token: userConfigObj.secToken,
                id: userConfigObj.userID,
                major: 3,
                minor: 0,
                data1: false
            }; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
            rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						assessorSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:11,data1:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 	rpcDSelects.getSelectAsync({
		 		'onSuccess': function(result){
					attorneySuccess(result);
				},
				'onError': function(error){
					console.log(error);
				},
				'params': [myObject]
			});
			var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:20,data1:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						courtJurisdictionSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:29,data1:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						dhsSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:38,data1:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						judgeSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:47,data1:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						otherMonitorSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:56,data1:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						probationJurisdictionSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:65,data1:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						probationOfficerSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:74,data1:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						prosecutorSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
        }
        else if (searchCrit == '' && searchType == 'Inactive')
        {
            var myObject = {
                token: userConfigObj.secToken,
                id: userConfigObj.userID,
                major: 3,
                minor: 0,
                data1: true
            }; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
            
            rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						assessorSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:userConfigObj.secToken, 
				id:userConfigObj.userID,
				major:3,
				minor:11,
				data1:true}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 	rpcDSelects.getSelectAsync({
		 		'onSuccess': function(result){
					attorneySuccess(result);
				},
				'onError': function(error){
					console.log(error);
				},
				'params': [myObject]
			});
			var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:20,data1:true}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						courtJurisdictionSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:29,data1:true}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						dhsSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:38,data1:true}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						judgeSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:47,data1:true}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						otherMonitorSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:56,data1:true}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						probationJurisdictionSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:65,data1:true}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						probationOfficerSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:74,data1:true}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						prosecutorSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
        }
        else if (searchCrit == '' && searchType == 'All')
        {
            var myObject = {
                token: userConfigObj.secToken,
                id: userConfigObj.userID,
                major: 3,
                minor: 8
            }; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
            rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						assessorSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:12}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 	rpcDSelects.getSelectAsync({
		 		'onSuccess': function(result){
					attorneySuccess(result);
				},
				'onError': function(error){
					console.log(error);
				},
				'params': [myObject]
			});
			var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:21}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						courtJurisdictionSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:30}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						dhsSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:39}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						judgeSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:48}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						otherMonitorSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:57}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						probationJurisdictionSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:66}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						probationOfficerSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:75}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						prosecutorSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});	
        }
        else if (searchCrit != '' && searchType == 'Active')
        {
            var myObject = {
                token: userConfigObj.secToken,
                id: userConfigObj.userID,
                major: 3,
                minor: 10,
                data1: searchCrit,
                data2: false
            }; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
            rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						assessorSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:14, data1:searchCrit,data2:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						attorneySuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:23, data1:searchCrit,data2:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						courtJurisdictionSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:32, data1:searchCrit,data2:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						dhsSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:41, data1:searchCrit,data2:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						judgeSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:50, data1:searchCrit,data2:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						otherMonitorSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:59, data1:searchCrit,data2:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						probationJurisdictionSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:68, data1:searchCrit,data2:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						probationOfficerSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:77, data1:searchCrit,data2:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						prosecutorSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});	
        }
        else if (searchCrit != '' && searchType == 'Inactive')
        {
            var myObject = {
                token: userConfigObj.secToken,
                id: userConfigObj.userID,
                major: 3,
                minor: 10,
                data1: searchCrit,
                data2: true
            }; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
            rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						assessorSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:14, data1:searchCrit,data2:true}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						attorneySuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:23, data1:searchCrit,data2:true}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						courtJurisdictionSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:32, data1:searchCrit,data2:true}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						dhsSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:41, data1:searchCrit,data2:true}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						judgeSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:50, data1:searchCrit,data2:true}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						otherMonitorSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:59, data1:searchCrit,data2:true}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						probationJurisdictionSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:68, data1:searchCrit,data2:true}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						probationOfficerSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:77, data1:searchCrit,data2:true}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						prosecutorSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});	
        }
        else if (searchCrit != '' && searchType == 'All')
        {
            var myObject = {
                token: userConfigObj.secToken,
                id: userConfigObj.userID,
                major: 3,
                minor: 9,
                data1: searchCrit
            }; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
            rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						assessorSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:13, data1:searchCrit}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						attorneySuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:22, data1:searchCrit}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						courtJurisdictionSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
			});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:31, data1:searchCrit}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						dhsSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:40, data1:searchCrit}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						judgeSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:49, data1:searchCrit}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						otherMonitorSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:58, data1:searchCrit}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						probationJurisdictionSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:67, data1:searchCrit}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						probationOfficerSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:76, data1:searchCrit}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						prosecutorSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});	
		}
	
	}
	function changeWindow(containerid,componentid)
	{
		
		
		if (oldVisContainer != "")
		{
			myOldPage = document.getElementById(getHtmlId(oldVisContainer));
			//myOldPage.style.visibility = "hidden";
			myOldPage.style.display = "none";
			myOldPage.style.zIndex = "0";
		}
		
		var myPage = document.getElementById(getHtmlId(containerid));
		//myPage.style.visibility = "visible";
		myPage.style.display = "block";
		myPage.style.zIndex = "10";
		
		oldVisContainer = containerid;
		
		
	}
	function totalSuccess(result)
	{
		
		for(var x = 0 ; x < 9 ; x++) //9
		{
			if(result[x].source == 'assesor')
			{
				
				currentLabel= "Assessors" + '\n(' + result[x].total + ')';
				$$($comp.id+"_assessorButton").domNode.innerText = currentLabel;
				
			}
			else if(result[x].source == 'attorney')
			{
				
				currentLabel= "Attorneys" + '\n(' + result[x].total.toString() + ')';
				$$($comp.id+"_attorneyButton").domNode.innerText = currentLabel;
			}
			else if(result[x].source == 'court')
			{
				
				currentLabel= "Court Jurisdictions" + '\n(' + result[x].total.toString() + ')';
				$$($comp.id+"_courtJurisdictionButton").domNode.innerText = currentLabel;
			}
			else if(result[x].source == 'dhs')
			{
				
				currentLabel= "DHS Officers" + '\n(' + result[x].total.toString() + ')';
				$$($comp.id+"_dhsButton").domNode.innerText = currentLabel;
			}
			else if(result[x].source == 'judge')
			{
				
				currentLabel= "Judges" + '\n(' + result[x].total.toString() + ')';
				$$($comp.id+"_judgesButton").domNode.innerText = currentLabel;
			}
			else if(result[x].source == 'other')
			{
				
				currentLabel= "Other Monitors" + '\n(' + result[x].total.toString() + ')';
				var currentLabel = $$($comp.id+"_otherButton").domNode.innerText = currentLabel;
			}
			else if(result[x].source == 'pojurisdiction')
			{
				
				currentLabel= "Probation Jurisdictions" + '\n(' + result[x].total.toString() + ')';
				$$($comp.id+"_probationJurisdictionButton").domNode.innerText = currentLabel;
			}
			else if(result[x].source == 'po')
			{
				
				currentLabel= "Probation Officers" + '\n(' + result[x].total.toString() + ')';
				$$($comp.id+"_probationOfficerButton").domNode.innerText = currentLabel;
			}
			else if(result[x].source == 'prosecutor')
			{
				
				currentLabel= "Prosecutors" + '\n(' + result[x].total.toString() + ')';
				$$($comp.id+"_prosecutorsButton").domNode.innerText = currentLabel;
			}
			
		}

		
	}
	function totalError(event)
	{
		var errMessage;
				for (var x = 0;x < event.error.length;x++)
				{
					errMessage += (event.error[x].message + ",");
				}
				alert(errMessage);
	}
	function citySuccess(result)
	{
		var tempCity = result[0];
		
		result[0] = {
		    CityListing: "None"
		};
		
		result[result.length] = tempCity;
		city = result;
		tempStore= city;
		sources.city.sync();
	}
	function cityError(event)
	{
		var errMessage;
				for (var x = 0;x < event.error.length;x++)
				{
					errMessage += (event.error[x].message + ",");
				}
				alert(errMessage);
	}
	function reportingSuccess(result)
	{
		
		var tempReporting = result[0];
		result[0] = {
   		 ReportingMethod: "None"
		};
		result[result.length] = tempReporting;
		
		reporting = result;
		sources.reporting.sync();
		var x=0;
	}
	function reportingError(event)
	{
		var errMessage;
				for (var x = 0;x < event.error.length;x++)
				{
					errMessage += (event.error[x].message + ",");
				}
				alert(errMessage);
	}
	
	function assessorSuccess(result)
	{
		assessorList = result;
		sources.assessorList.sync();
		
	}
	function assessorError(event)
	{
		var errMessage;
		for (var x = 0;x < event.error.length;x++)
		{
			errMessage += (event.error[x].message + ",");
		}
		alert(errMessage);
	}
	function attorneySuccess(result)
	{
		attorneyList = result;
		sources.attorneyList.sync();
		
	}
	function attorneyError(event)
	{
		var errMessage;
		for (var x = 0;x < event.error.length;x++)
		{
			errMessage += (event.error[x].message + ",");
		}
		alert(errMessage);
	}
	function courtJurisdictionSuccess(result)
	{
		courtJurisdictionList = result;
		sources.courtJurisdictionList.sync();
		
	}
	function courtJurisdictionError(event)
	{
		var errMessage;
		for (var x = 0;x < event.error.length;x++)
		{
			errMessage += (event.error[x].message + ",");
		}
		alert(errMessage);
	}
	function dhsSuccess(result)
	{
		dhsList = result;
		sources.dhsList.sync();
		
	}
	function dhsError(event)
	{
		var errMessage;
		for (var x = 0;x < event.error.length;x++)
		{
			errMessage += (event.error[x].message + ",");
		}
		alert(errMessage);
	}
	function judgeSuccess(result)
	{
		judgeList = result;
		sources.judgeList.sync();
		
	}
	function judgeError(event)
	{
		var errMessage;
		for (var x = 0;x < event.error.length;x++)
		{
			errMessage += (event.error[x].message + ",");
		}
		alert(errMessage);
	}
	function otherMonitorSuccess(result)
	{
		otherMonitorList = result;
		sources.otherMonitorList.sync();
		
	}
	function otherMonitorError(event)
	{
		var errMessage;
		for (var x = 0;x < event.error.length;x++)
		{
			errMessage += (event.error[x].message + ",");
		}
		alert(errMessage);
	}
	function probationJurisdictionSuccess(result)
	{
		probationJurisdictionList = result;
		sources.probationJurisdictionList.sync();
		
	}
	function probationJurisdictionError(event)
	{
		var errMessage;
		for (var x = 0;x < event.error.length;x++)
		{
			errMessage += (event.error[x].message + ",");
		}
		alert(errMessage);
	}
	function probationOfficerSuccess(result)
	{
		probationOfficerList = result;
		sources.probationOfficerList.sync();
		
	}
	function probationOfficerError(event)
	{
		var errMessage;
		for (var x = 0;x < event.error.length;x++)
		{
			errMessage += (event.error[x].message + ",");
		}
		alert(errMessage);
	}
	function prosecutorSuccess(result)
	{
		
		prosecutorList = result;
		sources.prosecutorList.sync();
		
		
	}
	function prosecutorError(event)
	{
		var errMessage;
		for (var x = 0;x < event.error.length;x++)
		{
			errMessage += (event.error[x].message + ",");
		}
		alert(errMessage);
	}
	function testAsyncFunc(event)
	{
		
	}
	
	
}
}// @startlock
return constructor;
})();// @endlock
