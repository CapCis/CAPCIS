
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralProbationJurisdictionsCorrespondenceList';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var pjCorrespondanceGrid = {};	// @dataGrid
	var pjCorrespondanceActiveBox = {};	// @combobox
	var button2 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	pjCorrespondanceGrid.onRowClick = function pjCorrespondanceGrid_onRowClick (event)// @startlock
	{// @endlock
		$$(getHtmlId('pjCorrCont')).setSplitPosition(420);
		$$(getHtmlId('pjSpecificInfoCont')).setSplitPosition(900);
		
	};// @lock

	pjCorrespondanceActiveBox.change = function pjCorrespondanceActiveBox_change (event)// @startlock
	{// @endlock
		fillCorrespondance();
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		var myObject8 = 
			{
				token:'7836140170460568' ,id:'1',major:3,minor:12,
				data1:$$(getHtmlId("pjNewCoresspondenceField")).getValue(),
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
			
			$$(getHtmlId('pjNewCoresspondenceField')).setValue("");
			fillCorrespondance();
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_pjCorrespondanceGrid", "onRowClick", pjCorrespondanceGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_pjCorrespondanceActiveBox", "change", pjCorrespondanceActiveBox.change, "WAF");
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
