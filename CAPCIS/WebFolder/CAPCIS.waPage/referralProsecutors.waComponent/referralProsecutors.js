﻿
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralProsecutors';
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
				var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:74,data1:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
				var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:74,data1:true}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
				var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:75}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
				var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:77, data1:searchCrit,data2:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
				var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:77, data1:searchCrit,data2:true}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
				var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:76, data1:searchCrit}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
			
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:74,data1:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
			
			var currentCorrespondenceActiveSelected = $$(getHtmlId('prosCorrespondanceActiveBox')).getValue();
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
				var myObject2 = {token:'7836140170460568' ,id:'1',major:3,minor:78,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
				var myObject2 = {token:'7836140170460568' ,id:'1',major:3,minor:79,data1:currentID,data2:currentCorrespondanceViewVoided}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
	var Close = {};	// @button
	var button3 = {};	// @button
	var dataGrid1 = {};	// @dataGrid
	var prosVoidedCorrespondanceCheck = {};	// @checkbox
	var prosCorCloseButton = {};	// @button
	var prosCorrespondanceGrid = {};	// @dataGrid
	var prosCorrespondanceActiveBox = {};	// @combobox
	var button2 = {};	// @button
	var button16 = {};	// @button
	var button15 = {};	// @button
	var button14 = {};	// @button
	var prosecutorDataGird = {};	// @dataGrid
	// @endregion// @endlock

	// eventHandlers// @lock

	Close.click = function Close_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('prosPrevVersionCont')).setSplitPosition(625);
	};// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('prosSpecificInfoCont')).setSplitPosition(900);
	};// @lock

	dataGrid1.onRowClick = function dataGrid1_onRowClick (event)// @startlock
	{// @endlock
		$$(getHtmlId('prosPrevVersionCont')).setSplitPosition(250);
		var id = sources.bakProsecutorInfo.BAKProsecutorsID;

		var myObject6 = {token:'7836140170460568' ,id:'1',major:3,minor:82,data1:id}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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

	prosVoidedCorrespondanceCheck.change = function prosVoidedCorrespondanceCheck_change (event)// @startlock
	{// @endlock
		var status = $$(getHtmlId("prosVoidedCorrespondanceCheck")).getValue();
		var id = sources.prosecutorCorespondance.ProsecutorCorrespondenceID;
		//var id  = $$(getHtmlId('attHiddenCorrId')).getValue();
		var myObject8 = 
			{
				token:'7836140170460568' ,id:'1',major:3,minor:16,
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

	prosCorCloseButton.click = function prosCorCloseButton_click (event)// @startlock
	{// @endlock
		fillCorrespondance();
		$$(getHtmlId('prosCorrCont')).setSplitPosition(1290);
	};// @lock

	prosCorrespondanceGrid.onRowClick = function prosCorrespondanceGrid_onRowClick (event)// @startlock
	{// @endlock
		$$(getHtmlId('prosCorrCont')).setSplitPosition(420);
		$$(getHtmlId('prosSpecificInfoCont')).setSplitPosition(900);
		currentCorresondanceDate = event.data.row.cells[0].value;
	};// @lock

	prosCorrespondanceActiveBox.change = function prosCorrespondanceActiveBox_change (event)// @startlock
	{// @endlock
		fillCorrespondance();
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		var myObject8 = 
			{
				token:'7836140170460568' ,id:'1',major:3,minor:16,
				data1:$$(getHtmlId("prosNewCoresspondenceField")).getValue(),
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
			
			$$(getHtmlId('prosNewCoresspondenceField')).setValue("");
			fillCorrespondance();
	};// @lock

	button16.click = function button16_click (event)// @startlock
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

	button15.click = function button15_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('mainProsecutorCont')).setSplitPosition(1290);
	};// @lock

	button14.click = function button14_click (event)// @startlock
	{// @endlock
		var myObject7 = 
			{
				
				token:'7836140170460568' ,id:'1',major:3,minor: 17,
				data1:$$(getHtmlId("prosName")).sourceAtt.getValue(),
				data2:$$(getHtmlId("prosPhone")).sourceAtt.getValue(),
				data3:$$(getHtmlId("prosEmail")).sourceAtt.getValue(),
				data4:$$(getHtmlId("prosFax")).sourceAtt.getValue(),
				data5:$$(getHtmlId("prosAddress")).getValue(),
				data6:$$(getHtmlId("prosCityComboBox")).getValue(),
				data7:$$(getHtmlId("prosState")).sourceAtt.getValue(),
				data8:$$(getHtmlId("prosZip")).sourceAtt.getValue(),
				data9:$$(getHtmlId("prosExt")).sourceAtt.getValue(),
				data10:$$(getHtmlId("prosAdditional")).sourceAtt.getValue(),
				data11:$$(getHtmlId("prosNotes")).sourceAtt.getValue(),
				data12:$$(getHtmlId("prosFullName")).sourceAtt.getValue(),
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
				
	 		rpcDInsert.setInsertAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject7]
				});
				
				
	 		fillMainTable();
	 		
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
$$(getHtmlId('mainProsecutorCont')).setSplitPosition(400);
		$$(getHtmlId('prosSpecificInfoCont')).setSplitPosition(2000);
	 	$$(getHtmlId('prosPrevVersionCont')).setSplitPosition(1000);
	 	$$(getHtmlId('prosCorrCont')).setSplitPosition(1500);
		
		
		
		var name = sources.prosecutorList.Prosecutor;
		var city = sources.prosecutorList.ProsecutorCity;
		var reportingMethod = sources.prosecutorList.ProsPreferredReportingMethod;
		var ids = sources.prosecutorList.ProsecutorsID;
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
		
		
		var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:80,data1:ids}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
		
		prosecutorList = result;
		sources.prosecutorList.sync();
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
		
		specificProsecutorList = result;
		sources.specificProsecutorList.sync();
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
		
		prosecutorCorespondance = result;
		sources.prosecutorCorespondance.sync();
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
		
		bakProsecutorInfo = result;
		sources.bakProsecutorInfo.sync();
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
		
		specificBakProsecutorList = result;
		sources.specificBakProsecutorList.sync();
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
	WAF.addListener(this.id + "_Close", "click", Close.click, "WAF");
	WAF.addListener(this.id + "_button3", "click", button3.click, "WAF");
	WAF.addListener(this.id + "_dataGrid1", "onRowClick", dataGrid1.onRowClick, "WAF");
	WAF.addListener(this.id + "_prosVoidedCorrespondanceCheck", "change", prosVoidedCorrespondanceCheck.change, "WAF");
	WAF.addListener(this.id + "_prosCorCloseButton", "click", prosCorCloseButton.click, "WAF");
	WAF.addListener(this.id + "_prosCorrespondanceGrid", "onRowClick", prosCorrespondanceGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_prosCorrespondanceActiveBox", "change", prosCorrespondanceActiveBox.change, "WAF");
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	WAF.addListener(this.id + "_button16", "click", button16.click, "WAF");
	WAF.addListener(this.id + "_button15", "click", button15.click, "WAF");
	WAF.addListener(this.id + "_button14", "click", button14.click, "WAF");
	WAF.addListener(this.id + "_prosecutorDataGird", "onRowClick", prosecutorDataGird.onRowClick, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
