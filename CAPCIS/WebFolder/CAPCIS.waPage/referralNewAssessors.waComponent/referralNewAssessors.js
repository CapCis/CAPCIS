
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralNewAssessors';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var cityComboboxGrid = {};	// @dataGrid
	var button4 = {};	// @button
	var cityComboBox = {};	// @textField
	var close = {};	// @button
	var submit = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	cityComboboxGrid.onRowClick = function cityComboboxGrid_onRowClick (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('cityComboboxGrid'));
		grid.style.display = 'none';
		
		var recValue = $$(getHtmlId('cityComboboxGrid')).sourceAtt.getValue();
		$$(getHtmlId('cityComboBox')).setValue(recValue);
	};// @lock

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

	submit.click = function submit_click (event)// @startlock
	{// @endlock
		debugger;
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
		
		var phone = $$(getHtmlId("assessorPhoneField2")).getValue();
		var fax = $$(getHtmlId("assesorFaxField2")).getValue();
		var mobile = $$(getHtmlId("assesorMobileField2")).getValue();
		
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
		
		
		
		var myObject7 = {
    token: '7836140170460568',
    id: '1',
    major: 3,
    minor: 19,
    major2: 3,
    minor2: 104,
    major3: 3,
    minor3: 20,
    data1: $$(getHtmlId("assessorNameField2")).getValue(),
    data2: phone,
    data3: $$(getHtmlId("assesorEmailField2")).getValue(),
    data4: fax,
    data5: $$(getHtmlId("assesorAddressField2")).getValue(),
    data6: $$(getHtmlId("cityComboBox")).getValue(),
    data7: $$(getHtmlId("assesorStateField2")).getValue(),
    data8: $$(getHtmlId("assesorZipField2")).getValue(),
    data9: $$(getHtmlId("assesorExtField2")).getValue(),
    data10: mobile,
    data11: $$(getHtmlId("assesorNotesField2")).getValue(),
    data12: $$(getHtmlId("assessorFullNameField2")).getValue(),
    data13: $$(getHtmlId("reportingComboBox2")).getValue(),
    data15: $$(getHtmlId("assessorInactiveCheckBox")).getValue()
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
	WAF.addListener(this.id + "_cityComboboxGrid", "onRowClick", cityComboboxGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_button4", "click", button4.click, "WAF");
	WAF.addListener(this.id + "_cityComboBox", "keyup", cityComboBox.keyup, "WAF");
	WAF.addListener(this.id + "_cityComboBox", "blur", cityComboBox.blur, "WAF");
	WAF.addListener(this.id + "_close", "click", close.click, "WAF");
	WAF.addListener(this.id + "_submit", "click", submit.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
