
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'capClassRoster';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var richText1 = {};	// @richText
	// @endregion// @endlock

	// eventHandlers// @lock

	richText1.click = function richText1_click (event)// @startlock
	{// @endlock
		alert($comp.id);
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_richText1", "click", richText1.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
