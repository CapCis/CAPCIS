
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'capcisLogin';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		debugger;
		$$(getHtmlId("tfUserName")).focus();
	//(data.userData.myTestValue);
	// @region namespaceDeclaration// @startlock
	var tfPassword = {};	// @textField
	var button1 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	tfPassword.keydown = function tfPassword_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode === 13) 
		{
			loginGo();			
		}
		
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		debugger;
		this.id;
		loginGo();
	};// @lock
	
	function loginGo()
	{
		$$(getHtmlId("rtMessage")).setValue("");
		var myPassword = $$(getHtmlId("tfPassword")).getValue();
        var passHash = CryptoJS.SHA3(myPassword).toString();   //Hash password on client        
		dsLogin = rpcGetToken.getToken(myArray = {data1:passHash,major:0,minor:0,user:$$(getHtmlId("tfUserName")).getValue()});		
		sources.dsLogin.sync();	
		
		
		if (dsLogin.length !== 2)
		{
			if(dsLogin.myToken === "err")
			{
				$$(getHtmlId("rtMessage")).setValue("Invalid User Name Or Password");
			}
			else 
			{
				$$("capcisSignInOut").setValue("Sign Out");			
				userConfigObj.fullName = dsLogin[0].FullName;
				userConfigObj.userName = $$(getHtmlId("tfUserName")).getValue();
				userConfigObj.secToken = dsLogin[0].myToken;
				userConfigObj.userID = dsLogin[0].FxUserAccountsID;
				userConfigObj.selectedUserDivision = dsLogin[0].myDivisionResults[0].FK_DivisionInformationID;
				$$("capcisUserGreeting").setValue("Hello, "+userConfigObj.fullName);				
				for (var x = 0;x < dsLogin[0].myDivisionResults.length;x++)
				{
					userConfigObj.approvedDivArray[x] = dsLogin[0].myDivisionResults[x].FK_DivisionInformationID;
				}
				$$("capcisLoginWC").removeComponent();
				$$("capcisSignInOut").toggle("hidden");
				WAF.loadComponent ( {											//load webcomponent into this page component1 element
				id: 	'capcisMainSelect', 											//designate the component to load into
				path: 	'/CAPCIS.waPage/capcisMainSelect.waComponent', 				//designate the webcomponent to load
				userData: 	{myTestData: 'I made it'}							//data that you want to send to the webcomponent
				});
				
				WAF.loadComponent ( {											//load webcomponent into this page component1 element
				id: 	'capcisMainWC', 											//designate the component to load into
				path: 	'/CAPCIS.waPage/capcisPrimary.waComponent'				//designate the webcomponent to load
				});
				
			}
		}
		else
		{
			$$(getHtmlId("rtMessage")).setValue("Invalid User Name Or Password");
		}
	}
	// @region eventManager// @startlock
	WAF.addListener(this.id + "_tfPassword", "keydown", tfPassword.keydown, "WAF");
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	// @endregion// @endlock
	//$$(getHtmlId('textField2')).setValue(data.myData);
	//var myT = data.myData;
	



	};// @lock


}// @startlock
return constructor;
})();// @endlock
