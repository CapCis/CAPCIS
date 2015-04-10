
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'capClassMainSelect';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
		$$(getHtmlId('component9')).$domNode.css('overflow','auto');
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	getHtmlId('component9'), 											//designate the component to load into
		path: 	'/CAPCIS.waPage/capClassMainSelectFullView.waComponent'	//designate the webcomponent to load
		});

	// @region namespaceDeclaration// @startlock
	var button2 = {};	// @button
	var button1 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock

		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	getHtmlId('component9'), 											//designate the component to load into
		path: 	'/CAPCIS.waPage/capClassMainSelectOptions.waComponent'	//designate the webcomponent to load
		});

		// Add your code here
	};// @lock


	
	button1.click = function button1_click (event)// @startlock
	{// @endlock
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	getHtmlId('component9'), 											//designate the component to load into
		path: 	'/CAPCIS.waPage/capClassMainSelectFullView.waComponent', 				//designate the webcomponent to load	
	});
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
