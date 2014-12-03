
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		WAF.loadComponent ( {	
		id:   	'component1',
		path: 	'/CAPCIS.waPage/capcisLogin.waComponent',
		onSuccess: function () {
			$$('textField1').setValue("my username")//do something here
			
		}
		});
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
