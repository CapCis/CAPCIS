﻿
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralNewAttorneys';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var button4 = {};	// @button
	var cityComboboxGrid = {};	// @dataGrid
	var cityComboBox = {};	// @textField
	var close = {};	// @button
	var button14 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	button4.click = function button4_click (event)// @startlock
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
		$$(getHtmlId('cityComboBox')).setValue(recValue);
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

	close.click = function close_click (event)// @startlock
	{// @endlock
		newAssessor = document.getElementById($comp.id);
		$comp.removeComponent();
		newAssessor.style.visibility = 'hidden';
		newAssessor.style.zIndex = '0';
	};// @lock

	button14.click = function button14_click (event)// @startlock
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
		
		var phone = $$(getHtmlId("attPhone")).getValue();
		var fax = $$(getHtmlId("attFax")).getValue();
		var mobile = $$(getHtmlId("attAdditional")).getValue();
		
		if(phone.length !== 13)
		{
			if(phone.length !== 5 )
			{
				Alert("Please correct phone number");
				return;
			}
			else
			{
				phone = "";
			}
			
		}
		if(fax.length !== 13)
		{
			if(fax.length !== 5 )
			{
				Alert("Please correct fax number");
				return;
			}
			else
			{
				
				fax = "";
			}
			
		}
		if(mobile.length !== 13)
		{
			if(mobile.length !== 5 )
			{
				Alert("Please correct mobile number");
				return;
			}
			else
			{
				mobile = "";	
			}
			
		}
		
			var myObject7 = 
			{
				token:'7836140170460568' ,id:'1',major:3,minor:3,
				major: 3,
    			minor: 21,
    			major2: 3,
    			minor2: 105,
    			major3: 3,
    			minor3: 22,
				data1:$$(getHtmlId("attName")).getValue(),
				data2:phone,
				data3:$$(getHtmlId("attEmail")).getValue(),
				data4:fax,
				data5:$$(getHtmlId("attAddress")).getValue(),
				data6:$$(getHtmlId("cityComboBox")).getValue(),
				data7:$$(getHtmlId("attState")).getValue(),
				data8:$$(getHtmlId("attZip")).getValue(),
				data9:$$(getHtmlId("attExt")).getValue(),
				data10:mobile,
				data11:$$(getHtmlId("attNotes")).getValue(),
				data12:$$(getHtmlId("attFullName")).getValue(),
				data13:$$(getHtmlId("attReportingComboBox")).getValue(),
				data14:currentID,
				data15:$$(getHtmlId("attInactive")).getValue(),
				data16:$$(getHtmlId("attPublicDef")).getValue(),
				data17:$$(getHtmlId("attStaffInfo")).getValue()
				
				
			}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	
				
	 		rpcDInsert.setInsertWReturnAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject7]
				});
	 		
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button4", "click", button4.click, "WAF");
	WAF.addListener(this.id + "_cityComboboxGrid", "onRowClick", cityComboboxGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_cityComboBox", "keyup", cityComboBox.keyup, "WAF");
	WAF.addListener(this.id + "_cityComboBox", "blur", cityComboBox.blur, "WAF");
	WAF.addListener(this.id + "_close", "click", close.click, "WAF");
	WAF.addListener(this.id + "_button14", "click", button14.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
