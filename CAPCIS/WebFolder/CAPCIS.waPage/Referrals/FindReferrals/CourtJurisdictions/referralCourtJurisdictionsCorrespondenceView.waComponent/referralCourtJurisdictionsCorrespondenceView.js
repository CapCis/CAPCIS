﻿
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralCourtJurisdictionsCorrespondenceView';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var button5 = {};	// @button
	var correspondanceGrid = {};	// @dataGrid
	var courtCorrespondanceActiveBox = {};	// @combobox
	var voidCorrespondanceCheck = {};	// @checkbox
	// @endregion// @endlock

	// eventHandlers// @lock
	function fillCorrespondance()
	{
		var currentCorrespondenceActiveSelected = $$(getHtmlId('courtCorrespondanceActiveBox')).getValue();
    	if (currentCorrespondenceActiveSelected == "All")
    	{
    		var myObject2 = {token: userConfigObj.secToken,id: userConfigObj.userID,major: 3,minor: 25,data1: sources.courtJurisdictionList.CourtJurisdictionID}; 
        	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				
						courtJurisdictionCorespondance = result;
						sources.courtJurisdictionCorespondance.sync();
					},
					'onError': function(error){
						
						console.log(error);
					},
					'params': [myObject2]
				});
    	}
    	else
    	{
    		var myObject2 = {token: userConfigObj.secToken,id: userConfigObj.userID,major: 3,minor: 26,data1: sources.courtJurisdictionList.CourtJurisdictionID,data2: currentCorrespondenceActiveSelected};
        	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				
						courtJurisdictionCorespondance = result;
						sources.courtJurisdictionCorespondance.sync();
					},
					'onError': function(error){
						
						console.log(error);
					},
					'params': [myObject2]
				});
    
    	}
	
	}
	button5.click = function button5_click (event)// @startlock
	{// @endlock
		
		var myBlog = $$(getHtmlId("newCorrespondanceField")).getValue();
		if (myBlog != "")
		{
			var x = $$(getHtmlId("newCorrespondanceField"));
			var myObject8 = 
			{
				token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:5,
				data1:myBlog,
				data2:sources.courtJurisdictionList.CourtJurisdictionID
			}; 
			
			
			rpcDInsert.setInsertAsync({
		 			'onSuccess': function(result){
						fillCorrespondance();
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject8]
				});
			$$(getHtmlId('newCorrespondanceField')).setValue("");
		}
		
	};// @lock

	correspondanceGrid.onRowClick = function correspondanceGrid_onRowClick (event)// @startlock
	{// @endlock
		
	};// @lock

	courtCorrespondanceActiveBox.change = function courtCorrespondanceActiveBox_change (event)// @startlock
	{// @endlock
		fillCorrespondance();
		
	};// @lock

	voidCorrespondanceCheck.change = function voidCorrespondanceCheck_change (event)// @startlock
	{// @endlock
		
		var status = $$(getHtmlId("voidCorrespondanceCheck")).getValue();
		var id = sources.courtJurisdictionCorespondance.CourtJurisdictionCorrespondenceID;
		
		var myObject8 = 
			{
				token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:5,
				
				data2:status,
				data3: id
			}; //dontf
			
			
			rpcDUpdate.setUpdateAsync({
		 			'onSuccess': function(result){
						fillCorrespondance();
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject8]
				});
		
		
		
		
		
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button5", "click", button5.click, "WAF");
	WAF.addListener(this.id + "_correspondanceGrid", "onRowClick", correspondanceGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_courtCorrespondanceActiveBox", "change", courtCorrespondanceActiveBox.change, "WAF");
	WAF.addListener(this.id + "_voidCorrespondanceCheck", "change", voidCorrespondanceCheck.change, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
