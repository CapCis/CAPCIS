﻿
	 



















(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'capcisMainSelect';
	// @endregion// @endlock

	this.load = function (data) {// @lock
debugger;
	 var myObject = {token:1 ,id:1,major:0,minor:2};
	 myMenuButtons = rpcDSelects.getSelect(myObject);
	 sources.myMenuButtons.sync();
	 
	 var top = 0;
	 
	 for(var x =0 ; x < myMenuButtons.length ; x++)
	 {
	 	if(myMenuButtons[x].SubHeaderOption === null || myMenuButtons[x].SubHeaderOption === "")
	 	{
	 		tempID = getRandom();
			var buttonElement2 = document.createElement('button'); //HTML tag
        	buttonElement2.setAttribute('id',myMenuButtons[x].FxWebComponentNamesID.toString()); // ID that links to the widget constructor ID
        	buttonElement2.setAttribute('style','width:0px;height:0px;left:0px;top:0px;position:absolute;color:#E1E1E1;font:12px sans-serif;background-color:#001B5A \
        	;border: 1px solid #001B5A;border-radius: 4px;background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(255, 255, 255, 0.4)), color-stop(100%, rgba(255, 255, 255, 0)))\
        	;background-color:hover: #4E75A3');
        	buttonElement2.setAttribute('rel','capcis.css');
        	buttonElement2.addEventListener('click', function(){pageOpener(document.getElementById(this.id))}, false);
        	buttonElement2.setAttribute('class','waf-widget waf-button waf-state-default');
        	document.body.appendChild(buttonElement2); //insert html tag        	
        	var button5 = new WAF.widget.Button({
            'id': myMenuButtons[x].FxWebComponentNamesID.toString(), // ID 
            'data-lib': 'WAF',
            'data-type': 'button',
            'background-color':'#E5E5E5', 
            'data-theme':'#E5E5E5',    
            'data-text': myMenuButtons[x].PrimaryHeaderOption, // title for the button                         
            'class': 'waf-widget waf-button default inherited',
            'style': 'top:500;position:relative'
            });
            //$$(getHtmlId('button' + tempID)).style.top(50);
            $$(getHtmlId('menuButtonCont')).addChild($$(myMenuButtons[x].FxWebComponentNamesID.toString()));
            //$$(getHtmlId('button'+ tempID)).setHeight(25);  
                     
            button5.setWidth(140);            
            button5.setTop(top);
            //button5.setLeft(20);
            button5.setHeight(35);
            top = top + 35;
        } 
	 	else
	 	{
	 		tempID = getRandom();
			var buttonElement2 = document.createElement('button'); //HTML tag
        	buttonElement2.setAttribute('id',myMenuButtons[x].FxWebComponentNamesID.toString()); // ID that links to the widget constructor ID
        	buttonElement2.setAttribute('style','width:0px;height:0px;left:40px;top:0px;position:absolute;color:#E1E1E1;font:12px sans-serif;background-color:#001B5A \
        	;border: 1px solid #001B5A;border-radius: 4px;background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(255, 255, 255, 0.4)), color-stop(100%, rgba(255, 255, 255, 0)))\
        	;background-color:hover: #4E75A3');
        	buttonElement2.setAttribute('rel','capcis.css');
        	buttonElement2.setAttribute('class','waf-widget waf-button capcis capcis');
        	buttonElement2.addEventListener('click', function(){pageOpener(document.getElementById(this.id))}, false);
        	document.body.appendChild(buttonElement2); //insert html tag        	
        	var button6 = new WAF.widget.Button({
            'id': myMenuButtons[x].FxWebComponentNamesID.toString(), // ID 
            'data-lib': 'WAF',
            'data-type': 'button',
            'data-theme':'capcis capcis',    
            'data-text': myMenuButtons[x].SubHeaderOption, // title for the button                         
            'class': 'waf-widget waf-button capcis capcis'
            });
	 		$$(getHtmlId('menuButtonCont')).addChild($$(myMenuButtons[x].FxWebComponentNamesID.toString()));
	 		button6.setParent('menuButtonCont');
	 		button6.setWidth(100);            
            button6.setTop(top);
            button6.setHeight(35);
            top = top + 35;
            
	 	}
	 	
	 
	 }
	function getRandom()
	{
		var domID = Math.floor((Math.random()*100000)+1); //create a random ID
		return domID
	};
	function pageOpener(id)
	{
		var myObject = {token:1 ,id:1,major:0,minor:3,data1:id.id};
	 	myWCName = rpcDSelects.getSelect(myObject)
	 	
	 	WAF.loadComponent ( {											//load webcomponent into this page component1 element
		id: 	'testComponent', 											//designate the component to load into
		path: 	myWCName[0].WebComponentName, 				//designate the webcomponent to load							//data that you want to send to the webcomponent
		});
	 	//sources.myMenuButtons.sync();
		
	};
	
	// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		debugger;
		var testChild = $$(getHtmlId("button1"));
		alert(testChild);
		//$$(getHtmlId("menuBar2")).	
			
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	// @endregion// @endlock

	};// @lock
	
}// @startlock
return constructor;
})();// @endlock
