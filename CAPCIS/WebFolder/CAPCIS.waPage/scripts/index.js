
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var capcisRegisterButton = {};	// @button
	var capcisSignInOut = {};	// @button
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	capcisRegisterButton.click = function capcisRegisterButton_click (event)// @startlock
	{// @endlock
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
			id: 	'capcisMainWC', 											//designate the component to load into
			path: 	'/CAPCIS.waPage/capcisRegistration.waComponent' 				//designate the webcomponent to load
			});
	};// @lock

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
		currentVisibleMainContainerId = "";
		currentVisibleMainTabNumber = "";
		currentVisibleSubComponent = ["","","","","","","","","",""];       //array to track which subtab is visible, 1 for each Main Tab
		mainColumnPosLeft = [100,225,350,475,600,725,850,975,1100,1225];
		mainColumnPosLeftX = [210,335,460,585,710,835,960,1085,1210,1335];
		subColumnPosTop = [0,31,62,93,124,155,186,217,248,279];
		
			tabColumnTracking = [											//array to track used columns
			tabsPos = {
				mainColumnOpen:false,
				mainColumnName:"",
				mainColumnTabID:"",
				mainColumnMasterTabArrayNumber:"",
				subColumnOpen:[false,false,false,false,false,false,false,false,false,false],
				subColumnWebComponentName:["","","","","","","","","",""],
				subColumnTabID:["","","","","","","","","",""],
				subColumnMasterTabArraySubTabNumber:["","","","","","","","","",""]
			},
			tabsPos = {
				mainColumnOpen:false,
				mainColumnName:"",
				mainColumnTabID:"",
				mainColumnMasterTabArrayNumber:"",
				subColumnOpen:[false,false,false,false,false,false,false,false,false,false],
				subColumnWebComponentName:["","","","","","","","","",""],
				subColumnTabID:["","","","","","","","","",""],
				subColumnMasterTabArraySubTabNumber:["","","","","","","","","",""]
			},
			tabsPos = {
				mainColumnOpen:false,
				mainColumnName:"",
				mainColumnTabID:"",
				mainColumnMasterTabArrayNumber:"",
				subColumnOpen:[false,false,false,false,false,false,false,false,false,false],
				subColumnWebComponentName:["","","","","","","","","",""],
				subColumnTabID:["","","","","","","","","",""],
				subColumnMasterTabArraySubTabNumber:["","","","","","","","","",""]
			},
			tabsPos = {
				mainColumnOpen:false,
				mainColumnName:"",
				mainColumnTabID:"",
				mainColumnMasterTabArrayNumber:"",
				subColumnOpen:[false,false,false,false,false,false,false,false,false,false],
				subColumnWebComponentName:["","","","","","","","","",""],
				subColumnTabID:["","","","","","","","","",""],
				subColumnMasterTabArraySubTabNumber:["","","","","","","","","",""]
			},
			tabsPos = {
				mainColumnOpen:false,
				mainColumnName:"",
				mainColumnTabID:"",
				mainColumnMasterTabArrayNumber:"",
				subColumnOpen:[false,false,false,false,false,false,false,false,false,false],
				subColumnWebComponentName:["","","","","","","","","",""],
				subColumnTabID:["","","","","","","","","",""],
				subColumnMasterTabArraySubTabNumber:["","","","","","","","","",""]
			},
			tabsPos = {
				mainColumnOpen:false,
				mainColumnName:"",
				mainColumnTabID:"",
				mainColumnMasterTabArrayNumber:"",
				subColumnOpen:[false,false,false,false,false,false,false,false,false,false],
				subColumnWebComponentName:["","","","","","","","","",""],
				subColumnTabID:["","","","","","","","","",""],
				subColumnMasterTabArraySubTabNumber:["","","","","","","","","",""]
			},
			tabsPos = {
				mainColumnOpen:false,
				mainColumnName:"",
				mainColumnTabID:"",
				mainColumnMasterTabArrayNumber:"",
				subColumnOpen:[false,false,false,false,false,false,false,false,false,false],
				subColumnWebComponentName:["","","","","","","","","",""],
				subColumnTabID:["","","","","","","","","",""],
				subColumnMasterTabArraySubTabNumber:["","","","","","","","","",""]
			},
			tabsPos = {
				mainColumnOpen:false,
				mainColumnName:"",
				mainColumnTabID:"",
				mainColumnMasterTabArrayNumber:"",
				subColumnOpen:[false,false,false,false,false,false,false,false,false,false],
				subColumnWebComponentName:["","","","","","","","","",""],
				subColumnTabID:["","","","","","","","","",""],
				subColumnMasterTabArraySubTabNumber:["","","","","","","","","",""]
			},
			tabsPos = {
				mainColumnOpen:false,
				mainColumnName:"",
				mainColumnTabID:"",
				mainColumnMasterTabArrayNumber:"",
				subColumnOpen:[false,false,false,false,false,false,false,false,false,false],
				subColumnWebComponentName:["","","","","","","","","",""],
				subColumnTabID:["","","","","","","","","",""],
				subColumnMasterTabArraySubTabNumber:["","","","","","","","","",""]
			},
			tabsPos = {
				mainColumnOpen:false,
				mainColumnName:"",
				mainColumnTabID:"",
				mainColumnMasterTabArrayNumber:"",
				subColumnOpen:[false,false,false,false,false,false,false,false,false,false],
				subColumnWebComponentName:["","","","","","","","","",""],
				subColumnTabID:["","","","","","","","","",""],
				subColumnMasterTabArraySubTabNumber:["","","","","","","","","",""]
			}
			];
			
	/*			
		masterTabArray = [																			//array to track data for open tabs
		tabObj = {
			tabName:"",
			colNumber:"",
			butName:"",
			subTab:[[false,""],[false,""],[false,""],[false,""],[false,""],[false,""],[false,""],[false,""],[false,""],[false,""]]
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
	*/	
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("capcisRegisterButton", "click", capcisRegisterButton.click, "WAF");
	WAF.addListener("capcisSignInOut", "click", capcisSignInOut.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
