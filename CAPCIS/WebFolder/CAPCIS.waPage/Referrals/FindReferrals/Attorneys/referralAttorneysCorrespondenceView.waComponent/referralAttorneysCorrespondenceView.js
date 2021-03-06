﻿
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralAttorneysCorrespondenceView';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var attCorrespondanceActiveBox = {};	// @combobox
	var attCorrespondanceGrid = {};	// @dataGrid
	var button2 = {};	// @button
	var attVoidedCorrespondanceCheck = {};	// @checkbox
	// @endregion// @endlock

	// eventHandlers// @lock
	function fillCorrespondance()
	{
		var currentCorrespondenceActiveSelected = $$(getHtmlId('attCorrespondanceActiveBox')).getValue();
    	if (currentCorrespondenceActiveSelected == "All")
    	{
    		var myObject2 = {token: userConfigObj.secToken,id: userConfigObj.userID,major: 3,minor: 16,data1: sources.attorneyList.AttorneyInformationID}; 
        	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				
						attorneyCorespondance = result;
						sources.attorneyCorespondance.sync();
					},
					'onError': function(error){
						
						console.log(error);
					},
					'params': [myObject2]
				});
    	}
    	else
    	{
    		var myObject2 = {token: userConfigObj.secToken,id: userConfigObj.userID,major: 3,minor: 17,data1: sources.attorneyList.AttorneyInformationID,data2: currentCorrespondenceActiveSelected};
        	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				
						attorneyCorespondance = result;
						sources.attorneyCorespondance.sync();
					},
					'onError': function(error){
						
						console.log(error);
					},
					'params': [myObject2]
				});
    
    	}
	}
	attCorrespondanceActiveBox.change = function attCorrespondanceActiveBox_change (event)// @startlock
	{// @endlock
		fillCorrespondance();	
    	
	};// @lock

	attCorrespondanceGrid.onRowClick = function attCorrespondanceGrid_onRowClick (event)// @startlock
	{// @endlock
		
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		var myBlog = $$(getHtmlId("attNewCoresspondenceField")).getValue();
		if (myBlog != "")
		{
			var myObject8 = 
			{
				token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:2,
				data1:myBlog,
				data2:sources.attorneyList.AttorneyInformationID
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
			$$(getHtmlId("attNewCoresspondenceField")).setValue("")
		}
	};// @lock

	attVoidedCorrespondanceCheck.change = function attVoidedCorrespondanceCheck_change (event)// @startlock
	{// @endlock
		var status = $$(getHtmlId("attVoidedCorrespondanceCheck")).getValue();
		var id  = sources.attorneyCorespondance.AttorneyCorrespondenceID;
		var myObject8 = 
			{
				token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:2,
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
	WAF.addListener(this.id + "_attCorrespondanceActiveBox", "change", attCorrespondanceActiveBox.change, "WAF");
	WAF.addListener(this.id + "_attCorrespondanceGrid", "onRowClick", attCorrespondanceGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	WAF.addListener(this.id + "_attVoidedCorrespondanceCheck", "change", attVoidedCorrespondanceCheck.change, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
