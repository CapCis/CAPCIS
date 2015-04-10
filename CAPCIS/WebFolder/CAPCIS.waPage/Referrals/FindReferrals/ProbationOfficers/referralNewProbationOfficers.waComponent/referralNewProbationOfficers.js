
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralNewProbationOfficers';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var judgeJurisdictionGrid = {};	// @dataGrid
	var judgeJurisdiction = {};	// @textField
	var button1 = {};	// @button
	var button15 = {};	// @button
	var button14 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	judgeJurisdictionGrid.onRowClick = function judgeJurisdictionGrid_onRowClick (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('judgeJurisdictionGrid'));
		grid.style.display = 'none';
		
		var recValue = $$(getHtmlId('judgeJurisdictionGrid')).sourceAtt.getValue();
		$$(getHtmlId('judgeJurisdiction')).setValue(recValue);
	};// @lock

	judgeJurisdiction.keyup = function judgeJurisdiction_keyup (event)// @startlock
	{// @endlock
		if(event.keyCode ===13)
		{
			var currentInput = $$($comp.id+'_judgeJurisdiction').getValue();
			$$($comp.id+'_judgeJurisdiction').setValue(sources.poJurisdiction.JurisdictionName);
			var grid = document.getElementById($comp.id+'_judgeJurisdictionGrid');
			grid.style.display = 'none';
		}
		
		else
		{
			
			poJurisdiction=tempStore2;
			sources.poJurisdiction.sync();

			var grid = document.getElementById($comp.id+'_judgeJurisdictionGrid');
			grid.style.display = 'block';

			var currentInput = $$($comp.id+'_judgeJurisdiction').getValue();//textInput.value;
			sources.poJurisdiction.query('JurisdictionName = :1 order by JurisdictionName', { params: [currentInput + "*"]});
		}
	};// @lock

	judgeJurisdiction.blur = function judgeJurisdiction_blur (event)// @startlock
	{// @endlock
		var currentInput = $$($comp.id+'_judgeJurisdiction').getValue();
			$$($comp.id+'_judgeJurisdiction').setValue(sources.poJurisdiction.JurisdictionName);
			var grid = document.getElementById($comp.id+'_judgeJurisdictionGrid');
			grid.style.display = 'none';
		
	};// @lock

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

	button15.click = function button15_click (event)// @startlock
	{// @endlock
		newAssessor = document.getElementById($comp.id);
		$comp.removeComponent();
		newAssessor.style.visibility = 'hidden';
		newAssessor.style.zIndex = '0';
	};// @lock

	button14.click = function button14_click (event)// @startlock
	{// @endlock
		var phone = $$(getHtmlId("poPhone")).getValue();
		var fax = $$(getHtmlId("poFax")).getValue();
		var mobile = $$(getHtmlId("poAdditional")).getValue();
		
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
				
				token:'7836140170460568' ,id:'1',major:3,minor: 15,
				data1:$$(getHtmlId("poName")).getValue(),
				data2:phone,
				data3:$$(getHtmlId("poEmail")).getValue(),
				data4:fax,
				data8:sources.poJurisdiction.POJurisdictionID,
				data9:$$(getHtmlId("poExt")).getValue(),
				data10:mobile,
				data11:$$(getHtmlId("notes")).getValue(),
				data12:$$(getHtmlId("poFullName")).getValue(),
				data13:$$(getHtmlId("poReportingComboBox")).getValue(),
				data15:$$(getHtmlId("poInactive")).getValue()
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
	WAF.addListener(this.id + "_judgeJurisdictionGrid", "onRowClick", judgeJurisdictionGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_judgeJurisdiction", "keyup", judgeJurisdiction.keyup, "WAF");
	WAF.addListener(this.id + "_judgeJurisdiction", "blur", judgeJurisdiction.blur, "WAF");
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	WAF.addListener(this.id + "_button15", "click", button15.click, "WAF");
	WAF.addListener(this.id + "_button14", "click", button14.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
