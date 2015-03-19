
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralProbationJurisdictions';
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
				var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:56,data1:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
				var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:56,data1:true}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
				var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:57}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
				var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:59, data1:searchCrit,data2:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
				var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:59, data1:searchCrit,data2:true}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
				var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:58, data1:searchCrit}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:56,data1:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
			
			var currentCorrespondenceActiveSelected = $$(getHtmlId('pjCorrespondanceActiveBox')).getValue();
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
				var myObject2 = {token:'7836140170460568' ,id:'1',major:3,minor:60,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
				var myObject2 = {token:'7836140170460568' ,id:'1',major:3,minor:61,data1:currentID,data2:currentCorrespondanceViewVoided}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
	var button1 = {};	// @button
	var cityComboboxGrid = {};	// @dataGrid
	var pjCityComboBox = {};	// @textField
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

	button1.click = function button1_click (event)// @startlock
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

	cityComboboxGrid.onRowClick = function cityComboboxGrid_onRowClick (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('cityComboboxGrid'));
		grid.style.display = 'none';
		
		var recValue = $$(getHtmlId('cityComboboxGrid')).sourceAtt.getValue();
		$$(getHtmlId('pjCityComboBox')).setValue(recValue);
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

	Close.click = function Close_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('pjPrevVersionCont')).setSplitPosition(625);
	};// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('pjSpecificInfoCont')).setSplitPosition(900);
	};// @lock

	dataGrid1.onRowClick = function dataGrid1_onRowClick (event)// @startlock
	{// @endlock
		
		$$(getHtmlId('pjPrevVersionCont')).setSplitPosition(250);
		var id = sources.bakProbationJurisdictionInfo.BAKPOJurisdictionID;

		var myObject6 = {token:'7836140170460568' ,id:'1',major:3,minor:64,data1:id}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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

	pjVoidedCorrespondanceCheck.change = function pjVoidedCorrespondanceCheck_change (event)// @startlock
	{// @endlock
		var status = $$(getHtmlId("pjVoidedCorrespondanceCheck")).getValue();
		var id = sources.probationJurisdictionCorespondance.POJurisdictionCorrespondenceID;
		var myObject8 = 
			{
				token:'7836140170460568' ,id:'1',major:3,minor:12,
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

	pjCorCloseButton.click = function pjCorCloseButton_click (event)// @startlock
	{// @endlock
		fillCorrespondance();
		$$(getHtmlId('pjCorrCont')).setSplitPosition(1290);
	};// @lock

	pjCorrespondanceGrid.onRowClick = function pjCorrespondanceGrid_onRowClick (event)// @startlock
	{// @endlock
		$$(getHtmlId('pjCorrCont')).setSplitPosition(420);
		$$(getHtmlId('pjSpecificInfoCont')).setSplitPosition(900);
		currentCorresondanceDate = event.data.row.cells[0].value;
	};// @lock

	pjCorrespondanceActiveBox.change = function pjCorrespondanceActiveBox_change (event)// @startlock
	{// @endlock
		fillCorrespondance();
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		var myObject8 = 
			{
				token:'7836140170460568' ,id:'1',major:3,minor:12,
				data1:$$(getHtmlId("pjNewCoresspondenceField")).getValue(),
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
			
			$$(getHtmlId('pjNewCoresspondenceField')).setValue("");
			fillCorrespondance();
	};// @lock

	button16.click = function button16_click (event)// @startlock
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

	button15.click = function button15_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('mainProbationJurisdictionCont')).setSplitPosition(1290);
	};// @lock

	button14.click = function button14_click (event)// @startlock
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
var myObject7 = 
			{
				
				token:'7836140170460568' ,id:'1',major:3,minor: 13,
				data1:$$(getHtmlId("pjName")).sourceAtt.getValue(),
				data2:$$(getHtmlId("pjPhone")).sourceAtt.getValue(),
				data4:$$(getHtmlId("pjFax")).sourceAtt.getValue(),
				data5:$$(getHtmlId("pjAddress")).getValue(),
				data6:$$(getHtmlId("pjCityComboBox")).getValue(),
				data7:$$(getHtmlId("pjState")).sourceAtt.getValue(),
				data8:$$(getHtmlId("pjZip")).sourceAtt.getValue(),
				data11:$$(getHtmlId("pjNotes")).sourceAtt.getValue(),
				data14:currentID,
				data15:$$(getHtmlId("pjInactive")).getValue()
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
		

		var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:62,data1:ids}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
		
		probationJurisdictionList = result;
		sources.probationJurisdictionList.sync();
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
		
		specificProbationJurisdictionList = result;
		sources.specificProbationJurisdictionList.sync();
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
		
		probationJurisdictionCorespondance = result;
		sources.probationJurisdictionCorespondance.sync();
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
		
		bakProbationJurisdictionInfo = result;
		sources.bakProbationJurisdictionInfo.sync();
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
		
		specificBakProbationJurisdictionList = result;
		sources.specificBakProbationJurisdictionList.sync();
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
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	WAF.addListener(this.id + "_cityComboboxGrid", "onRowClick", cityComboboxGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_pjCityComboBox", "keyup", pjCityComboBox.keyup, "WAF");
	WAF.addListener(this.id + "_pjCityComboBox", "blur", pjCityComboBox.blur, "WAF");
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
