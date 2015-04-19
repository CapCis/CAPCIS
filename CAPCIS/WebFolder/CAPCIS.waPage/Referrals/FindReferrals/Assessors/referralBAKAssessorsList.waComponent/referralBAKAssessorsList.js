
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralBAKAssessorsList';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var assesorPreviousGrid = {};	// @dataGrid
	// @endregion// @endlock

	// eventHandlers// @lock

	assesorPreviousGrid.onRowClick = function assesorPreviousGrid_onRowClick (event)// @startlock
	{// @endlock
		
		$$(getHtmlId('container9')).setSplitPosition(250);
		//load referalBAKAssessorView Page lower right box
		
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_assesorPreviousGrid", "onRowClick", assesorPreviousGrid.onRowClick, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
