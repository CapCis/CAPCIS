
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'capcisRegistrationRequestAdmin';
	// @endregion// @endlock

	this.load = function (data) {// @lock
	
	debugger;
	var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:0,minor:5};	
	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				debugger;
		 				dsInitialRegistration = result;
		 				sources.dsInitialRegistration.sync();		 										
					},
					'onError': function(error){
						alert(error);
					},
					'params': [myObject]
	});	
	
	// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:0,minor:4,major2:0,minor2:5,
		firstName:$$($comp.id + "_textField1").getValue(),
		middleName:$$($comp.id + "_textField3").getValue(),
		lastName:$$($comp.id + "_textField2").getValue(),
		email:$$($comp.id + "_textField5").getValue(),
		phone:$$($comp.id + "_textField6").getValue(),
		organization:$$($comp.id + "_textField7").getValue(),
		fullDisplayName:$$($comp.id + "_textField4").getValue(),
		password:passHash};
		
		rpcDInsert.setInsertMultiple({
		 			'onSuccess': function(result){
						alert("capcisRegistrationRequestAdmin Account Created Success");
					},
					'onError': function(error){
						alert(error);
					},
					'params': [myObject]
		});
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
