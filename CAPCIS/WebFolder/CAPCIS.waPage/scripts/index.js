
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		$$('component1_textField1').setValue('my username'); 			//how to use an element on the page
	};// @lock

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
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
