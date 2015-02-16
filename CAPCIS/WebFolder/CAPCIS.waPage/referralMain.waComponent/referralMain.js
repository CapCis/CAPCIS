
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralMain';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
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
		
		
		assessor = document.getElementById(getHtmlId('AssessorComponent'));
		attorney = document.getElementById(getHtmlId('AttorneyComponent'));
		dhs = document.getElementById(getHtmlId('DHSOfficerComponent'));
		judge = document.getElementById(getHtmlId('JudgeComponent'));
		other = document.getElementById(getHtmlId('OtherMonitorComponent'));
		prosecutor = document.getElementById(getHtmlId('ProsecutorComponent'));
		probationO = document.getElementById(getHtmlId('ProbationOfficerComponent'));
		ProbationJ = document.getElementById(getHtmlId('ProbationJursidictionComponent'));
		court = document.getElementById(getHtmlId('CourtJursidictionComponent'));
		
		changeWindow('Assessors');
		

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
		changeWindow(event.currentTarget.innerText);
	};// @lock

	probationJurisdictionButton.click = function probationJurisdictionButton_click (event)// @startlock
	{// @endlock
		changeWindow(event.currentTarget.innerText);
	};// @lock

	probationOfficerButton.click = function probationOfficerButton_click (event)// @startlock
	{// @endlock
		changeWindow(event.currentTarget.innerText);
	};// @lock

	prosecutorsButton.click = function prosecutorsButton_click (event)// @startlock
	{// @endlock
		changeWindow(event.currentTarget.innerText);
	};// @lock

	otherButton.click = function otherButton_click (event)// @startlock
	{// @endlock
		changeWindow(event.currentTarget.innerText);
	};// @lock

	judgesButton.click = function judgesButton_click (event)// @startlock
	{// @endlock
		changeWindow(event.currentTarget.innerText);
	};// @lock

	dhsButton.click = function dhsButton_click (event)// @startlock
	{// @endlock
		changeWindow(event.currentTarget.innerText);
	};// @lock

	assessorButton.click = function assessorButton_click (event)// @startlock
	{// @endlock
		debugger;
		$comp;
		changeWindow(event.currentTarget.innerText);

	};// @lock

	SearchReferralButton.click = function SearchReferralButton_click (event)// @startlock
	{// @endlock
		debugger;
		var searchCrit = $$(getHtmlId('searchField')).getValue();
		var searchType = $$(getHtmlId('searchOptionsBox')).getValue();
		
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id+'_AssessorComponent', 											//designate the component to load into
		path: 	'/CAPCIS.waPage/referralAssessors.waComponent',
		userData: 	{searchCrit: searchCrit, searchType: searchType}					//designate the webcomponent to load
									//data that you want to send to the webcomponent
		});
		
	};// @lock

	attorneyButton.click = function attorneyButton_click (event)// @startlock
	{// @endlock
		
		changeWindow(event.currentTarget.innerText);
		
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
	
	function changeWindow(id)
	{
		debugger;
		
		assessor.style.visibility = 'hidden';
		attorney.style.visibility = 'hidden';
		dhs.style.visibility = 'hidden';
		judge.style.visibility = 'hidden';
		other.style.visibility = 'hidden';
		prosecutor.style.visibility = 'hidden';
		probationO.style.visibility = 'hidden';
		ProbationJ.style.visibility = 'hidden';
		court.style.visibility = 'hidden';
		
		if(id == 'Assessors')
		{
			assessor.style.visibility = 'visible';
		}
		else if(id == 'Attorneys')
		{
			attorney.style.visibility = 'visible';
		}
		else if(id == 'DHS Officers')
		{
			dhs.style.visibility = 'visible';
		}
		else if(id == 'Judges')
		{
			judge.style.visibility = 'visible';
		}
		else if(id == 'Other Monitors')
		{
			other.style.visibility = 'visible';
		}
		else if(id == 'Prosecutors')
		{
			prosecutor.style.visibility = 'visible';
		}
		else if(id == 'Probation Officers')
		{
			probationO.style.visibility = 'visible';
		}
		else if(id == 'Probation Jurisdictions')
		{
			ProbationJ.style.visibility = 'visible';
		}
		else if(id == 'Court Jurisdictions')
		{
			court.style.visibility = 'visible';
		}
		
		
		
	}


}// @startlock
return constructor;
})();// @endlock
