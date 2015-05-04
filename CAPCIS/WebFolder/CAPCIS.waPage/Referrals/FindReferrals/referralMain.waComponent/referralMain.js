
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
		
		newAssessor = document.getElementById(getHtmlId('newAssesorComponent'));
		newAttorney = document.getElementById(getHtmlId('newAttorneyComponent'));
		newDHS = document.getElementById(getHtmlId('newDHSOfficerComponent'));
		newJudges = document.getElementById(getHtmlId('newJudgeComponent'));
		newOther = document.getElementById(getHtmlId('newOtherMoniterComponent'));
		newProsecutor = document.getElementById(getHtmlId('newProsecutorsComponent'));
		newPO = document.getElementById(getHtmlId('newPOComponent'));
		newPJ = document.getElementById(getHtmlId('newProbationJurisdictionComponent'));
		newCJ = document.getElementById(getHtmlId('newCourtJurisdictionComponent'));
		
		
		
		
		
		
		
		var myObject3 = {token: userConfigObj.secToken,id: userConfigObj.userID,major: 3,minor: 3};
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
		
		var myObject4 = {token: userConfigObj.secToken, id: userConfigObj.userID,major: 3,minor: 4};
		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						var tempReporting = result[0];
						result[0] = {ReportingMethod: "None"};
						result[result.length] = tempReporting;
						assessorReporting = result;
						attorneyReporting = result;
						dhsReporting = result;
						judgesReporting = result;
						otherMonitorReporting = result;
						prosecutorReporting = result;
						probationOfficerReporting = result;
						courtJurisdictionsReporting = result;
						sources.assessorReporting.sync();
						sources.attorneyReporting.sync();
						sources.dhsReporting.sync();
						sources.judgesReporting.sync();
						sources.otherMonitorReporting.sync();
						sources.prosecutorReporting.sync();
						sources.probationOfficerReporting.sync();
						sources.courtJurisdictionsReporting.sync();
					},
					'onError': function(error){
						alert(error);
					},
					'params': [myObject4]
				});
	
		
		
		
		

	// @region namespaceDeclaration// @startlock
	var submitProbationOfficerInformation = {};	// @button
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
	var closeAssesorInfoButton = {};	// @button
	var submitAssessorCurrentInformation = {};	// @button
	var courtJurisdictionCityGrid = {};	// @dataGrid
	var courtJurisdictionCityButton = {};	// @button
	var courtJurisdictionCityTextbox = {};	// @textField
	var loadBAKCourtJurisdictionVersions = {};	// @button
	var closeCourtJurisdictionButton = {};	// @button
	var submitCourtJurisdictionInformation = {};	// @button
	var dataGrid6 = {};	// @dataGrid
	var probationJurisdictionCityGrid = {};	// @dataGrid
	var probationJurisdictionCityButton = {};	// @button
	var probationJurisdictionCityTextbox = {};	// @textField
	var loadBAKProbationJurisdictionVersions = {};	// @button
	var closeProbationJurisdictionButton = {};	// @button
	var submitProbationJurisdictionInformation = {};	// @button
	var dataGrid1 = {};	// @dataGrid
	var button4 = {};	// @button
	var probationOfficerCityGrid = {};	// @dataGrid
	var probationOfficerCityTextbox = {};	// @textField
	var probationOfficerCityButton = {};	// @button
	var loadBAKProbationOfficers = {};	// @button
	var closeProbationOfficerInformationButton = {};	// @button
	var dataGrid11 = {};	// @dataGrid
	var prosecutorJurisdictionTextbox = {};	// @textField
	var prosecutorJurisdictionButton = {};	// @button
	var prosecutorJurisdictionGrid = {};	// @dataGrid
	var prosecutorCityGrid = {};	// @dataGrid
	var prosecutorCityTextbox = {};	// @textField
	var prosecutorCityButton = {};	// @button
	var loadBAKProsecutors = {};	// @button
	var closeProsecutorInformationButton = {};	// @button
	var submitProsecutorInformation = {};	// @button
	var dataGrid9 = {};	// @dataGrid
	var dataGrid7 = {};	// @dataGrid
	var otherMonitorCityButton = {};	// @button
	var otherMonitorCityTextbox = {};	// @textField
	var loadBAKOtherMonitors = {};	// @button
	var closeOtherMonitorInformationButton = {};	// @button
	var submitOtherMonitorInformation = {};	// @button
	var otherMonitorCityGrid = {};	// @dataGrid
	var loadBakJudgesVersions = {};	// @button
	var judgeJurisdictionGrid = {};	// @dataGrid
	var judgeJurisdictionButton = {};	// @button
	var judgeJurisdictionTextbox = {};	// @textField
	var judgesCityGrid = {};	// @dataGrid
	var judgesCityButton = {};	// @button
	var judgesCityTextbox = {};	// @textField
	var closeJudgeInformationButton = {};	// @button
	var submitJudgeInformation = {};	// @button
	var dataGrid5 = {};	// @dataGrid
	var dhsCityGrid = {};	// @dataGrid
	var dhsCityButton = {};	// @button
	var dhsCityTextbox = {};	// @textField
	var loadBakDHSOfficerVersions = {};	// @button
	var closeDHSInformationButton = {};	// @button
	var submitDHSInformation = {};	// @button
	var dataGrid8 = {};	// @dataGrid
	var attorneyCityGrid = {};	// @dataGrid
	var dataGrid2 = {};	// @dataGrid
	var button11 = {};	// @button
	var textField3 = {};	// @textField
	var attorneyCityButton = {};	// @button
	var attorneyCityTextbox = {};	// @textField
	var loadAttorneyCorrespondence = {};	// @button
	var button43 = {};	// @button
	var closeAttorneyInfoButton = {};	// @button
	var submitAttorneyInformation = {};	// @button
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

	

	


	
	
	
	
	
	
//BAK VERSION SECTION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<	
	
	
	loadBakAssessorVersions.click = function loadBakAssessorVersions_click (event)
	{// @lock
			 
		var myWidget = document.getElementById($comp.id +"_AssessorMainContainer");
		myWidget.style.left = "150px";
		
		
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
    		id: 	$comp.id+'_component10', 											//designate the component to load into
			path: 	'/CAPCIS.waPage/Referrals/FindReferrals/Assessors/referralBAKAssessorsView.waComponent',				//designate the webcomponent to load
			userData: {mainContainer: $comp.id+'_AssessorMainContainer' }
		});
		
		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:5,data1:sources.assessorList.AssessorInformationID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	
	 	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				debugger;
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
		
		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:18,data1:sources.attorneyList.AttorneyInformationID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				
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
		
		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:36,data1:sources.dhsList.DhsInformationID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
		
		
		var myObject5 = {token:userConfigObj.secToken,id:userConfigObj.userID,major:3,minor:45,data1:sources.judgeList.JudgesID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
		
		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:54,data1:sources.otherMonitorList.OtherMonitorsID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
		
		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:81,data1:sources.prosecutorList.ProsecutorsID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
		
		var myObject5 = {token:userConfigObj.secToken,id:userConfigObj.userID,major:3,minor:72,data1:sources.probationOfficerList.POInformationID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
		
		var myObject5 = {token:userConfigObj.secToken,id:userConfigObj.userID,major:3,minor:63,data1:sources.probationJurisdictionList.POJurisdictionID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
		
		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:27,data1:sources.courtJurisdictionList.CourtJurisdictionID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
		 				
						attorneyCorespondance = result;
						sources.attorneyCorespondance.sync();
					},
					'onError': function(error){
						
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
		
		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:26,data1:sources.courtJurisdictionList.CourtJurisdictionID,data2:0};
		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){	
		 					 				
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
	
		refillCity();  //reset the city data for combobox grid display
			
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
			
			refillCity();

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
		refillCity();
		
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
			
			refillCity();

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
		refillCity();
		
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
			
			refillCity();

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
		refillCity();
		
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
			
			refillCity();

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
	
	
	
	
	
	
	
	judgeJurisdictionGrid.onRowClick = function judgeJurisdictionGrid_onRowClick (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('judgeJurisdictionGrid'));
		grid.style.display = 'none';
		
		var recValue = $$(getHtmlId('judgeJurisdictionGrid')).sourceAtt.getValue();
		$$(getHtmlId('judgeJurisdictionTextbox')).setValue(recValue);
	};// @lock

	judgeJurisdictionButton.click = function judgeJurisdictionButton_click (event)// @startlock
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

	judgeJurisdictionTextbox.keyup = function judgeJurisdictionTextbox_keyup (event)// @startlock
	{// @endlock
		if(event.keyCode ===13)
		{
			var currentInput = $$($comp.id+'_judgeJurisdictionTextbox').getValue();
			$$($comp.id+'_judgeJurisdictionTextbox').setValue(sources.jurisdiction.CourtJurisdiction);
			var grid = document.getElementById($comp.id+'_judgeJurisdictionGrid');
			grid.style.display = 'none';
		}
		
		else
		{
			
			jurisdiction=tempJurisdiction;
			sources.jurisdiction.sync();

			var grid = document.getElementById($comp.id+'_judgeJurisdictionGrid');
			grid.style.display = 'block';

			var currentInput = $$($comp.id+'_judgeJurisdictionTextbox').getValue();//textInput.value;
			sources.jurisdiction.query('CourtJurisdiction = :1 order by CourtJurisdiction', { params: [currentInput + "*"]});
		}
	};// @lock

	judgeJurisdictionTextbox.blur = function judgeJurisdictionTextbox_blur (event)// @startlock
	{// @endlock
		var currentInput = $$($comp.id+'_judgeJurisdictionTextbox').getValue();
			$$($comp.id+'_judgeJurisdictionTextbox').setValue(sources.city.CityListing);
			var grid = document.getElementById($comp.id+'_judgeJurisdictionGrid');
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
		refillCity();
		
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
			
			refillCity();

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
		refillCity();
		
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
			
			refillCity();

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

	
	
	
	
	
	
	prosecutorJurisdictionGrid.onRowClick = function prosecutorJurisdictionGrid_onRowClick (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('prosecutorJurisdictionGrid'));
		grid.style.display = 'none';
		
		var recValue = $$(getHtmlId('prosecutorJurisdictionGrid')).sourceAtt.getValue();
		$$(getHtmlId('prosecutorJurisdictionTextbox')).setValue(recValue);
	};// @lock
	
	prosecutorJurisdictionButton.click = function prosecutorJurisdictionButton_click (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('prosecutorJurisdictionGrid'));
		if(grid.style.display == 'none')
		{
			grid.style.display = 'block';
		}
		else
		{
			grid.style.display = 'none';
		}
	};// @lock
	
	prosecutorJurisdictionTextbox.keyup = function prosecutorJurisdictionTextbox_keyup (event)// @startlock
	{// @endlock
		if(event.keyCode ===13)
		{
			
			var currentInput = $$($comp.id+'_prosecutorJurisdictionTextbox').getValue();
			$$($comp.id+'_prosecutorJurisdictionTextbox').setValue(sources.jurisdiction.CourtJurisdiction);
			var grid = document.getElementById($comp.id+'_prosecutorJurisdictionGrid');
			grid.style.display = 'none';
		}
		
		else
		{
			
			jurisdiction=tempStore2;
			sources.jurisdiction.sync();

			var grid = document.getElementById($comp.id+'_prosecutorJurisdictionGrid');
			grid.style.display = 'block';

			var currentInput = $$($comp.id+'_prosecutorJurisdictionTextbox').getValue();//textInput.value;
			sources.jurisdiction.query('CourtJurisdiction = :1 order by CourtJurisdiction', { params: [currentInput + "*"]});
		}
	};// @lock

	prosecutorJurisdictionTextbox.blur = function prosecutorJurisdictionTextbox_blur (event)// @startlock
	{// @endlock
		var currentInput = $$($comp.id+'_prosecutorJurisdictionTextbox').getValue();
			$$($comp.id+'_prosecutorJurisdictionTextbox').setValue(sources.city.CityListing);
			var grid = document.getElementById($comp.id+'_prosecutorJurisdictionGrid');
			grid.style.display = 'none';
		
	};// @lock

	

	
	
	
	



    
	probationOfficerCityGrid.onRowClick = function probationOfficerCityGrid_onRowClick (event)// @startlock
	{// @endlock
		
		var grid = document.getElementById(getHtmlId('probationOfficerCityGrid'));
		grid.style.display = 'none';
		
		//var recValue = $$(getHtmlId('probationOfficerCityGrid')).sourceAtt.getValue();
		$$(getHtmlId('probationOfficerCityTextbox')).setValue(sources.poJurisdictionListGrid.JurisdictionName);
		$$(getHtmlId('probationOfficerJurisdictionID')).setValue(sources.poJurisdictionListGrid.POJurisdictionID);
		
		//sources.probationOfficerList.FK_pojurisdiction_POJurisdictionID = sources.poJurisdictionListGrid.POJurisdictionID
		
		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:62,data1:sources.poJurisdictionListGrid.POJurisdictionID};
		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){	
		 					 				
						poJurisdiction = result;
						sources.poJurisdiction.sync();
					},
					'onError': function(error){						
						console.log(error);
					},
					'params': [myObject5]
		});
	};// @lock
	
	probationOfficerCityButton.click = function probationOfficerCityButton_click (event)// @startlock
	{// @endlock
		//refillCity();
		
		refillPOJurisdictionGrid();
		
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
		if(event.keyCode === 13)
		{
			var currentInput = $$($comp.id+'_probationOfficerCityTextbox').getValue();
			$$($comp.id+'_probationOfficerCityTextbox').setValue(sources.poJurisdiction.JurisdictionName);
			var grid = document.getElementById($comp.id+'_probationOfficerCityGrid');
			grid.style.display = 'none';
		}
		
		else
		{
			refillPOJurisdictionGrid();
			//tempPOJurisdictionListGrid = tempPOJurisdictionListGrid;
			//sources.tempPOJurisdictionListGrid.sync();

			var grid = document.getElementById($comp.id+'_probationOfficerCityGrid');
			grid.style.display = 'block';

			var currentInput = $$($comp.id+'_probationOfficerCityTextbox').getValue();//textInput.value;
			sources.poJurisdictionListGrid.query('JurisdictionName = :1 order by JurisdictionName', { params: [currentInput + "*"]});
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
		refillCity();
		
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
		if(event.keyCode === 13)
		{
			var currentInput = $$($comp.id+'_probationJurisdictionCityTextbox').getValue();
			$$($comp.id+'_probationJurisdictionCityTextbox').setValue(sources.city.CityListing);
			var grid = document.getElementById($comp.id+'_probationJurisdictionCityGrid');
			grid.style.display = 'none';
		}
		
		else
		{
			
			refillCity();

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
		refillCity();
		
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
			
			refillCity();

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

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	












//SUBMIT REFERRAL DATA SECTION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


	submitAssessorCurrentInformation.click = function submitAssessorCurrentInformation_click (event)// @startlock
	{// @endlock
		
		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:83,data1:sources.assessorList.AssessorCity}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	
	 	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				
						city = result;
						if( city.length ===0)
						{
							var myObject7 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:18,data1:sources.assessorList.AssessorCity};
							rpcDInsert.setInsertAsync({
		 							'onSuccess': function(result){
						
									},
									'onError': function(error){
										console.log(error);
									},
									'params': [myObject7]
								});
						}
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject5]
				});
		debugger;
		var myObject7 = {
    		token: userConfigObj.secToken,
    		id: userConfigObj.userID,
    		major: 3,
    		minor: 0,
    		data1: sources.assessorList.AssessorName, //$$(getHtmlId("assessorNameField")).getValue(),
    		data2: sources.assessorList.AssesorPhone, //phone,
    		data3: sources.assessorList.AssessorEmail, //$$(getHtmlId("assesorEmailField")).getValue(),
    		data4: sources.assessorList.AssessorFax, //fax,
    		data5: sources.assessorList.AssessorAddress, //$$(getHtmlId("assesorAddressField")).getValue(),
    		data6: sources.assessorList.AssessorCity, //$$(getHtmlId("cityComboBox")).getValue(),
    		data7: sources.assessorList.AssessorState, //$$(getHtmlId("assesorStateField")).getValue(),
    		data8: sources.assessorList.AssessorZipCode, //$$(getHtmlId("assesorZipField")).getValue(),
    		data9: sources.assessorList.AssessorPhoneExt, //$$(getHtmlId("assesorExtField")).getValue(),
    		data10: sources.assessorList.AssessorMobilePhone, //mobile,
    		data11: sources.assessorList.AssessorNotes, //$$(getHtmlId("assesorNotesField")).getValue(),
    		data12: sources.assessorList.AssessorFullNameDisplay, //$$(getHtmlId("assessorFullNameField")).getValue(),
    		data13: sources.assessorList.AssPreferredReportingMethod, //$$(getHtmlId("reportingComboBox")).getValue(),
    		data14: sources.assessorList.AssessorInformationID, //currentID,
    		data15: sources.assessorList.InactiveAssessorInfo //$$(getHtmlId("assessorInactiveCheckBox")).getValue()
		}; 
		rpcDUpdate.setUpdateAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						
						console.log(error);
					},
					'params': [myObject7]
				});

		 var myObject = {token: userConfigObj.secToken,id: userConfigObj.userID, major: 3,minor: 0, data1: false}; 
            rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				
						assessorSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});	

		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:5,data1:sources.assessorList.AssessorInformationID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						bakAssessorInfo = result;
		 				sources.bakAssessorInfo.sync();
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject5]
				});
	 	
	};// @lock





	

	submitAttorneyInformation.click = function submitAttorneyInformation_click (event)// @startlock
	{// @endlock
		
		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:83,data1:sources.attorneyList.AttorneyCity}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	rpcDSelects.getSelectAsync({
	 				'onSuccess': function(result){
	 					city = result;
						if( city.length ===0)
						{
							var myObject7 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:18,data1:attorneyList.AttorneyCity};
							rpcDInsert.setInsertAsync({
		 							'onSuccess': function(result){
						
									},
									'onError': function(error){
										console.log(error);
									},
									'params': [myObject7]
								});
						}
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject5]
				});
		
		
		
		var myObject7 = 
		{
				token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:3,
				data1:sources.attorneyList.AttorneyName,
				data2:sources.attorneyList.AttorneyPhone,
				data3:sources.attorneyList.AttorneyEmail,
				data4:sources.attorneyList.AttorneyFax,
				data5:sources.attorneyList.AttorneyAddress,
				data6:sources.attorneyList.AttorneyCity,
				data7:sources.attorneyList.AttorneyState,
				data8:sources.attorneyList.AttorneyZipCode,
				data9:sources.attorneyList.AttorneyPhoneExt,
				data10:sources.attorneyList.AttorneyAdditionalPhone,
				data11:sources.attorneyList.AttorneyNotes,
				data12:sources.attorneyList.AttorneyFullNameDisplay,
				data13:sources.attorneyList.AttPreferredReportingMethod,
				data14:sources.attorneyList.AttorneyInformationID,
				data15:sources.attorneyList.InactiveAttorneyInfo,
				data16:sources.attorneyList.PublicDefender,
				data17:sources.attorneyList.AttorneyStaffInfo
		}; 
	 		
	 	rpcDUpdate.setUpdateAsync({
		 		'onSuccess': function(result){
						debugger;
				},
				'onError': function(error){
					debugger;
					console.log(error);
				},
				'params': [myObject7]
		});

		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:18,data1:sources.attorneyList.AttorneyInformationID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						bakAttorneyInfo = result;
						sources.bakAttorneyInfo.sync();
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject5]
				});
	};// @lock









	submitDHSInformation.click = function submitDHSInformation_click (event)// @startlock
	{// @endlock
		
		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:83,data1:sources.dhsList.DhsCity}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						city = result;
						if( city.length ===0)
						{
							var myObject7 = {token:userConfigObj.secToken,id:userConfigObj.userID,major:3,minor:18,data1:sources.dhsList.DhsCity};
							rpcDInsert.setInsertAsync({
		 							'onSuccess': function(result){
						
									},
									'onError': function(error){
										console.log(error);
									},
									'params': [myObject7]
								});
						}
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject5]
				});
		
		
		
			
		var myObject7 = 
		{
				token:userConfigObj.secToken,id:userConfigObj.userID,major:3,minor:7,
				data1:sources.dhsList.DhsName,
				data2:sources.dhsList.DhsPhone,
				data3:sources.dhsList.DhsEmail,
				data4:sources.dhsList.DhsFax,
				data5:sources.dhsList.DhsAddress,
				data6:sources.dhsList.DhsCity,
				data7:sources.dhsList.DhsState,
				data8:sources.dhsList.DhsZipCode,
				data9:sources.dhsList.DhsPhoneExt,
				data10:sources.dhsList.DhsAlternatPhone,
				data11:sources.dhsList.DhsNotes,
				data12:sources.dhsList.DhsFullNameDisplay,
				data13:sources.dhsList.DhsPreferredReportingMethod,
				data14:sources.dhsList.DhsInformationID,
				data15:sources.dhsList.InactiveDhsInfo
		}; 
	 	rpcDUpdate.setUpdateAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject7]
		});
			
		var myObject5 = {token:userConfigObj.secToken,id:userConfigObj.userID,major:3,minor:36,data1:DhsInformationID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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









	submitJudgeInformation.click = function submitJudgeInformation_click (event)// @startlock
	{// @endlock
		
		var myObject5 = {token:userConfigObj.secToken,id:userConfigObj.userID,major:3,minor:83,data1:sources.judgeList.JudgeCity}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						city = result;
						if( city.length ===0)
						{
							var myObject7 = {token:userConfigObj.secToken,id:userConfigObj.userID,major:3,minor:18,data1:sources.judgeList.JudgeCity};
							rpcDInsert.setInsertAsync({
		 							'onSuccess': function(result){
						
									},
									'onError': function(error){
										console.log(error);
									},
									'params': [myObject7]
								});
						}
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject5]
				});
		
		var myObject7 = 
		{
				token:userConfigObj.secToken,id:userConfigObj.userID,major:3,minor:9,
				data1:sources.judgeList.Judge,
				data2:sources.judgeList.JudgeOfficePhone,
				data3:sources.judgeList.JudgeEmail,
				data4:sources.judgeList.JudgeFax,
				data5:sources.judgeList.JudgeAddress,
				data6:sources.judgeList.JudgeCity,
				data7:sources.judgeList.JudgeState,
				data8:sources.judgeList.JudgeZipCode,
				data9:sources.judgeList.JudgeOfficePhoneExt,
				data10:sources.judgeList.JudgeMobilePhone,
				data11:sources.judgeList.JudgeNotes,
				data12:sources.judgeList.JudgeFullNameDisplay,
				data13:sources.judgeList.JPreferredReportingMethod,
				data14:sources.judgeList.JudgesID,
				data15:sources.judgeList.InactiveJudge,
				data16:sources.judgeList.JudgeJurisdiction
		}; 
	 	rpcDUpdate.setUpdateAsync({
		 		'onSuccess': function(result){
						
				},
				'onError': function(error){
					console.log(error);
				},
				'params': [myObject7]
		});
				
	 		
	 		
		var myObject5 = {token:userConfigObj.secToken,id:userConfigObj.userID,major:3,minor:45,data1:sources.judgeList.JudgesID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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








	submitOtherMonitorInformation.click = function submitOtherMonitorInformation_click (event)// @startlock
	{// @endlock
		
		var myObject5 = {token:userConfigObj.secToken,id:userConfigObj.userID,major:3,minor:83,data1:sources.otherMonitorList.OtherMonitorsCity}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						city = result;
						if( city.length === 0)
						{
							var myObject7 = {token:userConfigObj.secToken,id:userConfigObj.userID,major:3,minor:18,data1:sources.otherMonitorList.OtherMonitorsCity};
							rpcDInsert.setInsertAsync({
		 							'onSuccess': function(result){
						
									},
									'onError': function(error){
										console.log(error);
									},
									'params': [myObject7]
								});
						}
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject5]
		});
		
		
		var myObject7 = 
		{
				
				token:userConfigObj.secToken,id:userConfigObj.userID,major:3,minor: 11,
				data1:sources.otherMonitorList.OtherMonitors,
				data2:sources.otherMonitorList.OtherMonitorsOfficePhone,
				data3:sources.otherMonitorList.OtherMonitorsEmail,
				data4:sources.otherMonitorList.OtherMonitorsFax,
				data5:sources.otherMonitorList.OtherMonitorsAddress,
				data6:sources.otherMonitorList.OtherMonitorsCity,
				data7:sources.otherMonitorList.OtherMonitorsState,
				data8:sources.otherMonitorList.OtherMonitorsZipCode,
				data9:sources.otherMonitorList.OtherMonitorsOfficePhoneExt,
				data10:sources.otherMonitorList.OtherMonitorsMobilePhone,
				data11:sources.otherMonitorList.OtherMonitorsNotes,
				data12:sources.otherMonitorList.OtherMonitorsFullNameDisplay,
				data13:sources.otherMonitorList.OMPreferredReportingMethod,
				data14:sources.otherMonitorList.OtherMonitorsID,
				data15:sources.otherMonitorList.InactiveOtherMonitors
		};
	 	rpcDUpdate.setUpdateAsync({
		 		'onSuccess': function(result){
						
				},
				'onError': function(error){
					console.log(error);
				},
				'params': [myObject7]
			});
				
	 		
				
				
	 		
	 		
		var myObject5 = {token:userConfigObj.secToken,id:userConfigObj.userID,major:3,minor:54,data1:sources.otherMonitorList.OtherMonitorsID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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









	submitProsecutorInformation.click = function submitProsecutorInformation_click (event)// @startlock
	{// @endlock
		
		var myObject5 = {token:userConfigObj.secToken,id:userConfigObj.userID,major:3,minor:83,data1:sources.prosecutorList.ProsecutorCity}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						city = result;
						if( city.length === 0)
						{
							var myObject7 = {token:userConfigObj.secToken,id:userConfigObj.userID,major:3,minor:18,data1:sources.prosecutorList.ProsecutorCity};
							rpcDInsert.setInsertAsync({
		 							'onSuccess': function(result){
						
									},
									'onError': function(error){
										console.log(error);
									},
									'params': [myObject7]
								});
						}
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject5]
		});
		
		
		var myObject7 = 
			{
				token:userConfigObj.secToken,id:userConfigObj.userID,major:3,minor: 17,
				data1:sources.prosecutorList.Prosecutor,
				data2:sources.prosecutorList.ProsecutorOfficePhone,
				data3:sources.prosecutorList.ProsecutorEmail,
				data4:sources.prosecutorList.ProsecutorFax,
				data5:sources.prosecutorList.ProsecutorAddress,
				data6:sources.prosecutorList.ProsecutorCity,
				data7:sources.prosecutorList.ProsecutorState,
				data8:sources.prosecutorList.ProsecutorZipCode,
				data9:sources.prosecutorList.ProsecutorOfficePhoneExt,
				data10:sources.prosecutorList.ProsecutorMobilePhone,
				data11:sources.prosecutorList.ProsecutorNotes,
				data12:sources.prosecutorList.ProsecutorFullNameDisplay,
				data13:sources.prosecutorList.ProsPreferredReportingMethod,
				data14:sources.prosecutorList.ProsecutorsID,
				data15:sources.prosecutorList.InactiveProsecutor,
				data16:sources.prosecutorList.ProsecutorJurisdiction
			}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 		rpcDUpdate.setUpdateAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject7]
				});
				
	 		
		var myObject5 = {token:userConfigObj.secToken,id:userConfigObj.userID,major:3,minor:81,data1:sources.prosecutorList.ProsecutorsID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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









	submitProbationOfficerInformation.click = function submitProbationOfficerInformation_click (event)// @startlock
	{// @endlock
		
		var myObject7 = 
			{
				
				token:userConfigObj.secToken ,id: userConfigObj.userID,major:3,minor: 15,
				data1:sources.probationOfficerList.POName,
				data2:sources.probationOfficerList.POPhone,
				data3:sources.probationOfficerList.POEmail,
				data4:sources.probationOfficerList.POFax,
				data8:sources.probationOfficerList.FK_pojurisdiction_POJurisdictionID,
				data9:sources.probationOfficerList.POPhoneExtension,
				data10:sources.probationOfficerList.POMobilePhone,
				data11:sources.probationOfficerList.PONotes,
				data12:sources.probationOfficerList.POFullNameDisplay,
				data13:sources.probationOfficerList.POPreferredReportingMethod,
				data14:sources.probationOfficerList.POInformationID,
				data15:sources.probationOfficerList.InactivePO
			}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 		rpcDUpdate.setUpdateAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject7]
				});
				
	 		
	 		
		var myObject5 = {token:userConfigObj.secToken,id:userConfigObj.userID,major:3,minor:72,data1:sources.probationOfficerList.POInformationID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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








	submitProbationJurisdictionInformation.click = function submitProbationJurisdictionInformation_click (event)// @startlock
	{// @endlock
		
		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:83,data1:sources.probationJurisdictionList.JurisdictionCity}; 
	 	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				city = result;
						if( city.length ===0)
						{
							var myObject7 = {token:userConfigObj.secToken,id:userConfigObj.userID,major:3,minor:18,data1:sources.probationJurisdictionList.JurisdictionCity};
							rpcDInsert.setInsertAsync({
		 							'onSuccess': function(result){
						
									},
									'onError': function(error){
										console.log(error);
									},
									'params': [myObject7]
								});
						}
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject5]
		});
		
		
		var myObject7 = 
			{
				
				token:userConfigObj.secToken,id:userConfigObj.userID,major:3,minor: 13,
				data1:sources.probationJurisdictionList.JurisdictionName,
				data2:sources.probationJurisdictionList.JurisdictionPhone,
				data4:sources.probationJurisdictionList.JurisdictionFax,
				data5:sources.probationJurisdictionList.JurisdictionAddress,
				data6:sources.probationJurisdictionList.JurisdictionCity,
				data7:sources.probationJurisdictionList.JurisdictionState,
				data8:sources.probationJurisdictionList.JurisdictionZipCode,
				data11:sources.probationJurisdictionList.JurisdictionNotes,
				data14:sources.probationJurisdictionList.POJurisdictionID,
				data15:sources.probationJurisdictionList.InactivePOJurisdiction
			}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 		
				
	 	rpcDUpdate.setUpdateAsync({
		 		'onSuccess': function(result){
						
				},
				'onError': function(error){
					console.log(error);
				},
				'params': [myObject7]
		});
				
				
	 			 		
		var myObject5 = {token:userConfigObj.secToken,id:userConfigObj.userID,major:3,minor:63,data1:sources.probationJurisdictionList.POJurisdictionID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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








	submitCourtJurisdictionInformation.click = function submitCourtJurisdictionInformation_click (event)// @startlock
	{// @endlock
	 
		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:83,data1:sources.courtJurisdictionList.CourtJurisdictionCity}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	city = rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				city = result;
		 				if( city.length ===0)
						{
							var myObject7 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:18,data1:sources.courtJurisdictionList.CourtJurisdictionCity};
							rpcDInsert.setInsertAsync({
		 							'onSuccess': function(result){
						
									},
									'onError': function(error){
										console.log(error);
									},
									'params': [myObject7]
								});
						}
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject7]
		});
		
		
			var myObject7 = 
			{
				token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:4,
				data1:sources.courtJurisdictionList.CourtJurisdiction,
				data2:sources.courtJurisdictionList.CourtJurisdictionPhone,
				data3:sources.courtJurisdictionList.CourtJurisdictionEmail,
				data4:sources.courtJurisdictionList.CourtJurisdictionFax,
				data5:sources.courtJurisdictionList.CourtJurisdictionAddress,
				data6:sources.courtJurisdictionList.CourtJurisdictionCity,
				data7:sources.courtJurisdictionList.CourtJurisdictionState,
				data8:sources.courtJurisdictionList.CourtJurisdictionZipCode,
				data9:sources.courtJurisdictionList.CourtJurisdictionPhoneExt,
				data10:sources.courtJurisdictionList.CourtJurisdictionAlternatePhone,
				data11:sources.courtJurisdictionList.CourtJurisdictionNotes,
				data12:sources.courtJurisdictionList.SearchDatabase,
				data13:sources.courtJurisdictionList.CourtJurisdictionPreferredReportingMethod,
				data14:sources.courtJurisdictionList.CourtJurisdictionID,
				data15:sources.courtJurisdictionList.InactiveCourtJurisdictionInfo,
				data16:sources.courtJurisdictionList.SearchFormat
				
				
				
			}; 
	 		rpcDUpdate.setUpdateAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject7]
				});
				
	 		
			var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:27,data1:sources.reporting.ReportingMethod}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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









//CLOSE BUTTON SECTION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<



	closeAssesorInfoButton.click = function closeAssesorInfoButton_click (event)// @startlock
	{// @endlock
		var myWidget = document.getElementById($comp.id +"_AssessorMainContainer");
		myWidget.style.left = "1290px";
	};// @startlock

	
	closeAttorneyInfoButton.click = function closeAttorneyInfoButton_click (event)
	{// @endlock
		var myWidget = document.getElementById($comp.id +"_AttorneyMainContainer");
		myWidget.style.left = "1290px";
	};// @lock


	closeDHSInformationButton.click = function closeDHSInformationButton_click (event)// @startlock
	{// @endlock
		var myWidget = document.getElementById($comp.id +"_dhsOfficerMainContainer");
		myWidget.style.left = "1290px";
	};// @lock


	closeJudgeInformationButton.click = function closeJudgeInformationButton_click (event)// @startlock
	{// @endlock
		var myWidget = document.getElementById($comp.id +"_judgeMainContainer");
		myWidget.style.left = "1290px";
	};// @lock

	
	closeOtherMonitorInformationButton.click = function closeOtherMonitorInformationButton_click (event)// @startlock
	{// @endlock
		var myWidget = document.getElementById($comp.id +"_otherMonitorMainContainer");
		myWidget.style.left = "1290px";
	};// @lock


	closeProsecutorInformationButton.click = function closeProsecutorInformationButton_click (event)// @startlock
	{// @endlock
		var myWidget = document.getElementById($comp.id +"_prosecutorMainContainer");
		myWidget.style.left = "1290px";
	};// @lock


	closeProbationOfficerInformationButton.click = function closeProbationOfficerInformationButton_click (event)// @startlock
	{// @endlock
		var myWidget = document.getElementById($comp.id +"_probationOfficerMainContainer");
		myWidget.style.left = "1290px";
	};// @lock


	closeProbationJurisdictionButton.click = function closeProbationJurisdictionButton_click (event)// @startlock
	{// @endlock
		var myWidget = document.getElementById($comp.id +"_probationJurisdictionMainContainer");
		myWidget.style.left = "1290px";
	};// @lock


	closeCourtJurisdictionButton.click = function closeCourtJurisdictionButton_click (event)// @startlock
	{// @endlock
		var myWidget = document.getElementById($comp.id +"_courtJurisdictionMainContainer");
		myWidget.style.left = "1290px";
	};// @lock









	

	
	
/*
	button5.click = function button5_click (event)
	{// @lock
		$$(getHtmlId('mainProbationJurisdictionCont')).setSplitPosition(1290);
	};// @lock

	

	

	button4.click = function button4_click (event)// @startlock
	{// @endlock
			
	
	};// @lock

	

	


	

	

	dataGrid2.onRowClick = function dataGrid2_onRowClick (event)// @startlock
	{// @endlock
		debugger
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

	

	

	*/

	

	











//MAIN GRID ROW CLICK SECTION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

	assessorFullList.onRowClick = function assessorFullList_onRowClick (event)// @startlock
	{// @endlock
	
		var myWidget = document.getElementById($comp.id +"_AssessorMainContainer");
		myWidget.style.transitionProperty = "left";
		myWidget.style.transitionDelay = "0s";
		myWidget.style.transitionDuration = ".5s";
		myWidget.style.left = "560px";
		
		$$($comp.id+'_combobox8').setValue(sources.assessorList.AssPreferredReportingMethod);
		
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
	
	attorneyFullList.onRowClick = function attorneyFullList_onRowClick (event)// @startlock
	{// @endlock
	
		var myWidget = document.getElementById($comp.id +"_AttorneyMainContainer");
		myWidget.style.transitionProperty = "left";
		myWidget.style.transitionDelay = "0s";
		myWidget.style.transitionDuration = ".5s";
		myWidget.style.left = "560px";
		
		$$($comp.id+'_combobox6').setValue(sources.attorneyList.AttPreferredReportingMethod);
		
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
		
	};// @lock
	
	
	dhsOfficerFullList.onRowClick = function dhsOfficerFullList_onRowClick (event)// @startlock
	{// @endlock	
		
		var myWidget = document.getElementById($comp.id +"_dhsOfficerMainContainer");
		myWidget.style.transitionProperty = "left";
		myWidget.style.transitionDelay = "0s";
		myWidget.style.transitionDuration = ".5s";
		myWidget.style.left = "560px";
		
		$$($comp.id+'_combobox2').setValue(sources.dhsList.DhsPreferredReportingMethod);
		
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
		
	};// @endlock

	
	judgeFullList.onRowClick = function judgeFullList_onRowClick (event)// @startlock
	{// @endlock
	
		var myWidget = document.getElementById($comp.id +"_judgeMainContainer");
		myWidget.style.transitionProperty = "left";
		myWidget.style.transitionDelay = "0s";
		myWidget.style.transitionDuration = ".5s";
		myWidget.style.left = "560px";
		
		$$($comp.id+'_combobox3').setValue(sources.judgeList.JPreferredReportingMethod);
		
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
	
	
	prosecutorFullList.onRowClick = function prosecutorFullList_onRowClick (event)// @startlock
	{// @endlock
	
		
		var myWidget = document.getElementById($comp.id +"_prosecutorMainContainer");
		myWidget.style.transitionProperty = "left";
		myWidget.style.transitionDelay = "0s";
		myWidget.style.transitionDuration = ".5s";
		myWidget.style.left = "560px";
		
		$$($comp.id+'_combobox5').setValue(sources.prosecutorList.ProsPreferredReportingMethod);
		
		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:79,data1:sources.prosecutorList.ProsecutorsID,data2:0};
		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){	
		 					 				
						prosecutorCorespondance = result;
						sources.prosecutorCorespondance.sync();
					},
					'onError': function(error){						
						console.log(error);
					},
					'params': [myObject5]
		});
		
	};// @lock
	
	
	otherMonitorFullList.onRowClick = function otherMonitorFullList_onRowClick (event)// @startlock
	{// @endlock
	
		var myWidget = document.getElementById($comp.id +"_otherMonitorMainContainer");
		myWidget.style.transitionProperty = "left";
		myWidget.style.transitionDelay = "0s";
		myWidget.style.transitionDuration = ".5s";
		myWidget.style.left = "560px";
		
		$$($comp.id+'_combobox4').setValue(sources.otherMonitorList.OMPreferredReportingMethod);
		
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


	courtJurisdictionFullList.onRowClick = function courtJurisdictionFullList_onRowClick (event)// @startlock
	{// @endlock
				
		var myWidget = document.getElementById($comp.id +"_courtJurisdictionMainContainer");
		myWidget.style.transitionProperty = "left";
		myWidget.style.transitionDelay = "0s";
		myWidget.style.transitionDuration = ".5s";
		myWidget.style.left = "560px";
		
		$$($comp.id+'_reportingComboBox').setValue(sources.courtJurisdictionList.CourtJurisdictionPreferredReportingMethod);
		
		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:26,data1:sources.courtJurisdictionList.CourtJurisdictionID,data2:0};
		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){	
		 					 				
						courtJurisdictionCorespondance = result;
						sources.courtJurisdictionCorespondance.sync();
					},
					'onError': function(error){						
						console.log(error);
					},
					'params': [myObject5]
		});
		
	};// @lock


	probationJurisdictionFullList.onRowClick = function probationJurisdictionFullList_onRowClick (event)// @startlock
	{// @endlock
	
		var myWidget = document.getElementById($comp.id +"_probationJurisdictionMainContainer");
		myWidget.style.transitionProperty = "left";
		myWidget.style.transitionDelay = "0s";
		myWidget.style.transitionDuration = ".5s";
		myWidget.style.left = "560px";
		
		var myObject5 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:61,data1:sources.probationJurisdictionList.POJurisdictionID,data2:0};
		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){	
		 					 				
						probationJurisdictionCorespondance = result;
						sources.probationJurisdictionCorespondance.sync();
					},
					'onError': function(error){						
						console.log(error);
					},
					'params': [myObject5]
		});
		
	};// @lock


	probationOfficerFullList.onRowClick = function probationOfficerFullList_onRowClick (event)// @startlock
	{// @endlock
	
		var myWidget = document.getElementById($comp.id +"_probationOfficerMainContainer");
		myWidget.style.transitionProperty = "left";
		myWidget.style.transitionDelay = "0s";
		myWidget.style.transitionDuration = ".5s";
		myWidget.style.left = "560px";
		
		$$($comp.id+'_combobox7').setValue(sources.probationOfficerList.POPreferredReportingMethod);
		
		
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
		
		var myObject50 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:62,data1:sources.probationOfficerList.FK_pojurisdiction_POJurisdictionID};
		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){	
		 					 				
						poJurisdiction = result;
						sources.poJurisdiction.sync();
					},
					'onError': function(error){						
						console.log(error);
					},
					'params': [myObject50]
		});
		
		
	};// @lock
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
//NEW REFERRAL SECTION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
	

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
		refillCity();
	};// @lock

	probationJurisdictionButton.click = function probationJurisdictionButton_click (event)// @startlock
	{// @endlock
		changeWindow("ProbationJursidictionContainer","ProbationJursidictionComponent");
		var searchCrit = $$(getHtmlId('searchField')).getValue();
		var searchType = $$(getHtmlId('searchOptionsBox')).getValue();
		refillCity();
	};// @lock

	probationOfficerButton.click = function probationOfficerButton_click (event)// @startlock
	{// @endlock
		changeWindow("ProbationOfficerContainer","ProbationOfficerComponent");
		var searchCrit = $$(getHtmlId('searchField')).getValue();
		var searchType = $$(getHtmlId('searchOptionsBox')).getValue();
		
		var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:85}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				
						var tempPOJurisdiction = result[0];
						result[0] = {
	    					JurisdictionName: "None"
						};
						result[result.length] = tempPOJurisdiction;
		
						poJurisdictionListGrid = result;
						tempPOJurisdictionListGrid = result;
						sources.poJurisdictionListGrid.sync();
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
		});
		var myObject50 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:62,data1:sources.probationOfficerList.FK_pojurisdiction_POJurisdictionID};
		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){	
		 					 				
						poJurisdiction = result;
						sources.poJurisdiction.sync();
					},
					'onError': function(error){						
						console.log(error);
					},
					'params': [myObject50]
		});
		//refillCity();
	};// @lock

	prosecutorsButton.click = function prosecutorsButton_click (event)// @startlock
	{// @endlock
		changeWindow("ProsecutorContainer","ProsecutorComponent");
		var searchCrit = $$(getHtmlId('searchField')).getValue();
		var searchType = $$(getHtmlId('searchOptionsBox')).getValue();
		var myObject = {token:userConfigObj.secToken,id:userConfigObj.userID,major:3,minor:84}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						tempJurisdiction = result;
						jurisdiction = result;
						sources.jurisdiction.sync();
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
		});
		refillCity();
	};// @lock

	otherButton.click = function otherButton_click (event)// @startlock
	{// @endlock
		changeWindow("OtherMonitorContainer","OtherMonitorComponent");
		var searchCrit = $$(getHtmlId('searchField')).getValue();
		var searchType = $$(getHtmlId('searchOptionsBox')).getValue();
		refillCity();
	};// @lock

	judgesButton.click = function judgesButton_click (event)// @startlock
	{// @endlock
		changeWindow("JudgeContainer","JudgeComponent");
		var searchCrit = $$(getHtmlId('searchField')).getValue();
		var searchType = $$(getHtmlId('searchOptionsBox')).getValue();
		var myObject = {token:userConfigObj.secToken,id:userConfigObj.userID,major:3,minor:84}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						tempJurisdiction = result;
						jurisdiction = result;
						sources.jurisdiction.sync();
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
		});
		refillCity();
	};// @lock

	dhsButton.click = function dhsButton_click (event)// @startlock
	{// @endlock
		changeWindow("DHSOfficerContainer","DHSOfficerComponent");		
		var searchCrit = $$(getHtmlId('searchField')).getValue();
		var searchType = $$(getHtmlId('searchOptionsBox')).getValue();
		refillCity();
	};// @lock

	assessorButton.click = function assessorButton_click (event)// @startlock
	{// @endlock
		changeWindow("AssessorContainer","AssessorComponent");
		var searchCrit = $$(getHtmlId('searchField')).getValue();
		var searchType = $$(getHtmlId('searchOptionsBox')).getValue();
		refillCity();
	};// @lock
	
	attorneyButton.click = function attorneyButton_click (event)// @startlock
	{// @endlock
		
		changeWindow("AttorneyContainer","AttorneyComponent");
		var searchCrit = $$(getHtmlId('searchField')).getValue();
		var searchType = $$(getHtmlId('searchOptionsBox')).getValue();
		refillCity();	
	};// @lock
	
	
	
	
	
	
	
	
	
	
	SearchReferralButton.click = function SearchReferralButton_click (event)// @startlock
	{// @endlock
		
		getTotals();
		refreshData();

	};// @lock

	

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_submitProbationOfficerInformation", "click", submitProbationOfficerInformation.click, "WAF");
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
	WAF.addListener(this.id + "_closeAssesorInfoButton", "click", closeAssesorInfoButton.click, "WAF");
	WAF.addListener(this.id + "_submitAssessorCurrentInformation", "click", submitAssessorCurrentInformation.click, "WAF");
	WAF.addListener(this.id + "_courtJurisdictionCityGrid", "onRowClick", courtJurisdictionCityGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_courtJurisdictionCityButton", "click", courtJurisdictionCityButton.click, "WAF");
	WAF.addListener(this.id + "_courtJurisdictionCityTextbox", "keyup", courtJurisdictionCityTextbox.keyup, "WAF");
	WAF.addListener(this.id + "_courtJurisdictionCityTextbox", "blur", courtJurisdictionCityTextbox.blur, "WAF");
	WAF.addListener(this.id + "_loadBAKCourtJurisdictionVersions", "click", loadBAKCourtJurisdictionVersions.click, "WAF");
	WAF.addListener(this.id + "_closeCourtJurisdictionButton", "click", closeCourtJurisdictionButton.click, "WAF");
	WAF.addListener(this.id + "_submitCourtJurisdictionInformation", "click", submitCourtJurisdictionInformation.click, "WAF");
	WAF.addListener(this.id + "_dataGrid6", "onRowClick", dataGrid6.onRowClick, "WAF");
	WAF.addListener(this.id + "_probationJurisdictionCityGrid", "onRowClick", probationJurisdictionCityGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_probationJurisdictionCityButton", "click", probationJurisdictionCityButton.click, "WAF");
	WAF.addListener(this.id + "_probationJurisdictionCityTextbox", "keyup", probationJurisdictionCityTextbox.keyup, "WAF");
	WAF.addListener(this.id + "_probationJurisdictionCityTextbox", "blur", probationJurisdictionCityTextbox.blur, "WAF");
	WAF.addListener(this.id + "_loadBAKProbationJurisdictionVersions", "click", loadBAKProbationJurisdictionVersions.click, "WAF");
	WAF.addListener(this.id + "_closeProbationJurisdictionButton", "click", closeProbationJurisdictionButton.click, "WAF");
	WAF.addListener(this.id + "_submitProbationJurisdictionInformation", "click", submitProbationJurisdictionInformation.click, "WAF");
	WAF.addListener(this.id + "_dataGrid1", "onRowClick", dataGrid1.onRowClick, "WAF");
	WAF.addListener(this.id + "_button4", "click", button4.click, "WAF");
	WAF.addListener(this.id + "_probationOfficerCityGrid", "onRowClick", probationOfficerCityGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_probationOfficerCityTextbox", "keyup", probationOfficerCityTextbox.keyup, "WAF");
	WAF.addListener(this.id + "_probationOfficerCityTextbox", "blur", probationOfficerCityTextbox.blur, "WAF");
	WAF.addListener(this.id + "_probationOfficerCityButton", "click", probationOfficerCityButton.click, "WAF");
	WAF.addListener(this.id + "_loadBAKProbationOfficers", "click", loadBAKProbationOfficers.click, "WAF");
	WAF.addListener(this.id + "_closeProbationOfficerInformationButton", "click", closeProbationOfficerInformationButton.click, "WAF");
	WAF.addListener(this.id + "_dataGrid11", "onRowClick", dataGrid11.onRowClick, "WAF");
	WAF.addListener(this.id + "_prosecutorJurisdictionTextbox", "keyup", prosecutorJurisdictionTextbox.keyup, "WAF");
	WAF.addListener(this.id + "_prosecutorJurisdictionTextbox", "blur", prosecutorJurisdictionTextbox.blur, "WAF");
	WAF.addListener(this.id + "_prosecutorJurisdictionButton", "click", prosecutorJurisdictionButton.click, "WAF");
	WAF.addListener(this.id + "_prosecutorJurisdictionGrid", "onRowClick", prosecutorJurisdictionGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_prosecutorCityGrid", "onRowClick", prosecutorCityGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_prosecutorCityTextbox", "keyup", prosecutorCityTextbox.keyup, "WAF");
	WAF.addListener(this.id + "_prosecutorCityTextbox", "blur", prosecutorCityTextbox.blur, "WAF");
	WAF.addListener(this.id + "_prosecutorCityButton", "click", prosecutorCityButton.click, "WAF");
	WAF.addListener(this.id + "_loadBAKProsecutors", "click", loadBAKProsecutors.click, "WAF");
	WAF.addListener(this.id + "_closeProsecutorInformationButton", "click", closeProsecutorInformationButton.click, "WAF");
	WAF.addListener(this.id + "_submitProsecutorInformation", "click", submitProsecutorInformation.click, "WAF");
	WAF.addListener(this.id + "_dataGrid9", "onRowClick", dataGrid9.onRowClick, "WAF");
	WAF.addListener(this.id + "_dataGrid7", "onRowClick", dataGrid7.onRowClick, "WAF");
	WAF.addListener(this.id + "_otherMonitorCityButton", "click", otherMonitorCityButton.click, "WAF");
	WAF.addListener(this.id + "_otherMonitorCityTextbox", "keyup", otherMonitorCityTextbox.keyup, "WAF");
	WAF.addListener(this.id + "_otherMonitorCityTextbox", "blur", otherMonitorCityTextbox.blur, "WAF");
	WAF.addListener(this.id + "_loadBAKOtherMonitors", "click", loadBAKOtherMonitors.click, "WAF");
	WAF.addListener(this.id + "_closeOtherMonitorInformationButton", "click", closeOtherMonitorInformationButton.click, "WAF");
	WAF.addListener(this.id + "_submitOtherMonitorInformation", "click", submitOtherMonitorInformation.click, "WAF");
	WAF.addListener(this.id + "_otherMonitorCityGrid", "onRowClick", otherMonitorCityGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_loadBakJudgesVersions", "click", loadBakJudgesVersions.click, "WAF");
	WAF.addListener(this.id + "_judgeJurisdictionGrid", "onRowClick", judgeJurisdictionGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_judgeJurisdictionButton", "click", judgeJurisdictionButton.click, "WAF");
	WAF.addListener(this.id + "_judgeJurisdictionTextbox", "keyup", judgeJurisdictionTextbox.keyup, "WAF");
	WAF.addListener(this.id + "_judgeJurisdictionTextbox", "blur", judgeJurisdictionTextbox.blur, "WAF");
	WAF.addListener(this.id + "_judgesCityGrid", "onRowClick", judgesCityGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_judgesCityButton", "click", judgesCityButton.click, "WAF");
	WAF.addListener(this.id + "_judgesCityTextbox", "keyup", judgesCityTextbox.keyup, "WAF");
	WAF.addListener(this.id + "_judgesCityTextbox", "blur", judgesCityTextbox.blur, "WAF");
	WAF.addListener(this.id + "_closeJudgeInformationButton", "click", closeJudgeInformationButton.click, "WAF");
	WAF.addListener(this.id + "_submitJudgeInformation", "click", submitJudgeInformation.click, "WAF");
	WAF.addListener(this.id + "_dataGrid5", "onRowClick", dataGrid5.onRowClick, "WAF");
	WAF.addListener(this.id + "_dhsCityGrid", "onRowClick", dhsCityGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_dhsCityButton", "click", dhsCityButton.click, "WAF");
	WAF.addListener(this.id + "_dhsCityTextbox", "keyup", dhsCityTextbox.keyup, "WAF");
	WAF.addListener(this.id + "_dhsCityTextbox", "blur", dhsCityTextbox.blur, "WAF");
	WAF.addListener(this.id + "_loadBakDHSOfficerVersions", "click", loadBakDHSOfficerVersions.click, "WAF");
	WAF.addListener(this.id + "_closeDHSInformationButton", "click", closeDHSInformationButton.click, "WAF");
	WAF.addListener(this.id + "_submitDHSInformation", "click", submitDHSInformation.click, "WAF");
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
	WAF.addListener(this.id + "_closeAttorneyInfoButton", "click", closeAttorneyInfoButton.click, "WAF");
	WAF.addListener(this.id + "_submitAttorneyInformation", "click", submitAttorneyInformation.click, "WAF");
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
	
	function refillCity()
	{
		city=tempStore;
		sources.city.sync();
	}
	
	function refillPOJurisdictionGrid()
	{
		poJurisdictionListGrid = tempPOJurisdictionListGrid;
		sources.poJurisdictionListGrid.sync();
	}
	
}
}// @startlock
return constructor;
})();// @endlock
