
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralDHSOfficersCorrespondenceView';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var checkbox1 = {};	// @checkbox
	var button1 = {};	// @button
	var combobox1 = {};	// @combobox
	var correspondanceGrid = {};	// @dataGrid
	
	// @endregion// @endlock

	// eventHandlers// @lock

	checkbox1.change = function checkbox1_change (event)// @startlock
	{// @endlock
		var status = $$(getHtmlId("checkbox1")).getValue();
		var id = sources.dhsCorespondance.DhsCorrespondenceID;
		
		var myObject8 = 
			{
				token:'7836140170460568' ,id:'1',major:3,minor:6,
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

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		
		var myBlog = $$(getHtmlId("newCorrespondanceField")).getValue();
		if (myBlog != "")
		{
		var myObject8 = 
			{
				token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:6,
				data1:myBlog,
				data2:sources.dhsList.DhsInformationID
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

	combobox1.change = function combobox1_change (event)// @startlock
	{// @endlock
		
	};// @lock
	
	
	
	function fillCorrespondance()
	{
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
	}

	correspondanceGrid.onRowClick = function correspondanceGrid_onRowClick (event)// @startlock
	{// @endlock
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_checkbox1", "change", checkbox1.change, "WAF");
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	WAF.addListener(this.id + "_combobox1", "change", combobox1.change, "WAF");
	WAF.addListener(this.id + "_correspondanceGrid", "onRowClick", correspondanceGrid.onRowClick, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
