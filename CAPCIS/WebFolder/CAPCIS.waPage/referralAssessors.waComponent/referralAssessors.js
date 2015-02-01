
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralAssessors';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
		debugger;
		var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:0,data1:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	assessorList = rpcDSelects.getSelect(myObject);
	 	sources.assessorList.sync();

	// @region namespaceDeclaration// @startlock
	// @endregion// @endlock

	// eventHandlers// @lock

	// @region eventManager// @startlock
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
