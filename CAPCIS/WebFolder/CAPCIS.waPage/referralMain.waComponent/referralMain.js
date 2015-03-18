
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralMain';
	// @endregion// @endlock
		
	this.load = function (data) {// @lock
		/*
		var parentContainer = $comp.id;
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id+'_AssessorComponent', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/referralAssessors.waComponent'				//designate the webcomponent to load
									//data that you want to send to the webcomponent
		});
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id+'_AttorneyComponent', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/referralAttorneys.waComponent'							//data that you want to send to the webcomponent
		});
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id+'_DHSOfficerComponent', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/referralDHSOfficers.waComponent'							//data that you want to send to the webcomponent
		});
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id+'_JudgeComponent', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/referralJudges.waComponent'						//data that you want to send to the webcomponent
		});
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id+'_OtherMonitorComponent', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/referralOtherMonitors.waComponent'						//data that you want to send to the webcomponent
		});
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id+'_ProsecutorComponent', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/referralProsecutors.waComponent'						//data that you want to send to the webcomponent
		});
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id+'_ProbationOfficerComponent', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/referralProbationOfficers.waComponent'					//data that you want to send to the webcomponent
		});
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id+'_ProbationJursidictionComponent', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/referralProbationJurisdictions.waComponent'					//data that you want to send to the webcomponent
		});
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id+'_CourtJursidictionComponent', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/referralCourtJurisdictions.waComponent'					//data that you want to send to the webcomponent
		});
		
		*/
		assessor = document.getElementById(getHtmlId('AssessorContainer'));
		attorney = document.getElementById(getHtmlId('AttorneyContainer'));
		dhs = document.getElementById(getHtmlId('DHSOfficerContainer'));
		judge = document.getElementById(getHtmlId('JudgeContainer'));
		other = document.getElementById(getHtmlId('OtherMonitorContainer'));
		prosecutor = document.getElementById(getHtmlId('ProsecutorContainer'));
		probationO = document.getElementById(getHtmlId('ProbationOfficerContainer'));
		ProbationJ = document.getElementById(getHtmlId('ProbationJursidictionContainer'));
		court = document.getElementById(getHtmlId('CourtJursidictionContainer'));
		
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

	courtJurisdictionButton.click = function courtJurisdictionButton_click (event)// @startlock
	{// @endlock
		var searchCrit = $$(getHtmlId('searchField')).getValue();
		var searchType = $$(getHtmlId('searchOptionsBox')).getValue();
		
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id+'_CourtJursidictionComponent', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/referralCourtJurisdictions.waComponent',
		userData: 	{searchCrit: searchCrit, searchType: searchType}					//designate the webcomponent to load
									//data that you want to send to the webcomponent
		});
		
		changeWindow(event.target.firstChild.data);
	};// @lock

	probationJurisdictionButton.click = function probationJurisdictionButton_click (event)// @startlock
	{// @endlock
		var searchCrit = $$(getHtmlId('searchField')).getValue();
		var searchType = $$(getHtmlId('searchOptionsBox')).getValue();
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id+'_ProbationJursidictionComponent', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/referralProbationJurisdictions.waComponent',
		userData: 	{searchCrit: searchCrit, searchType: searchType}			//data that you want to send to the webcomponent
		});
		changeWindow(event.target.firstChild.data);
	};// @lock

	probationOfficerButton.click = function probationOfficerButton_click (event)// @startlock
	{// @endlock
		var searchCrit = $$(getHtmlId('searchField')).getValue();
		var searchType = $$(getHtmlId('searchOptionsBox')).getValue();
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id+'_ProbationOfficerComponent', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/referralProbationOfficers.waComponent',	
		userData: 	{searchCrit: searchCrit, searchType: searchType}				//data that you want to send to the webcomponent
		});
		changeWindow(event.target.firstChild.data);
	};// @lock

	prosecutorsButton.click = function prosecutorsButton_click (event)// @startlock
	{// @endlock
		var searchCrit = $$(getHtmlId('searchField')).getValue();
		var searchType = $$(getHtmlId('searchOptionsBox')).getValue();
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id+'_ProsecutorComponent', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/referralProsecutors.waComponent',
		userData: 	{searchCrit: searchCrit, searchType: searchType}				//data that you want to send to the webcomponent
		});
		changeWindow(event.target.firstChild.data);
	};// @lock

	otherButton.click = function otherButton_click (event)// @startlock
	{// @endlock
		var searchCrit = $$(getHtmlId('searchField')).getValue();
		var searchType = $$(getHtmlId('searchOptionsBox')).getValue();
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id+'_OtherMonitorComponent', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/referralOtherMonitors.waComponent',
		userData: 	{searchCrit: searchCrit, searchType: searchType}				//data that you want to send to the webcomponent
		});
		changeWindow(event.target.firstChild.data);
	};// @lock

	judgesButton.click = function judgesButton_click (event)// @startlock
	{// @endlock
		var searchCrit = $$(getHtmlId('searchField')).getValue();
		var searchType = $$(getHtmlId('searchOptionsBox')).getValue();
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id+'_JudgeComponent', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/referralJudges.waComponent',
		userData: 	{searchCrit: searchCrit, searchType: searchType}			//data that you want to send to the webcomponent
		});
		changeWindow(event.target.firstChild.data);
	};// @lock

	dhsButton.click = function dhsButton_click (event)// @startlock
	{// @endlock
		
		var searchCrit = $$(getHtmlId('searchField')).getValue();
		var searchType = $$(getHtmlId('searchOptionsBox')).getValue();
		
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id+'_DHSOfficerComponent', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/referralDHSOfficers.waComponent',
		userData: 	{searchCrit: searchCrit, searchType: searchType}					//designate the webcomponent to load
									//data that you want to send to the webcomponent
		});
		
		changeWindow(event.target.firstChild.data);
	};// @lock

	assessorButton.click = function assessorButton_click (event)// @startlock
	{// @endlock
		
		var searchCrit = $$(getHtmlId('searchField')).getValue();
		var searchType = $$(getHtmlId('searchOptionsBox')).getValue();
		
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id+'_AssessorComponent', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/referralAssessors.waComponent',
		userData: 	{searchCrit: searchCrit, searchType: searchType}					//designate the webcomponent to load
									//data that you want to send to the webcomponent
		});

		changeWindow(event.target.firstChild.data);

	};// @lock

	SearchReferralButton.click = function SearchReferralButton_click (event)// @startlock
	{// @endlock
		
		getTotals();

	};// @lock

	attorneyButton.click = function attorneyButton_click (event)// @startlock
	{// @endlock
	
		var searchCrit = $$(getHtmlId('searchField')).getValue();
		var searchType = $$(getHtmlId('searchOptionsBox')).getValue();
		
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id+'_AttorneyComponent', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/referralAttorneys.waComponent',
		userData: 	{searchCrit: searchCrit, searchType: searchType}					//designate the webcomponent to load
									//data that you want to send to the webcomponent
		});
		
		changeWindow(event.target.firstChild.data);
		
	};// @lock

	// @region eventManager// @startlock
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
	 		rpcDSelects.getSelectAsync({
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
	 		rpcDSelects.getSelectAsync({
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
	
	function changeWindow(id)
	{
		
		
		
		assessor.style.visibility = 'hidden';
		attorney.style.visibility = 'hidden';
		dhs.style.visibility = 'hidden';
		judge.style.visibility = 'hidden';
		other.style.visibility = 'hidden';
		prosecutor.style.visibility = 'hidden';
		probationO.style.visibility = 'hidden';
		ProbationJ.style.visibility = 'hidden';
		court.style.visibility = 'hidden';
		
		assessor.style.zIndex = '8';
		attorney.style.zIndex = '7';
		dhs.style.zIndex = '6';
		judge.style.zIndex = '5';
		other.style.zIndex = '4';
		prosecutor.style.zIndex = '3';
		probationO.style.zIndex = '2';
		ProbationJ.style.zIndex = '1';
		court.style.zIndex = '0';
		
		
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
		
		
		
	}
	function totalSuccess(result)
	{
		
		for(var x = 0 ; x < 9 ; x++) //9
		{
			if(result[x].source == 'assesor')
			{
				var currentLabel = $$($comp.id+"_assessorButton").domNode.innerText;
				currentLabel= currentLabel + '\n(' + result[x].total + ')';
				$$($comp.id+"_assessorButton").domNode.innerText = currentLabel;
				
			}
			else if(result[x].source == 'attorney')
			{
				var currentLabel = $$($comp.id+"_attorneyButton").domNode.innerText;
				currentLabel= currentLabel + '\n(' + result[x].total.toString() + ')';
				$$($comp.id+"_attorneyButton").domNode.innerText = currentLabel;
			}
			else if(result[x].source == 'court')
			{
				var currentLabel = $$($comp.id+"_courtJurisdictionButton").domNode.innerText;
				currentLabel= currentLabel + '\n(' + result[x].total.toString() + ')';
				$$($comp.id+"_courtJurisdictionButton").domNode.innerText = currentLabel;
			}
			else if(result[x].source == 'dhs')
			{
				var currentLabel = $$($comp.id+"_dhsButton").domNode.innerText;
				currentLabel= currentLabel + '\n(' + result[x].total.toString() + ')';
				$$($comp.id+"_dhsButton").domNode.innerText = currentLabel;
			}
			else if(result[x].source == 'judge')
			{
				var currentLabel = $$($comp.id+"_judgesButton").domNode.innerText;
				currentLabel= currentLabel + '\n(' + result[x].total.toString() + ')';
				$$($comp.id+"_judgesButton").domNode.innerText = currentLabel;
			}
			else if(result[x].source == 'other')
			{
				var currentLabel = $$($comp.id+"_otherButton").domNode.innerText;
				currentLabel= currentLabel + '\n(' + result[x].total.toString() + ')';
				var currentLabel = $$($comp.id+"_otherButton").domNode.innerText = currentLabel;
			}
			else if(result[x].source == 'pojurisdiction')
			{
				var currentLabel = $$($comp.id+"_probationJurisdictionButton").domNode.innerText;
				currentLabel= currentLabel + '\n(' + result[x].total.toString() + ')';
				$$($comp.id+"_probationJurisdictionButton").domNode.innerText = currentLabel;
			}
			else if(result[x].source == 'po')
			{
				var currentLabel = $$($comp.id+"_probationOfficerButton").domNode.innerText;
				currentLabel= currentLabel + '\n(' + result[x].total.toString() + ')';
				$$($comp.id+"_probationOfficerButton").domNode.innerText = currentLabel;
			}
			else if(result[x].source == 'prosecutor')
			{
				var currentLabel = $$($comp.id+"_prosecutorsButton").domNode.innerText;
				currentLabel= currentLabel + '\n(' + result[x].total.toString() + ')';
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
		
		resporting = result;
		sources.reporting.sync();
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
	


}// @startlock
return constructor;
})();// @endlock
