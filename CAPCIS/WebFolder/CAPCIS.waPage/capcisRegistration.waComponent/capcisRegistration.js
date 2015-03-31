
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'capcisRegistration';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var button2 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock
	
	$$(getHtmlId("textField1")).focus();
	
	button2.click = function button2_click (event)// @startlock
	{// @endlock
		debugger;
		myPassword = $$($comp.id + "_textField8").getValue();		
		var passHash = CryptoJS.SHA3(myPassword).toString();
		var myObject = {major:0,minor:3,
		firstName:$$($comp.id + "_textField1").getValue(),
		middleName:$$($comp.id + "_textField3").getValue(),
		lastName:$$($comp.id + "_textField2").getValue(),
		email:$$($comp.id + "_textField5").getValue(),
		phone:$$($comp.id + "_textField6").getValue(),
		organization:$$($comp.id + "_combobox1").getValue(),
		fullDisplayName:$$($comp.id + "_textField4").getValue(),
		password:passHash};
		
		rpcDInsert.setRegistrationAsync({
		 			'onSuccess': function(result){
		 				debugger;
						//mainListSuccess(result);
						myContainer1 = $$(getHtmlId("container2"));
						myContainer1.domNode.style.visibility = "hidden";
						mySubmitButton = $$(getHtmlId("button2"));
						mySubmitButton.domNode.style.visibility = "hidden";
						$$($comp.id + "_richText1").setValue("Registration Has Been Sent");
					},
					'onError': function(error){
						//console.log(error);
						debugger;
						var errMessage;
						for (var x = 0;x < event.error.length;x++)
						{
							errMessage += (event.error[x].message + ",");
						}
						alert(errMessage);
					},
					'params': [myObject]
		});

		//function mainListSuccess(result)
		//{
			
		//}

		//function mainListError(event)
		//{
				
		//}		
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
