
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralProsecutorsCorrespondenceView';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var prosVoidedCorrespondanceCheck = {};	// @checkbox
	var prosCorCloseButton = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	prosVoidedCorrespondanceCheck.change = function prosVoidedCorrespondanceCheck_change (event)// @startlock
	{// @endlock
		var status = $$(getHtmlId("prosVoidedCorrespondanceCheck")).getValue();
		var id = sources.prosecutorCorespondance.ProsecutorCorrespondenceID;
		//var id  = $$(getHtmlId('attHiddenCorrId')).getValue();
		var myObject8 = 
			{
				token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:16,
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

	prosCorCloseButton.click = function prosCorCloseButton_click (event)// @startlock
	{// @endlock
		fillCorrespondance();
		$$(getHtmlId('prosCorrCont')).setSplitPosition(1290);
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_prosVoidedCorrespondanceCheck", "change", prosVoidedCorrespondanceCheck.change, "WAF");
	WAF.addListener(this.id + "_prosCorCloseButton", "click", prosCorCloseButton.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
