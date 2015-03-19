
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralNewAttorneys';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var button15 = {};	// @button
	var button14 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	button15.click = function button15_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('mainAttorneyCont')).setSplitPosition(1290);
	};// @lock

	button14.click = function button14_click (event)// @startlock
	{// @endlock
		
		
			var myObject7 = 
			{
				token:'7836140170460568' ,id:'1',major:3,minor:3,
				data1:$$(getHtmlId("attName")).sourceAtt.getValue(),
				data2:$$(getHtmlId("attPhone")).sourceAtt.getValue(),
				data3:$$(getHtmlId("attEmail")).sourceAtt.getValue(),
				data4:$$(getHtmlId("attFax")).sourceAtt.getValue(),
				data5:$$(getHtmlId("attAddress")).sourceAtt.getValue(),
				data6:$$(getHtmlId("attCityComboBox")).getValue(),
				data7:$$(getHtmlId("attState")).sourceAtt.getValue(),
				data8:$$(getHtmlId("attZip")).sourceAtt.getValue(),
				data9:$$(getHtmlId("attExt")).sourceAtt.getValue(),
				data10:$$(getHtmlId("attAdditional")).sourceAtt.getValue(),
				data11:$$(getHtmlId("attNotes")).sourceAtt.getValue(),
				data12:$$(getHtmlId("attFullName")).sourceAtt.getValue(),
				data13:$$(getHtmlId("attReportingComboBox")).getValue(),
				data14:currentID,
				data15:$$(getHtmlId("attInactive")).getValue(),
				data16:$$(getHtmlId("attPublicDef")).getValue(),
				data17:$$(getHtmlId("attStaffInfo")).getValue()
				
				
			}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 		
	 		rpcDUpdate.setUpdateAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);
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
		var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:18,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	bakAttorneyInfo = rpcDSelects.getSelect(myObject5);
	 	sources.bakAttorneyInfo.sync();
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
