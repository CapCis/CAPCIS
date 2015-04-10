
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralProbationJurisdictionsCorrespondenceView';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var pjVoidedCorrespondanceCheck = {};	// @checkbox
	var pjCorCloseButton = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	pjVoidedCorrespondanceCheck.change = function pjVoidedCorrespondanceCheck_change (event)// @startlock
	{// @endlock
		var status = $$(getHtmlId("pjVoidedCorrespondanceCheck")).getValue();
		var id = sources.probationJurisdictionCorespondance.POJurisdictionCorrespondenceID;
		var myObject8 = 
			{
				token:'7836140170460568' ,id:'1',major:3,minor:12,
				data2:status,
				data3: id
			}; //dontf
			
			
			rpcDUpdate.setUpdateAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject8]
				});
		
	};// @lock

	pjCorCloseButton.click = function pjCorCloseButton_click (event)// @startlock
	{// @endlock
		fillCorrespondance();
		$$(getHtmlId('pjCorrCont')).setSplitPosition(1290);
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_pjVoidedCorrespondanceCheck", "change", pjVoidedCorrespondanceCheck.change, "WAF");
	WAF.addListener(this.id + "_pjCorCloseButton", "click", pjCorCloseButton.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
