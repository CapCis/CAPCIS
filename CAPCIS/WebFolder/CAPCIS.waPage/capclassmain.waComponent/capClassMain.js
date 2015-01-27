
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'capclassmain';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		debugger;
		var full = document.getElementById(getHtmlId('classFullViewCont'));
		var filter = document.getElementById(getHtmlId('classFilterViewCont'));
		full.style.visibility = 'Visible';
		filter.sytle.visibility = 'Hidden';
	// @region namespaceDeclaration// @startlock
	var filterButton = {};	// @button
	var matrix5 = {};	// @matrix
	var button4 = {};	// @button
	var fullButton = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	filterButton.click = function filterButton_click (event)// @startlock
	{// @endlock
		debugger;
		var filter = document.getElementById(getHtmlId('classFilterViewCont'));
		var full = document.getElementById(getHtmlId('classFullViewCont'));
		var ifHidden = filter.style.visibility;
		if(ifHidden == 'visible')
		{
			
		}
		else
		{
			filter.style.visibility = 'Visible';
			full.sytle.visibility = 'Hidden';
		}
			
			
		
	};// @lock

	matrix5.click = function matrix5_click (event)// @startlock
	{// @endlock
		var htmlID = $comp.id + "_classFilterMatrix";
		var  selectedClass = $$(htmlID).getValue();
		
		
	};// @lock

	button4.click = function button4_click (event)// @startlock
	{// @endlock
		
		var day = $$(getHtmlId('combobox2')).getValue();
		var program = $$(getHtmlId('combobox1')).getValue();
		
		if(day == "None" && program == "None")
		{
		/*
		WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	$comp.id, 											//designate the component to load into
		path: 	'/CAPCIS.waPage/capClassMainSelectFullView.waComponent'	//designate the webcomponent to load
		});
		*/
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
		
	
		
		
	};// @lock

	fullButton.click = function fullButton_click (event)// @startlock
	{// @endlock
		debugger;
		var full = document.getElementById(getHtmlId('classFullViewCont'));
		var filter = document.getElementById(getHtmlId('classFilterViewCont'));
		var ifHidden = full.style.visibility;
		if(ifHidden == 'visible')
		{
			
		}
		else
		{
			full.style.visibility = 'Visible';
			filter.sytle.visibility = 'Hidden';
		}			//designate the webcomponent to load	
	
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_filterButton", "click", filterButton.click, "WAF");
	WAF.addListener(this.id + "_matrix5", "click", matrix5.click, "WAF");
	WAF.addListener(this.id + "_button4", "click", button4.click, "WAF");
	WAF.addListener(this.id + "_fullButton", "click", fullButton.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
