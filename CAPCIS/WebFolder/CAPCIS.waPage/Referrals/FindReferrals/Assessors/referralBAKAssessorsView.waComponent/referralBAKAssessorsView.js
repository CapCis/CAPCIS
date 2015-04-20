
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralBAKAssessorsView';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var assesorPreviousGrid = {};	// @dataGrid
	var closeAssesorPreviousButton = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	assesorPreviousGrid.onRowClick = function assesorPreviousGrid_onRowClick (event)// @startlock
	{// @endlock
		
		
		
		
	};// @lock

	closeAssesorPreviousButton.click = function closeAssesorPreviousButton_click (event)// @startlock
	{// @endlock
		moveMe = document.getElementById(data.userData.mainContainer);
		moveMe.style.left = "600px"
		//close me hide me  
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_assesorPreviousGrid", "onRowClick", assesorPreviousGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_closeAssesorPreviousButton", "click", closeAssesorPreviousButton.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
