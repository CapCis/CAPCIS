
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralNewOtherMonitors';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var cityComboboxGrid = {};	// @dataGrid
	var button1 = {};	// @button
	var cityComboBox = {};	// @textField
	var button15 = {};	// @button
	var button14 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	cityComboboxGrid.onRowClick = function cityComboboxGrid_onRowClick (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('cityComboboxGrid'));
		grid.style.display = 'none';
		
		var recValue = $$(getHtmlId('cityComboboxGrid')).sourceAtt.getValue();
		$$(getHtmlId('cityComboBox')).setValue(recValue);
	};// @lock

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

	button15.click = function button15_click (event)// @startlock
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
		
		var phone = $$(getHtmlId("omPhone")).getValue();
		var fax = $$(getHtmlId("omFax")).getValue();
		var mobile = $$(getHtmlId("omAdditional")).getValue();
		if(phone.length !== 14)
		{
			if(phone.length !== 5  && phone.length !== 0)
			{
				alert("Please correct phone number");
				return;
			}
			else
			{
				phone = "";
			}
			
		}
		else
		{
			phone = phone.substring(1,4)+phone.substring(6,9)+phone.substring(10,15);
		}
		if(fax.length !== 14)
		{
			if(fax.length !== 5 && fax.length !== 0)
			{
				alert("Please correct fax number");
				return;
			}
			else
			{
				
				fax = "";
			}
			
		}
		else
		{
			fax = fax.substring(1,4)+fax.substring(6,9)+fax.substring(10,15);
		}
		if(mobile.length !== 14)
		{
			if(mobile.length !== 5 && mobile.length !== 0)
			{
				alert("Please correct mobile number");
				return;
			}
			else
			{
				mobile = "";	
			}
			
		}
		else
		{
			mobile = mobile.substring(1,4)+mobile.substring(6,9)+mobile.substring(10,15);
		}
		
			var myObject7 = 
			{
				
				token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor: 24,
				data1:$$(getHtmlId("omName")).getValue(),
				data2:phone,
				data3:$$(getHtmlId("omEmail")).getValue(),
				data4:fax,
				data5:$$(getHtmlId("omAddress")).getValue(),
				data6:$$(getHtmlId("cityComboBox")).getValue(),
				data7:$$(getHtmlId("omState")).getValue(),
				data8:$$(getHtmlId("omZip")).getValue(),
				data9:$$(getHtmlId("omExt")).getValue(),
				data10:mobile,
				data11:$$(getHtmlId("omNotes")).getValue(),
				data12:$$(getHtmlId("omFullName")).getValue(),
				data13:$$(getHtmlId("omReportingComboBox")).getValue(),
				data15:$$(getHtmlId("omInactive")).getValue()
			}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 		
				
	 		rpcDInsert.setInsertAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject7]
				});
			newAssessor = document.getElementById($comp.id);
			$comp.removeComponent();
			newAssessor.style.visibility = 'hidden';
			newAssessor.style.zIndex = '0';
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_cityComboboxGrid", "onRowClick", cityComboboxGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	WAF.addListener(this.id + "_cityComboBox", "keyup", cityComboBox.keyup, "WAF");
	WAF.addListener(this.id + "_cityComboBox", "blur", cityComboBox.blur, "WAF");
	WAF.addListener(this.id + "_button15", "click", button15.click, "WAF");
	WAF.addListener(this.id + "_button14", "click", button14.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
