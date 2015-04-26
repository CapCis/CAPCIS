
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
	var omCorCloseButton = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	omCorrespondanceGrid.onRowClick = function omCorrespondanceGrid_onRowClick (event)// @startlock
	{// @endlock
				
	};// @lock

	omCorrespondanceActiveBox.change = function omCorrespondanceActiveBox_change (event)// @startlock
	{// @endlock
		debugger;
		var currentCorrespondenceActiveSelected = $$(getHtmlId('omCorrespondanceActiveBox')).getValue();
    	if (currentCorrespondenceActiveSelected == "All")
    	{
    		var myObject2 = {token: userConfigObj.secToken,id: userConfigObj.userID,major: 3,minor: 51,data1: sources.otherMonitorList.OtherMonitorsID}; 
        	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				debugger;
						otherMonitorCorespondance = result;
						sources.otherMonitorCorespondance.sync();
					},
					'onError': function(error){
						debugger;
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
		 				debugger;
						otherMonitorCorespondance = result;
						sources.otherMonitorCorespondance.sync();
					},
					'onError': function(error){
						debugger;
						console.log(error);
					},
					'params': [myObject2]
				});
    
    	}
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock

		var myObject8 = 
			{
				token:'7836140170460568' ,id:'1',major:3,minor:10,
				data1:$$(getHtmlId("omNewCoresspondenceField")).getValue(),
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
			
			$$(getHtmlId('omNewCoresspondenceField')).setValue("");
			fillCorrespondance();
	};// @lock

	omVoidedCorrespondanceCheck.change = function omVoidedCorrespondanceCheck_change (event)// @startlock
	{// @endlock
		var status = $$(getHtmlId("omVoidedCorrespondanceCheck")).getValue();
		var id = sources.otherMonitorCorespondance.OtherMonitorsCorrespondenceID;
		//var id  = $$(getHtmlId('attHiddenCorrId')).getValue();
		var myObject8 = 
			{
				token:'7836140170460568' ,id:'1',major:3,minor:10,
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

	omCorCloseButton.click = function omCorCloseButton_click (event)// @startlock
	{// @endlock
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_omCorrespondanceGrid", "onRowClick", omCorrespondanceGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_omCorrespondanceActiveBox", "change", omCorrespondanceActiveBox.change, "WAF");
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	WAF.addListener(this.id + "_omVoidedCorrespondanceCheck", "change", omVoidedCorrespondanceCheck.change, "WAF");
	WAF.addListener(this.id + "_omCorCloseButton", "click", omCorCloseButton.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
