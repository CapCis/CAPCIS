
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralAttorneys';
	// @endregion// @endlock

	this.load = function (data) {// @lock

		
		
			//fillMainTable();
		
		function fillMainTable()
		{
			
			var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:11,data1:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
				var myObject2 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:16,data1:currentName}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
				var myObject2 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:17,data1:currentName,data2:currentCorrespondanceViewVoided}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
	var button4 = {};	// @button
	var attCityComboBox = {};	// @textField
	var cityComboboxGrid = {};	// @dataGrid
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

	button4.click = function button4_click (event)// @startlock
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

	cityComboboxGrid.onRowClick = function cityComboboxGrid_onRowClick (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('cityComboboxGrid'));
		grid.style.display = 'none';
		
		var recValue = $$(getHtmlId('cityComboboxGrid')).sourceAtt.getValue();
		$$(getHtmlId('attCityComboBox')).setValue(recValue);
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

	attVoidedCorrespondanceCheck.change = function attVoidedCorrespondanceCheck_change (event)// @startlock
	{// @endlock
		var status = $$(getHtmlId("attVoidedCorrespondanceCheck")).getValue();
		var id  = sources.attorneyCorespondance.AttorneyCorrespondenceID;
		var myObject8 = 
			{
				token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:2,
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

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		var x = $$(getHtmlId("attNewCoresspondenceField"));
		var myObject8 = 
			{
				token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:2,
				data1:$$(getHtmlId("attNewCoresspondenceField")).getValue(),
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
			fillCorrespondance();
			
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
		
	};// @lock

	attCorrespondanceActiveBox.change = function attCorrespondanceActiveBox_change (event)// @startlock
	{// @endlock
		fillCorrespondance();
	};// @lock

	attorneyDataGird.onRowClick = function attorneyDataGird_onRowClick (event)// @startlock
	{// @endlock
		
		
		
		
		$$(getHtmlId('mainAttorneyCont')).setSplitPosition(450);
		$$(getHtmlId('attSpecificInfoCont')).setSplitPosition(2000);
	 	$$(getHtmlId('attPrevVersionCont')).setSplitPosition(1000);
	 	$$(getHtmlId('attCorrCont')).setSplitPosition(420);
		
		
		
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
	};// @lock
	
	function mainListSuccess(result)
	{
		
		attorneyList = result;
		sources.attorneyList.sync();
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
		
		attorneyCorespondance = result;
		sources.attorneyCorespondance.sync();
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
		
		bakAttorneyInfo = result;
		sources.bakAttorneyInfo.sync();
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
	WAF.addListener(this.id + "_button4", "click", button4.click, "WAF");
	WAF.addListener(this.id + "_attCityComboBox", "keyup", attCityComboBox.keyup, "WAF");
	WAF.addListener(this.id + "_attCityComboBox", "blur", attCityComboBox.blur, "WAF");
	WAF.addListener(this.id + "_cityComboboxGrid", "onRowClick", cityComboboxGrid.onRowClick, "WAF");
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
