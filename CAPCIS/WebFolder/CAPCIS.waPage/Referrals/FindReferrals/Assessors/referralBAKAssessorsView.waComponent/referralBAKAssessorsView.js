﻿
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralBAKAssessorsView';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var closeAssesorPreviousButton = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	closeAssesorPreviousButton.click = function closeAssesorPreviousButton_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('container9')).setSplitPosition(625);
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_closeAssesorPreviousButton", "click", closeAssesorPreviousButton.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock