﻿
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralBAKAttorneysView';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var dataGrid2 = {};	// @dataGrid
	var Close = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	dataGrid2.onRowClick = function dataGrid2_onRowClick (event)// @startlock
	{// @endlock
		
	};// @lock

	Close.click = function Close_click (event)// @startlock
	{// @endlock
		moveMe = document.getElementById(data.userData.mainContainer);
		moveMe.style.left = "600px"
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_dataGrid2", "onRowClick", dataGrid2.onRowClick, "WAF");
	WAF.addListener(this.id + "_Close", "click", Close.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
