
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralAssessors';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
		
		var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:0,data1:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	assessorList = rpcDSelects.getSelect(myObject);
	 	sources.assessorList.sync();
	 	
	 	var myObject3 = {token:'7836140170460568' ,id:'1',major:3,minor:3}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	city = rpcDSelects.getSelect(myObject3);
	 	sources.city.sync();
	 	
	 	var myObject4 = {token:'7836140170460568' ,id:'1',major:3,minor:4}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	reporting = rpcDSelects.getSelect(myObject4);
	 	sources.reporting.sync();

	// @region namespaceDeclaration// @startlock
	var button2 = {};	// @button
	var correspondanceGrid = {};	// @dataGrid
	var assesorPreviousGrid = {};	// @dataGrid
	var closeAssesorCurrentButton = {};	// @button
	var closeAssesorPreviousButton = {};	// @button
	var previousVersionButton = {};	// @button
	var assessorFullList = {};	// @dataGrid
	// @endregion// @endlock

	// eventHandlers// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('container6')).setSplitPosition(1290);
	};// @lock

	correspondanceGrid.onRowClick = function correspondanceGrid_onRowClick (event)// @startlock
	{// @endlock
		$$(getHtmlId('container6')).setSplitPosition(420);
		
	};// @lock

	assesorPreviousGrid.onRowClick = function assesorPreviousGrid_onRowClick (event)// @startlock
	{// @endlock
		debugger
		var date = event.data.row.cells[0].value;
		var assessor = event.data.row.cells[1].value;
		var employee = event.data.row.cells[2].value;
		
		var myObject6 = {token:'7836140170460568' ,id:'1',major:3,minor:6,data1:assessor, data2:date, data3:employee}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	specificBakAssessorList = rpcDSelects.getSelect(myObject6);
	 	sources.specificBakAssessorList.sync();
		
	};// @lock

	closeAssesorCurrentButton.click = function closeAssesorCurrentButton_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('mainAssessorCont')).setSplitPosition(1290);
	};// @lock

	closeAssesorPreviousButton.click = function closeAssesorPreviousButton_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('container3')).setSplitPosition(1290);
	};// @lock

	previousVersionButton.click = function previousVersionButton_click (event)// @startlock
	{// @endlock
		debugger;
		$$(getHtmlId('container3')).setSplitPosition(420);
		var name = $$(getHtmlId('assessorNameField')).getValue();
		var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:5,data1:name}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	bakAssessorInfo = rpcDSelects.getSelect(myObject5);
	 	sources.bakAssessorInfo.sync();
	};// @lock

	assessorFullList.onRowClick = function assessorFullList_onRowClick (event)// @startlock
	{// @endlock
		
		$$(getHtmlId('mainAssessorCont')).setSplitPosition(400);
		var name = event.data.row.cells[0].value;
		var city = event.data.row.cells[8].value;
		var reportingMethod = event.data.row.cells[6].value;
		if(city != "" && city != null)
		{
			$$(getHtmlId('cityComboBox')).setValue(city);
		}
		if(reporting != "" && reporting != null)
		{
			var x = $$(getHtmlId('reportingComboBox'));	
			x.setValue(reportingMethod);
		}
		
		
		var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:1,data1:name}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	specificAssessorList = rpcDSelects.getSelect(myObject);
	 	sources.specificAssessorList.sync();
		
		var myObject2 = {token:'7836140170460568' ,id:'1',major:3,minor:2,data1:name}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	assessorCorespondance = rpcDSelects.getSelect(myObject2);
	 	sources.assessorCorespondance.sync();
		var y = 7;
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	WAF.addListener(this.id + "_correspondanceGrid", "onRowClick", correspondanceGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_assesorPreviousGrid", "onRowClick", assesorPreviousGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_closeAssesorCurrentButton", "click", closeAssesorCurrentButton.click, "WAF");
	WAF.addListener(this.id + "_closeAssesorPreviousButton", "click", closeAssesorPreviousButton.click, "WAF");
	WAF.addListener(this.id + "_previousVersionButton", "click", previousVersionButton.click, "WAF");
	WAF.addListener(this.id + "_assessorFullList", "onRowClick", assessorFullList.onRowClick, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
