
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralNewDHSOfficers';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var closeAssesorCurrentButton = {};	// @button
	var submitButton = {};	// @button
	var dhsFullNameField = {};	// @textField
	// @endregion// @endlock

	// eventHandlers// @lock

	closeAssesorCurrentButton.click = function closeAssesorCurrentButton_click (event)// @startlock
	{// @endlock
		newAssessor = document.getElementById($comp.id);
		$comp.removeComponent();
		newAssessor.style.visibility = 'hidden';
		newAssessor.style.zIndex = '0';
	};// @lock

	submitButton.click = function submitButton_click (event)// @startlock
	{// @endlock

		changed = false;
		
			var myObject7 = 
			{
				token:'7836140170460568' ,id:'1',major:3,minor:7,
				data1:$$(getHtmlId("dhsNameField")).sourceAtt.getValue(),
				data2:$$(getHtmlId("dhsPhoneField")).sourceAtt.getValue(),
				data3:$$(getHtmlId("dhsEmailField")).sourceAtt.getValue(),
				data4:$$(getHtmlId("dhsFaxField")).sourceAtt.getValue(),
				data5:$$(getHtmlId("dhsAddressField")).sourceAtt.getValue(),
				data6:$$(getHtmlId("cityComboBox")).getValue(),
				data7:$$(getHtmlId("dhsStateField")).sourceAtt.getValue(),
				data8:$$(getHtmlId("dhsZipField")).sourceAtt.getValue(),
				data9:$$(getHtmlId("dhsExtField")).sourceAtt.getValue(),
				data10:$$(getHtmlId("dhsMobileField")).sourceAtt.getValue(),
				data11:$$(getHtmlId("dhsNotesField")).sourceAtt.getValue(),
				data12:$$(getHtmlId("dhsFullNameField")).sourceAtt.getValue(),
				data13:$$(getHtmlId("reportingComboBox")).getValue(),
				data14:currentID,
				data15:$$(getHtmlId("dhsInactiveCheckBox")).getValue()
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
	 		
			var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:36,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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

	dhsFullNameField.change = function dhsFullNameField_change (event)// @startlock
	{// @endlock
	
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_closeAssesorCurrentButton", "click", closeAssesorCurrentButton.click, "WAF");
	WAF.addListener(this.id + "_submitButton", "click", submitButton.click, "WAF");
	WAF.addListener(this.id + "_dhsFullNameField", "change", dhsFullNameField.change, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
