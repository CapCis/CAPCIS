
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralProsecutorsCorrespondenceView';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var prosCorrespondanceGrid = {};	// @dataGrid
	var prosCorrespondanceActiveBox = {};	// @combobox
	var button2 = {};	// @button
	var prosVoidedCorrespondanceCheck = {};	// @checkbox
	// @endregion// @endlock

	// eventHandlers// @lock

	prosCorrespondanceGrid.onRowClick = function prosCorrespondanceGrid_onRowClick (event)// @startlock
	{// @endlock
		
	};// @lock
	
	function fillCorrespondance()
	{
		var currentCorrespondenceActiveSelected = $$(getHtmlId('prosCorrespondanceActiveBox')).getValue();
    	if (currentCorrespondenceActiveSelected == "All")
    	{
    		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:78,data1:sources.prosecutorList.ProsecutorsID};
			rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){	
		 					 				
						prosecutorCorespondance = result;
						sources.prosecutorCorespondance.sync();
					},
					'onError': function(error){						
						console.log(error);
					},
					'params': [myObject5]
		});
    	}
    	else
    	{
    		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:79,data1:sources.prosecutorList.ProsecutorsID,data2:currentCorrespondenceActiveSelected};
			rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){	
		 					 				
						prosecutorCorespondance = result;
						sources.prosecutorCorespondance.sync();
					},
					'onError': function(error){						
						console.log(error);
					},
					'params': [myObject5]
		});
    
    	}
		
	}

	prosCorrespondanceActiveBox.change = function prosCorrespondanceActiveBox_change (event)// @startlock
	{// @endlock
		fillCorrespondance();
		
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		var myObject8 = 
			{
				token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:16,
				data1:$$(getHtmlId("prosNewCoresspondenceField")).getValue(),
				data2:sources.prosecutorList.ProsecutorsID
			}; //dontf
			
			rpcDInsert.setInsertAsync({
		 			'onSuccess': function(result){
						fillCorrespondance();
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject8]
				});
			
			$$(getHtmlId('prosNewCoresspondenceField')).setValue("");
			
	};// @lock

	prosVoidedCorrespondanceCheck.change = function prosVoidedCorrespondanceCheck_change (event)// @startlock
	{// @endlock
		var status = $$(getHtmlId("prosVoidedCorrespondanceCheck")).getValue();
		var id = sources.prosecutorCorespondance.ProsecutorCorrespondenceID;
		//var id  = $$(getHtmlId('attHiddenCorrId')).getValue();
		var myObject8 = 
			{
				token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:16,
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
	WAF.addListener(this.id + "_prosCorrespondanceGrid", "onRowClick", prosCorrespondanceGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_prosCorrespondanceActiveBox", "change", prosCorrespondanceActiveBox.change, "WAF");
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	WAF.addListener(this.id + "_prosVoidedCorrespondanceCheck", "change", prosVoidedCorrespondanceCheck.change, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
