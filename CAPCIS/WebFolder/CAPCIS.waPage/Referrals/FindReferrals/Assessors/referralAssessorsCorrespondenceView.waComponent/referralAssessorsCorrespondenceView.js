
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
	var checkbox1 = {};	// @checkbox
	// @endregion// @endlock

	// eventHandlers// @lock

	submitNewCorrespondence.click = function submitNewCorrespondence_click (event)// @startlock
	{// @endlock
		//Submit Correspondence Notes
	};// @lock

	assessorCorespondanceGrid.onRowClick = function assessorCorespondanceGrid_onRowClick (event)// @startlock
	{// @endlock
		//Load referralAssessorsCorrespondenceView Page
		
	};// @lock

	combobox1.change = function combobox1_change (event)// @startlock
	{// @endlock
		debugger;
		var currentCorrespondenceActiveSelected = $$(getHtmlId('combobox1')).getValue();
    	if (currentCorrespondenceActiveSelected == "All")
    	{
    		var myObject2 = {token: userConfigObj.secToken,id: userConfigObj.userID,major: 3,minor: 7,data1: sources.assessorCorespondance.FK_AssessorInformationID}; 
        	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				debugger;
						assessorCorespondance = result;
						sources.assessorCorespondance.sync();
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
    		var myObject2 = {token: userConfigObj.secToken,id: userConfigObj.userID,major: 3,minor: 2,data1: sources.assessorCorespondance.FK_AssessorInformationID,data2: currentCorrespondenceActiveSelected};
        	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				debugger;
						assessorCorespondance = result;
						sources.assessorCorespondance.sync();
					},
					'onError': function(error){
						debugger;
						console.log(error);
					},
					'params': [myObject2]
				});
    
    	}
    	
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		//fillCorrespondance();  //refresh grid data on correspondencelist box page
		//$$(getHtmlId('container6')).setSplitPosition(1290);
	};// @lock

	checkbox1.change = function checkbox1_change (event)// @startlock
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
		}; //dontf
		assessorUpdate = rpcDUpdate.setUpdate(myObject8);
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_submitNewCorrespondence", "click", submitNewCorrespondence.click, "WAF");
	WAF.addListener(this.id + "_assessorCorespondanceGrid", "onRowClick", assessorCorespondanceGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_combobox1", "change", combobox1.change, "WAF");
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	WAF.addListener(this.id + "_checkbox1", "change", checkbox1.change, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
