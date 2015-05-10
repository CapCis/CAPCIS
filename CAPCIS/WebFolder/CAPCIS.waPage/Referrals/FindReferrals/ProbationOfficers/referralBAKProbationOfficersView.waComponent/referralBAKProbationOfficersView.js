
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralBAKProbationOfficersView';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var Close = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock
	
	document.getElementById($comp.id + "_checkbox6").disabled = true;
	

	Close.click = function Close_click (event)// @startlock
	{// @endlock
		moveMe = document.getElementById(data.userData.mainContainer);
		moveMe.style.left = "600px"
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_Close", "click", Close.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
