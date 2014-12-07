
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var genHash = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	genHash.click = function genHash_click (event)// @startlock
	{// @endlock
		$$("richText2").setValue($$("textUser").getValue());
		var user = $$("textUser").getValue();
		var pass = $$("textPass").getValue();
		var hash = CryptoJS.SHA3("Message");//rpcUtilities.getHash(user,pass);
		$$("hashOut").setValue(hash.toString());
		alert(hash);

	};// @lock

// @region eventManager// @startlock
	WAF.addListener("genHash", "click", genHash.click, "WAF");
// @endregion
};// @endlock
