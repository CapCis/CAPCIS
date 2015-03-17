
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralNewJudges';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var closeJudgeCurrentButton = {};	// @button
	var submitButton = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	closeJudgeCurrentButton.click = function closeJudgeCurrentButton_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('mainJudgeCont')).setSplitPosition(1290);
	};// @lock

	submitButton.click = function submitButton_click (event)// @startlock
	{// @endlock
		
			var myObject7 = 
			{
				
				token:'7836140170460568' ,id:'1',major:3,minor:9,
				data1:$$(getHtmlId("judgeNameField")).sourceAtt.getValue(),
				data2:$$(getHtmlId("judgePhoneField")).sourceAtt.getValue(),
				data3:$$(getHtmlId("judgeEmailField")).sourceAtt.getValue(),
				data4:$$(getHtmlId("judgeFaxField")).sourceAtt.getValue(),
				data5:$$(getHtmlId("judgeAddressField")).getValue(),
				data6:$$(getHtmlId("cityComboBox")).getValue(),
				data7:$$(getHtmlId("judgeStateField")).sourceAtt.getValue(),
				data8:$$(getHtmlId("judgeZipField")).sourceAtt.getValue(),
				data9:$$(getHtmlId("judgeExtField")).sourceAtt.getValue(),
				data10:$$(getHtmlId("judgeMobileField")).sourceAtt.getValue(),
				data11:$$(getHtmlId("judgeNotesField")).sourceAtt.getValue(),
				data12:$$(getHtmlId("judgeFullNameField")).sourceAtt.getValue(),
				data13:$$(getHtmlId("reportingComboBox")).getValue(),
				data14:currentID,
				data15:$$(getHtmlId("judgeInactiveCheckBox")).getValue(),
				data16:$$(getHtmlId("judgeJurisdiction")).getValue()
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
	 		
			var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:45,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
	WAF.addListener(this.id + "_closeJudgeCurrentButton", "click", closeJudgeCurrentButton.click, "WAF");
	WAF.addListener(this.id + "_submitButton", "click", submitButton.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
