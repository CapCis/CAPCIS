
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'capClassMainSelectOptions';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
		
		var myObject = {token:'7836140170460568' ,id:'1',major:2,minor:1}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	myPrograms = rpcDSelects.getSelect(myObject);
	 	sources.myPrograms.sync();
	 	

	// @region namespaceDeclaration// @startlock
	var filterButton = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	filterButton.click = function filterButton_click (event)// @startlock
	{// @endlock
		debugger;
		var day = $$(getHtmlId('combobox2')).getValue();
		var program = $$(getHtmlId('combobox1')).getValue();
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_filterButton", "click", filterButton.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
