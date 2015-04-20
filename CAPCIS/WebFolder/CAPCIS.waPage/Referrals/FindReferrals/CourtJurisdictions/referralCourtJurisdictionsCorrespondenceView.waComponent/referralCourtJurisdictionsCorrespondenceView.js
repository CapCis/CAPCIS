
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralCourtJurisdictionsCorrespondenceView';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var button5 = {};	// @button
	var correspondanceGrid = {};	// @dataGrid
	var correspondanceActiveBox = {};	// @combobox
	var button2 = {};	// @button
	var voidCorrespondanceCheck = {};	// @checkbox
	// @endregion// @endlock

	// eventHandlers// @lock

	button5.click = function button5_click (event)// @startlock
	{// @endlock
		
		
			var x = $$(getHtmlId("newCorrespondanceField"));
		var myObject8 = 
			{
				token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:5,
				data1:$$(getHtmlId("newCorrespondanceField")).getValue(),
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
			$$(getHtmlId('newCorrespondanceField')).setValue("");
			fillCorrespondance();
		
	};// @lock

	correspondanceGrid.onRowClick = function correspondanceGrid_onRowClick (event)// @startlock
	{// @endlock
		$$(getHtmlId('container6')).setSplitPosition(420);
		$$(getHtmlId('container3')).setSplitPosition(900);
		
	};// @lock

	correspondanceActiveBox.change = function correspondanceActiveBox_change (event)// @startlock
	{// @endlock
		fillCorrespondance();
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		fillCorrespondance();
		$$(getHtmlId('container6')).setSplitPosition(1290);
	};// @lock

	voidCorrespondanceCheck.change = function voidCorrespondanceCheck_change (event)// @startlock
	{// @endlock
		
		var status = $$(getHtmlId("voidCorrespondanceCheck")).getValue();
		var id = sources.courtJurisdictionCorespondance.CourtJurisdictionCorrespondenceID;
		//var id  = $$(getHtmlId('attHiddenCorrId')).getValue();
		var myObject8 = 
			{
				token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:5,
				
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

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button5", "click", button5.click, "WAF");
	WAF.addListener(this.id + "_correspondanceGrid", "onRowClick", correspondanceGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_correspondanceActiveBox", "change", correspondanceActiveBox.change, "WAF");
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	WAF.addListener(this.id + "_voidCorrespondanceCheck", "change", voidCorrespondanceCheck.change, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
