
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralMain';
	// @endregion// @endlock
		
	this.load = function (data) {// @lock
		
		
		oldVisContainer = "";
		oldVisComponent = "";
		
		refreshData();
		getTotals();
		currentID = "";     //variable to hold an id for any clicked main grid on this page
		
		newAssessor = document.getElementById(getHtmlId('newAssesorComponent'));
		newAttorney = document.getElementById(getHtmlId('newAttorneyComponent'));
		newDHS = document.getElementById(getHtmlId('newDHSOfficerComponent'));
		newJudges = document.getElementById(getHtmlId('newJudgeComponent'));
		newOther = document.getElementById(getHtmlId('newOtherMoniterComponent'));
		newProsecutor = document.getElementById(getHtmlId('newProsecutorsComponent'));
		newPO = document.getElementById(getHtmlId('newPOComponent'));
		newPJ = document.getElementById(getHtmlId('newProbationJurisdictionComponent'));
		newCJ = document.getElementById(getHtmlId('newCourtJurisdictionComponent'));
		
		
		
		
		
		
		
		var myObject3 = {
	    token: userConfigObj.secToken,
	    id: userConfigObj.userID,
	    major: 3,
	    minor: 3
		}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		
		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						var tempCity = result[0];
		
						result[0] = {CityListing: "None"};
		
						result[result.length] = tempCity;
						city = result;
						tempStore= city;
						sources.city.sync();
					},
					'onError': function(error){
						alert(error);
					},
					'params': [myObject3]
				});
		
		var myObject4 = {
		    token: userConfigObj.secToken,
		    id: userConfigObj.userID,
		    major: 3,
		    minor: 4
		}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						var tempReporting = result[0];
						result[0] = {ReportingMethod: "None"};
						result[result.length] = tempReporting;
						reporting = result;
						sources.reporting.sync();
					},
					'onError': function(error){
						alert(error);
					},
					'params': [myObject4]
				});
	
	
		
		
		

	// @region namespaceDeclaration// @startlock
	var AssessorMainContainer = {};	// @container
	var loadCourtJurisdictionCorresp = {};	// @button
	var loadProbationJurisdictionCorresp = {};	// @button
	var loadProbationCorrespondence = {};	// @button
	var loadProsecutorCorrespondence = {};	// @button
	var loadOtherCorrespondence = {};	// @button
	var loadJudgesCorrespondence = {};	// @button
	var loadDHSOfficerCorrespondence = {};	// @button
	var loadAssessorCorrespondence = {};	// @button
	var loadBakAttorneyVersions = {};	// @button
	var otherMonitorFullList = {};	// @dataGrid
	var courtJurisdictionFullList = {};	// @dataGrid
	var probationJurisdictionFullList = {};	// @dataGrid
	var probationOfficerFullList = {};	// @dataGrid
	var prosecutorFullList = {};	// @dataGrid
	var judgeFullList = {};	// @dataGrid
	var dhsOfficerFullList = {};	// @dataGrid
	var attorneyFullList = {};	// @dataGrid
	var assessorCityGrid = {};	// @dataGrid
	var assessorCityButton = {};	// @button
	var assessorCityTextbox = {};	// @textField
	var loadBakAssessorVersions = {};	// @button
	var closeAssesorCurrentButton = {};	// @button
	var submitAssessorCurrentInformation = {};	// @button
	var courtJurisdictionCityGrid = {};	// @dataGrid
	var courtJurisdictionCityButton = {};	// @button
	var courtJurisdictionCityTextbox = {};	// @textField
	var loadBAKCourtJurisdictionVersions = {};	// @button
	var button23 = {};	// @button
	var submitButton = {};	// @button
	var dataGrid6 = {};	// @dataGrid
	var probationJurisdictionCityGrid = {};	// @dataGrid
	var probationJurisdictionCityButton = {};	// @button
	var probationJurisdictionCityTextbox = {};	// @textField
	var loadBAKProbationJurisdictionVersions = {};	// @button
	var button5 = {};	// @button
	var button2 = {};	// @button
	var dataGrid1 = {};	// @dataGrid
	var button4 = {};	// @button
	var probationOfficerCityGrid = {};	// @dataGrid
	var probationOfficerCityTextbox = {};	// @textField
	var probationOfficerCityButton = {};	// @button
	var loadBAKProbationOfficers = {};	// @button
	var button33 = {};	// @button
	var dataGrid11 = {};	// @dataGrid
	var textField73 = {};	// @textField
	var button32 = {};	// @button
	var dataGrid17 = {};	// @dataGrid
	var prosecutorCityGrid = {};	// @dataGrid
	var prosecutorCityTextbox = {};	// @textField
	var prosecutorCityButton = {};	// @button
	var loadBAKProsecutors = {};	// @button
	var button26 = {};	// @button
	var button25 = {};	// @button
	var dataGrid9 = {};	// @dataGrid
	var dataGrid7 = {};	// @dataGrid
	var otherMonitorCityButton = {};	// @button
	var otherMonitorCityTextbox = {};	// @textField
	var loadBAKOtherMonitors = {};	// @button
	var button21 = {};	// @button
	var button19 = {};	// @button
	var otherMonitorCityGrid = {};	// @dataGrid
	var loadBakJudgesVersions = {};	// @button
	var dataGrid14 = {};	// @dataGrid
	var button17 = {};	// @button
	var textField49 = {};	// @textField
	var judgesCityGrid = {};	// @dataGrid
	var judgesCityButton = {};	// @button
	var judgesCityTextbox = {};	// @textField
	var button15 = {};	// @button
	var button13 = {};	// @button
	var dataGrid5 = {};	// @dataGrid
	var dhsCityGrid = {};	// @dataGrid
	var dhsCityButton = {};	// @button
	var dhsCityTextbox = {};	// @textField
	var loadBakDHSOfficerVersions = {};	// @button
	var button3 = {};	// @button
	var button1 = {};	// @button
	var dataGrid8 = {};	// @dataGrid
	var attorneyCityGrid = {};	// @dataGrid
	var dataGrid2 = {};	// @dataGrid
	var button11 = {};	// @button
	var textField3 = {};	// @textField
	var attorneyCityButton = {};	// @button
	var attorneyCityTextbox = {};	// @textField
	var loadAttorneyCorrespondence = {};	// @button
	var button43 = {};	// @button
	var button37 = {};	// @button
	var button36 = {};	// @button
	var assessorFullList = {};	// @dataGrid
	var attorneyDataGird = {};	// @dataGrid
	var newProbJ = {};	// @menuItem
	var newCourtJ = {};	// @menuItem
	var newOtherM = {};	// @menuItem
	var newPros = {};	// @menuItem
	var newPOfficer = {};	// @menuItem
	var newJudge = {};	// @menuItem
	var newDHSO = {};	// @menuItem
	var newAtt = {};	// @menuItem
	var newAss = {};	// @menuItem
	var courtJurisdictionButton = {};	// @menuItem
	var probationJurisdictionButton = {};	// @menuItem
	var probationOfficerButton = {};	// @menuItem
	var prosecutorsButton = {};	// @menuItem
	var otherButton = {};	// @menuItem
	var judgesButton = {};	// @menuItem
	var dhsButton = {};	// @menuItem
	var assessorButton = {};	// @menuItem
	var SearchReferralButton = {};	// @button
	var attorneyButton = {};	// @menuItem
	// @endregion// @endlock

	// eventHandlers// @lock

	AssessorMainContainer.click = function AssessorMainContainer_click (event)// @startlock
	{// @endlock
		//debugger;
		//$$(getHtmlId('assessorCityGrid'))
		//document.getElementById(getHtmlId('assessorCityGrid').style.display = "none";
	};// @lock

	

	

	

	

	

	

	

	

	

	

	

	

	

	


	closeAssesorCurrentButton.click = function closeAssesorCurrentButton_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('mainAssessorCont')).setSplitPosition(1290);
	};// @startlock
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
//BAK VERSION SECTION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<	
	
	
	loadBakAssessorVersions.click = function loadBakAssessorVersions_click (event)
	{// @endlock
			 
		var myWidget = document.getElementById($comp.id +"_AssessorMainContainer");
		myWidget.style.left = "150px";
		
		
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
    		id: 	$comp.id+'_component10', 											//designate the component to load into
			path: 	'/CAPCIS.waPage/Referrals/FindReferrals/Assessors/referralBAKAssessorsView.waComponent',				//designate the webcomponent to load
			userData: {mainContainer: $comp.id+'_AssessorMainContainer' }
		});
		
		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:5,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	
	 	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				
		 				bakAssessorInfo = result;
		 				sources.bakAssessorInfo.sync();
						//bakListSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject5]
				});
	 	
	};// @lock
	
	
	loadBakAttorneyVersions.click = function loadBakAttorneyVersions_click (event)// @startlock
	{// @endlock
		
		
		var myWidget = document.getElementById($comp.id +"_AttorneyMainContainer");
		myWidget.style.left = "150px";
		
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
    		id: 	$comp.id+'_component14', 											//designate the component to load into
			path: 	'/CAPCIS.waPage/Referrals/FindReferrals/Attorneys/referralBAKAttorneysView.waComponent',				//designate the webcomponent to load
			userData: {mainContainer: $comp.id+'_AttorneyMainContainer' }
		});
		
		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:18,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				debugger;
						bakAttorneyInfo = result;
		 				sources.bakAttorneyInfo.sync();
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject5]
				});
	};// @lock
	
	
	loadBakDHSOfficerVersions.click = function loadBakDHSOfficerVersions_click (event)// @startlock
	{// @endlock
			 
			 
		var myWidget = document.getElementById($comp.id +"_dhsOfficerMainContainer");
		myWidget.style.left = "150px";
		
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
    		id: 	$comp.id+'_component16', 											//designate the component to load into
			path: 	'/CAPCIS.waPage/Referrals/FindReferrals/DHSOfficers/referralBAKDHSOfficersView.waComponent',				//designate the webcomponent to load
			userData: {mainContainer: $comp.id+'_dhsOfficerMainContainer' }
		});
		
		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:36,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						bakDhsInfo = result;
		 				sources.bakDhsInfo.sync();
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject5]
				});
	};// @lock
		
	
	loadBakJudgesVersions.click = function loadBakJudgesVersions_click (event)// @startlock
	{// @endlock
			 
		
		var myWidget = document.getElementById($comp.id +"_judgeMainContainer");
		myWidget.style.left = "150px";
		
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
    		id: 	$comp.id+'_component20', 											//designate the component to load into
			path: 	'/CAPCIS.waPage/Referrals/FindReferrals/Judges/referralBAKJudgesView.waComponent',				//designate the webcomponent to load
			userData: {mainContainer: $comp.id+'_judgeMainContainer' }
		});
		
		
		var myObject5 = {token:userConfigObj.secToken,id:userConfigObj.userID,major:3,minor:45,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						bakJudgeInfo = result;
		 				sources.bakJudgeInfo.sync();
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject5]
				});
	};// @lock
	
	
	loadBAKOtherMonitors.click = function loadBAKOtherMonitors_click (event)// @startlock
	{// @endlock
		
		var myWidget = document.getElementById($comp.id +"_otherMonitorMainContainer");
		myWidget.style.left = "150px";
		
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
    		id: 	$comp.id+'_component24', 											//designate the component to load into
			path: 	'/CAPCIS.waPage/Referrals/FindReferrals/OtherMonitors/referralBAKOtherMonitorsView.waComponent',				//designate the webcomponent to load
			userData: {mainContainer: $comp.id+'_otherMonitorMainContainer' }
		});
		
		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:54,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						bakOtherMonitorInfo = result;
		 				sources.bakOtherMonitorInfo.sync();
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject5]
				});
	};// @lock
	
	
	loadBAKProsecutors.click = function loadBAKProsecutors_click (event)// @startlock
	{// @endlock
		
		var myWidget = document.getElementById($comp.id +"_prosecutorMainContainer");
		myWidget.style.left = "150px";
		
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
    		id: 	$comp.id+'_component28', 											//designate the component to load into
			path: 	'/CAPCIS.waPage/Referrals/FindReferrals/Prosecutors/referralBAKProsecutorsView.waComponent',				//designate the webcomponent to load
			userData: {mainContainer: $comp.id+'_prosecutorMainContainer' }
		});
		
		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:81,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						bakProsecutorInfo = result;
		 				sources.bakProsecutorInfo.sync();
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject5]
				});
	};// @lock
	
	
	loadBAKProbationOfficers.click = function loadBAKProbationOfficers_click (event)// @startlock
	{// @endlock
		
		var myWidget = document.getElementById($comp.id +"_probationOfficerMainContainer");
		myWidget.style.left = "150px";
		
		
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
    		id: 	$comp.id+'_component32', 											//designate the component to load into
			path: 	'/CAPCIS.waPage/Referrals/FindReferrals/ProbationOfficers/referralBAKProbationOfficersView.waComponent',				//designate the webcomponent to load
			userData: {mainContainer: $comp.id+'_probationOfficerMainContainer' }
		});
		
		var myObject5 = {token:userConfigObj.secToken,id:userConfigObj.userID,major:3,minor:72,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						bakProbationOfficerInfo = result;
		 				sources.bakProbationOfficerInfo.sync();
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject5]
				});
	};// @lock
	
	
	loadBAKProbationJurisdictionVersions.click = function loadBAKProbationJurisdictionVersions_click (event)// @startlock
	{// @endlock
		
		var myWidget = document.getElementById($comp.id +"_probationJurisdictionMainContainer");
		myWidget.style.left = "150px";
		
		
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
    		id: 	$comp.id+'_component36', 											//designate the component to load into
			path: 	'/CAPCIS.waPage/Referrals/FindReferrals/ProbationJurisdictions/referralBAKProbationJurisdictionsView.waComponent',				//designate the webcomponent to load
			userData: {mainContainer: $comp.id+'_probationJurisdictionMainContainer' }
		});
		
		var myObject5 = {token:userConfigObj.secToken,id:userConfigObj.userID,major:3,minor:63,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						bakProbationJurisdictionInfo = result;
		 				sources.bakProbationJurisdictionInfo.sync();
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject5]
				});
	};// @lock
	
	
	loadBAKCourtJurisdictionVersions.click = function loadBAKCourtJurisdictionVersions_click (event)// @startlock
	{// @endlock
		
		var myWidget = document.getElementById($comp.id +"_courtJurisdictionMainContainer");
		myWidget.style.left = "150px";
		
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
    		id: 	$comp.id+'_component40', 											//designate the component to load into
			path: 	'/CAPCIS.waPage/Referrals/FindReferrals/CourtJurisdictions/referralBAKCourtJurisdictionsView.waComponent',				//designate the webcomponent to load
			userData: {mainContainer: $comp.id+'_courtJurisdictionMainContainer' }
		});
		
		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:27,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						bakCourtJurisdictionInfo = result;
		 				sources.bakCourtJurisdictionInfo.sync();
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject5]
				});
	};// @lock
	
	
	
	
	
	
	
	
	
	
	



//CORRESPONDENCE SECTION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<	
	
	
	loadAssessorCorrespondence.click = function loadAssessorCorrespondence_click (event)// @startlock
	{// @endlock
		var myWidget = document.getElementById($comp.id +"_container77");
		myWidget.style.transitionProperty = "top";
		myWidget.style.transitionDelay = "0s";
		myWidget.style.transitionDuration = ".5s";
		myWidget.style.top = "325px";
		
		WAF.loadComponent ( {											
    		id: 	$comp.id+'_component6', 											
			path: 	'/CAPCIS.waPage/Referrals/FindReferrals/Assessors/referralAssessorsCorrespondenceView.waComponent'	
		});
		
		var assessorCorrespondenceObject = {token: userConfigObj.secToken,id: userConfigObj.userID,major: 3,minor: 2,data1: sources.assessorList.AssessorInformationID,data2:0};
        rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						assessorCorespondance = result;
						sources.assessorCorespondance.sync();
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [assessorCorrespondenceObject]
		});
		
	};// @lock
	
	
	loadAttorneyCorrespondence.click = function loadAttorneyCorrespondence_click (event)// @startlock
	{// @endlock
		
		
		var myWidget = document.getElementById($comp.id +"_container82");
		myWidget.style.transitionProperty = "top";
		myWidget.style.transitionDelay = "0s";
		myWidget.style.transitionDuration = ".5s";
		myWidget.style.top = "325px";
		
		WAF.loadComponent ( {											
    		id: 	$comp.id+'_component12', 											
			path: 	'/CAPCIS.waPage/Referrals/FindReferrals/Attorneys/referralAttorneysCorrespondenceView.waComponent'	
		});
		
		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:17,data1:sources.attorneyList.AttorneyInformationID,data2:0};
		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				debugger;
						attorneyCorespondance = result;
						sources.attorneyCorespondance.sync();
					},
					'onError': function(error){
						debugger;
						console.log(error);
					},
					'params': [myObject5]
		});
	};// @lock
	
	
	loadDHSOfficerCorrespondence.click = function loadDHSOfficerCorrespondence_click (event)// @startlock
	{// @endlock
		
		var myWidget = document.getElementById($comp.id +"_container12");
		myWidget.style.transitionProperty = "top";
		myWidget.style.transitionDelay = "0s";
		myWidget.style.transitionDuration = ".5s";
		myWidget.style.top = "325px";
		
		WAF.loadComponent ( {											
    		id: 	$comp.id+'_component9', 											
			path: 	'/CAPCIS.waPage/Referrals/FindReferrals/DHSOfficers/referralDHSOfficersCorrespondenceView.waComponent'	
		});
		
		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:35,data1:sources.attorneyList.AttorneyInformationID,data2:0};
		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				debugger;
						dhsCorespondance = result;
						sources.dhsCorespondance.sync();
					},
					'onError': function(error){
						debugger;
						console.log(error);
					},
					'params': [myObject5]
				});
	};// @lock


	loadJudgesCorrespondence.click = function loadJudgesCorrespondence_click (event)// @startlock
	{// @endlock
		
		var myWidget = document.getElementById($comp.id +"_container28");
		myWidget.style.transitionProperty = "top";
		myWidget.style.transitionDelay = "0s";
		myWidget.style.transitionDuration = ".5s";
		myWidget.style.top = "325px";
		
		WAF.loadComponent ( {											
    		id: 	$comp.id+'_component18', 											
			path: 	'/CAPCIS.waPage/Referrals/FindReferrals/Judges/referralJudgesCorrespondenceView.waComponent'	
		});
		
		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:43,data1:sources.judgeList.JudgesID,data2:0};
		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				
						judgeCorespondance = result;
						sources.judgeCorespondance.sync();
					},
					'onError': function(error){
						
						console.log(error);
					},
					'params': [myObject5]
				});
	};// @lock


	loadOtherCorrespondence.click = function loadOtherCorrespondence_click (event)// @startlock
	{// @endlock
		
		var myWidget = document.getElementById($comp.id +"_container42");
		myWidget.style.transitionProperty = "top";
		myWidget.style.transitionDelay = "0s";
		myWidget.style.transitionDuration = ".5s";
		myWidget.style.top = "325px";
		
		WAF.loadComponent ( {											
    		id: 	$comp.id+'_component22', 											
			path: 	'/CAPCIS.waPage/Referrals/FindReferrals/OtherMonitors/referralOtherMonitorsCorrespondenceView.waComponent'	
		});
		
		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:52,data1:sources.otherMonitorList.OtherMonitorsID,data2:0};
		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						otherMonitorCorespondance = result;
						sources.otherMonitorCorespondance.sync();
					},
					'onError': function(error){						
						console.log(error);
					},
					'params': [myObject5]
		});
		
	};// @lock


	loadProsecutorCorrespondence.click = function loadProsecutorCorrespondence_click (event)// @startlock
	{// @endlock
	
		var myWidget = document.getElementById($comp.id +"_container48");
		myWidget.style.transitionProperty = "top";
		myWidget.style.transitionDelay = "0s";
		myWidget.style.transitionDuration = ".5s";
		myWidget.style.top = "325px";
		
		WAF.loadComponent ( {											
    		id: 	$comp.id+'_component26', 											
			path: 	'/CAPCIS.waPage/Referrals/FindReferrals/Prosecutors/referralProsecutorsCorrespondenceView.waComponent'	
		});
		
		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:79,data1:sources.prosecutorList.ProsecutorsID,data2:0};
		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){	
		 				debugger;	 				
						prosecutorCorespondance = result;
						sources.prosecutorCorespondance.sync();
					},
					'onError': function(error){						
						console.log(error);
					},
					'params': [myObject5]
		});
		
	};// @lock


	loadProbationCorrespondence.click = function loadProbationCorrespondence_click (event)// @startlock
	{// @endlock
		
		var myWidget = document.getElementById($comp.id +"_container55");
		myWidget.style.transitionProperty = "top";
		myWidget.style.transitionDelay = "0s";
		myWidget.style.transitionDuration = ".5s";
		myWidget.style.top = "325px";
		
		WAF.loadComponent ( {											
    		id: 	$comp.id+'_component30', 											
			path: 	'/CAPCIS.waPage/Referrals/FindReferrals/ProbationOfficers/referralProbationOfficersCorrespondenceView.waComponent'	
		});
		
		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:70,data1:sources.probationOfficerList.POInformationID,data2:0};
		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){	
		 					 				
						probationOfficerCorespondance = result;
						sources.probationOfficerCorespondance.sync();
					},
					'onError': function(error){						
						console.log(error);
					},
					'params': [myObject5]
		});
	};// @lock


	loadProbationJurisdictionCorresp.click = function loadProbationJurisdictionCorresp_click (event)// @startlock
	{// @endlock
		
		var myWidget = document.getElementById($comp.id +"_container4");
		myWidget.style.transitionProperty = "top";
		myWidget.style.transitionDelay = "0s";
		myWidget.style.transitionDuration = ".5s";
		myWidget.style.top = "325px";
		
		WAF.loadComponent ( {											
    		id: 	$comp.id+'_component34', 											
			path: 	'/CAPCIS.waPage/Referrals/FindReferrals/ProbationJurisdictions/referralProbationJurisdictionsCorrespondenceView.waComponent'	
		});
		
		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:61,data1:sources.probationJurisdictionList.POJurisdictionID,data2:0};
		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){	
		 				debugger;	 				
						probationJurisdictionCorespondance = result;
						sources.probationJurisdictionCorespondance.sync();
					},
					'onError': function(error){						
						console.log(error);
					},
					'params': [myObject5]
		});
		
	};// @lock


	loadCourtJurisdictionCorresp.click = function loadCourtJurisdictionCorresp_click (event)// @startlock
	{// @endlock
		var myWidget = document.getElementById($comp.id +"_container10");
		myWidget.style.transitionProperty = "top";
		myWidget.style.transitionDelay = "0s";
		myWidget.style.transitionDuration = ".5s";
		myWidget.style.top = "325px";
		
		WAF.loadComponent ( {											
    		id: 	$comp.id+'_component38', 											
			path: 	'/CAPCIS.waPage/Referrals/FindReferrals/CourtJurisdictions/referralCourtJurisdictionsCorrespondenceView.waComponent'	
		});
		debugger;
		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:26,data1:sources.courtJurisdictionList.CourtJurisdictionID,data2:0};
		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){	
		 				debugger;	 				
						courtJurisdictionCorespondance = result;
						sources.courtJurisdictionCorespondance.sync();
					},
					'onError': function(error){						
						console.log(error);
					},
					'params': [myObject5]
		});
	};// @lock









//CITY GRID SECTION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


	assessorCityGrid.onRowClick = function assessorCityGrid_onRowClick (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('assessorCityGrid'));
		grid.style.display = 'none';
		
		var recValue = $$(getHtmlId('assessorCityGrid')).sourceAtt.getValue();
		$$(getHtmlId('assessorCityTextbox')).setValue(recValue);
	};// @lock

	assessorCityButton.click = function assessorCityButton_click (event)// @startlock
	{// @endlock
		city=tempStore;
		sources.city.sync();
			
		var grid = document.getElementById(getHtmlId('assessorCityGrid'));
		if(grid.style.display == 'none')
		{
			grid.style.display = 'block';
		}
		else
		{
			grid.style.display = 'none';
		}
	};// @lock

	assessorCityTextbox.keyup = function assessorCityTextbox_keyup (event)// @startlock
	{// @endlock
		
		if(event.keyCode ===13)
		{
			var currentInput = $$($comp.id+'_assessorCityTextbox').getValue();
			$$($comp.id+'_assessorCityTextbox').setValue(sources.city.CityListing);
			var grid = document.getElementById($comp.id+'_assessorCityGrid');
			grid.style.display = 'none';
		}
		
		else
		{
			
			city=tempStore;
			sources.city.sync();

			var grid = document.getElementById($comp.id+'_assessorCityGrid');
			grid.style.display = 'block';

			var currentInput = $$($comp.id+'_assessorCityTextbox').getValue();//textInput.value;
			sources.city.query('CityListing = :1 order by CityListing', { params: [currentInput + "*"]});
		}
	};// @lock

	assessorCityTextbox.blur = function assessorCityTextbox_blur (event)// @startlock
	{// @endlock
		var grid = document.getElementById($comp.id+'_assessorCityGrid');
			grid.style.display = 'none';
	};// @lock






	
	attorneyCityGrid.onRowClick = function attorneyCityGrid_onRowClick (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('attorneyCityGrid'));
		grid.style.display = 'none';
		
		var recValue = $$(getHtmlId('attorneyCityGrid')).sourceAtt.getValue();
		$$(getHtmlId('attorneyCityTextbox')).setValue(recValue);
	};// @lock
	
	attorneyCityButton.click = function attorneyCityButton_click (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('attorneyCityGrid'));
		if(grid.style.display == 'none')
		{
			grid.style.display = 'block';
		}
		else
		{
			grid.style.display = 'none';
		}
	};// @lock

	attorneyCityTextbox.keyup = function attorneyCityTextbox_keyup (event)// @startlock
	{// @endlock
		if(event.keyCode ===13)
		{
			var currentInput = $$($comp.id+'_attorneyCityTextbox').getValue();
			$$($comp.id+'_attorneyCityTextbox').setValue(sources.city.CityListing);
			var grid = document.getElementById($comp.id+'_attorneyCityGrid');
			grid.style.display = 'none';
		}
		
		else
		{
			
			city=tempStore;
			sources.city.sync();

			var grid = document.getElementById($comp.id+'_attorneyCityGrid');
			grid.style.display = 'block';

			var currentInput = $$($comp.id+'_attorneyCityTextbox').getValue();//textInput.value;
			sources.city.query('CityListing = :1 order by CityListing', { params: [currentInput + "*"]});
		}
	};// @lock

	attorneyCityTextbox.blur = function attorneyCityTextbox_blur (event)// @startlock
	{// @endlock
		var grid = document.getElementById($comp.id+'_attorneyCityGrid');
			grid.style.display = 'none';
	};// @lock
	
	
	
	
	
	
	
	dhsCityGrid.onRowClick = function dhsCityGrid_onRowClick (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('dhsCityGrid'));
		grid.style.display = 'none';
		
		var recValue = $$(getHtmlId('dhsCityGrid')).sourceAtt.getValue();
		$$(getHtmlId('dhsCityTextbox')).setValue(recValue);
	};// @lock

	dhsCityButton.click = function dhsCityButton_click (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('dhsCityGrid'));
		if(grid.style.display == 'none')
		{
			grid.style.display = 'block';
		}
		else
		{
			grid.style.display = 'none';
		}
	};// @lock

	dhsCityTextbox.keyup = function dhsCityTextbox_keyup (event)// @startlock
	{// @endlock
		if(event.keyCode ===13)
		{
			var currentInput = $$($comp.id+'_dhsCityTextbox').getValue();
			$$($comp.id+'_dhsCityTextbox').setValue(sources.city.CityListing);
			var grid = document.getElementById($comp.id+'_dhsCityGrid');
			grid.style.display = 'none';
		}
		
		else
		{
			
			city=tempStore;
			sources.city.sync();

			var grid = document.getElementById($comp.id+'_dhsCityGrid');
			grid.style.display = 'block';

			var currentInput = $$($comp.id+'_dhsCityTextbox').getValue();//textInput.value;
			sources.city.query('CityListing = :1 order by CityListing', { params: [currentInput + "*"]});
		}
	};// @lock

	dhsCityTextbox.blur = function dhsCityTextbox_blur (event)// @startlock
	{// @endlock
		var grid = document.getElementById($comp.id+'_dhsCityGrid');
			grid.style.display = 'none';
	};// @lock
	
	
	
	
	
	
	
	judgesCityGrid.onRowClick = function judgesCityGrid_onRowClick (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('judgesCityGrid'));
		grid.style.display = 'none';
		
		var recValue = $$(getHtmlId('judgesCityGrid')).sourceAtt.getValue();
		$$(getHtmlId('judgesCityTextbox')).setValue(recValue);
	};// @lock

	judgesCityButton.click = function judgesCityButton_click (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('judgesCityGrid'));
		if(grid.style.display == 'none')
		{
			grid.style.display = 'block';
		}
		else
		{
			grid.style.display = 'none';
		}
	};// @lock

	judgesCityTextbox.keyup = function judgesCityTextbox_keyup (event)// @startlock
	{// @endlock
		if(event.keyCode ===13)
		{
			var currentInput = $$($comp.id+'_judgesCityTextbox').getValue();
			$$($comp.id+'_judgesCityTextbox').setValue(sources.city.CityListing);
			var grid = document.getElementById($comp.id+'_judgesCityGrid');
			grid.style.display = 'none';
		}
		
		else
		{
			
			city=tempStore;
			sources.city.sync();

			var grid = document.getElementById($comp.id+'_judgesCityGrid');
			grid.style.display = 'block';

			var currentInput = $$($comp.id+'_judgesCityTextbox').getValue();//textInput.value;
			sources.city.query('CityListing = :1 order by CityListing', { params: [currentInput + "*"]});
		}
	};// @lock

	judgesCityTextbox.blur = function judgesCityTextbox_blur (event)// @startlock
	{// @endlock
			var grid = document.getElementById($comp.id+'_judgesCityGrid');
			grid.style.display = 'none';
	};// @lock
	
	
	
	
	
	
	
	
	otherMonitorCityGrid.onRowClick = function otherMonitorCityGrid_onRowClick (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('otherMonitorCityGrid'));
		grid.style.display = 'none';
		
		var recValue = $$(getHtmlId('otherMonitorCityGrid')).sourceAtt.getValue();
		$$(getHtmlId('otherMonitorCityTextbox')).setValue(recValue);
	};// @startlock
	otherMonitorCityButton.click = function otherMonitorCityButton_click (event)
	{// @endlock
		var grid = document.getElementById(getHtmlId('otherMonitorCityGrid'));
		if(grid.style.display == 'none')
		{
			grid.style.display = 'block';
		}
		else
		{
			grid.style.display = 'none';
		}
	};// @lock

	otherMonitorCityTextbox.keyup = function otherMonitorCityTextbox_keyup (event)// @startlock
	{// @endlock
		if(event.keyCode ===13)
		{
			var currentInput = $$($comp.id+'_otherMonitorCityTextbox').getValue();
			$$($comp.id+'_otherMonitorCityTextbox').setValue(sources.city.CityListing);
			var grid = document.getElementById($comp.id+'_otherMonitorCityGrid');
			grid.style.display = 'none';
		}
		
		else
		{
			
			city=tempStore;
			sources.city.sync();

			var grid = document.getElementById($comp.id+'_otherMonitorCityGrid');
			grid.style.display = 'block';

			var currentInput = $$($comp.id+'_otherMonitorCityTextbox').getValue();//textInput.value;
			sources.city.query('CityListing = :1 order by CityListing', { params: [currentInput + "*"]});
		}
	};// @lock

	otherMonitorCityTextbox.blur = function otherMonitorCityTextbox_blur (event)// @startlock
	{// @endlock
		var grid = document.getElementById($comp.id+'_otherMonitorCityGrid');
			grid.style.display = 'none';
	};// @lock
	
	
	
	
	
	
	prosecutorCityGrid.onRowClick = function prosecutorCityGrid_onRowClick (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('prosecutorCityGrid'));
		grid.style.display = 'none';
		
		var recValue = $$(getHtmlId('prosecutorCityGrid')).sourceAtt.getValue();
		$$(getHtmlId('prosecutorCityTextbox')).setValue(recValue);
	};// @lock
	
	prosecutorCityButton.click = function prosecutorCityButton_click (event)// @startlock
	{// @endlock
		
		var grid = document.getElementById(getHtmlId('prosecutorCityGrid'));
		if(grid.style.display == 'none')
		{
			grid.style.display = 'block';
		}
		else
		{
			grid.style.display = 'none';
		}
	};// @lock
	
	prosecutorCityTextbox.keyup = function prosecutorCityTextbox_keyup (event)// @startlock
	{// @endlock
		if(event.keyCode ===13)
		{
			var currentInput = $$($comp.id+'_prosecutorCityTextbox').getValue();
			$$($comp.id+'_prosecutorCityTextbox').setValue(sources.city.CityListing);
			var grid = document.getElementById($comp.id+'_prosecutorCityGrid');
			grid.style.display = 'none';
		}
		
		else
		{
			
			city=tempStore;
			sources.city.sync();

			var grid = document.getElementById($comp.id+'_prosecutorCityGrid');
			grid.style.display = 'block';

			var currentInput = $$($comp.id+'_prosecutorCityTextbox').getValue();//textInput.value;
			sources.city.query('CityListing = :1 order by CityListing', { params: [currentInput + "*"]});
		}
	};// @lock

	prosecutorCityTextbox.blur = function prosecutorCityTextbox_blur (event)// @startlock
	{// @endlock
		var grid = document.getElementById($comp.id+'_prosecutorCityGrid');
			grid.style.display = 'none';
	};// @lock

	





	probationOfficerCityGrid.onRowClick = function probationOfficerCityGrid_onRowClick (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('probationOfficerCityGrid'));
		grid.style.display = 'none';
		
		var recValue = $$(getHtmlId('probationOfficerCityGrid')).sourceAtt.getValue();
		$$(getHtmlId('probationOfficerCityTextbox')).setValue(recValue);
	};// @lock
	
	probationOfficerCityButton.click = function probationOfficerCityButton_click (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('probationOfficerCityGrid'));
		if(grid.style.display == 'none')
		{
			grid.style.display = 'block';
		}
		else
		{
			grid.style.display = 'none';
		}
	};// @lock
	
	probationOfficerCityTextbox.keyup = function probationOfficerCityTextbox_keyup (event)// @startlock
	{// @endlock
		if(event.keyCode ===13)
		{
			var currentInput = $$($comp.id+'_probationOfficerCityTextbox').getValue();
			$$($comp.id+'_probationOfficerCityTextbox').setValue(sources.poJurisdiction.JurisdictionName);
			var grid = document.getElementById($comp.id+'_probationOfficerCityGrid');
			grid.style.display = 'none';
		}
		
		else
		{
			
			poJurisdiction=tempStore2;
			sources.poJurisdiction.sync();

			var grid = document.getElementById($comp.id+'_probationOfficerCityGrid');
			grid.style.display = 'block';

			var currentInput = $$($comp.id+'_probationOfficerCityTextbox').getValue();//textInput.value;
			sources.poJurisdiction.query('JurisdictionName = :1 order by JurisdictionName', { params: [currentInput + "*"]});
		}
	};// @lock

	probationOfficerCityTextbox.blur = function probationOfficerCityTextbox_blur (event)// @startlock
	{// @endlock
		var currentInput = $$($comp.id+'_probationOfficerCityTextbox').getValue();
			$$($comp.id+'_probationOfficerCityTextbox').setValue(sources.poJurisdiction.JurisdictionName);
			var grid = document.getElementById($comp.id+'_probationOfficerCityGrid');
			grid.style.display = 'none';
		
	};// @lock

	
	
	
	
	
	probationJurisdictionCityGrid.onRowClick = function probationJurisdictionCityGrid_onRowClick (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('probationJurisdictionCityGrid'));
		grid.style.display = 'none';
		
		var recValue = $$(getHtmlId('probationJurisdictionCityGrid')).sourceAtt.getValue();
		$$(getHtmlId('probationJurisdictionCityTextbox')).setValue(recValue);
	};// @lock

	probationJurisdictionCityButton.click = function probationJurisdictionCityButton_click (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('probationJurisdictionCityGrid'));
		if(grid.style.display == 'none')
		{
			grid.style.display = 'block';
		}
		else
		{
			grid.style.display = 'none';
		}
	};// @lock

	probationJurisdictionCityTextbox.keyup = function probationJurisdictionCityTextbox_keyup (event)// @startlock
	{// @endlock
		if(event.keyCode ===13)
		{
			var currentInput = $$($comp.id+'_probationJurisdictionCityTextbox').getValue();
			$$($comp.id+'_probationJurisdictionCityTextbox').setValue(sources.city.CityListing);
			var grid = document.getElementById($comp.id+'_probationJurisdictionCityGrid');
			grid.style.display = 'none';
		}
		
		else
		{
			
			city=tempStore;
			sources.city.sync();

			var grid = document.getElementById($comp.id+'_probationJurisdictionCityGrid');
			grid.style.display = 'block';

			var currentInput = $$($comp.id+'_probationJurisdictionCityTextbox').getValue();//textInput.value;
			sources.city.query('CityListing = :1 order by CityListing', { params: [currentInput + "*"]});
		}
	};// @lock

	probationJurisdictionCityTextbox.blur = function probationJurisdictionCityTextbox_blur (event)// @startlock
	{// @endlock
		var grid = document.getElementById($comp.id+'_probationJurisdictionCityGrid');
			grid.style.display = 'none';
	};// @lock



	
	
	
	
	courtJurisdictionCityGrid.onRowClick = function courtJurisdictionCityGrid_onRowClick (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('courtJurisdictionCityGrid'));
		grid.style.display = 'none';
		
		var recValue = $$(getHtmlId('courtJurisdictionCityGrid')).sourceAtt.getValue();
		$$(getHtmlId('courtJurisdictionCityTextbox')).setValue(recValue);
	};// @lock

	courtJurisdictionCityButton.click = function courtJurisdictionCityButton_click (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('courtJurisdictionCityGrid'));
		if(grid.style.display == 'none')
		{
			grid.style.display = 'block';
		}
		else
		{
			grid.style.display = 'none';
		}
	};// @lock

	courtJurisdictionCityTextbox.keyup = function courtJurisdictionCityTextbox_keyup (event)// @startlock
	{// @endlock
		if(event.keyCode ===13)
		{
			var currentInput = $$($comp.id+'_cityComboBox').getValue();
			$$($comp.id+'_courtJurisdictionCityTextbox').setValue(sources.city.CityListing);
			var grid = document.getElementById($comp.id+'_courtJurisdictionCityGrid');
			grid.style.display = 'none';
		}
		
		else
		{
			
			city=tempStore;
			sources.city.sync();

			var grid = document.getElementById($comp.id+'_courtJurisdictionCityGrid');
			grid.style.display = 'block';

			var currentInput = $$($comp.id+'_courtJurisdictionCityTextbox').getValue();//textInput.value;
			sources.city.query('CityListing = :1 order by CityListing', { params: [currentInput + "*"]});
		}
	};// @lock

	courtJurisdictionCityTextbox.blur = function courtJurisdictionCityTextbox_blur (event)// @startlock
	{// @endlock
		var grid = document.getElementById($comp.id+'_courtJurisdictionCityGrid');
			grid.style.display = 'none';
	};// @lock

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	button23.click = function button23_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('mainCourtJurisdictionCont')).setSplitPosition(1290);
	};// @lock















	submitAssessorCurrentInformation.click = function submitAssessorCurrentInformation_click (event)// @startlock
	{// @endlock
		
		var currentCity = $$($comp.id + "_cityComboBox").getValue();
		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:83,data1:currentCity}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	city = rpcDSelects.getSelect(myObject5);
		
		if( city.length ===0)
		{
			
			var myObject7 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:18,data1:currentCity};
			rpcDInsert.setInsertAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject7]
				});
		}
		var phone = $$(getHtmlId("assessorPhoneField")).getValue();
		var fax = $$(getHtmlId("assesorFaxField")).getValue();
		var mobile = $$(getHtmlId("assesorMobileField")).getValue();
		
		
		var myObject7 = {
    		token: userConfigObj.secToken,
    		id: userConfigObj.userID,
    		major: 3,
    		minor: 0,
    		data1: $$(getHtmlId("assessorNameField")).getValue(),
    		data2: phone,
    		data3: $$(getHtmlId("assesorEmailField")).getValue(),
    		data4: fax,
    		data5: $$(getHtmlId("assesorAddressField")).getValue(),
    		data6: $$(getHtmlId("cityComboBox")).getValue(),
    		data7: $$(getHtmlId("assesorStateField")).getValue(),
    		data8: $$(getHtmlId("assesorZipField")).getValue(),
    		data9: $$(getHtmlId("assesorExtField")).getValue(),
    		data10: mobile,
    		data11: $$(getHtmlId("assesorNotesField")).getValue(),
    		data12: $$(getHtmlId("assessorFullNameField")).getValue(),
    		data13: $$(getHtmlId("reportingComboBox")).getValue(),
    		data14: currentID,
    		data15: $$(getHtmlId("assessorInactiveCheckBox")).getValue()
		}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID

		rpcDUpdate.setUpdateAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject7]
				});



		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:5,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						bakListSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject5]
				});
	 	
	 	
	};// @lock



































	submitButton.click = function submitButton_click (event)// @startlock
	{// @endlock
	
		debugger;
		var currentCity = $$($comp.id + "_cityComboBox").getValue();
		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:83,data1:currentCity}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	city = rpcDSelects.getSelect(myObject5);
		
		if( city.length ===0)
		{
			
			var myObject7 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:18,data1:currentCity};
			rpcDInsert.setInsertAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject7]
				});
		}
		
		
		//run update if needed
		
			var myObject7 = 
			{
				token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:4,
				data1:$$(getHtmlId("courtJurisdictionNameField")).getValue(),
				data2:$$(getHtmlId("courtJurisdictionPhoneField")).getValue(),
				data3:$$(getHtmlId("courtJurisdictionEmailField")).getValue(),
				data4:$$(getHtmlId("courtJurisdictionFaxField")).getValue(),
				data5:$$(getHtmlId("courtJurisdictionAddressField")).getValue(),
				data6:$$(getHtmlId("cityComboBox")).getValue(),
				data7:$$(getHtmlId("courtJurisdictionStateField")).getValue(),
				data8:$$(getHtmlId("courtJurisdictionZipField")).getValue(),
				data9:$$(getHtmlId("courtJurisdictionExtField")).getValue(),
				data10:$$(getHtmlId("courtJurisdictionAlternateField")).getValue(),
				data11:$$(getHtmlId("courtJurisdictionNotesField")).getValue(),
				data12:$$(getHtmlId("courtJurisdictionDatabaseField")).getValue(),
				data13:$$(getHtmlId("reportingComboBox")).getValue(),
				data14:currentID,
				data15:$$(getHtmlId("courtJurisdictionInactiveCheckBox")).getValue(),
				data16:$$(getHtmlId("courtJurisdictionFormatField")).getValue()
				
				
				
			}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 		
	 		rpcDUpdate.setUpdateAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject7]
				});
				
	 		
			var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:27,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						bakListSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject5]
				});
	};// @lock























	

	
	

	button5.click = function button5_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('mainProbationJurisdictionCont')).setSplitPosition(1290);
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		var currentCity = $$($comp.id + "_pjCityComboBox").getValue();
		var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:83,data1:currentCity}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	city = rpcDSelects.getSelect(myObject5);
		
		if( city.length ===0)
		{
			
			var myObject7 = {token:'7836140170460568' ,id:'1',major:3,minor:18,data1:currentCity};
			rpcDInsert.setInsertAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject7]
				});
		}
		var myObject7 = 
			{
				
				token:'7836140170460568' ,id:'1',major:3,minor: 13,
				data1:$$(getHtmlId("pjName")).getValue(),
				data2:$$(getHtmlId("pjPhone")).getValue(),
				data4:$$(getHtmlId("pjFax")).getValue(),
				data5:$$(getHtmlId("pjAddress")).getValue(),
				data6:$$(getHtmlId("pjCityComboBox")).getValue(),
				data7:$$(getHtmlId("pjState")).getValue(),
				data8:$$(getHtmlId("pjZip")).getValue(),
				data11:$$(getHtmlId("pjNotes")).getValue(),
				data14:currentID,
				data15:$$(getHtmlId("pjInactive")).getValue()
			}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 		
				
	 		rpcDInsert.setInsertAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject7]
				});
				
				
	 			 		
		var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:63,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						bakListSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject5]
				});
	};// @lock

	

	button4.click = function button4_click (event)// @startlock
	{// @endlock
			
	var myObject7 = 
			{
				
				token:userConfigObj.secToken ,id: userConfigObj.userID,major:3,minor: 15,
				data1:$$(getHtmlId("poName")).getValue(),
				data2:$$(getHtmlId("poPhone")).getValue(),
				data3:$$(getHtmlId("poEmail")).getValue(),
				data4:$$(getHtmlId("poFax")).getValue(),
				data8:$$(getHtmlId("")).getValue(),
				data9:$$(getHtmlId("poExt")).getValue(),
				data10:$$(getHtmlId("poAdditional")).getValue(),
				data11:$$(getHtmlId("notes")).getValue(),
				data12:$$(getHtmlId("poFullName")).getValue(),
				data13:$$(getHtmlId("poReportingComboBox")).getValue(),
				data14:currentID,
				data15:$$(getHtmlId("poInactive")).getValue()
			}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 		rpcDUpdate.setUpdateAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);vo
					},
					'params': [myObject7]
				});
				
	 		
	 		
			var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:72,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						bakListSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject5]
				});
	};// @lock

	

	

	button33.click = function button33_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('mainProbationOfficerCont')).setSplitPosition(1290);
	};// @lock

	

	textField73.keyup = function textField73_keyup (event)// @startlock
	{// @endlock
		if(event.keyCode ===13)
		{
			
			var currentInput = $$($comp.id+'_prosJurisdiction').getValue();
			$$($comp.id+'_prosJurisdiction').setValue(sources.jurisdiction.CourtJurisdiction);
			var grid = document.getElementById($comp.id+'_judgeJurisdictionGrid');
			grid.style.display = 'none';
		}
		
		else
		{
			
			jurisdiction=tempStore2;
			sources.jurisdiction.sync();

			var grid = document.getElementById($comp.id+'_judgeJurisdictionGrid');
			grid.style.display = 'block';

			var currentInput = $$($comp.id+'_prosJurisdiction').getValue();//textInput.value;
			sources.jurisdiction.query('CourtJurisdiction = :1 order by CourtJurisdiction', { params: [currentInput + "*"]});
		}
	};// @lock

	textField73.blur = function textField73_blur (event)// @startlock
	{// @endlock
		var currentInput = $$($comp.id+'_prosJurisdiction').getValue();
			$$($comp.id+'_prosJurisdiction').setValue(sources.city.CityListing);
			var grid = document.getElementById($comp.id+'_judgeJurisdictionGrid');
			grid.style.display = 'none';
		
	};// @lock

	button32.click = function button32_click (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('judgeJurisdictionGrid'));
		if(grid.style.display == 'none')
		{
			grid.style.display = 'block';
		}
		else
		{
			grid.style.display = 'none';
		}
	};// @lock

	dataGrid17.onRowClick = function dataGrid17_onRowClick (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('judgeJurisdictionGrid'));
		grid.style.display = 'none';
		
		var recValue = $$(getHtmlId('judgeJurisdictionGrid')).sourceAtt.getValue();
		$$(getHtmlId('prosJurisdiction')).setValue(recValue);
	};// @lock

	
	

	button26.click = function button26_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('mainProsecutorCont')).setSplitPosition(1290);
	};// @lock

	button25.click = function button25_click (event)// @startlock
	{// @endlock
		var currentCity = $$($comp.id + "_prosCityComboBox").getValue();
		var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:83,data1:currentCity}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	city = rpcDSelects.getSelect(myObject5);
		
		if( city.length ===0)
		{
			
			var myObject7 = {token:'7836140170460568' ,id:'1',major:3,minor:18,data1:currentCity};
			rpcDInsert.setInsertAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject7]
				});
		}
		var myObject7 = 
			{
				
				token:'7836140170460568' ,id:'1',major:3,minor: 17,
				data1:$$(getHtmlId("prosName")).getValue(),
				data2:$$(getHtmlId("prosPhone")).getValue(),
				data3:$$(getHtmlId("prosEmail")).getValue(),
				data4:$$(getHtmlId("prosFax")).getValue(),
				data5:$$(getHtmlId("prosAddress")).getValue(),
				data6:$$(getHtmlId("prosCityComboBox")).getValue(),
				data7:$$(getHtmlId("prosState")).getValue(),
				data8:$$(getHtmlId("prosZip")).getValue(),
				data9:$$(getHtmlId("prosExt")).getValue(),
				data10:$$(getHtmlId("prosAdditional")).getValue(),
				data11:$$(getHtmlId("prosNotes")).getValue(),
				data12:$$(getHtmlId("prosFullName")).getValue(),
				data13:$$(getHtmlId("prosReportingComboBox")).getValue(),
				data14:currentID,
				data15:$$(getHtmlId("prosInactive")).getValue(),
				data16:$$(getHtmlId("prosJurisdiction")).getValue()
			}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 		rpcDUpdate.setUpdateAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);vo
					},
					'params': [myObject7]
				});
				
	 		
			var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:81,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						bakListSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject5]
				});
	};// @lock

	

	

	

	

	button21.click = function button21_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('mainOtherMonitorsCont')).setSplitPosition(1290);
	};// @lock

	button19.click = function button19_click (event)// @startlock
	{// @endlock
		var currentCity = $$($comp.id + "_omCityComboBox").getValue();
		var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:83,data1:currentCity}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	city = rpcDSelects.getSelect(myObject5);
		
		if( city.length ===0)
		{
			
			var myObject7 = {token:'7836140170460568' ,id:'1',major:3,minor:18,data1:currentCity};
			rpcDInsert.setInsertAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject7]
				});
		}
			var myObject7 = 
			{
				
				token:'7836140170460568' ,id:'1',major:3,minor: 11,
				data1:$$(getHtmlId("omName")).getValue(),
				data2:$$(getHtmlId("omPhone")).getValue(),
				data3:$$(getHtmlId("omEmail")).getValue(),
				data4:$$(getHtmlId("omFax")).getValue(),
				data5:$$(getHtmlId("omAddress")).getValue(),
				data6:$$(getHtmlId("omCityComboBox")).getValue(),
				data7:$$(getHtmlId("omState")).getValue(),
				data8:$$(getHtmlId("omZip")).getValue(),
				data9:$$(getHtmlId("omExt")).getValue(),
				data10:$$(getHtmlId("omAdditional")).getValue(),
				data11:$$(getHtmlId("omNotes")).getValue(),
				data12:$$(getHtmlId("omFullName")).getValue(),
				data13:$$(getHtmlId("omReportingComboBox")).getValue(),
				data14:currentID,
				data15:$$(getHtmlId("omInactive")).getValue()
			}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 		rpcDUpdate.setUpdateAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);vo
					},
					'params': [myObject7]
				});
				
	 		
				
				
	 		
	 		
			var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:54,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						bakListSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject5]
				});
	};// @lock

	

	

	dataGrid14.onRowClick = function dataGrid14_onRowClick (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('judgeJurisdictionGrid'));
		grid.style.display = 'none';
		
		var recValue = $$(getHtmlId('judgeJurisdictionGrid')).sourceAtt.getValue();
		$$(getHtmlId('judgeJurisdiction')).setValue(recValue);
	};// @lock

	button17.click = function button17_click (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('judgeJurisdictionGrid'));
		if(grid.style.display == 'none')
		{
			grid.style.display = 'block';
		}
		else
		{
			grid.style.display = 'none';
		}
	};// @lock

	textField49.keyup = function textField49_keyup (event)// @startlock
	{// @endlock
		if(event.keyCode ===13)
		{
			var currentInput = $$($comp.id+'_judgeJurisdiction').getValue();
			$$($comp.id+'_judgeJurisdiction').setValue(sources.jurisdiction.CourtJurisdiction);
			var grid = document.getElementById($comp.id+'_judgeJurisdictionGrid');
			grid.style.display = 'none';
		}
		
		else
		{
			
			jurisdiction=tempStore2;
			sources.jurisdiction.sync();

			var grid = document.getElementById($comp.id+'_judgeJurisdictionGrid');
			grid.style.display = 'block';

			var currentInput = $$($comp.id+'_judgeJurisdiction').getValue();//textInput.value;
			sources.jurisdiction.query('CourtJurisdiction = :1 order by CourtJurisdiction', { params: [currentInput + "*"]});
		}
	};// @lock

	textField49.blur = function textField49_blur (event)// @startlock
	{// @endlock
		var currentInput = $$($comp.id+'_judgeJurisdiction').getValue();
			$$($comp.id+'_judgeJurisdiction').setValue(sources.city.CityListing);
			var grid = document.getElementById($comp.id+'_judgeJurisdictionGrid');
			grid.style.display = 'none';
		
	};// @lock

	

	button15.click = function button15_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('mainJudgeCont')).setSplitPosition(1290);
	};// @lock

	button13.click = function button13_click (event)// @startlock
	{// @endlock
		var currentCity = $$($comp.id + "_cityComboBox").getValue();
		var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:83,data1:currentCity}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	city = rpcDSelects.getSelect(myObject5);
		
		if( city.length ===0)
		{
			
			var myObject7 = {token:'7836140170460568' ,id:'1',major:3,minor:18,data1:currentCity};
			rpcDInsert.setInsertAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject7]
				});
		}
			var myObject7 = 
			{
				
				token:'7836140170460568' ,id:'1',major:3,minor:9,
				data1:$$(getHtmlId("judgeNameField")).sourceAtt.getValue(),
				data2:$$(getHtmlId("judgePhoneField")).sourceAtt.getValue(),
				data3:$$(getHtmlId("judgeEmailField")).sourceAtt.getValue(),
				data4:$$(getHtmlId("judgeFaxField")).sourceAtt.getValue(),
				data5:$$(getHtmlId("judgeAddressField")).getValue(),
				data6:$$(getHtmlId("cityComboBox")).getValue(),
				data7:$$(getHtmlId("judgeStateField")).sourceAtt.getValue(),
				data8:$$(getHtmlId("judgeZipField")).sourceAtt.getValue(),
				data9:$$(getHtmlId("judgeExtField")).sourceAtt.getValue(),
				data10:$$(getHtmlId("judgeMobileField")).sourceAtt.getValue(),
				data11:$$(getHtmlId("judgeNotesField")).sourceAtt.getValue(),
				data12:$$(getHtmlId("judgeFullNameField")).sourceAtt.getValue(),
				data13:$$(getHtmlId("reportingComboBox")).getValue(),
				data14:currentID,
				data15:$$(getHtmlId("judgeInactiveCheckBox")).getValue(),
				data16:$$(getHtmlId("judgeJurisdiction")).getValue()
			}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 		rpcDUpdate.setUpdateAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject7]
				});
				
	 		
	 		
			var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:45,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						bakListSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject5]
				});
	};// @lock

	

	

	

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('mainAssessorCont')).setSplitPosition(1290);
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		var currentCity = $$($comp.id + "_cityComboBox").getValue();
		var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:83,data1:currentCity}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	city = rpcDSelects.getSelect(myObject5);
		
		if( city.length ===0)
		{
			
			var myObject7 = {token:'7836140170460568' ,id:'1',major:3,minor:18,data1:currentCity};
			rpcDInsert.setInsertAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject7]
				});
		}
		

		changed = false;
		
			var myObject7 = 
			{
				token:'7836140170460568' ,id:'1',major:3,minor:7,
				data1:$$(getHtmlId("dhsNameField")).sourceAtt.getValue(),
				data2:$$(getHtmlId("dhsPhoneField")).sourceAtt.getValue(),
				data3:$$(getHtmlId("dhsEmailField")).sourceAtt.getValue(),
				data4:$$(getHtmlId("dhsFaxField")).sourceAtt.getValue(),
				data5:$$(getHtmlId("dhsAddressField")).sourceAtt.getValue(),
				data6:$$(getHtmlId("cityComboBox")).getValue(),
				data7:$$(getHtmlId("dhsStateField")).sourceAtt.getValue(),
				data8:$$(getHtmlId("dhsZipField")).sourceAtt.getValue(),
				data9:$$(getHtmlId("dhsExtField")).sourceAtt.getValue(),
				data10:$$(getHtmlId("dhsMobileField")).sourceAtt.getValue(),
				data11:$$(getHtmlId("dhsNotesField")).sourceAtt.getValue(),
				data12:$$(getHtmlId("dhsFullNameField")).sourceAtt.getValue(),
				data13:$$(getHtmlId("reportingComboBox")).getValue(),
				data14:currentID,
				data15:$$(getHtmlId("dhsInactiveCheckBox")).getValue()
			}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 		rpcDUpdate.setUpdateAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject7]
				});
			
			var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:36,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						bakListSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject5]
				});
		
	};// @lock

	

	

	dataGrid2.onRowClick = function dataGrid2_onRowClick (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('cityComboboxGrid'));
		grid.style.display = 'none';
		
		var recValue = $$(getHtmlId('cityComboboxGrid')).sourceAtt.getValue();
		$$(getHtmlId('cityComboBox')).setValue(recValue);
	};// @lock

	button11.click = function button11_click (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('cityComboboxGrid'));
		if(grid.style.display == 'none')
		{
			grid.style.display = 'block';
		}
		else
		{
			grid.style.display = 'none';
		}
	};// @lock

	textField3.keyup = function textField3_keyup (event)// @startlock
	{// @endlock
		
		if(event.keyCode ===13)
		{
			var currentInput = $$($comp.id+'_cityComboBox').getValue();
			$$($comp.id+'_cityComboBox').setValue(sources.city.CityListing);
			var grid = document.getElementById($comp.id+'_cityComboboxGrid');
			grid.style.display = 'none';
		}
		
		else
		{
			
			city=tempStore;
			sources.city.sync();

			var grid = document.getElementById($comp.id+'_cityComboboxGrid');
			grid.style.display = 'block';

			var currentInput = $$($comp.id+'_cityComboBox').getValue();//textInput.value;
			sources.city.query('CityListing = :1 order by CityListing', { params: [currentInput + "*"]});
		}
	};// @lock

	textField3.blur = function textField3_blur (event)// @startlock
	{// @endlock
		var grid = document.getElementById($comp.id+'_cityComboboxGrid');
			grid.style.display = 'none';
	};// @lock

	

	

	

	button37.click = function button37_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('mainAttorneyCont')).setSplitPosition(1290);
	};// @lock

	button36.click = function button36_click (event)// @startlock
	{// @endlock
			var currentCity = $$($comp.id + "_attCityComboBox").getValue();
		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:83,data1:currentCity}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	city = rpcDSelects.getSelect(myObject5);
		
		if( city.length ===0)
		{
			
			var myObject7 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:18,data1:currentCity};
			rpcDInsert.setInsertAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject7]
				});
		}
		
			var myObject7 = 
			{
				token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:3,
				data1:$$(getHtmlId("attName")).getValue(),
				data2:$$(getHtmlId("attPhone")).getValue(),
				data3:$$(getHtmlId("attEmail")).getValue(),
				data4:$$(getHtmlId("attFax")).getValue(),
				data5:$$(getHtmlId("attAddress")).getValue(),
				data6:$$(getHtmlId("attCityComboBox")).getValue(),
				data7:$$(getHtmlId("attState")).getValue(),
				data8:$$(getHtmlId("attZip")).getValue(),
				data9:$$(getHtmlId("attExt")).getValue(),
				data10:$$(getHtmlId("attAdditional")).getValue(),
				data11:$$(getHtmlId("attNotes")).getValue(),
				data12:$$(getHtmlId("attFullName")).getValue(),
				data13:$$(getHtmlId("attReportingComboBox")).getValue(),
				data14:currentID,
				data15:$$(getHtmlId("attInactive")).getValue(),
				data16:$$(getHtmlId("attPublicDef")).getValue(),
				data17:$$(getHtmlId("attStaffInfo")).getValue()
				
				
			}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 		
	 		rpcDUpdate.setUpdateAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject7]
				});

		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:18,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						bakListSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject5]
				});
	};// @lock














	assessorFullList.onRowClick = function assessorFullList_onRowClick (event)// @startlock
	{// @endlock
	
		currentID = sources.assessorList.AssessorInformationID;
		
		var myWidget = document.getElementById($comp.id +"_AssessorMainContainer");
		myWidget.style.transitionProperty = "left";
		myWidget.style.transitionDelay = "0s";
		myWidget.style.transitionDuration = ".5s";
		myWidget.style.left = "560px";
		
		var assessorCorrespondenceObject = {token: userConfigObj.secToken,id: userConfigObj.userID,major: 3,minor: 2,data1: sources.assessorList.AssessorInformationID,data2:0};
        rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						assessorCorespondance = result;
						sources.assessorCorespondance.sync();
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [assessorCorrespondenceObject]
		});
		//fillCorrespondance();
	};// @lock
	
	attorneyFullList.onRowClick = function attorneyFullList_onRowClick (event)// @startlock
	{// @endlock
	
		currentID = sources.attorneyList.AttorneyInformationID;
		
		var myWidget = document.getElementById($comp.id +"_AttorneyMainContainer");
		myWidget.style.transitionProperty = "left";
		myWidget.style.transitionDelay = "0s";
		myWidget.style.transitionDuration = ".5s";
		myWidget.style.left = "560px";
		
		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:17,data1:sources.attorneyList.AttorneyInformationID,data2:0};
		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){	
						attorneyCorespondance = result;
						sources.attorneyCorespondance.sync();
					},
					'onError': function(error){						
						console.log(error);
					},
					'params': [myObject5]
		});
		//fillCorrespondance();
	};// @lock
	
	
	dhsOfficerFullList.onRowClick = function dhsOfficerFullList_onRowClick (event)// @startlock
	{// @endlock	
		
		currentID = sources.dhsList.DhsInformationID;
		
		var myWidget = document.getElementById($comp.id +"_dhsOfficerMainContainer");
		myWidget.style.transitionProperty = "left";
		myWidget.style.transitionDelay = "0s";
		myWidget.style.transitionDuration = ".5s";
		myWidget.style.left = "560px";
		
		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:35,data1:sources.dhsList.DhsInformationID,data2:0};
		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){	
						dhsCorespondance = result;
						sources.dhsCorespondance.sync();
					},
					'onError': function(error){						
						console.log(error);
					},
					'params': [myObject5]
		});
		//fillCorrespondance();
	};// @endlock

	
	judgeFullList.onRowClick = function judgeFullList_onRowClick (event)// @startlock
	{// @endlock
	
		currentID = sources.judgeList.JudgesID;
		
		var myWidget = document.getElementById($comp.id +"_judgeMainContainer");
		myWidget.style.transitionProperty = "left";
		myWidget.style.transitionDelay = "0s";
		myWidget.style.transitionDuration = ".5s";
		myWidget.style.left = "560px";
		
		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:43,data1:sources.judgeList.JudgesID,data2:0};
		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						judgeCorespondance = result;
						sources.judgeCorespondance.sync();
					},
					'onError': function(error){						
						console.log(error);
					},
					'params': [myObject5]
		});
		//fillCorrespondance();
	};// @lock
	
	
	prosecutorFullList.onRowClick = function prosecutorFullList_onRowClick (event)// @startlock
	{// @endlock
	
		currentID = sources.prosecutorList.ProsecutorsID;
		
		var myWidget = document.getElementById($comp.id +"_prosecutorMainContainer");
		myWidget.style.transitionProperty = "left";
		myWidget.style.transitionDelay = "0s";
		myWidget.style.transitionDuration = ".5s";
		myWidget.style.left = "560px";
		
		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:79,data1:sources.prosecutorList.ProsecutorsID,data2:0};
		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){	
		 				debugger;	 				
						prosecutorCorespondance = result;
						sources.prosecutorCorespondance.sync();
					},
					'onError': function(error){						
						console.log(error);
					},
					'params': [myObject5]
		});
		//fillCorrespondance();
	};// @lock
	
	
	otherMonitorFullList.onRowClick = function otherMonitorFullList_onRowClick (event)// @startlock
	{// @endlock
	
		currentID = sources.otherMonitorList.OtherMonitorsID;
		
		var myWidget = document.getElementById($comp.id +"_otherMonitorMainContainer");
		myWidget.style.transitionProperty = "left";
		myWidget.style.transitionDelay = "0s";
		myWidget.style.transitionDuration = ".5s";
		myWidget.style.left = "560px";
		
		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:52,data1:sources.otherMonitorList.OtherMonitorsID,data2:0};
		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){	
		 				debugger;	 				
						otherMonitorCorespondance = result;
						sources.otherMonitorCorespondance.sync();
					},
					'onError': function(error){						
						console.log(error);
					},
					'params': [myObject5]
		});
		//fillCorrespondance();
	};// @lock


	courtJurisdictionFullList.onRowClick = function courtJurisdictionFullList_onRowClick (event)// @startlock
	{// @endlock
	
		currentID = sources.courtJurisdictionList.CourtJurisdictionID;
		
		var myWidget = document.getElementById($comp.id +"_courtJurisdictionMainContainer");
		myWidget.style.transitionProperty = "left";
		myWidget.style.transitionDelay = "0s";
		myWidget.style.transitionDuration = ".5s";
		myWidget.style.left = "560px";
		
		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:26,data1:sources.courtJurisdictionList.CourtJurisdictionID,data2:0};
		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){	
		 				debugger;	 				
						courtJurisdictionCorespondance = result;
						sources.courtJurisdictionCorespondance.sync();
					},
					'onError': function(error){						
						console.log(error);
					},
					'params': [myObject5]
		});
		//fillCorrespondance();
	};// @lock


	probationJurisdictionFullList.onRowClick = function probationJurisdictionFullList_onRowClick (event)// @startlock
	{// @endlock
	
		currentID = sources.probationJurisdictionList.POJurisdictionID;
		
		var myWidget = document.getElementById($comp.id +"_probationJurisdictionMainContainer");
		myWidget.style.transitionProperty = "left";
		myWidget.style.transitionDelay = "0s";
		myWidget.style.transitionDuration = ".5s";
		myWidget.style.left = "560px";
		
		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:61,data1:sources.probationJurisdictionList.POJurisdictionID,data2:0};
		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){	
		 				debugger;	 				
						probationJurisdictionCorespondance = result;
						sources.probationJurisdictionCorespondance.sync();
					},
					'onError': function(error){						
						console.log(error);
					},
					'params': [myObject5]
		});
		//fillCorrespondance();
	};// @lock


	probationOfficerFullList.onRowClick = function probationOfficerFullList_onRowClick (event)// @startlock
	{// @endlock
	
		currentID = sources.probationOfficerList.POInformationID;
		
		var myWidget = document.getElementById($comp.id +"_probationOfficerMainContainer");
		myWidget.style.transitionProperty = "left";
		myWidget.style.transitionDelay = "0s";
		myWidget.style.transitionDuration = ".5s";
		myWidget.style.left = "560px";
		
		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:70,data1:sources.probationOfficerList.POInformationID,data2:0};
		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){	
		 				debugger;	 				
						probationOfficerCorespondance = result;
						sources.probationOfficerCorespondance.sync();
					},
					'onError': function(error){						
						console.log(error);
					},
					'params': [myObject5]
		});
		//fillCorrespondance();
	};// @lock
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	newProbJ.click = function newProbJ_click (event)// @startlock
	{// @endlock
		newPJ.style.zIndex = '10';
		newPJ.style.visibility = 'visible';
		WAF.loadComponent ( {											
		id: 	$comp.id+'_newProbationJurisdictionComponent', 											
		path: 	'/CAPCIS.waPage/referralProbationJurisdictions.waComponent'});
	};// @lock

	newCourtJ.click = function newCourtJ_click (event)// @startlock
	{// @endlock
		newCJ.style.zIndex = '10';
		newCJ.style.visibility = 'visible';
		WAF.loadComponent ( {											
		id: 	$comp.id+'_newCourtJurisdictionComponent', 											
		path: 	'/CAPCIS.waPage/referralNewCourtJurisdictions.waComponent'});
	};// @lock

	newOtherM.click = function newOtherM_click (event)// @startlock
	{// @endlock
		newOther.style.zIndex = '10';
		newOther.style.visibility = 'visible';
		WAF.loadComponent ( {											
		id: 	$comp.id+'_newOtherMoniterComponent', 											
		path: 	'/CAPCIS.waPage/referralNewOtherMonitors.waComponent'});
	};// @lock

	newPros.click = function newPros_click (event)// @startlock
	{// @endlock
		newProsecutor.style.zIndex = '10';
		newProsecutor.style.visibility = 'visible';
		WAF.loadComponent ( {											
		id: 	$comp.id+'_newProsecutorsComponent', 											
		path: 	'/CAPCIS.waPage/referralProsecutors.waComponent'});
	};// @lock

	newPOfficer.click = function newPOfficer_click (event)// @startlock
	{// @endlock
		newPO.style.zIndex = '10';
		newPO.style.visibility = 'visible';
		WAF.loadComponent ( {											
		id: 	$comp.id+'_newPOComponent', 											
		path: 	'/CAPCIS.waPage/referralProbationOfficers.waComponent'});
	};// @lock

	newJudge.click = function newJudge_click (event)// @startlock
	{// @endlock
		newJudges.style.zIndex = '10';
		newJudges.style.visibility = 'visible';
		WAF.loadComponent ( {											
		id: 	$comp.id+'_newJudgeComponent', 											
		path: 	'/CAPCIS.waPage/referralNewJudges.waComponent'});
	
	};// @lock

	newDHSO.click = function newDHSO_click (event)// @startlock
	{// @endlock
		newDHS.style.zIndex = '10';
		newDHS.style.visibility = 'visible';
		WAF.loadComponent ( {											
		id: 	$comp.id+'_newDHSOfficerComponent', 											
		path: 	'/CAPCIS.waPage/referralNewDHSOfficers.waComponent'});
	};// @lock

	newAtt.click = function newAtt_click (event)// @startlock
	{// @endlock
		newAttorney.style.zIndex = '10';
		newAttorney.style.visibility = 'visible';
		WAF.loadComponent ( {											
		id: 	$comp.id+'_newAttorneyComponent', 											
		path: 	'/CAPCIS.waPage/referralNewAttorneys.waComponent'});
	};// @lock

	newAss.click = function newAss_click (event)// @startlock
	{// @endlock
		
		newAssessor.style.zIndex = '10';
		newAssessor.style.visibility = 'visible';
		WAF.loadComponent ( {											
		id: 	$comp.id+'_newAssesorComponent', 											
		path: 	'/CAPCIS.waPage/referralNewAssessors.waComponent'});
	};// @lock













































//MAIN REFERRAL TAB BUTTON CLICKS

	courtJurisdictionButton.click = function courtJurisdictionButton_click (event)// @startlock
	{// @endlock
		changeWindow("CourtJursidictionContainer","CourtJursidictionComponent");
		var searchCrit = $$(getHtmlId('searchField')).getValue();
		var searchType = $$(getHtmlId('searchOptionsBox')).getValue();
		
		
		/*
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id+'_CourtJursidictionComponent', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/referralCourtJurisdictions.waComponent',		
		userData: 	{searchCrit: searchCrit, searchType: searchType},					//data that you want to send to the webcomponent
		onSuccess: function () {}	
		});
		*/
		//var test = $$(getHtmlId("CourtJursidictionContainer"));
		//test.domNode.style.visibility = "visible";
		//$$(getHtmlId("CourtJursidictionContainer")).domNode.style.visibility = "visible";
		//$$(getHtmlId("CourtJursidictionContainer")).domNode.style.zIndex = "10";
		//$$(getHtmlId(oldRefVis)).domNode.style.visibility = "hidden";
		//$$(getHtmlId(oldRefVis)).domNode.style.zIndex = "0";
		//oldRefVis = id;
		
	};// @lock

	probationJurisdictionButton.click = function probationJurisdictionButton_click (event)// @startlock
	{// @endlock
		changeWindow("ProbationJursidictionContainer","ProbationJursidictionComponent");
		var searchCrit = $$(getHtmlId('searchField')).getValue();
		var searchType = $$(getHtmlId('searchOptionsBox')).getValue();
		
		/*
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id+'_ProbationJursidictionComponent', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/referralProbationJurisdictions.waComponent',
		userData: 	{searchCrit: searchCrit, searchType: searchType},			//data that you want to send to the webcomponent
		onSuccess: function () {}
		});
		*/
		
		
		
	};// @lock

	probationOfficerButton.click = function probationOfficerButton_click (event)// @startlock
	{// @endlock
		changeWindow("ProbationOfficerContainer","ProbationOfficerComponent");
		var searchCrit = $$(getHtmlId('searchField')).getValue();
		var searchType = $$(getHtmlId('searchOptionsBox')).getValue();
		
		var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:85}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						var tempCity = result[0];
						result[0] = {
	    					JurisdictionName: "None"
						};
						result[result.length] = tempCity;
		
						poJurisdiction = result;
						sources.poJurisdiction.sync();
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
		});
		
		/*
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id+'_ProbationOfficerComponent', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/referralProbationOfficers.waComponent',	
		userData: 	{searchCrit: searchCrit, searchType: searchType},				//data that you want to send to the webcomponent
		onSuccess: function () {}
		});
		*/
	};// @lock

	prosecutorsButton.click = function prosecutorsButton_click (event)// @startlock
	{// @endlock
		changeWindow("ProsecutorContainer","ProsecutorComponent");
		var searchCrit = $$(getHtmlId('searchField')).getValue();
		var searchType = $$(getHtmlId('searchOptionsBox')).getValue();
		
		
		/* WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id+'_ProsecutorComponent', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/referralProsecutors.waComponent',
		userData: 	{searchCrit: searchCrit, searchType: searchType},				//data that you want to send to the webcomponent
		onSuccess: function () {}
		});
		*/
	};// @lock

	otherButton.click = function otherButton_click (event)// @startlock
	{// @endlock
		changeWindow("OtherMonitorContainer","OtherMonitorComponent");
		var searchCrit = $$(getHtmlId('searchField')).getValue();
		var searchType = $$(getHtmlId('searchOptionsBox')).getValue();
		
		
		/* WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id+'_OtherMonitorComponent', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/referralOtherMonitors.waComponent',
		userData: 	{searchCrit: searchCrit, searchType: searchType},				//data that you want to send to the webcomponent
		onSuccess: function () {}
		});
		*/
	};// @lock

	judgesButton.click = function judgesButton_click (event)// @startlock
	{// @endlock
		changeWindow("JudgeContainer","JudgeComponent");
		var searchCrit = $$(getHtmlId('searchField')).getValue();
		var searchType = $$(getHtmlId('searchOptionsBox')).getValue();
		
		
		/* WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id+'_JudgeComponent', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/referralJudges.waComponent',
		userData: 	{searchCrit: searchCrit, searchType: searchType},			//data that you want to send to the webcomponent
		onSuccess: function () {}
		});
		*/
	};// @lock

	dhsButton.click = function dhsButton_click (event)// @startlock
	{// @endlock
		changeWindow("DHSOfficerContainer","DHSOfficerComponent");		
		var searchCrit = $$(getHtmlId('searchField')).getValue();
		var searchType = $$(getHtmlId('searchOptionsBox')).getValue();
		
		
		/* WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id+'_DHSOfficerComponent', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/referralDHSOfficers.waComponent',
		userData: 	{searchCrit: searchCrit, searchType: searchType},					//designate the webcomponent to load
		onSuccess: function () {}							//data that you want to send to the webcomponent
		});
		*/
		
	};// @lock

	assessorButton.click = function assessorButton_click (event)// @startlock
	{// @endlock
		changeWindow("AssessorContainer","AssessorComponent");
		var searchCrit = $$(getHtmlId('searchField')).getValue();
		var searchType = $$(getHtmlId('searchOptionsBox')).getValue();
		
	};// @lock
	
	attorneyButton.click = function attorneyButton_click (event)// @startlock
	{// @endlock
		
		changeWindow("AttorneyContainer","AttorneyComponent");
		var searchCrit = $$(getHtmlId('searchField')).getValue();
		var searchType = $$(getHtmlId('searchOptionsBox')).getValue();
		
		
		
	};// @lock
	
	
	
	
	
	
	
	
	
	
	SearchReferralButton.click = function SearchReferralButton_click (event)// @startlock
	{// @endlock
		
		getTotals();
		refreshData();

	};// @lock

	

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_AssessorMainContainer", "click", AssessorMainContainer.click, "WAF");
	WAF.addListener(this.id + "_loadCourtJurisdictionCorresp", "click", loadCourtJurisdictionCorresp.click, "WAF");
	WAF.addListener(this.id + "_loadProbationJurisdictionCorresp", "click", loadProbationJurisdictionCorresp.click, "WAF");
	WAF.addListener(this.id + "_loadProbationCorrespondence", "click", loadProbationCorrespondence.click, "WAF");
	WAF.addListener(this.id + "_loadProsecutorCorrespondence", "click", loadProsecutorCorrespondence.click, "WAF");
	WAF.addListener(this.id + "_loadOtherCorrespondence", "click", loadOtherCorrespondence.click, "WAF");
	WAF.addListener(this.id + "_loadJudgesCorrespondence", "click", loadJudgesCorrespondence.click, "WAF");
	WAF.addListener(this.id + "_loadDHSOfficerCorrespondence", "click", loadDHSOfficerCorrespondence.click, "WAF");
	WAF.addListener(this.id + "_loadAssessorCorrespondence", "click", loadAssessorCorrespondence.click, "WAF");
	WAF.addListener(this.id + "_loadBakAttorneyVersions", "click", loadBakAttorneyVersions.click, "WAF");
	WAF.addListener(this.id + "_otherMonitorFullList", "onRowClick", otherMonitorFullList.onRowClick, "WAF");
	WAF.addListener(this.id + "_courtJurisdictionFullList", "onRowClick", courtJurisdictionFullList.onRowClick, "WAF");
	WAF.addListener(this.id + "_probationJurisdictionFullList", "onRowClick", probationJurisdictionFullList.onRowClick, "WAF");
	WAF.addListener(this.id + "_probationOfficerFullList", "onRowClick", probationOfficerFullList.onRowClick, "WAF");
	WAF.addListener(this.id + "_prosecutorFullList", "onRowClick", prosecutorFullList.onRowClick, "WAF");
	WAF.addListener(this.id + "_judgeFullList", "onRowClick", judgeFullList.onRowClick, "WAF");
	WAF.addListener(this.id + "_dhsOfficerFullList", "onRowClick", dhsOfficerFullList.onRowClick, "WAF");
	WAF.addListener(this.id + "_attorneyFullList", "onRowClick", attorneyFullList.onRowClick, "WAF");
	WAF.addListener(this.id + "_assessorCityGrid", "onRowClick", assessorCityGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_assessorCityButton", "click", assessorCityButton.click, "WAF");
	WAF.addListener(this.id + "_assessorCityTextbox", "keyup", assessorCityTextbox.keyup, "WAF");
	WAF.addListener(this.id + "_assessorCityTextbox", "blur", assessorCityTextbox.blur, "WAF");
	WAF.addListener(this.id + "_loadBakAssessorVersions", "click", loadBakAssessorVersions.click, "WAF");
	WAF.addListener(this.id + "_closeAssesorCurrentButton", "click", closeAssesorCurrentButton.click, "WAF");
	WAF.addListener(this.id + "_submitAssessorCurrentInformation", "click", submitAssessorCurrentInformation.click, "WAF");
	WAF.addListener(this.id + "_courtJurisdictionCityGrid", "onRowClick", courtJurisdictionCityGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_courtJurisdictionCityButton", "click", courtJurisdictionCityButton.click, "WAF");
	WAF.addListener(this.id + "_courtJurisdictionCityTextbox", "keyup", courtJurisdictionCityTextbox.keyup, "WAF");
	WAF.addListener(this.id + "_courtJurisdictionCityTextbox", "blur", courtJurisdictionCityTextbox.blur, "WAF");
	WAF.addListener(this.id + "_loadBAKCourtJurisdictionVersions", "click", loadBAKCourtJurisdictionVersions.click, "WAF");
	WAF.addListener(this.id + "_button23", "click", button23.click, "WAF");
	WAF.addListener(this.id + "_submitButton", "click", submitButton.click, "WAF");
	WAF.addListener(this.id + "_dataGrid6", "onRowClick", dataGrid6.onRowClick, "WAF");
	WAF.addListener(this.id + "_probationJurisdictionCityGrid", "onRowClick", probationJurisdictionCityGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_probationJurisdictionCityButton", "click", probationJurisdictionCityButton.click, "WAF");
	WAF.addListener(this.id + "_probationJurisdictionCityTextbox", "keyup", probationJurisdictionCityTextbox.keyup, "WAF");
	WAF.addListener(this.id + "_probationJurisdictionCityTextbox", "blur", probationJurisdictionCityTextbox.blur, "WAF");
	WAF.addListener(this.id + "_loadBAKProbationJurisdictionVersions", "click", loadBAKProbationJurisdictionVersions.click, "WAF");
	WAF.addListener(this.id + "_button5", "click", button5.click, "WAF");
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	WAF.addListener(this.id + "_dataGrid1", "onRowClick", dataGrid1.onRowClick, "WAF");
	WAF.addListener(this.id + "_button4", "click", button4.click, "WAF");
	WAF.addListener(this.id + "_probationOfficerCityGrid", "onRowClick", probationOfficerCityGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_probationOfficerCityTextbox", "keyup", probationOfficerCityTextbox.keyup, "WAF");
	WAF.addListener(this.id + "_probationOfficerCityTextbox", "blur", probationOfficerCityTextbox.blur, "WAF");
	WAF.addListener(this.id + "_probationOfficerCityButton", "click", probationOfficerCityButton.click, "WAF");
	WAF.addListener(this.id + "_loadBAKProbationOfficers", "click", loadBAKProbationOfficers.click, "WAF");
	WAF.addListener(this.id + "_button33", "click", button33.click, "WAF");
	WAF.addListener(this.id + "_dataGrid11", "onRowClick", dataGrid11.onRowClick, "WAF");
	WAF.addListener(this.id + "_textField73", "keyup", textField73.keyup, "WAF");
	WAF.addListener(this.id + "_textField73", "blur", textField73.blur, "WAF");
	WAF.addListener(this.id + "_button32", "click", button32.click, "WAF");
	WAF.addListener(this.id + "_dataGrid17", "onRowClick", dataGrid17.onRowClick, "WAF");
	WAF.addListener(this.id + "_prosecutorCityGrid", "onRowClick", prosecutorCityGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_prosecutorCityTextbox", "keyup", prosecutorCityTextbox.keyup, "WAF");
	WAF.addListener(this.id + "_prosecutorCityTextbox", "blur", prosecutorCityTextbox.blur, "WAF");
	WAF.addListener(this.id + "_prosecutorCityButton", "click", prosecutorCityButton.click, "WAF");
	WAF.addListener(this.id + "_loadBAKProsecutors", "click", loadBAKProsecutors.click, "WAF");
	WAF.addListener(this.id + "_button26", "click", button26.click, "WAF");
	WAF.addListener(this.id + "_button25", "click", button25.click, "WAF");
	WAF.addListener(this.id + "_dataGrid9", "onRowClick", dataGrid9.onRowClick, "WAF");
	WAF.addListener(this.id + "_dataGrid7", "onRowClick", dataGrid7.onRowClick, "WAF");
	WAF.addListener(this.id + "_otherMonitorCityButton", "click", otherMonitorCityButton.click, "WAF");
	WAF.addListener(this.id + "_otherMonitorCityTextbox", "keyup", otherMonitorCityTextbox.keyup, "WAF");
	WAF.addListener(this.id + "_otherMonitorCityTextbox", "blur", otherMonitorCityTextbox.blur, "WAF");
	WAF.addListener(this.id + "_loadBAKOtherMonitors", "click", loadBAKOtherMonitors.click, "WAF");
	WAF.addListener(this.id + "_button21", "click", button21.click, "WAF");
	WAF.addListener(this.id + "_button19", "click", button19.click, "WAF");
	WAF.addListener(this.id + "_otherMonitorCityGrid", "onRowClick", otherMonitorCityGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_loadBakJudgesVersions", "click", loadBakJudgesVersions.click, "WAF");
	WAF.addListener(this.id + "_dataGrid14", "onRowClick", dataGrid14.onRowClick, "WAF");
	WAF.addListener(this.id + "_button17", "click", button17.click, "WAF");
	WAF.addListener(this.id + "_textField49", "keyup", textField49.keyup, "WAF");
	WAF.addListener(this.id + "_textField49", "blur", textField49.blur, "WAF");
	WAF.addListener(this.id + "_judgesCityGrid", "onRowClick", judgesCityGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_judgesCityButton", "click", judgesCityButton.click, "WAF");
	WAF.addListener(this.id + "_judgesCityTextbox", "keyup", judgesCityTextbox.keyup, "WAF");
	WAF.addListener(this.id + "_judgesCityTextbox", "blur", judgesCityTextbox.blur, "WAF");
	WAF.addListener(this.id + "_button15", "click", button15.click, "WAF");
	WAF.addListener(this.id + "_button13", "click", button13.click, "WAF");
	WAF.addListener(this.id + "_dataGrid5", "onRowClick", dataGrid5.onRowClick, "WAF");
	WAF.addListener(this.id + "_dhsCityGrid", "onRowClick", dhsCityGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_dhsCityButton", "click", dhsCityButton.click, "WAF");
	WAF.addListener(this.id + "_dhsCityTextbox", "keyup", dhsCityTextbox.keyup, "WAF");
	WAF.addListener(this.id + "_dhsCityTextbox", "blur", dhsCityTextbox.blur, "WAF");
	WAF.addListener(this.id + "_loadBakDHSOfficerVersions", "click", loadBakDHSOfficerVersions.click, "WAF");
	WAF.addListener(this.id + "_button3", "click", button3.click, "WAF");
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	WAF.addListener(this.id + "_dataGrid8", "onRowClick", dataGrid8.onRowClick, "WAF");
	WAF.addListener(this.id + "_attorneyCityGrid", "onRowClick", attorneyCityGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_dataGrid2", "onRowClick", dataGrid2.onRowClick, "WAF");
	WAF.addListener(this.id + "_button11", "click", button11.click, "WAF");
	WAF.addListener(this.id + "_textField3", "keyup", textField3.keyup, "WAF");
	WAF.addListener(this.id + "_textField3", "blur", textField3.blur, "WAF");
	WAF.addListener(this.id + "_attorneyCityButton", "click", attorneyCityButton.click, "WAF");
	WAF.addListener(this.id + "_attorneyCityTextbox", "keyup", attorneyCityTextbox.keyup, "WAF");
	WAF.addListener(this.id + "_attorneyCityTextbox", "blur", attorneyCityTextbox.blur, "WAF");
	WAF.addListener(this.id + "_loadAttorneyCorrespondence", "click", loadAttorneyCorrespondence.click, "WAF");
	WAF.addListener(this.id + "_button43", "click", button43.click, "WAF");
	WAF.addListener(this.id + "_button37", "click", button37.click, "WAF");
	WAF.addListener(this.id + "_button36", "click", button36.click, "WAF");
	WAF.addListener(this.id + "_assessorFullList", "onRowClick", assessorFullList.onRowClick, "WAF");
	WAF.addListener(this.id + "_attorneyDataGird", "onRowClick", attorneyDataGird.onRowClick, "WAF");
	WAF.addListener(this.id + "_newProbJ", "click", newProbJ.click, "WAF");
	WAF.addListener(this.id + "_newCourtJ", "click", newCourtJ.click, "WAF");
	WAF.addListener(this.id + "_newOtherM", "click", newOtherM.click, "WAF");
	WAF.addListener(this.id + "_newPros", "click", newPros.click, "WAF");
	WAF.addListener(this.id + "_newPOfficer", "click", newPOfficer.click, "WAF");
	WAF.addListener(this.id + "_newJudge", "click", newJudge.click, "WAF");
	WAF.addListener(this.id + "_newDHSO", "click", newDHSO.click, "WAF");
	WAF.addListener(this.id + "_newAtt", "click", newAtt.click, "WAF");
	WAF.addListener(this.id + "_newAss", "click", newAss.click, "WAF");
	WAF.addListener(this.id + "_courtJurisdictionButton", "click", courtJurisdictionButton.click, "WAF");
	WAF.addListener(this.id + "_probationJurisdictionButton", "click", probationJurisdictionButton.click, "WAF");
	WAF.addListener(this.id + "_probationOfficerButton", "click", probationOfficerButton.click, "WAF");
	WAF.addListener(this.id + "_prosecutorsButton", "click", prosecutorsButton.click, "WAF");
	WAF.addListener(this.id + "_otherButton", "click", otherButton.click, "WAF");
	WAF.addListener(this.id + "_judgesButton", "click", judgesButton.click, "WAF");
	WAF.addListener(this.id + "_dhsButton", "click", dhsButton.click, "WAF");
	WAF.addListener(this.id + "_assessorButton", "click", assessorButton.click, "WAF");
	WAF.addListener(this.id + "_SearchReferralButton", "click", SearchReferralButton.click, "WAF");
	WAF.addListener(this.id + "_attorneyButton", "click", attorneyButton.click, "WAF");
	// @endregion// @endlock
/*
	};// @lock
*/
	function getTotals()
	{
		var searchCrit = $$(getHtmlId('searchField')).getValue();
		var searchType = $$(getHtmlId('searchOptionsBox')).getValue();
		var searchBool;
		if(searchType == 'Inactive')
		{
			searchBool = true;
		}
		else
		{
			searchBool = false;
		}
			
		
		if(searchType == 'All')
		{
			
			var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:86,data1:searchCrit}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 		rpcDSelects.getReferralCountAsync({
		 			'onSuccess': function(result){
						totalSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject5]
				});
		}
		else
		{
			var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:87,data1:searchCrit,data2:searchBool}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 		rpcDSelects.getReferralCountAsync({
		 			'onSuccess': function(result){
						totalSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject5]
				});
		}
	}
	
	function refreshData()
	{
			
		var searchCrit = $$(getHtmlId('searchField')).getValue();
		var searchType = $$(getHtmlId('searchOptionsBox')).getValue();
		
		if (searchCrit == "" && searchType == 'Active')
        {
            var myObject = {
                token: userConfigObj.secToken,
                id: userConfigObj.userID,
                major: 3,
                minor: 0,
                data1: false
            }; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
            rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				
						assessorSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:11,data1:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 	rpcDSelects.getSelectAsync({
		 		'onSuccess': function(result){
					attorneySuccess(result);
				},
				'onError': function(error){
					console.log(error);
				},
				'params': [myObject]
			});
			var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:20,data1:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						courtJurisdictionSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:29,data1:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						dhsSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:38,data1:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						judgeSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:47,data1:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						otherMonitorSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:56,data1:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						probationJurisdictionSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:65,data1:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						probationOfficerSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:74,data1:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						prosecutorSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
        }
        else if (searchCrit == '' && searchType == 'Inactive')
        {
            var myObject = {
                token: userConfigObj.secToken,
                id: userConfigObj.userID,
                major: 3,
                minor: 0,
                data1: true
            }; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
            
            rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						assessorSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:userConfigObj.secToken, 
				id:userConfigObj.userID,
				major:3,
				minor:11,
				data1:true}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 	rpcDSelects.getSelectAsync({
		 		'onSuccess': function(result){
					attorneySuccess(result);
				},
				'onError': function(error){
					console.log(error);
				},
				'params': [myObject]
			});
			var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:20,data1:true}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						courtJurisdictionSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:29,data1:true}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						dhsSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:38,data1:true}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						judgeSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:47,data1:true}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						otherMonitorSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:56,data1:true}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						probationJurisdictionSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:65,data1:true}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						probationOfficerSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:74,data1:true}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						prosecutorSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
        }
        else if (searchCrit == '' && searchType == 'All')
        {
            var myObject = {
                token: userConfigObj.secToken,
                id: userConfigObj.userID,
                major: 3,
                minor: 8
            }; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
            rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						assessorSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:12}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 	rpcDSelects.getSelectAsync({
		 		'onSuccess': function(result){
					attorneySuccess(result);
				},
				'onError': function(error){
					console.log(error);
				},
				'params': [myObject]
			});
			var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:21}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						courtJurisdictionSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:30}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						dhsSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:39}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						judgeSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:48}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						otherMonitorSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:57}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						probationJurisdictionSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:66}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						probationOfficerSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:75}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						prosecutorSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});	
        }
        else if (searchCrit != '' && searchType == 'Active')
        {
            var myObject = {
                token: userConfigObj.secToken,
                id: userConfigObj.userID,
                major: 3,
                minor: 10,
                data1: searchCrit,
                data2: false
            }; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
            rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						assessorSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:14, data1:searchCrit,data2:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						attorneySuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:23, data1:searchCrit,data2:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						courtJurisdictionSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:32, data1:searchCrit,data2:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						dhsSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:41, data1:searchCrit,data2:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						judgeSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:50, data1:searchCrit,data2:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						otherMonitorSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:59, data1:searchCrit,data2:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						probationJurisdictionSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:68, data1:searchCrit,data2:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						probationOfficerSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:77, data1:searchCrit,data2:false}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						prosecutorSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});	
        }
        else if (searchCrit != '' && searchType == 'Inactive')
        {
            var myObject = {
                token: userConfigObj.secToken,
                id: userConfigObj.userID,
                major: 3,
                minor: 10,
                data1: searchCrit,
                data2: true
            }; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
            rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						assessorSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:14, data1:searchCrit,data2:true}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						attorneySuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:23, data1:searchCrit,data2:true}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						courtJurisdictionSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:32, data1:searchCrit,data2:true}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						dhsSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:41, data1:searchCrit,data2:true}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						judgeSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:50, data1:searchCrit,data2:true}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						otherMonitorSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:59, data1:searchCrit,data2:true}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						probationJurisdictionSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:68, data1:searchCrit,data2:true}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						probationOfficerSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:77, data1:searchCrit,data2:true}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						prosecutorSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});	
        }
        else if (searchCrit != '' && searchType == 'All')
        {
            var myObject = {
                token: userConfigObj.secToken,
                id: userConfigObj.userID,
                major: 3,
                minor: 9,
                data1: searchCrit
            }; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
            rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						assessorSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:13, data1:searchCrit}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						attorneySuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:22, data1:searchCrit}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						courtJurisdictionSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
			});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:31, data1:searchCrit}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						dhsSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:40, data1:searchCrit}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						judgeSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:49, data1:searchCrit}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						otherMonitorSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:58, data1:searchCrit}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						probationJurisdictionSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:67, data1:searchCrit}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						probationOfficerSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
			var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:76, data1:searchCrit}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						prosecutorSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});	
		}
	
	}
	function changeWindow(containerid,componentid)
	{
		
		
		if (oldVisContainer != "")
		{
			myOldPage = document.getElementById(getHtmlId(oldVisContainer));
			//myOldPage.style.visibility = "hidden";
			myOldPage.style.display = "none";
			myOldPage.style.zIndex = "0";
		}
		
		var myPage = document.getElementById(getHtmlId(containerid));
		//myPage.style.visibility = "visible";
		myPage.style.display = "block";
		myPage.style.zIndex = "100";
		
		oldVisContainer = containerid;
		
		
	}
	function totalSuccess(result)
	{
		
		for(var x = 0 ; x < 9 ; x++) //9
		{
			if(result[x].source == 'assesor')
			{
				
				currentLabel= "Assessors" + '\n(' + result[x].total + ')';
				$$($comp.id+"_assessorButton").domNode.innerText = currentLabel;
				
			}
			else if(result[x].source == 'attorney')
			{
				
				currentLabel= "Attorneys" + '\n(' + result[x].total.toString() + ')';
				$$($comp.id+"_attorneyButton").domNode.innerText = currentLabel;
			}
			else if(result[x].source == 'court')
			{
				
				currentLabel= "Court Jurisdictions" + '\n(' + result[x].total.toString() + ')';
				$$($comp.id+"_courtJurisdictionButton").domNode.innerText = currentLabel;
			}
			else if(result[x].source == 'dhs')
			{
				
				currentLabel= "DHS Officers" + '\n(' + result[x].total.toString() + ')';
				$$($comp.id+"_dhsButton").domNode.innerText = currentLabel;
			}
			else if(result[x].source == 'judge')
			{
				
				currentLabel= "Judges" + '\n(' + result[x].total.toString() + ')';
				$$($comp.id+"_judgesButton").domNode.innerText = currentLabel;
			}
			else if(result[x].source == 'other')
			{
				
				currentLabel= "Other Monitors" + '\n(' + result[x].total.toString() + ')';
				var currentLabel = $$($comp.id+"_otherButton").domNode.innerText = currentLabel;
			}
			else if(result[x].source == 'pojurisdiction')
			{
				
				currentLabel= "Probation Jurisdictions" + '\n(' + result[x].total.toString() + ')';
				$$($comp.id+"_probationJurisdictionButton").domNode.innerText = currentLabel;
			}
			else if(result[x].source == 'po')
			{
				
				currentLabel= "Probation Officers" + '\n(' + result[x].total.toString() + ')';
				$$($comp.id+"_probationOfficerButton").domNode.innerText = currentLabel;
			}
			else if(result[x].source == 'prosecutor')
			{
				
				currentLabel= "Prosecutors" + '\n(' + result[x].total.toString() + ')';
				$$($comp.id+"_prosecutorsButton").domNode.innerText = currentLabel;
			}
			
		}

		
	}
		
	
	
	
	
	function assessorSuccess(result)
	{
		assessorList = result;
		sources.assessorList.sync();
	}
	
	function attorneySuccess(result)
	{
		attorneyList = result;
		sources.attorneyList.sync();
		
	}
	
	function courtJurisdictionSuccess(result)
	{
		courtJurisdictionList = result;
		sources.courtJurisdictionList.sync();
		
	}
	
	function dhsSuccess(result)
	{
		dhsList = result;
		sources.dhsList.sync();
		
	}
	
	function judgeSuccess(result)
	{
		judgeList = result;
		sources.judgeList.sync();
		
	}
	
	function otherMonitorSuccess(result)
	{
		otherMonitorList = result;
		sources.otherMonitorList.sync();
		
	}
	
	function probationJurisdictionSuccess(result)
	{
		probationJurisdictionList = result;
		sources.probationJurisdictionList.sync();
		
	}
	function probationJurisdictionError(event)
	{
		var errMessage;
		for (var x = 0;x < event.error.length;x++)
		{
			errMessage += (event.error[x].message + ",");
		}
		alert(errMessage);
	}
	function probationOfficerSuccess(result)
	{
		probationOfficerList = result;
		sources.probationOfficerList.sync();
		
	}
	
	function prosecutorSuccess(result)
	{
		
		prosecutorList = result;
		sources.prosecutorList.sync();
		
		
	}
	
	
	
	
}
}// @startlock
return constructor;
})();// @endlock
