
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralNewJudges';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:84}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						jurisdictionSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
		
		tempStore = city;

	// @region namespaceDeclaration// @startlock
	var button4 = {};	// @button
	var judgeJurisdiction = {};	// @textField
	var judgeJurisdictionGrid = {};	// @dataGrid
	var button3 = {};	// @button
	var cityComboBox = {};	// @textField
	var cityComboboxGrid = {};	// @dataGrid
	var closeJudgeCurrentButton = {};	// @button
	var submitButton = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	button4.click = function button4_click (event)// @startlock
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

	judgeJurisdictionGrid.onRowClick = function judgeJurisdictionGrid_onRowClick (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('judgeJurisdictionGrid'));
		grid.style.display = 'none';
		
		var recValue = $$(getHtmlId('judgeJurisdictionGrid')).sourceAtt.getValue();
		$$(getHtmlId('judgeJurisdiction')).setValue(recValue);
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

	cityComboboxGrid.onRowClick = function cityComboboxGrid_onRowClick (event)// @startlock
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
		debugger;
		var phone = $$(getHtmlId("judgePhoneField")).getValue();
		var fax = $$(getHtmlId("judgeFaxField")).getValue();
		var mobile = $$(getHtmlId("judgeMobileField")).getValue();
		
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
				
				token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:23,
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
				data12:$$(getHtmlId("judgeFullNameField")).getValue(),
				data13:$$(getHtmlId("reportingComboBox")).getValue(),
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
				
				newAssessor = document.getElementById($comp.id);
	$comp.removeComponent();
	newAssessor.style.visibility = 'hidden';
	newAssessor.style.zIndex = '0';
				
	};// @lock
	function jurisdictionSuccess(result)
	{
		var tempCity = result[0];
		result[0] = {
	    	CourtJurisdiction: "None"
		};
		result[result.length] = tempCity;
		
		jurisdiction = result;
		tempStore2 =  jurisdiction;
		sources.jurisdiction.sync();
	}

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button4", "click", button4.click, "WAF");
	WAF.addListener(this.id + "_judgeJurisdiction", "keyup", judgeJurisdiction.keyup, "WAF");
	WAF.addListener(this.id + "_judgeJurisdiction", "blur", judgeJurisdiction.blur, "WAF");
	WAF.addListener(this.id + "_judgeJurisdictionGrid", "onRowClick", judgeJurisdictionGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_button3", "click", button3.click, "WAF");
	WAF.addListener(this.id + "_cityComboBox", "keyup", cityComboBox.keyup, "WAF");
	WAF.addListener(this.id + "_cityComboBox", "blur", cityComboBox.blur, "WAF");
	WAF.addListener(this.id + "_cityComboboxGrid", "onRowClick", cityComboboxGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_closeJudgeCurrentButton", "click", closeJudgeCurrentButton.click, "WAF");
	WAF.addListener(this.id + "_submitButton", "click", submitButton.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
