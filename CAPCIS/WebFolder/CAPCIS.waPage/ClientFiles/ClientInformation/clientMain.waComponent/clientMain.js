
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'clientMain';
	// @endregion// @endlock

	this.load = function (data) {// @lock
	
	//$$('combobox1').setErrorMessage({message:"Use combo box to select search properties.",tooltip:true})
	// @region namespaceDeclaration// @startlock
	var blogVoidComboBox = {};	// @combobox
	var dataGrid1 = {};	// @dataGrid
	var clientInformationSearchButton = {};	// @button
	var openSearchButton = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	blogVoidComboBox.change = function blogVoidComboBox_change (event)// @startlock
	{// @endlock
		syncBlogs(sources.clientInfoMain0.CIID);
	};// @lock

	dataGrid1.onRowClick = function dataGrid1_onRowClick (event)// @startlock
	{// @endlock
		syncBlogs(sources.clientInfoMain0.CIID);
		var myWidget = document.getElementById($comp.id +"_clientsearchcont");
		myWidget.style.top = "750px";
	};// @lock

	clientInformationSearchButton.click = function clientInformationSearchButton_click (event)// @startlock
	{// @endlock
		debugger;
		var mySearchStr = $$($comp.id + "_clientInfoSearchTextBox").getValue();
		var mySearchOption = $$($comp.id + "_combobox1").getValue();
		if (mySearchOption == "0")
		{
			n = mySearchStr.search(" ");
			if (n != -1)
			{
				var mySplitStr = mySearchStr.split(" ");
				var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:7,minor:0,data1:mySplitStr[0],data2:mySplitStr[1]};	
				rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				debugger;
						syncClientInfoMain(result);
						
					},
					'onError': function(error){
						
					},
					'params': [myObject]
				});
			}
			else
			{
				var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:7,minor:1,data1:mySearchStr};	
				rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				debugger;
						syncClientInfoMain(result);
								
					},
					'onError': function(error){
						
					},
					'params': [myObject]
				});
			}
		}
		
		
		if ($$($comp.id + "_combobox1").value == "1")
		{
			var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:7,minor:2,data1:mySearchStr};	
			rpcDSelects.getSelectAsync({
		 		'onSuccess': function(result){
					syncClientInfoMain(result);					
				},
				'onError': function(error){
						
				},
				'params': [myObject]
			});
		}
		
		if ($$($comp.id + "_combobox1").value == "2")
		{
			var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:7,minor:3,data1:mySearchStr};	
			rpcDSelects.getSelectAsync({
		 		'onSuccess': function(result){
					syncClientInfoMain(result);				
				},
				'onError': function(error){
						
				},
				'params': [myObject]
			});
		}
		
		if ($$($comp.id + "_combobox1").value == "3")
		{
			var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:7,minor:4,data1:mySearchStr};	
			rpcDSelects.getSelectAsync({
		 		'onSuccess': function(result){
						syncClientInfoMain(result);				
				},
				'onError': function(error){
						
				},
				'params': [myObject]
			});
		}
	};// @lock

	openSearchButton.click = function openSearchButton_click (event)// @startlock
	{// @endlock
		var myWidget = document.getElementById($comp.id +"_clientsearchcont");
		myWidget.style.transitionProperty = "top";
		myWidget.style.transitionDelay = "0s";
		myWidget.style.transitionDuration = ".3s";
		myWidget.style.top = "20px";
	};// @lock




	function syncClientInfoMain (request)
	{
		debugger;
		clientInfoMain0 = request;
		sources.clientInfoMain0.sync();
		
	}

	function syncBlogs (request)
	{
		debugger;
		blogFilterBy = $$($comp.id + "_blogVoidComboBox").getValue();
		
		if (blogFilterBy == "0")
		{
			var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:7,minor:6,data1:request,data2:blogFilterBy};	
			rpcDSelects.getSelectAsync({
		 		'onSuccess': function(result){
					clientInfoBlogs0 = result;
					sources.clientInfoBlogs0.sync();					
				},
				'onError': function(error){
						
				},
				'params': [myObject]
			});
		}
		if (blogFilterBy == "1")
		{
			var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:7,minor:6,data1:request,data2:blogFilterBy};	
			rpcDSelects.getSelectAsync({
		 		'onSuccess': function(result){
					clientInfoBlogs0 = result;
					sources.clientInfoBlogs0.sync();					
				},
				'onError': function(error){
						
				},
				'params': [myObject]
			});
		}
		if (blogFilterBy == "2")
		{
			var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:7,minor:5,data1:request};	
			rpcDSelects.getSelectAsync({
		 		'onSuccess': function(result){
					clientInfoBlogs0 = result;
					sources.clientInfoBlogs0.sync();					
				},
				'onError': function(error){
						
				},
				'params': [myObject]
			});
		}
		
	}
		
	// @region eventManager// @startlock
	WAF.addListener(this.id + "_blogVoidComboBox", "change", blogVoidComboBox.change, "WAF");
	WAF.addListener(this.id + "_dataGrid1", "onRowClick", dataGrid1.onRowClick, "WAF");
	WAF.addListener(this.id + "_clientInformationSearchButton", "click", clientInformationSearchButton.click, "WAF");
	WAF.addListener(this.id + "_openSearchButton", "click", openSearchButton.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
