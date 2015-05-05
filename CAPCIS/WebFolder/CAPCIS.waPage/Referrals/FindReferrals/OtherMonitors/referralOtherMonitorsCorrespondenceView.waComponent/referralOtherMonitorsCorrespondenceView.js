
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralOtherMonitorsCorrespondenceView';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var omCorrespondanceGrid = {};	// @dataGrid
	var omCorrespondanceActiveBox = {};	// @combobox
	var button2 = {};	// @button
	var omVoidedCorrespondanceCheck = {};	// @checkbox
	// @endregion// @endlock

	// eventHandlers// @lock
	function fillCorrespondance()
	{
		var currentCorrespondenceActiveSelected = $$(getHtmlId('omCorrespondanceActiveBox')).getValue();
    	if (currentCorrespondenceActiveSelected == "All")
    	{
    		var myObject2 = {token: userConfigObj.secToken,id: userConfigObj.userID,major: 3,minor: 51,data1: sources.otherMonitorList.OtherMonitorsID}; 
        	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				
						otherMonitorCorespondance = result;
						sources.otherMonitorCorespondance.sync();
					},
					'onError': function(error){
						
						console.log(error);
					},
					'params': [myObject2]
				});
    	}
    	else
    	{
    		var myObject2 = {token: userConfigObj.secToken,id: userConfigObj.userID,major: 3,minor: 52,data1: sources.otherMonitorList.OtherMonitorsID,data2: currentCorrespondenceActiveSelected};
        	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				
						otherMonitorCorespondance = result;
						sources.otherMonitorCorespondance.sync();
					},
					'onError': function(error){
						
						console.log(error);
					},
					'params': [myObject2]
				});
    
    	}
	}
	omCorrespondanceGrid.onRowClick = function omCorrespondanceGrid_onRowClick (event)// @startlock
	{// @endlock
				
	};// @lock

	omCorrespondanceActiveBox.change = function omCorrespondanceActiveBox_change (event)// @startlock
	{// @endlock
		fillCorrespondance();
		
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		var myBlog = $$(getHtmlId("omNewCoresspondenceField")).getValue();
		if (myBlog != "")
		{
			var myObject8 = 
			{
				token:userConfigObj.secToken,id:userConfigObj.userID,major:3,minor:10,
				data1:myBlog,
				data2:sources.otherMonitorList.OtherMonitorsID
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
			
			$$(getHtmlId('omNewCoresspondenceField')).setValue("");
		}
	};// @lock

	omVoidedCorrespondanceCheck.change = function omVoidedCorrespondanceCheck_change (event)// @startlock
	{// @endlock
		var status = $$(getHtmlId("omVoidedCorrespondanceCheck")).getValue();
		var id = sources.otherMonitorCorespondance.OtherMonitorsCorrespondenceID;
		
		var myObject8 = 
			{
				token:userConfigObj.secToken,id:userConfigObj.userID,major:3,minor:10,
				data2:status,
				data3: id
			}; 
			
			
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
	WAF.addListener(this.id + "_omCorrespondanceGrid", "onRowClick", omCorrespondanceGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_omCorrespondanceActiveBox", "change", omCorrespondanceActiveBox.change, "WAF");
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	WAF.addListener(this.id + "_omVoidedCorrespondanceCheck", "change", omVoidedCorrespondanceCheck.change, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
