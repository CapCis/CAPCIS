
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralBAKAssessorsList';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
	var assesorPreviousGrid = {};	// @dataGrid
	// @endregion// @endlock

	// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('container3')).setSplitPosition(900);
		//close me or hide me and the bottom below me
	};// @lock

	assesorPreviousGrid.onRowClick = function assesorPreviousGrid_onRowClick (event)// @startlock
	{// @endlock
		
		$$(getHtmlId('container9')).setSplitPosition(250);
		//load referalBAKAssessorView Page lower right box
		
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	WAF.addListener(this.id + "_assesorPreviousGrid", "onRowClick", assesorPreviousGrid.onRowClick, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
