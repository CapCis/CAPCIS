
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralProsecutorsCorrespondenceList';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var prosCorrespondanceGrid = {};	// @dataGrid
	var prosCorrespondanceActiveBox = {};	// @combobox
	var button2 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	prosCorrespondanceGrid.onRowClick = function prosCorrespondanceGrid_onRowClick (event)// @startlock
	{// @endlock
		$$(getHtmlId('prosCorrCont')).setSplitPosition(420);
		$$(getHtmlId('prosSpecificInfoCont')).setSplitPosition(900);
	};// @lock

	prosCorrespondanceActiveBox.change = function prosCorrespondanceActiveBox_change (event)// @startlock
	{// @endlock
		fillCorrespondance();
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		var myObject8 = 
			{
				token:'7836140170460568' ,id:'1',major:3,minor:16,
				data1:$$(getHtmlId("prosNewCoresspondenceField")).getValue(),
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
			
			$$(getHtmlId('prosNewCoresspondenceField')).setValue("");
			fillCorrespondance();
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_prosCorrespondanceGrid", "onRowClick", prosCorrespondanceGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_prosCorrespondanceActiveBox", "change", prosCorrespondanceActiveBox.change, "WAF");
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
