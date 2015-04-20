
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralBAKDHSOfficersList.';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var dhsPreviousGrid = {};	// @dataGrid
	// @endregion// @endlock

	// eventHandlers// @lock

	dhsPreviousGrid.onRowClick = function dhsPreviousGrid_onRowClick (event)// @startlock
	{// @endlock
		
		
		
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_dhsPreviousGrid", "onRowClick", dhsPreviousGrid.onRowClick, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
