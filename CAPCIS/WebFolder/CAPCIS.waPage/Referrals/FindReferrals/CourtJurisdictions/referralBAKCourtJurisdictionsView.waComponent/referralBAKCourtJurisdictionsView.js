
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralBAKCourtJurisdictionsView';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var dataGrid1 = {};	// @dataGrid
	var closeCourtJurisdictionPreviousButton = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	dataGrid1.onRowClick = function dataGrid1_onRowClick (event)// @startlock
	{// @endlock
		
		//$$(getHtmlId('container9')).setSplitPosition(250);
		
		
	};// @lock

	closeCourtJurisdictionPreviousButton.click = function closeCourtJurisdictionPreviousButton_click (event)// @startlock
	{// @endlock
		//$$(getHtmlId('container9')).setSplitPosition(625);
		moveMe = document.getElementById(data.userData.mainContainer);
		moveMe.style.left = "600px"
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_dataGrid1", "onRowClick", dataGrid1.onRowClick, "WAF");
	WAF.addListener(this.id + "_closeCourtJurisdictionPreviousButton", "click", closeCourtJurisdictionPreviousButton.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
