
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralAssessorsCorrespondenceView';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var submitNewCorrespondence = {};	// @button
	var assessorCorespondanceGrid = {};	// @dataGrid
	var combobox1 = {};	// @combobox
	var button1 = {};	// @button
	var voidCorrespondanceCheck = {};	// @checkbox
	// @endregion// @endlock

	// eventHandlers// @lock
	function fillCorrespondance()
	{
		
		var currentCorrespondenceActiveSelected = $$(getHtmlId('combobox1')).getValue();
    	if (currentCorrespondenceActiveSelected == "All")
    	{
    		var myObject2 = {token: userConfigObj.secToken,id: userConfigObj.userID,major: 3,minor: 7,data1: sources.assessorList.AssessorInformationID}; 
        	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				
						assessorCorespondance = result;
						sources.assessorCorespondance.sync();
					},
					'onError': function(error){
						
						console.log(error);
					},
					'params': [myObject2]
				});
    	}
    	else
    	{
    		var myObject2 = {token: userConfigObj.secToken,id: userConfigObj.userID,major: 3,minor: 2,data1: sources.assessorList.AssessorInformationID,data2: currentCorrespondenceActiveSelected};
        	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				
						assessorCorespondance = result;
						sources.assessorCorespondance.sync();
					},
					'onError': function(error){
						
						console.log(error);
					},
					'params': [myObject2]
				});
    
    	}
    
    }
	submitNewCorrespondence.click = function submitNewCorrespondence_click (event)// @startlock
	{// @endlock
		
		var myObject8 = 
			{
				token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:1,
				data1:$$(getHtmlId("newCorrespondanceField")).getValue(),
				data2:sources.assessorList.AssessorInformationID
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
			
		$$(getHtmlId("newCorrespondanceField")).setValue("");
	};// @lock

	assessorCorespondanceGrid.onRowClick = function assessorCorespondanceGrid_onRowClick (event)// @startlock
	{// @endlock
		
		
	};// @lock

	combobox1.change = function combobox1_change (event)// @startlock
	{// @endlock
		
		fillCorrespondance();
    	
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		
	};// @lock

	voidCorrespondanceCheck.change = function voidCorrespondanceCheck_change (event)// @startlock
	{// @endlock
		var status = $$(getHtmlId("voidCorrespondanceCheck")).getValue();
		var id = sources.assessorCorespondance.AssessorCorrespondenceID;
		var myObject8 = {
	    	token: userConfigObj.secToken,
	    	id: userConfigObj.userID,
	    	major: 3,
	    	minor: 1,
	    	data2: status,
	    	data3: id
		}; 
		assessorUpdate = rpcDUpdate.setUpdateAsync({
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
	WAF.addListener(this.id + "_submitNewCorrespondence", "click", submitNewCorrespondence.click, "WAF");
	WAF.addListener(this.id + "_assessorCorespondanceGrid", "onRowClick", assessorCorespondanceGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_combobox1", "change", combobox1.change, "WAF");
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	WAF.addListener(this.id + "_voidCorrespondanceCheck", "change", voidCorrespondanceCheck.change, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
