
WAF.onAfterInit = function onAfterInit() {// @lock
	/*
	debugger;
	var tabCount = 0;
	
	
	
// @region namespaceDeclaration// @startlock
	var textField1 = {};	// @textField
	var button1 = {};	// @button
// @endregion// @endlock
	var tempID = getRandom();
	var buttonElement = document.createElement('button'); //HTML tag
        buttonElement.setAttribute('id','button' + tempID); // ID that links to the widget constructor ID
        //buttonElement.setAttribute('onclick',testFunction());
       //buttonElement.setAttribute('style','width:92px;height:22px;left:128px;top:511px;position:absolute');
        //buttonElement.setAttribute('class','waf-widget waf-button default inherited');
        //buttonElement.onclick = testFunction();
        buttonElement.addEventListener('click', function(){testFunction(document.getElementById(this.id))}, false);
        document.body.appendChild(buttonElement);
        
        var button3 = new WAF.widget.Button({
            'id': 'button' + tempID, // ID 
            'data-lib': 'WAF',
            'data-type': 'button',    
            'data-text': 'Next', // title for the button                         
            'class': 'waf-widget waf-button default inherited'
            });
 
       var container = $$('tabView1').getTabContainer($$('tabView1').countTabs()).id; //get container of our current tab
		//$$(container).addChild($$('comp1'+domID)); //add our widget to the container of the current tab
		$$(container).addChild($$('button' + tempID));
		
		
		tempID = getRandom();
		var buttonElement2 = document.createElement('button'); //HTML tag
        buttonElement2.setAttribute('id','button' + tempID); // ID that links to the widget constructor ID
        //buttonElement.setAttribute('onclick',testFunction());
       //buttonElement.setAttribute('style','width:92px;height:22px;left:128px;top:511px;position:absolute');
        //buttonElement.setAttribute('class','waf-widget waf-button default inherited');
        //buttonElement.onclick = testFunction();
        buttonElement2.addEventListener('click', function(){testFunction(document.getElementById(this.id))}, false);
        document.body.appendChild(buttonElement2);
        
        
        var button5 = new WAF.widget.Button({
            'id': 'button' + tempID, // ID 
            'data-lib': 'WAF',
            'data-type': 'button',    
            'data-text': 'Next', // title for the button                         
            'class': 'waf-widget waf-button default inherited'
            });
            $$(container).addChild($$('button' + tempID));
	
	function testFunction(id){
		alert(id.id);
		var x =3;
		x= x+3;
	}
	
	function getRandom()
	{
		var domID = Math.floor((Math.random()*100000)+1); //create a random ID
		return domID
	}
	
		var componentDomElement = document.createElement('div');  //create div
 		componentDomElement.setAttribute('id', 'subtab1');
 		//componentDomElement.setAttribute('style', 'width:1000px;height1000px');
 		componentDomElement.setAttribute('class', 'waf-widget waf-tabView');
 		document.body.appendChild(componentDomElement);
 		/*
 		var tabRenderer = document.createElement('tabView');
 		tabRenderer.setAttribute('id', 'subTab1');
 		document.body.appendChild(tabRenderer);
 		*/
 		/*
 		var subTabWidget = new WAF.widget.TabView({
 			'id': 'subtab1'
 			//'data-lib': 'WAF',
 			//'data-type': 'tabView'
 			//'class': 'waf-widget waf-tabView default inherited'
 		});
 		$$(container).addChild($$('subtab1'));
	
// eventHandlers// @lock
*/
	textField1.keydown = function textField1_keydown (event)// @startlock
	{// @endlock
		debugger;
		var key = event.keyCode;
		alert(key);
		var x = 5;
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		debugger;
		
		$$('menuItem3').toggle("hidden");
		var x = 5;
		$$('textField1').focus();
		
		
		
		
	};// @lock
	/*
	button3.click = function button2_click (event)
	{
		
		if(tabCount > 0)
		{
			$$('tabView1').addTab("test",true);
		}
		
		
		var domID = Math.floor((Math.random()*100000)+1); //create a random ID
		
		var componentDomElement = document.createElement('div');  //create div
 		componentDomElement.setAttribute('id', 'comp1' + domID);
 		componentDomElement.setAttribute('style', 'width:1000px;height1000px');
 		componentDomElement.setAttribute('class', 'waf-widget waf-component');
 		document.body.appendChild(componentDomElement);
		/*
		var myComponentWidget = new WAF.widget.Component({
 		'id': 'comp1' + domID,
 		'data-lib': 'WAF',
 		'data-type': 'component',
 		'class': 'waf-widget waf-component default inherited'
 		//'data-path': '/capcisLogin.waComponent'
 		});  //create the widget
 		
		/*
 		myComponentWidget.loadComponent({
 			id: 'comp1' + domID,
 			path: '/CAPCIS.waPage/capcisLogin.waComponent'		
 		});  //set the widget to what we want
 		*/
 		/*
 		var componentDomElement = document.createElement('div');  //create div
 		componentDomElement.setAttribute('id', 'subTab1');
 		//componentDomElement.setAttribute('style', 'width:1000px;height1000px');
 		componentDomElement.setAttribute('class', 'waf-widget waf-tabView');
 		document.body.appendChild(componentDomElement);
 		
 		var tabRenderer = document.createElement('tabView');
 		tabRenderer.setAttribute('id', 'subTab1');
 		document.body.appendChild(tabRenderer);
 		
 		var subTabWidget = new WAF.widget.tabView({
 			'id' : 'subTab1'
 			//'data-lib': 'WAF',
 			//'data-type': 'tabView',
 			//'class': 'waf-widget waf-component default inherited'
 		});
 		
 		
 		
		var container = $$('tabView1').getTabContainer($$('tabView1').countTabs()).id; //get container of our current tab
		//$$(container).addChild($$('comp1'+domID)); //add our widget to the container of the current tab
		$$(container).addChild($$('subTab'));
		tabCount++; //increase tab count
		
	};
	
	
	
	WAF.addListener("button3", "click", button3.click, "WAF");
	*/
// @region eventManager// @startlock
	WAF.addListener("textField1", "keydown", textField1.keydown, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
