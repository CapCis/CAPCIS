
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralNewProsecutors';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
	var prosJurisdiction = {};	// @textField
	var judgeJurisdictionGrid = {};	// @dataGrid
	var cityComboboxGrid = {};	// @dataGrid
	var button4 = {};	// @button
	var prosCityComboBox = {};	// @textField
	var button15 = {};	// @button
	var button14 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
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

	prosJurisdiction.blur = function prosJurisdiction_blur (event)// @startlock
	{// @endlock
		var currentInput = $$($comp.id+'_prosJurisdiction').getValue();
			$$($comp.id+'_prosJurisdiction').setValue(sources.city.CityListing);
			var grid = document.getElementById($comp.id+'_judgeJurisdictionGrid');
			grid.style.display = 'none';
		
	};// @lock

	prosJurisdiction.keyup = function prosJurisdiction_keyup (event)// @startlock
	{// @endlock
		if(event.keyCode ===13)
		{
			debugger;
			var currentInput = $$($comp.id+'_prosJurisdiction').getValue();
			$$($comp.id+'_prosJurisdiction').setValue(sources.jurisdiction.CourtJurisdiction);
			var grid = document.getElementById($comp.id+'_judgeJurisdictionGrid');
			grid.style.display = 'none';
		}
		
		else
		{
			
			jurisdiction=tempStore2;
			sources.jurisdiction.sync();

			var grid = document.getElementById($comp.id+'_judgeJurisdictionGrid');
			grid.style.display = 'block';

			var currentInput = $$($comp.id+'_prosJurisdiction').getValue();//textInput.value;
			sources.jurisdiction.query('CourtJurisdiction = :1 order by CourtJurisdiction', { params: [currentInput + "*"]});
		}
	};// @lock

	judgeJurisdictionGrid.onRowClick = function judgeJurisdictionGrid_onRowClick (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('judgeJurisdictionGrid'));
		grid.style.display = 'none';
		
		var recValue = $$(getHtmlId('judgeJurisdictionGrid')).sourceAtt.getValue();
		$$(getHtmlId('prosJurisdiction')).setValue(recValue);
	};// @lock

	cityComboboxGrid.onRowClick = function cityComboboxGrid_onRowClick (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('cityComboboxGrid'));
		grid.style.display = 'none';
		
		var recValue = $$(getHtmlId('cityComboboxGrid')).sourceAtt.getValue();
		$$(getHtmlId('prosCityComboBox')).setValue(recValue);
	};// @lock

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

	prosCityComboBox.keyup = function prosCityComboBox_keyup (event)// @startlock
	{// @endlock
		if(event.keyCode ===13)
		{
			var currentInput = $$($comp.id+'_prosCityComboBox').getValue();
			$$($comp.id+'_prosCityComboBox').setValue(sources.city.CityListing);
			var grid = document.getElementById($comp.id+'_cityComboboxGrid');
			grid.style.display = 'none';
		}
		
		else
		{
			
			city=tempStore;
			sources.city.sync();

			var grid = document.getElementById($comp.id+'_cityComboboxGrid');
			grid.style.display = 'block';

			var currentInput = $$($comp.id+'_prosCityComboBox').getValue();//textInput.value;
			sources.city.query('CityListing = :1 order by CityListing', { params: [currentInput + "*"]});
		}
	};// @lock

	prosCityComboBox.blur = function prosCityComboBox_blur (event)// @startlock
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
		var currentCity = $$($comp.id + "_prosCityComboBox").getValue();
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
		var phone = $$(getHtmlId("prosPhone")).getValue();
		var fax = $$(getHtmlId("prosFax")).getValue();
		var mobile = $$(getHtmlId("prosAdditional")).getValue();
		
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
				
				token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor: 27,
				data1:$$(getHtmlId("prosName")).getValue(),
				data2:phone,
				data3:$$(getHtmlId("prosEmail")).getValue(),
				data4:fax,
				data5:$$(getHtmlId("prosAddress")).getValue(),
				data6:$$(getHtmlId("prosCityComboBox")).getValue(),
				data7:$$(getHtmlId("prosState")).getValue(),
				data8:$$(getHtmlId("prosZip")).getValue(),
				data9:$$(getHtmlId("prosExt")).getValue(),
				data10:mobile,
				data11:$$(getHtmlId("prosNotes")).getValue(),
				data12:$$(getHtmlId("prosFullName")).getValue(),
				data13:$$(getHtmlId("prosReportingComboBox")).getValue(),
				data15:$$(getHtmlId("prosInactive")).getValue(),
				data16:$$(getHtmlId("prosJurisdiction")).getValue()
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
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	WAF.addListener(this.id + "_prosJurisdiction", "blur", prosJurisdiction.blur, "WAF");
	WAF.addListener(this.id + "_prosJurisdiction", "keyup", prosJurisdiction.keyup, "WAF");
	WAF.addListener(this.id + "_judgeJurisdictionGrid", "onRowClick", judgeJurisdictionGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_cityComboboxGrid", "onRowClick", cityComboboxGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_button4", "click", button4.click, "WAF");
	WAF.addListener(this.id + "_prosCityComboBox", "keyup", prosCityComboBox.keyup, "WAF");
	WAF.addListener(this.id + "_prosCityComboBox", "blur", prosCityComboBox.blur, "WAF");
	WAF.addListener(this.id + "_button15", "click", button15.click, "WAF");
	WAF.addListener(this.id + "_button14", "click", button14.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
