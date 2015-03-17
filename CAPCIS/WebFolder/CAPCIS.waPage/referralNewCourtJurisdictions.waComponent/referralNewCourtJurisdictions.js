
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralNewCourtJurisdictions';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var closeCourtJurisdictionCurrentButton = {};	// @button
	var submitButton = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	closeCourtJurisdictionCurrentButton.click = function closeCourtJurisdictionCurrentButton_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('mainCourtJurisdictionCont')).setSplitPosition(1290);
	};// @lock

	submitButton.click = function submitButton_click (event)// @startlock
	{// @endlock
		
		
		
		//run update if needed
		
			var myObject7 = 
			{
				token:'7836140170460568' ,id:'1',major:3,minor:4,
				data1:$$(getHtmlId("courtJurisdictionNameField")).sourceAtt.getValue(),
				data2:$$(getHtmlId("courtJurisdictionPhoneField")).sourceAtt.getValue(),
				data3:$$(getHtmlId("courtJurisdictionEmailField")).sourceAtt.getValue(),
				data4:$$(getHtmlId("courtJurisdictionFaxField")).sourceAtt.getValue(),
				data5:$$(getHtmlId("courtJurisdictionAddressField")).sourceAtt.getValue(),
				data6:$$(getHtmlId("cityComboBox")).getValue(),
				data7:$$(getHtmlId("courtJurisdictionStateField")).sourceAtt.getValue(),
				data8:$$(getHtmlId("courtJurisdictionZipField")).sourceAtt.getValue(),
				data9:$$(getHtmlId("courtJurisdictionExtField")).sourceAtt.getValue(),
				data10:$$(getHtmlId("courtJurisdictionAlternateField")).sourceAtt.getValue(),
				data11:$$(getHtmlId("courtJurisdictionNotesField")).sourceAtt.getValue(),
				data12:$$(getHtmlId("courtJurisdictionDatabaseField")).sourceAtt.getValue(),
				data13:$$(getHtmlId("reportingComboBox")).getValue(),
				data14:currentID,
				data15:$$(getHtmlId("courtJurisdictionInactiveCheckBox")).getValue(),
				data16:$$(getHtmlId("courtJurisdictionFormatField")).getValue()
				
				
				
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
			var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:27,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
	WAF.addListener(this.id + "_closeCourtJurisdictionCurrentButton", "click", closeCourtJurisdictionCurrentButton.click, "WAF");
	WAF.addListener(this.id + "_submitButton", "click", submitButton.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
