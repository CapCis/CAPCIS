
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralProbationOfficers';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:85}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						jurisdictionSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
		
			//fillMainTable();
		
		function fillMainTable()
		{
			
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:65,data1:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
			
			var currentCorrespondenceActiveSelected = $$(getHtmlId('poCorrespondanceActiveBox')).getValue();
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
				var myObject2 = {token:'7836140170460568' ,id:'1',major:3,minor:69,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
				var myObject2 = {token:'7836140170460568' ,id:'1',major:3,minor:70,data1:currentID,data2:currentCorrespondanceViewVoided}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
	var judgeJurisdictionGrid = {};	// @dataGrid
	var judgeJurisdiction = {};	// @textField
	var Close = {};	// @button
	var button3 = {};	// @button
	var dataGrid1 = {};	// @dataGrid
	var poVoidedCorrespondanceCheck = {};	// @checkbox
	var poCorCloseButton = {};	// @button
	var poCorrespondanceGrid = {};	// @dataGrid
	var poCorrespondanceActiveBox = {};	// @combobox
	var button2 = {};	// @button
	var button16 = {};	// @button
	var button15 = {};	// @button
	var button14 = {};	// @button
	var probationOfficerDataGird = {};	// @dataGrid
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

	Close.click = function Close_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('poPrevVersionCont')).setSplitPosition(625);
	};// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('poSpecificInfoCont')).setSplitPosition(900);
	};// @lock

	dataGrid1.onRowClick = function dataGrid1_onRowClick (event)// @startlock
	{// @endlock
		
		$$(getHtmlId('poPrevVersionCont')).setSplitPosition(250);
	};// @lock

	poVoidedCorrespondanceCheck.change = function poVoidedCorrespondanceCheck_change (event)// @startlock
	{// @endlock
		var status = $$(getHtmlId("poVoidedCorrespondanceCheck")).getValue();
		var id = sources.probationOfficerCorespondance.POCorrespondenceID;
		//var id  = $$(getHtmlId('attHiddenCorrId')).getValue();
		var myObject8 = 
			{
				token:'7836140170460568' ,id:'1',major:3,minor:14,
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

	poCorCloseButton.click = function poCorCloseButton_click (event)// @startlock
	{// @endlock
		fillCorrespondance();
		$$(getHtmlId('poCorrCont')).setSplitPosition(1290);
	};// @lock

	poCorrespondanceGrid.onRowClick = function poCorrespondanceGrid_onRowClick (event)// @startlock
	{// @endlock
		$$(getHtmlId('poCorrCont')).setSplitPosition(420);
		$$(getHtmlId('poSpecificInfoCont')).setSplitPosition(900);		
	};// @lock

	poCorrespondanceActiveBox.change = function poCorrespondanceActiveBox_change (event)// @startlock
	{// @endlock
		fillCorrespondance();
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		var myObject8 = 
			{
				token:'7836140170460568' ,id:'1',major:3,minor:14,
				data1:$$(getHtmlId("poNewCoresspondenceField")).getValue(),
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
			
			$$(getHtmlId('poNewCoresspondenceField')).setValue("");
			fillCorrespondance();
	};// @lock

	button16.click = function button16_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('poSpecificInfoCont')).setSplitPosition(420);
		
		var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:72,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
		$$(getHtmlId('mainProbationOfficerCont')).setSplitPosition(1290);
	};// @lock

	button14.click = function button14_click (event)// @startlock
	{// @endlock
			debugger;
var myObject7 = 
			{
				
				token:'7836140170460568' ,id:'1',major:3,minor: 15,
				data1:$$(getHtmlId("poName")).getValue(),
				data2:$$(getHtmlId("poPhone")).getValue(),
				data3:$$(getHtmlId("poEmail")).getValue(),
				data4:$$(getHtmlId("poFax")).getValue(),
				data8:$$(getHtmlId("")).getValue(),
				data9:$$(getHtmlId("poExt")).getValue(),
				data10:$$(getHtmlId("poAdditional")).getValue(),
				data11:$$(getHtmlId("notes")).getValue(),
				data12:$$(getHtmlId("poFullName")).getValue(),
				data13:$$(getHtmlId("poReportingComboBox")).getValue(),
				data14:currentID,
				data15:$$(getHtmlId("poInactive")).getValue()
			}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 		rpcDUpdate.setUpdateAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);vo
					},
					'params': [myObject7]
				});
				
	 		
	 		
			var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:72,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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

	probationOfficerDataGird.onRowClick = function probationOfficerDataGird_onRowClick (event)// @startlock
	{// @endlock
		
		tempStore2 =  poJurisdiction;
		$$(getHtmlId('mainProbationOfficerCont')).setSplitPosition(450);
		$$(getHtmlId('poSpecificInfoCont')).setSplitPosition(2000);
	 	$$(getHtmlId('poPrevVersionCont')).setSplitPosition(1000);
	 	$$(getHtmlId('poCorrCont')).setSplitPosition(420);
				
		var name = sources.probationOfficerList.POName;
		var reportingMethod = sources.probationOfficerList.POPreferredReportingMethod;
		var ids = sources.probationOfficerList.POInformationID;
		var juri = sources.probationOfficerList.JurisdictionName;
		
		if(juri != "" && juri != null)
		{
			$$(getHtmlId('judgeJurisdiction')).setValue(juri);
		}
		else
		{
			$$(getHtmlId('judgeJurisdiction')).setValue("None");
		}
		
		if(reportingMethod != "" && reportingMethod != null)
		{
				
			$$(getHtmlId('poReportingComboBox')).setValue(reportingMethod);
		}
		
		else
		{
				
			$$(getHtmlId('poReportingComboBox')).setValue("None");
		}
		
		
		
	 
		///////////////////////////////////////////////////////////get data
		
		
		currentName = name;
		currentID = ids;

		fillCorrespondance();
	};// @lock
	function mainListSuccess(result)
	{
		
		probationOfficerList = result;
		sources.probationOfficerList.sync();
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
		
		specificProbationOfficerList = result;
		sources.specificProbationOfficerList.sync();
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
		
		probationOfficerCorespondance = result;
		sources.probationOfficerCorespondance.sync();
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
		
		bakProbationOfficerInfo = result;
		sources.bakProbationOfficerInfo.sync();
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
	
	function jurisdictionSuccess(result)
	{
		var tempCity = result[0];
		result[0] = {
	    	JurisdictionName: "None"
		};
		result[result.length] = tempCity;
		
		poJurisdiction = result;
		sources.poJurisdiction.sync();
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
	WAF.addListener(this.id + "_judgeJurisdictionGrid", "onRowClick", judgeJurisdictionGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_judgeJurisdiction", "keyup", judgeJurisdiction.keyup, "WAF");
	WAF.addListener(this.id + "_judgeJurisdiction", "blur", judgeJurisdiction.blur, "WAF");
	WAF.addListener(this.id + "_Close", "click", Close.click, "WAF");
	WAF.addListener(this.id + "_button3", "click", button3.click, "WAF");
	WAF.addListener(this.id + "_dataGrid1", "onRowClick", dataGrid1.onRowClick, "WAF");
	WAF.addListener(this.id + "_poVoidedCorrespondanceCheck", "change", poVoidedCorrespondanceCheck.change, "WAF");
	WAF.addListener(this.id + "_poCorCloseButton", "click", poCorCloseButton.click, "WAF");
	WAF.addListener(this.id + "_poCorrespondanceGrid", "onRowClick", poCorrespondanceGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_poCorrespondanceActiveBox", "change", poCorrespondanceActiveBox.change, "WAF");
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	WAF.addListener(this.id + "_button16", "click", button16.click, "WAF");
	WAF.addListener(this.id + "_button15", "click", button15.click, "WAF");
	WAF.addListener(this.id + "_button14", "click", button14.click, "WAF");
	WAF.addListener(this.id + "_probationOfficerDataGird", "onRowClick", probationOfficerDataGird.onRowClick, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
