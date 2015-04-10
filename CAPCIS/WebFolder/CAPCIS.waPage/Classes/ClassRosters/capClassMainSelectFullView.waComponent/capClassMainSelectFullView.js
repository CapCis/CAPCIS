
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'capClassMainSelectFullView';
	// @endregion// @endlock

	this.load = function (data) {// @lock
	
	 	
	 	
	 var myObject = {token:'7836140170460568' ,id:'1',major:2,minor:0}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 myClassList = rpcDSelects.getSelect(myObject);
	 sources.myClassList.sync();	//get list of classes
	 
	 var muNotDone = true;
	 var lastDayWritten = "";
	 var top =0;
	 
	 for(var x = 0; x < myClassList.length ; x++) //run through list
	 {
	 	
	 	
	 	if(myClassList[x].ClassType == "Class") //if this is a class entry
	 	{
	 		if(x===0)//this is the first class
	 		{
	 			var textInput1 =  document.createElement('richText');
	 			textInput1.setAttribute('type','richText');
	 			textInput1.setAttribute('id','Class2'); // ID that links to the widget constructor ID
        		textInput1.setAttribute('style','width:60px;height:12px;left:0px;top:0px;position:absolute;font:12px sans-serif;color:rgba(0,27,90,100);font-weight:bold');
        		textInput1.setAttribute('rel','capcis.css');
        		//textInput.addEventListener('click', function(){pageOpener(document.getElementById(this.id))}, false);
        		textInput1.setAttribute('class','waf-widget waf-richText waf-state-default');
        		document.body.appendChild(textInput1); //insert html tag
        		
        		var textField2 = new WAF.widget.RichText({
            		'id': "Class2", // ID 
            		'data-lib': 'WAF',
            		'data-type': 'textField',
            		//'background-color':'#E5E5E5', 
            		//'data-theme':'#E5E5E5',                           
            		'class': 'waf-widget waf-textField default inherited'
            		//'style': 'top:500;position:relative'
            	});
            	
            	var testme = getHtmlId('classFullViewCont');
            	var testicles = $comp.id;
            	$$(getHtmlId('classFullViewCont')).addChild($$("Class2"));
                             
            	$$('Class2').setValue('Class');
            	textField2.setWidth(100);
            	textField2.setTop(top);
            	textField2.setHeight(12);
            	top = top + 14;
	 			
	 		}
	 		
	 			if(lastDayWritten != myClassList[x].ClassDay) //this is a new day 
	 			{	
	 				var textInput =  document.createElement('richText');
	 				textInput.setAttribute('type','richText');
					textInput.setAttribute('id',myClassList[x].ClassDay.toString()+ "class"); // ID that links to the widget constructor ID
        			textInput.setAttribute('style','width:60px;height:12px;left:15px;top:0px;position:absolute;font:12px sans-serif;color:rgba(0,27,90,100);font-weight:bold');
        			textInput.setAttribute('rel','capcis.css');
        			//textInput.addEventListener('click', function(){pageOpener(document.getElementById(this.id))}, false);
        			textInput.setAttribute('class','waf-widget waf-richText waf-state-default');
        			document.body.appendChild(textInput); //insert html tag
        		
        			var textField2 = new WAF.widget.RichText({
            			'id': myClassList[x].ClassDay.toString()+"class", // ID 
            			'data-lib': 'WAF',
            			'data-type': 'textField',
            			//'background-color':'#E5E5E5', 
            			//'data-theme':'#E5E5E5',                           
            			'class': 'waf-widget waf-textField default inherited'
            			//'style': 'top:500;position:relative'
            		});
            
            		$$(getHtmlId('classFullViewCont')).addChild($$(myClassList[x].ClassDay.toString()+"class"));
            
            		$$(myClassList[x].ClassDay.toString()+"class").setValue(myClassList[x].ClassDay.toString());
            		textField2.setWidth(100);
            		textField2.setTop(top);
            		textField2.setHeight(12);
            		top = top + 14;
	 				lastDayWritten = myClassList[x].ClassDay;
	 			}
	 			if(lastDayWritten == myClassList[x].ClassDay) // this is not a new day
	 			{
	 				var textInput2 =  document.createElement('richText');
	 				textInput2.setAttribute('type','richText');
					textInput2.setAttribute('id',myClassList[x].Class.toString()); // ID that links to the widget constructor ID
        			textInput2.setAttribute('style','width:60px;height:12px;left:30px;top:0px;position:absolute;font:12px sans-serif;color:rgba(0,27,90,100);font-weight:bold');
        			textInput2.setAttribute('rel','capcis.css');
        			textInput2.addEventListener('click', function(){pageOpener(document.getElementById(this.id))}, false);
        			textInput2.setAttribute('class','waf-widget waf-richText waf-state-default');
        			document.body.appendChild(textInput2); //insert html tag
        		
        			var textField2 = new WAF.widget.RichText({
            			'id': myClassList[x].Class.toString(), // ID 
            			'data-lib': 'WAF',
            			'data-type': 'textField',
            			//'background-color':'#E5E5E5', 
            			//'data-theme':'#E5E5E5',                           
            			'class': 'waf-widget waf-textField default inherited'
            			//'style': 'top:500;position:relative'
            		});
            
            		$$(getHtmlId('classFullViewCont')).addChild($$(myClassList[x].Class.toString()));
            
            		$$(myClassList[x].Class.toString()).setValue(myClassList[x].Class.toString());
            		textField2.setWidth(100);
            		textField2.setTop(top);
            		textField2.setHeight(12);
            		top = top + 14;
	 				currentDay = myClassList[x].WeekDayNumber;	 			
	 			}
	 			
	 		
	 		if(myClassList[x+1].ClassType == "MU Class")
	 		{
	 			lastDayWritten= "";
	 		}
	 		
	 		
	 	}
	 	else if(myClassList[x].ClassType == "MU Class") //this is a MU Class entry
	 	{
	 		if(muNotDone) //first MU class
	 		{
	 			muNotDone = false;
	 			var textInput3 =  document.createElement('richText');
	 			textInput3.setAttribute('type','richText');
	 			textInput3.setAttribute('id','muClass2'); // ID that links to the widget constructor ID
        		textInput3.setAttribute('style','width:60px;height:12px;left:0px;top:0px;position:absolute;font:12px sans-serif;color:rgba(0,27,90,100);font-weight:bold');
        		textInput3.setAttribute('rel','capcis.css');
        		//textInput.addEventListener('click', function(){pageOpener(document.getElementById(this.id))}, false);
        		textInput3.setAttribute('class','waf-widget waf-richText waf-state-default');
        		document.body.appendChild(textInput3); //insert html tag
        		
        		var textField2 = new WAF.widget.RichText({
            		'id': "muClass2", // ID 
            		'data-lib': 'WAF',
            		'data-type': 'textField',
            		//'background-color':'#E5E5E5', 
            		//'data-theme':'#E5E5E5',                           
            		'class': 'waf-widget waf-textField default inherited'
            		//'style': 'top:500;position:relative'
            	});
            
            	$$(getHtmlId('classFullViewCont')).addChild($$('muClass2'));
            
            	$$('muClass2').setValue('MU Class');
            	textField2.setWidth(100);
            	textField2.setTop(top);
            	textField2.setHeight(12);
            	top = top + 14;
	 			
	 		}
	 		
	 			if(lastDayWritten != myClassList[x].ClassDay) //this is a new day 
	 			{
	 				var textInput4 =  document.createElement('richText');
	 				textInput4.setAttribute('type','richText');
					textInput4.setAttribute('id',myClassList[x].ClassDay.toString()); // ID that links to the widget constructor ID
        			textInput4.setAttribute('style','width:60px;height:12px;left:15px;top:0px;position:absolute;font:12px sans-serif;color:rgba(0,27,90,100);font-weight:bold');
        			textInput4.setAttribute('rel','capcis.css');
        			//textInput.addEventListener('click', function(){pageOpener(document.getElementById(this.id))}, false);
        			textInput4.setAttribute('class','waf-widget waf-richText waf-state-default');
        			document.body.appendChild(textInput4); //insert html tag
        		
        			var textField2 = new WAF.widget.RichText({
            			'id': myClassList[x].ClassDay.toString(), // ID 
            			'data-lib': 'WAF',
            			'data-type': 'textField',
            			//'background-color':'#E5E5E5', 
            			//'data-theme':'#E5E5E5',                           
            			'class': 'waf-widget waf-textField default inherited'
            			//'style': 'top:500;position:relative'
            		});
            
            		$$(getHtmlId('classFullViewCont')).addChild($$(myClassList[x].ClassDay.toString()));
            
            		$$(myClassList[x].ClassDay.toString()).setValue(myClassList[x].ClassDay.toString());
            		textField2.setWidth(100);
            		textField2.setTop(top);
            		textField2.setHeight(12);
            		top = top + 14;
	 				lastDayWritten = myClassList[x].ClassDay;
	 			}
	 			if(lastDayWritten == myClassList[x].ClassDay)//not a new day
	 			{
	 				var textInput5 =  document.createElement('richText');
	 				textInput5.setAttribute('type','richText');
					textInput5.setAttribute('id',myClassList[x].Class.toString()); // ID that links to the widget constructor ID
        			textInput5.setAttribute('style','width:60px;height:12px;left:30px;top:0px;position:absolute;font:12px sans-serif;color:rgba(0,27,90,100);font-weight:bold');
        			textInput5.setAttribute('rel','capcis.css');
        			textInput5.addEventListener('click', function(){pageOpenerMU(document.getElementById(this.id))}, false);
        			textInput5.setAttribute('class','waf-widget waf-richText waf-state-default');
        			document.body.appendChild(textInput5); //insert html tag
        		
        			var textField2 = new WAF.widget.RichText({
            			'id': myClassList[x].Class.toString(), // ID 
            			'data-lib': 'WAF',
            			'data-type': 'textField',
            			//'background-color':'#E5E5E5', 
            			//'data-theme':'#E5E5E5',                           
            			'class': 'waf-widget waf-textField default inherited'
            			//'style': 'top:500;position:relative'
            		});
            
            		$$(getHtmlId('classFullViewCont')).addChild($$(myClassList[x].Class.toString()));
            
            		$$(myClassList[x].Class.toString()).setValue(myClassList[x].Class.toString());
            		textField2.setWidth(100);
            		textField2.setTop(top);
            		textField2.setHeight(12);
            		top = top + 14;
	 				currentDay = myClassList[x].WeekDayNumber;
	 			
	 			
	 			}
	 			
	 		
	 			
	 		
	 	}
	 	
	 	
	 }
	 function pageOpenerMU(id)
	 {
	 	debugger;
		alert("clicked" + id.id.toString());
		var myObject = {token:'7836140170460568' ,id:'1',major:2,minor:6,data1:id.id.toString(),weekStartDate:'2014-3-16',weekEndDate:'2014-3-22'}; //dont forget to change token and id
	 	myMURosterList = rpcDSelects.getSelect(myObject);
	 	sources.myMURosterList.sync();
	 	
	 };
	 
	 function pageOpener (id) 
	{
	
		debugger;
		alert("clicked" + id.id.toString());
		var myObject = {token:'7836140170460568' ,id:'1',major:2,minor:5,data1:id.id.toString()}; //dont forget to change token and id
	 	myRosterList = rpcDSelects.getSelect(myObject);
	 	sources.myRosterList.sync();
	 	
	 	
	 	
		
		
		
		
		/*
		var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:0,minor:3,data1:id.id};
	 	myWCName = rpcDSelects.getSelect(myObject);
	 	debugger;
	 	var subTabCount = 0;
	    for (var x = 1; x <= 9; x++)
	    {
	    	if (masterTabArray[x].tabName === id.innerText)
	    	{
	    		for (var y = 0; y <= 9; y++)
	    		{
	    			if (masterTabArray[x].subTab[y][0] === false)
	    			{	    				
	    				masterTabArray[x].subTab[y][0] = true;
	    				$$("capcisMainWC_subTab"+(x+1)+(y+1)).toggle();  //+(x+1)+(y+1)
	    				$$("capcisMainWC_subTab"+(x+1)+(y+1)).focus();	    				
	    				$$("capcisMainWC_tabView").selectTab(x+1);
	    				$$("capcisMainWC_subTabView"+(x+1)).selectTab(y+1);   				
						
						WAF.loadComponent({											//load webcomponent into this page component1 element
						id: 	"capcisMainWC_tabComponent"+(x+1)+(y+1), 											//designate the component to load into
						path: 	myWCName[0].WebComponentName 				//designate the webcomponent to load						
						});
						return
	    			}
	    			if (y === 1)
	    			{
	    			  //make the main tab visible and name it		
	    			}
	    			if (y === 9)
	    			{
	    				alert("No Available " + id + " Tabs");	
	    			}	    			
	    		}
	    		
	    	}
	    	
	    }
	 	
	 	
	 	*/

		
	};
	 
		

	
		

	// @region namespaceDeclaration// @startlock
	// @endregion// @endlock

	// eventHandlers// @lock

	// @region eventManager// @startlock
	// @endregion// @endlock

	};// @lock
	
	
	
	


}// @startlock
return constructor;
})();// @endlock
