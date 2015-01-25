
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'capClassMainSelectOptions';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
		var myObject = {token:'7836140170460568' ,id:'1',major:2,minor:1}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	myPrograms = rpcDSelects.getSelect(myObject);
	 	sources.myPrograms.sync();
	 	
	 		 	
	 	

	// @region namespaceDeclaration// @startlock
	var matrix2 = {};	// @matrix
	var filterButton = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	matrix2.click = function matrix2_click (event)// @startlock
	{// @endlock
		var htmlID = $comp.id + "_classFilterMatrix";
		var  selectedClass = $$(htmlID).getValue();
		
		
	};// @lock

	filterButton.click = function filterButton_click (event)// @startlock
	{// @endlock
		
		var day = $$(getHtmlId('combobox2')).getValue();
		var program = $$(getHtmlId('combobox1')).getValue();
		
		if(day == "None" && program == "None")
		{
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id, 											//designate the component to load into
		path: 	'/CAPCIS.waPage/capClassMainSelectFullView.waComponent'	//designate the webcomponent to load
		});
		
		}
		else if(day == "None")
		{
			var myObject3 = {token:'7836140170460568' ,id:'1',major:2,minor:3,data1:program}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 		filterResults = rpcDSelects.getSelect(myObject3);
	 		sources.filterResults.sync();
			
			
		}
		else if(program == "None")
		{
			var myObject4 = {token:'7836140170460568' ,id:'1',major:2,minor:4,data1:day}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 		filterResults = rpcDSelects.getSelect(myObject4);
	 		sources.filterResults.sync();
		}
		else
		{
			var myObject5 = {token:'7836140170460568' ,id:'1',major:2,minor:2,data1:day,data2:program}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 		filterResults = rpcDSelects.getSelect(myObject5);
	 		sources.filterResults.sync();
			
		}
		
		//var myObject2 = {token:'7836140170460568' ,id:'1',major:2,minor:2,data1:day,data2:program}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	//myClassList = rpcDSelects.getSelect(myObject2);
	 	//sources.myClassList.sync();	//get list of classes
		
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_matrix2", "click", matrix2.click, "WAF");
	WAF.addListener(this.id + "_filterButton", "click", filterButton.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
