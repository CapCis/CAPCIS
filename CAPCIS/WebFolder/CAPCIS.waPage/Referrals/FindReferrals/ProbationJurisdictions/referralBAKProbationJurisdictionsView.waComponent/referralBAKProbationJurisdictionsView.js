﻿
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralBAKProbationJurisdictionsView';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var Close = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	Close.click = function Close_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('pjPrevVersionCont')).setSplitPosition(625);
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_Close", "click", Close.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock