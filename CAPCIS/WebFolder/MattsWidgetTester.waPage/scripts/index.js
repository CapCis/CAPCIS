
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button16 = {};	// @button
	var button15 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button16.click = function button16_click (event)// @startlock
	{// @endlock
		$$('dialog2').closeDialog(); //ok button
	};// @lock

	button15.click = function button15_click (event)// @startlock
	{// @endlock
		$$('dialog2').closeDialog(); //cancel button
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button16", "click", button16.click, "WAF");
	WAF.addListener("button15", "click", button15.click, "WAF");
// @endregion
};// @endlock
