
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralCourtJurisdictions';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
		tempStore= city;
		
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
		
			var searchCrit = data.userData.searchCrit;
			var searchType = data.userData.searchType;
			if(searchCrit == "" && searchType == 'Active')
			{
				var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:20,data1:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
				var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:20,data1:true}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
				var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:21}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
				var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:23, data1:searchCrit,data2:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
				var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:23, data1:searchCrit,data2:true}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
				var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:22, data1:searchCrit}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
			var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:20,data1:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
			debugger;
			
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
				var myObject2 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:25,data1:currentName}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
				var myObject2 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:26,data1:currentName,data2:currentCorrespondanceViewVoided}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
	var button3 = {};	// @button
	var cityComboBox = {};	// @textField
	var cityComboboxGrid = {};	// @dataGrid
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

	cityComboboxGrid.onRowClick = function cityComboboxGrid_onRowClick (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('cityComboboxGrid'));
		grid.style.display = 'none';
		
		var recValue = $$(getHtmlId('cityComboboxGrid')).sourceAtt.getValue();
		$$(getHtmlId('cityComboBox')).setValue(recValue);
	};// @lock

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
		
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		fillCorrespondance();
		$$(getHtmlId('container6')).setSplitPosition(1290);
	};// @lock

	voidCorrespondanceCheck.change = function voidCorrespondanceCheck_change (event)// @startlock
	{// @endlock
		
		var status = $$(getHtmlId("voidCorrespondanceCheck")).getValue();
		var id = sources.courtJurisdictionCorespondance.CourtJurisdictionCorrespondenceID;
		//var id  = $$(getHtmlId('attHiddenCorrId')).getValue();
		var myObject8 = 
			{
				token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:5,
				
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
				token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:5,
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
		
	};// @lock

	correspondanceActiveBox.change = function correspondanceActiveBox_change (event)// @startlock
	{// @endlock
		fillCorrespondance();
	};// @lock

	previousVersionButton.click = function previousVersionButton_click (event)// @startlock
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

	submitButton.click = function submitButton_click (event)// @startlock
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
	
	function bakListSuccess(result)
	{
		
		bakCourtJurisdictionInfo = result;
		sources.bakCourtJurisdictionInfo.sync();
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
	

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button3", "click", button3.click, "WAF");
	WAF.addListener(this.id + "_cityComboBox", "keyup", cityComboBox.keyup, "WAF");
	WAF.addListener(this.id + "_cityComboBox", "blur", cityComboBox.blur, "WAF");
	WAF.addListener(this.id + "_cityComboboxGrid", "onRowClick", cityComboboxGrid.onRowClick, "WAF");
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
