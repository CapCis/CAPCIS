
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralProbationOfficersCorrespondenceList';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var poCorrespondanceGrid = {};	// @dataGrid
	var poCorrespondanceActiveBox = {};	// @combobox
	var button2 = {};	// @button
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

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_poCorrespondanceGrid", "onRowClick", poCorrespondanceGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_poCorrespondanceActiveBox", "change", poCorrespondanceActiveBox.change, "WAF");
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
