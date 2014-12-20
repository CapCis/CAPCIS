
WAF.onAfterInit = function onAfterInit() {// @lock
	var tabCount = 0;

// @region namespaceDeclaration// @startlock
	var button2 = {};	// @button
// @endregion// @endlock
	

// eventHandlers// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		
		if(tabCount > 0)
		{
			$$('tabView1').addTab("test",true);
		}
		
		
		var domID = Math.floor((Math.random()*100000)+1);
		
		var componentDomElement = document.createElement('div');
 		componentDomElement.setAttribute('id', 'comp1' + domID);
 		componentDomElement.setAttribute('style', 'width:1000px;height1000px');
 		componentDomElement.setAttribute('class', 'waf-widget waf-component');
 		document.body.appendChild(componentDomElement);
		
		var myComponentWidget = new WAF.widget.Component({
 		'id': 'comp1' + domID,
 		'data-lib': 'WAF',
 		'data-type': 'component',
 		'class': 'waf-widget waf-component default inherited'
 		//'data-path': '/capcisLogin.waComponent'
 		});
 		myComponentWidget.loadComponent({
 			id: 'comp1' + domID,
 			path: '/CAPCIS.waPage/capcisLogin.waComponent'		
 		});
		var container = $$('tabView1').getTabContainer($$('tabView1').countTabs()).id;
		$$(container).addChild($$('comp1'+domID));
		
		tabCount++;
		
	};// @lock
	
	

// @region eventManager// @startlock
	WAF.addListener("button2", "click", button2.click, "WAF");
// @endregion
};// @endlock
