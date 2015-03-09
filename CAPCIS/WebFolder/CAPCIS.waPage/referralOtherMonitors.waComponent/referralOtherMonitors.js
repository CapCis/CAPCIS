
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralOtherMonitors';
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
				var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:47,data1:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
				var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:47,data1:true}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
				var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:48}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
				var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:50, data1:searchCrit,data2:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
				var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:50, data1:searchCrit,data2:true}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
				var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:49, data1:searchCrit}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:47,data1:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
			
			var currentCorrespondenceActiveSelected = $$(getHtmlId('omCorrespondanceActiveBox')).getValue();
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
				var myObject2 = {token:'7836140170460568' ,id:'1',major:3,minor:51,data1:currentName}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
				var myObject2 = {token:'7836140170460568' ,id:'1',major:3,minor:52,data1:currentName,data2:currentCorrespondanceViewVoided}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
	var omVoidedCorrespondanceCheck = {};	// @checkbox
	var omCorCloseButton = {};	// @button
	var omCorrespondanceGrid = {};	// @dataGrid
	var omCorrespondanceActiveBox = {};	// @combobox
	var button2 = {};	// @button
	var button16 = {};	// @button
	var button15 = {};	// @button
	var button14 = {};	// @button
	var otherMonitorsDataGird = {};	// @dataGrid
	// @endregion// @endlock

	// eventHandlers// @lock

	Close.click = function Close_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('omPrevVersionCont')).setSplitPosition(625);
	};// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('omSpecificInfoCont')).setSplitPosition(900);
	};// @lock

	dataGrid1.onRowClick = function dataGrid1_onRowClick (event)// @startlock
	{// @endlock
		
		$$(getHtmlId('omPrevVersionCont')).setSplitPosition(250);
		var id = sources.bakOtherMonitorInfo.BAKOtherMonitorsID;

		var myObject6 = {token:'7836140170460568' ,id:'1',major:3,minor:55,data1:id}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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

	omVoidedCorrespondanceCheck.change = function omVoidedCorrespondanceCheck_change (event)// @startlock
	{// @endlock
		var status = $$(getHtmlId("omVoidedCorrespondanceCheck")).getValue();
		var id = sources.otherMonitorCorespondance.OtherMonitorsCorrespondenceID;
		//var id  = $$(getHtmlId('attHiddenCorrId')).getValue();
		var myObject8 = 
			{
				token:'7836140170460568' ,id:'1',major:3,minor:10,
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

	omCorCloseButton.click = function omCorCloseButton_click (event)// @startlock
	{// @endlock
		fillCorrespondance();
		$$(getHtmlId('omCorrCont')).setSplitPosition(1290);
	};// @lock

	omCorrespondanceGrid.onRowClick = function omCorrespondanceGrid_onRowClick (event)// @startlock
	{// @endlock
		$$(getHtmlId('omCorrCont')).setSplitPosition(420);
		$$(getHtmlId('omSpecificInfoCont')).setSplitPosition(900);
		currentCorresondanceDate = event.data.row.cells[0].value;
	};// @lock

	omCorrespondanceActiveBox.change = function omCorrespondanceActiveBox_change (event)// @startlock
	{// @endlock
		fillCorrespondance();
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock

		var myObject8 = 
			{
				token:'7836140170460568' ,id:'1',major:3,minor:10,
				data1:$$(getHtmlId("omNewCoresspondenceField")).getValue(),
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
			
			$$(getHtmlId('omNewCoresspondenceField')).setValue("");
			fillCorrespondance();
	};// @lock

	button16.click = function button16_click (event)// @startlock
	{// @endlock
		debugger;
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

	button15.click = function button15_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('mainOtherMonitorsCont')).setSplitPosition(1290);
	};// @lock

	button14.click = function button14_click (event)// @startlock
	{// @endlock
		
			var myObject7 = 
			{
				
				token:'7836140170460568' ,id:'1',major:3,minor: 11,
				data1:$$(getHtmlId("omName")).sourceAtt.getValue(),
				data2:$$(getHtmlId("omPhone")).sourceAtt.getValue(),
				data3:$$(getHtmlId("omEmail")).sourceAtt.getValue(),
				data4:$$(getHtmlId("omFax")).sourceAtt.getValue(),
				data5:$$(getHtmlId("omAddress")).getValue(),
				data6:$$(getHtmlId("omCityComboBox")).getValue(),
				data7:$$(getHtmlId("omState")).sourceAtt.getValue(),
				data8:$$(getHtmlId("omZip")).sourceAtt.getValue(),
				data9:$$(getHtmlId("omExt")).sourceAtt.getValue(),
				data10:$$(getHtmlId("omAdditional")).sourceAtt.getValue(),
				data11:$$(getHtmlId("omNotes")).sourceAtt.getValue(),
				data12:$$(getHtmlId("omFullName")).sourceAtt.getValue(),
				data13:$$(getHtmlId("omReportingComboBox")).getValue(),
				data14:currentID,
				data15:$$(getHtmlId("omInactive")).getValue(),
				data16:$$(getHtmlId("omJurisdiction")).getValue()
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
		$$(getHtmlId('mainOtherMonitorsCont')).setSplitPosition(400);
		$$(getHtmlId('omSpecificInfoCont')).setSplitPosition(2000);
	 	$$(getHtmlId('omPrevVersionCont')).setSplitPosition(1000);
	 	$$(getHtmlId('omCorrCont')).setSplitPosition(1500);
		
		
		
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
		
		
		var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:53,data1:ids}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
		
		otherMonitorList = result;
		sources.otherMonitorList.sync();
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
		
		specificOtherMonitorList = result;
		sources.specificOtherMonitorList.sync();
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
		
		otherMonitorCorespondance = result;
		sources.otherMonitorCorespondance.sync();
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
		
		bakOtherMonitorInfo = result;
		sources.bakOtherMonitorInfo.sync();
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
		
		specificBakOtherMonitorList = result;
		sources.specificBakOtherMonitorList.sync();
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
	WAF.addListener(this.id + "_omVoidedCorrespondanceCheck", "change", omVoidedCorrespondanceCheck.change, "WAF");
	WAF.addListener(this.id + "_omCorCloseButton", "click", omCorCloseButton.click, "WAF");
	WAF.addListener(this.id + "_omCorrespondanceGrid", "onRowClick", omCorrespondanceGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_omCorrespondanceActiveBox", "change", omCorrespondanceActiveBox.change, "WAF");
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	WAF.addListener(this.id + "_button16", "click", button16.click, "WAF");
	WAF.addListener(this.id + "_button15", "click", button15.click, "WAF");
	WAF.addListener(this.id + "_button14", "click", button14.click, "WAF");
	WAF.addListener(this.id + "_otherMonitorsDataGird", "onRowClick", otherMonitorsDataGird.onRowClick, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
