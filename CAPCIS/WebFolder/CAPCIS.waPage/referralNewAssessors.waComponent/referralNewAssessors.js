
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralNewAssessors';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var dataGrid1 = {};	// @dataGrid
	var button4 = {};	// @button
	var textField12 = {};	// @textField
	var button2 = {};	// @button
	var button1 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	dataGrid1.onRowClick = function dataGrid1_onRowClick (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('cityComboboxGrid'));
		grid.style.display = 'none';
		
		var recValue = $$(getHtmlId('cityComboboxGrid')).sourceAtt.getValue();
		$$(getHtmlId('cityComboBox')).setValue(recValue);
	};// @lock

	button4.click = function button4_click (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('cityComboboxGrid'));
		if(grid.style.display == 'none')
		{
			grid.style.display = 'block';
		}
		else
		{
			grid.style.display = 'none';
		}
	};// @lock

	textField12.keyup = function textField12_keyup (event)// @startlock
	{// @endlock
		
		if(event.keyCode ===13)
		{
			var currentInput = $$($comp.id+'_cityComboBox').getValue();
			$$($comp.id+'_cityComboBox').setValue(sources.city.CityListing);
			var grid = document.getElementById($comp.id+'_cityComboboxGrid');
			grid.style.display = 'none';
		}
		
		else
		{
			
			city=tempStore;
			sources.city.sync();

			var grid = document.getElementById($comp.id+'_cityComboboxGrid');
			grid.style.display = 'block';

			var currentInput = $$($comp.id+'_cityComboBox').getValue();//textInput.value;
			sources.city.query('CityListing = :1 order by CityListing', { params: [currentInput + "*"]});
		}
	};// @lock

	textField12.blur = function textField12_blur (event)// @startlock
	{// @endlock
		var grid = document.getElementById($comp.id+'_cityComboboxGrid');
			grid.style.display = 'none';
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('mainAssessorCont')).setSplitPosition(1290);
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		var currentCity = $$($comp.id + "_cityComboBox").getValue();
		var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:83,data1:currentCity}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	city = rpcDSelects.getSelect(myObject5);
		
		if( city.length ===0)
		{
			
			var myObject7 = {token:'7836140170460568' ,id:'1',major:3,minor:18,data1:currentCity};
			rpcDInsert.setInsertAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject7]
				});
		}
		
		var myObject7 = {
    token: '7836140170460568',
    id: '1',
    major: 3,
    minor: 0,
    data1: $$(getHtmlId("assessorNameField")).sourceAtt.getValue(),
    data2: $$(getHtmlId("assessorPhoneField")).sourceAtt.getValue(),
    data3: $$(getHtmlId("assesorEmailField")).sourceAtt.getValue(),
    data4: $$(getHtmlId("assesorFaxField")).sourceAtt.getValue(),
    data5: $$(getHtmlId("assesorAddressField")).sourceAtt.getValue(),
    data6: $$(getHtmlId("cityComboBox")).getValue(),
    data7: $$(getHtmlId("assesorStateField")).sourceAtt.getValue(),
    data8: $$(getHtmlId("assesorZipField")).sourceAtt.getValue(),
    data9: $$(getHtmlId("assesorExtField")).sourceAtt.getValue(),
    data10: $$(getHtmlId("assesorMobileField")).sourceAtt.getValue(),
    data11: $$(getHtmlId("assesorNotesField")).sourceAtt.getValue(),
    data12: $$(getHtmlId("assessorFullNameField")).sourceAtt.getValue(),
    data13: $$(getHtmlId("reportingComboBox")).getValue(),
    data14: currentID,
    data15: $$(getHtmlId("assessorInactiveCheckBox")).getValue()
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


var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:5,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
	WAF.addListener(this.id + "_dataGrid1", "onRowClick", dataGrid1.onRowClick, "WAF");
	WAF.addListener(this.id + "_button4", "click", button4.click, "WAF");
	WAF.addListener(this.id + "_textField12", "keyup", textField12.keyup, "WAF");
	WAF.addListener(this.id + "_textField12", "blur", textField12.blur, "WAF");
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
