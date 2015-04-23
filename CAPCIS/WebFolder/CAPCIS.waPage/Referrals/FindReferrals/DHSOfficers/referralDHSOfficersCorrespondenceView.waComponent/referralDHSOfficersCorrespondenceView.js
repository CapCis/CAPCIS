﻿
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralDHSOfficersCorrespondenceView';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var dhsCorrespondenceActiveCombo = {};	// @combobox
	var button5 = {};	// @button
	var correspondanceGrid = {};	// @dataGrid
	var button2 = {};	// @button
	var voidCorrespondanceCheck = {};	// @checkbox
	// @endregion// @endlock

	// eventHandlers// @lock

	dhsCorrespondenceActiveCombo.change = function dhsCorrespondenceActiveCombo_change (event)// @startlock
	{// @endlock
		debugger;
		var currentCorrespondenceActiveSelected = $$(getHtmlId('dhsCorrespondenceActiveCombo')).getValue();
    	if (currentCorrespondenceActiveSelected == "All")
    	{
    		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:34,data1:sources.dhsList.DhsInformationID};
			rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){	
		 					 				
						dhsCorespondance = result;
						sources.dhsCorespondance.sync();
					},
					'onError': function(error){						
						console.log(error);
					},
					'params': [myObject5]
		});
    	}
    	else
    	{
    		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:35,data1:sources.dhsList.DhsInformationID,data2:currentCorrespondenceActiveSelected};
			rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){	
		 					 				
						dhsCorespondance = result;
						sources.dhsCorespondance.sync();
					},
					'onError': function(error){						
						console.log(error);
					},
					'params': [myObject5]
		});
    
    	}
	};// @lock

	button5.click = function button5_click (event)// @startlock
	{// @endlock
		
		
			var x = $$(getHtmlId("newCorrespondanceField"));
		var myObject8 = 
			{
				token:'7836140170460568' ,id:'1',major:3,minor:6,
				data1:$$(getHtmlId("newCorrespondanceField")).getValue(),
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
			
			$$(getHtmlId('newCorrespondanceField')).setValue("");
			fillCorrespondance();
	};// @lock

	correspondanceGrid.onRowClick = function correspondanceGrid_onRowClick (event)// @startlock
	{// @endlock
		
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		
	};// @lock

	voidCorrespondanceCheck.change = function voidCorrespondanceCheck_change (event)// @startlock
	{// @endlock
		
		var status = $$(getHtmlId("voidCorrespondanceCheck")).getValue();
		var id = sources.dhsCorespondance.DhsCorrespondenceID;
		//var id  = $$(getHtmlId('attHiddenCorrId')).getValue();
		var myObject8 = 
			{
				token:'7836140170460568' ,id:'1',major:3,minor:6,
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

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_dhsCorrespondenceActiveCombo", "change", dhsCorrespondenceActiveCombo.change, "WAF");
	WAF.addListener(this.id + "_button5", "click", button5.click, "WAF");
	WAF.addListener(this.id + "_correspondanceGrid", "onRowClick", correspondanceGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	WAF.addListener(this.id + "_voidCorrespondanceCheck", "change", voidCorrespondanceCheck.change, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
