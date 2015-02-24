
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

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		var passHash = CryptoJS.SHA3($$($comp.id + "_textField8").getValue()).toString();
		var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:0,minor:3,
		firstName:$$($comp.id + "_textField1").getValue(),
		middleName:$$($comp.id + "_textField3").getValue(),
		lastName:$$($comp.id + "_textField2").getValue(),
		email:$$($comp.id + "_textField5").getValue(),
		phone:$$($comp.id + "_textField6").getValue(),
		organization:$$($comp.id + "_textField7").getValue(),
		fullDisplayName:$$($comp.id + "_textField4").getValue(),
		password:passHash};
		
		rpcDInsert(myObject);
		
		tf1 = document.getElementById($comp.id + "_textField1");
		tf1.style.visibility = "hidden";
		tf3 = document.getElementById($comp.id + "_textField3");
		tf3.style.visibility = "hidden";
		tf2 = document.getElementById($comp.id + "_textField2");
		tf2.style.visibility = "hidden";
		tf5 = document.getElementById($comp.id + "_textField5");
		tf5.style.visibility = "hidden";
		tf6 = document.getElementById($comp.id + "_textField6");
		tf6.style.visibility = "hidden";
		tf7 = document.getElementById($comp.id + "_textField7");
		tf7.style.visibility = "hidden";
		tf4 = document.getElementById($comp.id + "_textField4");
		tf4.style.visibility = "hidden";
		tf8 = document.getElementById($comp.id + "_textField8");
		tf8.style.visibility = "hidden";
		b2 = document.getElementById($comp.id + "_button2");
		b2.style.visibility = "hidden";
		
		$$($comp.id + "_richText1").setValue("Registration Has Been Sent");
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
