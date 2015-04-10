
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralBAKJudgesView';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var closeJudgePreviousButton = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	closeJudgePreviousButton.click = function closeJudgePreviousButton_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('container9')).setSplitPosition(625);
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_closeJudgePreviousButton", "click", closeJudgePreviousButton.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
