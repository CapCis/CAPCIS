﻿
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralProbationOfficersCorrespondenceView';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var poCorrespondanceGrid = {};	// @dataGrid
	var poCorrespondanceActiveBox = {};	// @combobox
	var button2 = {};	// @button
	var poVoidedCorrespondanceCheck = {};	// @checkbox
	var poCorCloseButton = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	poCorrespondanceGrid.onRowClick = function poCorrespondanceGrid_onRowClick (event)// @startlock
	{// @endlock
		$$(getHtmlId('poCorrCont')).setSplitPosition(420);
		$$(getHtmlId('poSpecificInfoCont')).setSplitPosition(900);		
	};// @lock

	poCorrespondanceActiveBox.change = function poCorrespondanceActiveBox_change (event)// @startlock
	{// @endlock
		fillCorrespondance();
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		var myObject8 = 
			{
				token:'7836140170460568' ,id:'1',major:3,minor:14,
				data1:$$(getHtmlId("poNewCoresspondenceField")).getValue(),
				data2:currentID
			}; //dontf
			
			rpcDInsert.setInsertAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject8]
				});
			
			$$(getHtmlId('poNewCoresspondenceField')).setValue("");
			fillCorrespondance();
	};// @lock

	poVoidedCorrespondanceCheck.change = function poVoidedCorrespondanceCheck_change (event)// @startlock
	{// @endlock
		var status = $$(getHtmlId("poVoidedCorrespondanceCheck")).getValue();
		var id = sources.probationOfficerCorespondance.POCorrespondenceID;
		//var id  = $$(getHtmlId('attHiddenCorrId')).getValue();
		var myObject8 = 
			{
				token:'7836140170460568' ,id:'1',major:3,minor:14,
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

	poCorCloseButton.click = function poCorCloseButton_click (event)// @startlock
	{// @endlock
		fillCorrespondance();
		$$(getHtmlId('poCorrCont')).setSplitPosition(1290);
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_poCorrespondanceGrid", "onRowClick", poCorrespondanceGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_poCorrespondanceActiveBox", "change", poCorrespondanceActiveBox.change, "WAF");
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	WAF.addListener(this.id + "_poVoidedCorrespondanceCheck", "change", poVoidedCorrespondanceCheck.change, "WAF");
	WAF.addListener(this.id + "_poCorCloseButton", "click", poCorCloseButton.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
