
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button2 = {};	// @button
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	'component2', 											//designate the component to load into
		path: 	'/speedTests.waPage/testComp1.waComponent'
		});
		
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	'component3', 											//designate the component to load into
		path: 	'/speedTests.waPage/testComp2.waComponent'
		});
		
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	'component4', 											//designate the component to load into
		path: 	'/speedTests.waPage/testComp3.waComponent'
		});
		
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	'component5', 											//designate the component to load into
		path: 	'/speedTests.waPage/testComp4.waComponent'
		});
		
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	'component6', 											//designate the component to load into
		path: 	'/speedTests.waPage/testComp4.waComponent'
		});
		
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	'component7', 											//designate the component to load into
		path: 	'/speedTests.waPage/testComp4.waComponent'
		});
		
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	'component8', 											//designate the component to load into
		path: 	'/speedTests.waPage/testComp4.waComponent'
		});
		
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	'component9', 											//designate the component to load into
		path: 	'/speedTests.waPage/testComp4.waComponent'
		});
		
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	'component10', 											//designate the component to load into
		path: 	'/speedTests.waPage/testComp4.waComponent'
		});
		
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	'component11', 											//designate the component to load into
		path: 	'/speedTests.waPage/testComp4.waComponent'
		});
		
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	'component12', 											//designate the component to load into
		path: 	'/speedTests.waPage/testComp4.waComponent'
		});
		
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	'component13', 											//designate the component to load into
		path: 	'/speedTests.waPage/testComp4.waComponent'
		});
		
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	'component14', 											//designate the component to load into
		path: 	'/speedTests.waPage/testComp4.waComponent'
		});
		
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	'component1', 											//designate the component to load into
		path: 	'/speedTests.waPage/testComp4.waComponent'
		});
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	'mainComponent', 											//designate the component to load into
		path: 	'/speedTests.waPage/TestMainComponent.waComponent'
		});
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
