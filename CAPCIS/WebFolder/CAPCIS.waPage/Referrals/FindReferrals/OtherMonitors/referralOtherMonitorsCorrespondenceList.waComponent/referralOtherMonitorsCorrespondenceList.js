﻿
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralOtherMonitorsCorrespondenceList';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var omCorrespondanceGrid = {};	// @dataGrid
	var omCorrespondanceActiveBox = {};	// @combobox
	var button2 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	omCorrespondanceGrid.onRowClick = function omCorrespondanceGrid_onRowClick (event)// @startlock
	{// @endlock
		$$(getHtmlId('omCorrCont')).setSplitPosition(420);
		$$(getHtmlId('omSpecificInfoCont')).setSplitPosition(900);
		
	};// @lock

	omCorrespondanceActiveBox.change = function omCorrespondanceActiveBox_change (event)// @startlock
	{// @endlock
		fillCorrespondance();
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock

		var myObject8 = 
			{
				token:'7836140170460568' ,id:'1',major:3,minor:10,
				data1:$$(getHtmlId("omNewCoresspondenceField")).getValue(),
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
			
			$$(getHtmlId('omNewCoresspondenceField')).setValue("");
			fillCorrespondance();
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_omCorrespondanceGrid", "onRowClick", omCorrespondanceGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_omCorrespondanceActiveBox", "change", omCorrespondanceActiveBox.change, "WAF");
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
