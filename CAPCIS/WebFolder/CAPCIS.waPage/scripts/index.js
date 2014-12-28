
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		//WAF.loadComponent ( {									//load webcomponent into this pages component1 element
		//id:   	'component1',
		//path: 	'/CAPCIS.waPage/capcisLogin.waComponent',
		//onSuccess: function () {
		//	$$('textField1').setValue("my username")            //do something but only in my scope			
		//}
		//});
								
		//$$('component1').loadComponent({path:'/CAPCIS.waPage/capcisLogin.waComponent',userData: {myData: 'mysentdata'}}); 		//loads webComponent with data, same as below
		
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	'component1', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/capcisLogin.waComponent', 				//designate the webcomponent to load
		userData: 	{myTestData: 'I made it',mySecondData: 'I also made it'}					
		});
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
