
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralAssessorsCorrespondenceList';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var submitNewCorrespondence = {};	// @button
	var assessorCorespondanceGrid = {};	// @dataGrid
	var combobox1 = {};	// @combobox
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

	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_submitNewCorrespondence", "click", submitNewCorrespondence.click, "WAF");
	WAF.addListener(this.id + "_assessorCorespondanceGrid", "onRowClick", assessorCorespondanceGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_combobox1", "change", combobox1.change, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
