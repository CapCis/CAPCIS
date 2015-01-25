
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var capcisSignInOut = {};	// @button
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	capcisSignInOut.click = function capcisSignInOut_click (event)// @startlock
	{// @endlock

		if($$("capcisSignInOut").getValue() === "Sign In")
		{
			$$("capcisSignInOut").toggle("hidden");
			WAF.loadComponent ( {											//load webcomponent into this page component1 element
			id: 	'capcisLoginWC', 											//designate the component to load into
			path: 	'/CAPCIS.waPage/capcisLogin.waComponent', 				//designate the webcomponent to load
			userData: 	{myTestData: 'I made it'}							//data that you want to send to the webcomponent
			});
		}
		else 
		{
			//Do a bunch of shit to sign the user out and clear all data
		}
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		
		userConfigObj = {fullName:"",userName:"",userID:"",secToken:"",selectedUserDivision:"",approvedDivArray:[]};
		currentVisibleMainTab = "";
		currentVisibleSubTab = "";
		mainColumnPosLeft = [0,126,251,376,501,626,751,876,1001,1126];
		subColumnPosTop = [300,400,500,600,700,800,900,700,800,900];
		tabColumnTracking = [																	//array to track used columns
			tabsPos = {
				mainColumnOpen:"",
				mainColumnName:"",
				mainColumnButtonID:"",
				subColumnOpen:[false,false,false,false,false,false,false,false,false,false],
				subColumnButtonID:["","","","","","","","","",""]
			},
			tabsPos = {
				mainColumnOpen:"",
				mainColumnName:"",
				mainColumnButtonID:"",
				subColumnOpen:[false,false,false,false,false,false,false,false,false,false],
				subColumnButtonID:["","","","","","","","","",""]
			},
			tabsPos = {
				mainColumnOpen:"",
				mainColumnName:"",
				mainColumnButtonID:"",
				subColumnOpen:[false,false,false,false,false,false,false,false,false,false],
				subColumnButtonID:["","","","","","","","","",""]
			},
			tabsPos = {
				mainColumnOpen:"",
				mainColumnName:"",
				mainColumnButtonID:"",
				subColumnOpen:[false,false,false,false,false,false,false,false,false,false],
				subColumnButtonID:["","","","","","","","","",""]
			},
			tabsPos = {
				mainColumnOpen:"",
				mainColumnName:"",
				mainColumnButtonID:"",
				subColumnOpen:[false,false,false,false,false,false,false,false,false,false],
				subColumnButtonID:["","","","","","","","","",""]
			},
			tabsPos = {
				mainColumnOpen:"",
				mainColumnName:"",
				mainColumnButtonID:"",
				subColumnOpen:[false,false,false,false,false,false,false,false,false,false],
				subColumnButtonID:["","","","","","","","","",""]
			},
			tabsPos = {
				mainColumnOpen:"",
				mainColumnName:"",
				mainColumnButtonID:"",
				subColumnOpen:[false,false,false,false,false,false,false,false,false,false],
				subColumnButtonID:["","","","","","","","","",""]
			}
			];
			
				
		masterTabArray = [																			//array to track data for open tabs
		tabObj = {
			tabName:"",
			colNumber:"",
			butName:"",
			subTab:[[false],[false],[false],[false],[false],[false],[false],[false],[false],[false]]
			},
		tabObj = {
			tabName:"",
			colNumber:"",
			butName:"",
			subTab:[[false],[false],[false],[false],[false],[false],[false],[false],[false],[false]]
			},
		tabObj = {
			tabName:"",
			colNumber:"",
			butName:"",
			subTab:[[false],[false],[false],[false],[false],[false],[false],[false],[false],[false]]
			},
		tabObj = {
			tabName:"",
			colNumber:"",
			butName:"",
			subTab:[[false],[false],[false],[false],[false],[false],[false],[false],[false],[false]]
			},
		tabObj = {
			tabName:"",
			colNumber:"",
			butName:"",
			subTab:[[false],[false],[false],[false],[false],[false],[false],[false],[false],[false]]
			},
		tabObj = {
			tabName:"",
			colNumber:"",
			butName:"",
			subTab:[[false],[false],[false],[false],[false],[false],[false],[false],[false],[false]]
			},
		tabObj = {
			tabName:"",
			colNumber:"",
			butName:"",
			subTab:[[false],[false],[false],[false],[false],[false],[false],[false],[false],[false]]
			},
		tabObj = {
			tabName:"",
			colNumber:"",
			butName:"",
			subTab:[[false],[false],[false],[false],[false],[false],[false],[false],[false],[false]]
			},
		tabObj = {
			tabName:"",
			colNumber:"",
			butName:"",
			subTab:[[false],[false],[false],[false],[false],[false],[false],[false],[false],[false]]
			},
		tabObj = {
			tabName:"",
			colNumber:"",
			butName:"",
			subTab:[[false],[false],[false],[false],[false],[false],[false],[false],[false],[false]]
			}
			];
			
			
			
		
		//WAF.loadComponent ( {									//load webcomponent into this pages component1 element
		//id:   	'component1',
		//path: 	'/CAPCIS.waPage/capcisLogin.waComponent',
		//onSuccess: function () {
		//	$$('textField1').setValue("my username")            //do something but only in my scope			
		//}
		//});
								
		//$$('component1').loadComponent({path:'/CAPCIS.waPage/capcisLogin.waComponent',userData: {myData: 'mysentdata'}}); 		//loads webComponent with data, same as below
		
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("capcisSignInOut", "click", capcisSignInOut.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
