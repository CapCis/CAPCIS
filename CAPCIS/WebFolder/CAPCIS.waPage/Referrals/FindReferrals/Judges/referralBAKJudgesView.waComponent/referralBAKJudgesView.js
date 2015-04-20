
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralBAKJudgesView';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var judgePreviousGrid = {};	// @dataGrid
	var closeJudgePreviousButton = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	judgePreviousGrid.onRowClick = function judgePreviousGrid_onRowClick (event)// @startlock
	{// @endlock
		
		$$(getHtmlId('container9')).setSplitPosition(250);
				
	};// @lock

	closeJudgePreviousButton.click = function closeJudgePreviousButton_click (event)// @startlock
	{// @endlock
		moveMe = document.getElementById(data.userData.mainContainer);
		moveMe.style.left = "600px"
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_judgePreviousGrid", "onRowClick", judgePreviousGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_closeJudgePreviousButton", "click", closeJudgePreviousButton.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
