
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralBAKCourtJurisdictionsList';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var courtJurisdictionPreviousGrid = {};	// @dataGrid
	// @endregion// @endlock

	// eventHandlers// @lock

	courtJurisdictionPreviousGrid.onRowClick = function courtJurisdictionPreviousGrid_onRowClick (event)// @startlock
	{// @endlock
		
		//$$(getHtmlId('container9')).setSplitPosition(250);
		
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_courtJurisdictionPreviousGrid", "onRowClick", courtJurisdictionPreviousGrid.onRowClick, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
