
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralProbationJurisdictionsCorrespondenceView';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var pjCorrespondanceGrid = {};	// @dataGrid
	var pjCorrespondanceActiveBox = {};	// @combobox
	var button2 = {};	// @button
	var pjVoidedCorrespondanceCheck = {};	// @checkbox
	// @endregion// @endlock

	// eventHandlers// @lock

	pjCorrespondanceGrid.onRowClick = function pjCorrespondanceGrid_onRowClick (event)// @startlock
	{// @endlock
				
	};// @lock
	function fillCorrespondance()
	{
		var currentCorrespondenceActiveSelected = $$(getHtmlId('pjCorrespondanceActiveBox')).getValue();
    	if (currentCorrespondenceActiveSelected == "All")
    	{
    		var myObject2 = {token: userConfigObj.secToken,id: userConfigObj.userID,major: 3,minor: 60,data1: sources.probationJurisdictionList.POJurisdictionID}; 
        	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				
						probationJurisdictionCorespondance = result;
						sources.probationJurisdictionCorespondance.sync();
					},
					'onError': function(error){
						
						console.log(error);
					},
					'params': [myObject2]
				});
    	}
    	else
    	{
    		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:61,data1:sources.probationJurisdictionList.POJurisdictionID,data2:currentCorrespondenceActiveSelected};
			rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){	
		 					 				
						probationJurisdictionCorespondance = result;
						sources.probationJurisdictionCorespondance.sync();
					},
					'onError': function(error){						
						console.log(error);
					},
					'params': [myObject5]
		});
    
    	}
	}
	


	pjCorrespondanceActiveBox.change = function pjCorrespondanceActiveBox_change (event)// @startlock
	{// @endlock
		 fillCorrespondance();
		
	};// @lock



	button2.click = function button2_click (event)// @startlock
	{// @endlock
		var myObject8 = 
			{
				token:'7836140170460568' ,id:'1',major:3,minor:12,
				data1:$$(getHtmlId("pjNewCoresspondenceField")).getValue(),
				data2:sources.probationJurisdictionList.POJurisdictionID
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
			
			$$(getHtmlId('pjNewCoresspondenceField')).setValue("");
			
	};// @lock

	pjVoidedCorrespondanceCheck.change = function pjVoidedCorrespondanceCheck_change (event)// @startlock
	{// @endlock
		var status = $$(getHtmlId("pjVoidedCorrespondanceCheck")).getValue();
		var id = sources.probationJurisdictionCorespondance.POJurisdictionCorrespondenceID;
		var myObject8 = 
			{
				token:'7836140170460568' ,id:'1',major:3,minor:12,
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
	WAF.addListener(this.id + "_pjCorrespondanceGrid", "onRowClick", pjCorrespondanceGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_pjCorrespondanceActiveBox", "change", pjCorrespondanceActiveBox.change, "WAF");
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	WAF.addListener(this.id + "_pjVoidedCorrespondanceCheck", "change", pjVoidedCorrespondanceCheck.change, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
