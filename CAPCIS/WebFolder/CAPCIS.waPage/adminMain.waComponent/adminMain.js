
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'adminMain';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var menuItem4 = {};	// @menuItem
	// @endregion// @endlock

	// eventHandlers// @lock

	menuItem4.click = function menuItem4_click (event)// @startlock
	{// @endlock
		debugger;
		WAF.loadComponent ({											//load webcomponent into this page component1 element
    		id: 	$comp.id + '_adminMainComp', 											//designate the component to load into
			path: 	'/CAPCIS.waPage/capcisRegistrationRequestAdmin.waComponent'				//designate the webcomponent to load
		});
				
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_menuItem4", "click", menuItem4.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
