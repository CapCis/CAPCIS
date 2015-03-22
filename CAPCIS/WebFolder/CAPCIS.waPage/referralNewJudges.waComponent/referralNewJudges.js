
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralNewJudges';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var button3 = {};	// @button
	var textField1 = {};	// @textField
	var dataGrid1 = {};	// @dataGrid
	var closeJudgeCurrentButton = {};	// @button
	var submitButton = {};	// @button
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

	dataGrid1.onRowClick = function dataGrid1_onRowClick (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('cityComboboxGrid'));
		grid.style.display = 'none';
		
		var recValue = $$(getHtmlId('cityComboboxGrid')).sourceAtt.getValue();
		$$(getHtmlId('cityComboBox')).setValue(recValue);
	};// @lock

	closeJudgeCurrentButton.click = function closeJudgeCurrentButton_click (event)// @startlock
	{// @endlock
		newAssessor = document.getElementById($comp.id);
		$comp.removeComponent();
		newAssessor.style.visibility = 'hidden';
		newAssessor.style.zIndex = '0';
	};// @lock

	submitButton.click = function submitButton_click (event)// @startlock
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
		
		var phone = $$(getHtmlId("judgePhoneField")).getValue();
		var fax = $$(getHtmlId("judgeFaxField")).getValue();
		var mobile = $$(getHtmlId("judgeMobileField")).getValue();
		
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
				
				token:'7836140170460568' ,id:'1',major:3,minor:9,
				data1:$$(getHtmlId("judgeNameField")).getValue(),
				data2:phone,
				data3:$$(getHtmlId("judgeEmailField")).getValue(),
				data4:fax,
				data5:$$(getHtmlId("judgeAddressField")).getValue(),
				data6:$$(getHtmlId("cityComboBox")).getValue(),
				data7:$$(getHtmlId("judgeStateField")).getValue(),
				data8:$$(getHtmlId("judgeZipField")).getValue(),
				data9:$$(getHtmlId("judgeExtField")).getValue(),
				data10:mobile,
				data11:$$(getHtmlId("judgeNotesField")).getValue(),
				data12:$$(getHtmlId("judgeFullNameField")).getValue(),
				data13:$$(getHtmlId("reportingComboBox")).getValue(),
				data14:currentID,
				data15:$$(getHtmlId("judgeInactiveCheckBox")).getValue(),
				data16:$$(getHtmlId("judgeJurisdiction")).getValue()
			}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 		
	 		rpcDInsert.setInsertAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject7]
				});
				
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button3", "click", button3.click, "WAF");
	WAF.addListener(this.id + "_textField1", "keyup", textField1.keyup, "WAF");
	WAF.addListener(this.id + "_textField1", "blur", textField1.blur, "WAF");
	WAF.addListener(this.id + "_dataGrid1", "onRowClick", dataGrid1.onRowClick, "WAF");
	WAF.addListener(this.id + "_closeJudgeCurrentButton", "click", closeJudgeCurrentButton.click, "WAF");
	WAF.addListener(this.id + "_submitButton", "click", submitButton.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
