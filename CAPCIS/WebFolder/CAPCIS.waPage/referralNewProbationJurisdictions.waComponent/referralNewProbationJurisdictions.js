
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralNewProbationJurisdictions';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var cityComboboxGrid = {};	// @dataGrid
	var button1 = {};	// @button
	var pjCityComboBox = {};	// @textField
	var button15 = {};	// @button
	var button14 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	cityComboboxGrid.onRowClick = function cityComboboxGrid_onRowClick (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('cityComboboxGrid'));
		grid.style.display = 'none';
		
		var recValue = $$(getHtmlId('cityComboboxGrid')).sourceAtt.getValue();
		$$(getHtmlId('pjCityComboBox')).setValue(recValue);
	};// @lock

	button1.click = function button1_click (event)// @startlock
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

	pjCityComboBox.keyup = function pjCityComboBox_keyup (event)// @startlock
	{// @endlock
		if(event.keyCode ===13)
		{
			var currentInput = $$($comp.id+'_pjCityComboBox').getValue();
			$$($comp.id+'_pjCityComboBox').setValue(sources.city.CityListing);
			var grid = document.getElementById($comp.id+'_cityComboboxGrid');
			grid.style.display = 'none';
		}
		
		else
		{
			
			city=tempStore;
			sources.city.sync();

			var grid = document.getElementById($comp.id+'_cityComboboxGrid');
			grid.style.display = 'block';

			var currentInput = $$($comp.id+'_pjCityComboBox').getValue();//textInput.value;
			sources.city.query('CityListing = :1 order by CityListing', { params: [currentInput + "*"]});
		}
	};// @lock

	pjCityComboBox.blur = function pjCityComboBox_blur (event)// @startlock
	{// @endlock
		var grid = document.getElementById($comp.id+'_cityComboboxGrid');
			grid.style.display = 'none';
	};// @lock

	button15.click = function button15_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('mainProbationJurisdictionCont')).setSplitPosition(1290);
	};// @lock

	button14.click = function button14_click (event)// @startlock
	{// @endlock
		var currentCity = $$($comp.id + "_pjCityComboBox").getValue();
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
var myObject7 = 
			{
				
				token:'7836140170460568' ,id:'1',major:3,minor: 13,
				data1:$$(getHtmlId("pjName")).sourceAtt.getValue(),
				data2:$$(getHtmlId("pjPhone")).sourceAtt.getValue(),
				data4:$$(getHtmlId("pjFax")).sourceAtt.getValue(),
				data5:$$(getHtmlId("pjAddress")).getValue(),
				data6:$$(getHtmlId("pjCityComboBox")).getValue(),
				data7:$$(getHtmlId("pjState")).sourceAtt.getValue(),
				data8:$$(getHtmlId("pjZip")).sourceAtt.getValue(),
				data11:$$(getHtmlId("pjNotes")).sourceAtt.getValue(),
				data14:currentID,
				data15:$$(getHtmlId("pjInactive")).getValue()
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
	 		
			var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:63,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
	WAF.addListener(this.id + "_cityComboboxGrid", "onRowClick", cityComboboxGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	WAF.addListener(this.id + "_pjCityComboBox", "keyup", pjCityComboBox.keyup, "WAF");
	WAF.addListener(this.id + "_pjCityComboBox", "blur", pjCityComboBox.blur, "WAF");
	WAF.addListener(this.id + "_button15", "click", button15.click, "WAF");
	WAF.addListener(this.id + "_button14", "click", button14.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
