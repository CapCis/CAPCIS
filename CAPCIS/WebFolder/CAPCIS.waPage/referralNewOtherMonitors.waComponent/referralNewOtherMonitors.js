
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralNewOtherMonitors';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var button15 = {};	// @button
	var button14 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	button15.click = function button15_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('mainOtherMonitorsCont')).setSplitPosition(1290);
	};// @lock

	button14.click = function button14_click (event)// @startlock
	{// @endlock
		
			var myObject7 = 
			{
				
				token:'7836140170460568' ,id:'1',major:3,minor: 11,
				data1:$$(getHtmlId("omName")).sourceAtt.getValue(),
				data2:$$(getHtmlId("omPhone")).sourceAtt.getValue(),
				data3:$$(getHtmlId("omEmail")).sourceAtt.getValue(),
				data4:$$(getHtmlId("omFax")).sourceAtt.getValue(),
				data5:$$(getHtmlId("omAddress")).getValue(),
				data6:$$(getHtmlId("omCityComboBox")).getValue(),
				data7:$$(getHtmlId("omState")).sourceAtt.getValue(),
				data8:$$(getHtmlId("omZip")).sourceAtt.getValue(),
				data9:$$(getHtmlId("omExt")).sourceAtt.getValue(),
				data10:$$(getHtmlId("omAdditional")).sourceAtt.getValue(),
				data11:$$(getHtmlId("omNotes")).sourceAtt.getValue(),
				data12:$$(getHtmlId("omFullName")).sourceAtt.getValue(),
				data13:$$(getHtmlId("omReportingComboBox")).getValue(),
				data14:currentID,
				data15:$$(getHtmlId("omInactive")).getValue(),
				data16:$$(getHtmlId("omJurisdiction")).getValue()
			}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 		rpcDUpdate.setUpdateAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);vo
					},
					'params': [myObject7]
				});
				
	 		rpcDInsert.setInsertAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject7]
				});
				
				
	 		fillMainTable();
	 		
			var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:54,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						bakListSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject5]
				});
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button15", "click", button15.click, "WAF");
	WAF.addListener(this.id + "_button14", "click", button14.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
