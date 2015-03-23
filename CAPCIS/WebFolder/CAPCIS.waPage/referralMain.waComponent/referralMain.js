
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralMain';
	// @endregion// @endlock
		
	this.load = function (data) {// @lock
		
		debugger;
		
		setTimeout(callAssessor,0);	
		
		setTimeout(callAttorney,0);			
		
		setTimeout(callDHS,0);
		
		setTimeout(callJudge,0);
		
		setTimeout(callOtherMonitor,0);
		
		setTimeout(callProsecutor,0);
		
		setTimeout(callProbationOfficer,0);
		
		setTimeout(callProbationJurisdiction,0);
		
		setTimeout(callCourtJurisdiction,0);
		
		
		refreshData();
		
		
		
		oldVisContainer = "";
		oldVisComponent = "";
		//assessor = document.getElementById(getHtmlId('AssessorContainer'));
		//attorney = document.getElementById(getHtmlId('AttorneyContainer'));
		//dhs = document.getElementById(getHtmlId('DHSOfficerContainer'));
		//judge = document.getElementById(getHtmlId('JudgeContainer'));
		//other = document.getElementById(getHtmlId('OtherMonitorContainer'));
		//prosecutor = document.getElementById(getHtmlId('ProsecutorContainer'));
		//probationO = document.getElementById(getHtmlId('ProbationOfficerContainer'));
		//ProbationJ = document.getElementById(getHtmlId('ProbationJursidictionContainer'));
		//court = document.getElementById(getHtmlId('CourtJursidictionContainer'));
		
		
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
	    token: '7836140170460568',
	    id: '1',
	    major: 3,
	    minor: 3
		}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		
		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						citySuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject3]
				});
		
		var myObject4 = {
		    token: '7836140170460568',
		    id: '1',
		    major: 3,
		    minor: 4
		}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						reportingSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject4]
				});
	
	
		getTotals();
		
		

	// @region namespaceDeclaration// @startlock
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
		
		
		/* WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id+'_AssessorComponent', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/referralAssessors.waComponent',
		userData: 	{searchCrit: searchCrit, searchType: searchType},					//designate the webcomponent to load
		onSuccess: function () {}							//data that you want to send to the webcomponent
		});
		
		*/

	};// @lock

	SearchReferralButton.click = function SearchReferralButton_click (event)// @startlock
	{// @endlock
		
		getTotals();
		refreshData();

	};// @lock

	attorneyButton.click = function attorneyButton_click (event)// @startlock
	{// @endlock
		
		changeWindow("AttorneyContainer","AttorneyComponent");
		var searchCrit = $$(getHtmlId('searchField')).getValue();
		var searchType = $$(getHtmlId('searchOptionsBox')).getValue();
		
		
		/*WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id+'_AttorneyComponent', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/referralAttorneys.waComponent',
		userData: 	{searchCrit: searchCrit, searchType: searchType},					//designate the webcomponent to load
		onSuccess: function () {}							//data that you want to send to the webcomponent
		});
		*/
		
		
	};// @lock

	// @region eventManager// @startlock
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

	};// @lock
	
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
		
		//var mytest1 = $$($comp.id+id).domNode.style.visibility;
		debugger;
		if (oldVisContainer != "")
		{
			myOldPage = document.getElementById(getHtmlId(oldVisContainer));
			myOldPage.style.visibility = "hidden";
			myOldPage.style.zIndex = "0";
		}
		
		var myPage = document.getElementById(getHtmlId(containerid));
		myPage.style.visibility = "visible";
		myPage.style.zIndex = "10";
		
		oldVisContainer = containerid;
		
		//document.getElementById(getHtmlId(oldRefVis);//document.getElementById($comp.id + "_" + id);// = "visible";
		
		//document.getElementById(getHtmlId(id)).style.zIndex = "10";
		//document.getElementById(getHtmlId(oldRefVis)).style.visibility = "hidden";
		//document.getElementById(getHtmlId(oldRefVis)).style.zIndex = "0";
		//oldRefVis = id;
		
		/*
		assessor.style.visibility = 'hidden';
		attorney.style.visibility = 'hidden';
		dhs.style.visibility = 'hidden';
		judge.style.visibility = 'hidden';
		other.style.visibility = 'hidden';
		prosecutor.style.visibility = 'hidden';
		probationO.style.visibility = 'hidden';
		ProbationJ.style.visibility = 'hidden';
		court.style.visibility = 'hidden';
		newAssessor.style.visibility = 'hidden';
		newAttorney.style.visibility = 'hidden';
		newDHS.style.visibility = 'hidden';
		newJudges.style.visibility = 'hidden';
		newOther.style.visibility = 'hidden';
		newProsecutor.style.visibility = 'hidden';
		newPO.style.visibility = 'hidden';
		newPJ.style.visibility = 'hidden';
		newCJ.style.visibility = 'hidden';
		
		assessor.style.zIndex = '8';
		attorney.style.zIndex = '7';
		dhs.style.zIndex = '6';
		judge.style.zIndex = '5';
		other.style.zIndex = '4';
		prosecutor.style.zIndex = '3';
		probationO.style.zIndex = '2';
		ProbationJ.style.zIndex = '1';
		court.style.zIndex = '0';
		newAssessor.style.zIndex = '0';
		newAttorney.style.zIndex = '0';
		newDHS.style.zIndex = '0';
		newJudges.style.zIndex = '0';
		newOther.style.zIndex = '0';
		newProsecutor.style.zIndex = '0';
		newPO.style.zIndex = '0';
		newPJ.style.zIndex = '0';
		newCJ.style.zIndex = '0';
		
		
		if(id == 'Assessors')
		{
			assessor.style.zIndex = '9';
			assessor.style.visibility = 'visible';
		}
		else if(id == 'Attorneys')
		{
			attorney.style.zIndex = '9';
			attorney.style.visibility = 'visible';
		}
		else if(id == 'DHS Officers')
		{
			dhs.style.zIndex = '9';
			dhs.style.visibility = 'visible';
		}
		else if(id == 'Judges')
		{
			judge.style.zIndex = '9';
			judge.style.visibility = 'visible';
		}
		else if(id == 'Other Monitors')
		{
			other.style.zIndex = '9';
			other.style.visibility = 'visible';
		}
		else if(id == 'Prosecutors')
		{
			prosecutor.style.zIndex = '9';
			prosecutor.style.visibility = 'visible';
		}
		else if(id == 'Probation Officers')
		{
			probationO.style.zIndex = '9';
			probationO.style.visibility = 'visible';
		}
		else if(id == 'Probation Jurisdictions')
		{
			ProbationJ.style.zIndex = '9';
			ProbationJ.style.visibility = 'visible';
		}
		else if(id == 'Court Jurisdictions')
		{
			court.style.zIndex = '9';
			court.style.visibility = 'visible';
		}
		*/
		
		
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
	function totalError(event)
	{
		var errMessage;
				for (var x = 0;x < event.error.length;x++)
				{
					errMessage += (event.error[x].message + ",");
				}
				alert(errMessage);
	}
	function citySuccess(result)
	{
		var tempCity = result[0];
		
		result[0] = {
		    CityListing: "None"
		};
		
		result[result.length] = tempCity;
		city = result;
		tempStore= city;
		sources.city.sync();
	}
	function cityError(event)
	{
		var errMessage;
				for (var x = 0;x < event.error.length;x++)
				{
					errMessage += (event.error[x].message + ",");
				}
				alert(errMessage);
	}
	function reportingSuccess(result)
	{
		
		var tempReporting = result[0];
		result[0] = {
   		 ReportingMethod: "None"
		};
		result[result.length] = tempReporting;
		
		reporting = result;
		sources.reporting.sync();
		var x=0;
	}
	function reportingError(event)
	{
		var errMessage;
				for (var x = 0;x < event.error.length;x++)
				{
					errMessage += (event.error[x].message + ",");
				}
				alert(errMessage);
	}
	
	function assessorSuccess(result)
	{
		assessorList = result;
		sources.assessorList.sync();
		
	}
	function assessorError(event)
	{
		var errMessage;
		for (var x = 0;x < event.error.length;x++)
		{
			errMessage += (event.error[x].message + ",");
		}
		alert(errMessage);
	}
	function attorneySuccess(result)
	{
		attorneyList = result;
		sources.attorneyList.sync();
		
	}
	function attorneyError(event)
	{
		var errMessage;
		for (var x = 0;x < event.error.length;x++)
		{
			errMessage += (event.error[x].message + ",");
		}
		alert(errMessage);
	}
	function courtJurisdictionSuccess(result)
	{
		courtJurisdictionList = result;
		sources.courtJurisdictionList.sync();
		
	}
	function courtJurisdictionError(event)
	{
		var errMessage;
		for (var x = 0;x < event.error.length;x++)
		{
			errMessage += (event.error[x].message + ",");
		}
		alert(errMessage);
	}
	function dhsSuccess(result)
	{
		dhsList = result;
		sources.dhsList.sync();
		
	}
	function dhsError(event)
	{
		var errMessage;
		for (var x = 0;x < event.error.length;x++)
		{
			errMessage += (event.error[x].message + ",");
		}
		alert(errMessage);
	}
	function judgeSuccess(result)
	{
		judgeList = result;
		sources.judgeList.sync();
		
	}
	function judgeError(event)
	{
		var errMessage;
		for (var x = 0;x < event.error.length;x++)
		{
			errMessage += (event.error[x].message + ",");
		}
		alert(errMessage);
	}
	function otherMonitorSuccess(result)
	{
		otherMonitorList = result;
		sources.otherMonitorList.sync();
		
	}
	function otherMonitorError(event)
	{
		var errMessage;
		for (var x = 0;x < event.error.length;x++)
		{
			errMessage += (event.error[x].message + ",");
		}
		alert(errMessage);
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
	function probationOfficerError(event)
	{
		var errMessage;
		for (var x = 0;x < event.error.length;x++)
		{
			errMessage += (event.error[x].message + ",");
		}
		alert(errMessage);
	}
	function prosecutorSuccess(result)
	{
		
		prosecutorList = result;
		sources.prosecutorList.sync();
		
		
	}
	function prosecutorError(event)
	{
		var errMessage;
		for (var x = 0;x < event.error.length;x++)
		{
			errMessage += (event.error[x].message + ",");
		}
		alert(errMessage);
	}
	function testAsyncFunc(event)
	{
		
	}
	
	function callAssessor()
	{
		
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id+'_AssessorComponent', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/referralAssessors.waComponent',							//data that you want to send to the webcomponent
		"onSuccess": function (result){}
		})
	}
	function callAttorney()
	{
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id+'_AttorneyComponent', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/referralAttorneys.waComponent',							//data that you want to send to the webcomponent
		"onSuccess": function (result){}
		})
	}
	function callDHS ()
	{
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id+'_DHSOfficerComponent', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/referralDHSOfficers.waComponent',							//data that you want to send to the webcomponent
		"onSuccess": function (result){}
		})
	}
	function callJudge ()
	{
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id+'_JudgeComponent', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/referralJudges.waComponent',					//data that you want to send to the webcomponent
		"onSuccess": function (result){}
		})
	}
	function callOtherMonitor ()
	{
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id+'_OtherMonitorComponent', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/referralOtherMonitors.waComponent',						//data that you want to send to the webcomponent
		"onSuccess": function (result){}
		})
	}
	function callProsecutor()
	{
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id+'_ProsecutorComponent', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/referralProsecutors.waComponent',						//data that you want to send to the webcomponent
		"onSuccess": function (result){}
		})
	}
	function callProbationOfficer ()
	{
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id+'_ProbationOfficerComponent', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/referralProbationOfficers.waComponent',				//data that you want to send to the webcomponent
		"onSuccess": function (result){}
		})
	}
	function callProbationJurisdiction ()
	{
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id+'_ProbationJursidictionComponent', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/referralProbationJurisdictions.waComponent',					//data that you want to send to the webcomponent
		onSuccess: function (result) {}
		})
	}
	function callCourtJurisdiction()
	{
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id+'_CourtJursidictionComponent', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/referralCourtJurisdictions.waComponent',					//data that you want to send to the webcomponent
		onSuccess: function (result) {testAsyncFunc(result)}
		})
	}
}// @startlock
return constructor;
})();// @endlock
