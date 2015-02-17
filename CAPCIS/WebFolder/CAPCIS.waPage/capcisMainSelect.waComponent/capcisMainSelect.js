
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'capcisMainSelect';
	// @endregion// @endlock

	this.load = function (data) {// @lock
	
	 var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:0,minor:2};
	 myMenuButtons = rpcDSelects.getSelect(myObject);
	 sources.myMenuButtons.sync();
	 
	 var top = 0;
	 
	 for(var x =0 ; x < myMenuButtons.length ; x++)
	 {
	 	if(myMenuButtons[x].SubHeaderOption === null || myMenuButtons[x].SubHeaderOption === "")
	 	{
	 		tempID = getRandom();
			var buttonElement2 = document.createElement('button'); //HTML tag
        	buttonElement2.setAttribute('id',myMenuButtons[x].FxMainSelectWebComponentNamesID.toString()); // ID that links to the widget constructor ID
        	buttonElement2.setAttribute('style','width:0px;height:0px;left:0px;top:0px;position:absolute;text-align:left;color:#E1E1E1;font:14px sans-serif;font-weight:bold;background-color:#001B5A \
        	;border: 0px; border: 0px ;background-color: transparent;cursor:pointer');
        	buttonElement2.addEventListener('click', function(){pageOpener(document.getElementById(this.id))}, false);
        	document.body.appendChild(buttonElement2); //insert html tag        	
        	var button5 = new WAF.widget.Button({
            'id': myMenuButtons[x].FxMainSelectWebComponentNamesID.toString(), // ID 
            'data-lib': 'WAF',
            'data-type': 'button',
            'background-color':'#E5E5E5', 
            'data-theme':'#E5E5E5',    
            'data-text': myMenuButtons[x].PrimaryHeaderOption, // title for the button                         
            'class': 'waf-widget waf-button default inherited',
            'style': 'top:500;position:relative'
            });
            //$$(getHtmlId('button' + tempID)).style.top(50);
            $$(getHtmlId('menuButtonCont')).addChild($$(myMenuButtons[x].FxMainSelectWebComponentNamesID.toString()));
            //$$(getHtmlId('button'+ tempID)).setHeight(25);  
                     
            button5.setWidth(140);            
            button5.setTop(top);
            //button5.setLeft(20);
            button5.setHeight(20);
            top = top + 20;
        }
	 	else
	 	{
	 		tempID = getRandom();
			var buttonElement2 = document.createElement('button'); //HTML tag
        	buttonElement2.setAttribute('id',myMenuButtons[x].FxMainSelectWebComponentNamesID.toString()); // ID that links to the widget constructor ID
        	buttonElement2.setAttribute('style','width:0px;height:0px;left:5px;top:0px;position:absolute;text-align:left;color:#E1E1E1;font:12px sans-serif;background-color:#001B5A \
        	;border: 0px; border: 0px ;background-color: transparent;cursor:pointer');
        	/*buttonElement2.setAttribute('rel','capcis.css');
        	buttonElement2.setAttribute('class','waf-widget waf-button capcis capcis');*/
        	buttonElement2.addEventListener('click', function(){pageOpener(document.getElementById(this.id))}, false);
        	//buttonElement2.addEventListener('mouseover', function(){linkHover(document.getElementById(this.id))}, false);
        	document.body.appendChild(buttonElement2); //insert html tag        	
        	var button6 = new WAF.widget.Button({
            'id': myMenuButtons[x].FxMainSelectWebComponentNamesID.toString(), // ID 
            'data-lib': 'WAF',
            'data-type': 'button',
            'data-theme':'capcis capcis',    
            'data-text': "- "+myMenuButtons[x].SubHeaderOption, // title for the button                         
            'class': 'waf-widget waf-button capcis capcis'
            });
	 		$$(getHtmlId('menuButtonCont')).addChild($$(myMenuButtons[x].FxMainSelectWebComponentNamesID.toString()));
	 		button6.setParent('menuButtonCont');
	 		button6.setWidth(165);            
            button6.setTop(top);
            button6.setHeight(20);
            top = top + 20;
          /* buttonElement2.setAttribute('style','width:0px;height:0px;left:40px;top:0px;position:absolute;color:#E1E1E1;font:12px sans-serif;background-color:#001B5A \
        	;border: 1px solid #001B5A; border: 1px solid rgb(0, 27, 90) ;background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(255, 255, 255, 0.4)), color-stop(100%, rgba(255, 255, 255, 0)));\
        	;text-shadow: rgba(225, 225, 225, 0.3) 0 1px;background-color: rgb(0, 27, 90)'); */
	 	}
	 	
	 
	 }
	function getRandom()
	{
		var domID = Math.floor((Math.random()*100000)+1);  //create a random ID
		return domID;
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function pageOpener (id) 
	{
		debugger;
		var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:0,minor:3,data1:id.id};
	 	myWCName = rpcDSelects.getSelect(myObject);	 	
	 	//var subTabCount = 0;
	    
	    //var mainTabNumber = openOrFindMainTab(myWCName[0].PrimaryHeaderOption);      //go find a main tab to use and return the array number(position)	    
	    //var subTabNumber = openOrFindSubTab(mainTabNumber);     //go find a sub tab to use and return the array number(position	    
	    //var mainColumnNumber = openOrFindMainColumn(myWCName[0].PrimaryHeaderOption);  //go find an open main column
	    //var subColumnNumber = openOrFindSubColumn(mainColumnNumber);  //go find an open sub column
	    
	    
	//Main Tab Section
	    for (var mainColumnFinder = 0; mainColumnFinder <= 9; mainColumnFinder++)                                             //find the Main Tab To Use
	    	{
	    		if (tabColumnTracking[mainColumnFinder].mainColumnName === myWCName[0].PrimaryHeaderOption) 			// If the tab name is found
	    		{
	    			if (myWCName[0].WebComponentName === "/CAPCIS.waPage/clientMain.waComponent")
	    			{
						for (var subColumnFinder = 0; subColumnFinder <= 9; subColumnFinder++)
						{
							if (tabColumnTracking[mainColumnFinder].subColumnOpen[subColumnFinder] === false)
							{								
	   							tabColumnTracking[mainColumnFinder].subColumnOpen[subColumnFinder] = true;
								tabColumnTracking[mainColumnFinder].subColumnTabID[subColumnFinder] = subColumnFinder;								
								tabColumnTracking[mainColumnFinder].subColumnWebComponentName[subColumnFinder] = myWCName[0].WebComponentName;
	    						
	    						var getMainTabButton = document.getElementById("capcisMainWC_mt" + mainColumnFinder.toString());   // set the main tab visible
		    						getMainTabButton.style.visibility = "visible";
			    					getMainTabButton.style.display = "block";		    					
			    					getMainTabButton.style.zIndex = "100";
			    					getMainTabButton.style.top = "0px";
		    						getMainTabButton.style.left = mainColumnPosLeft[mainColumnFinder] + "px";
		    						getMainTabButton.innerText = myWCName[0].PrimaryHeaderOption;
								var getMainTabX = document.getElementById("capcisMainWC_mtc" + mainColumnFinder.toString()); 		// set the main tab x vixible
									getMainTabX.style.visibility = "visible";
									getMainTabX.style.display = "block";
									getMainTabX.style.zIndex = "101";
									getMainTabX.style.top = "0px";
									getMainTabX.style.left = mainColumnPosLeftX[mainColumnFinder] + "px";								
									if (currentVisibleMainContainerId !== "")
	    							{
	    	 							var hideCurrentVisibleMainContainer = document.getElementById(currentVisibleMainContainerId);	    	 
	    	 								hideCurrentVisibleMainContainer.style.display = "none";
	    	 								hideCurrentVisibleMainContainer.style.zIndex = "0";	    	 
		    						}
		    					var getMainTabContainer = document.getElementById("capcisMainWC_mc" + mainColumnFinder.toString());  //set the main container visible
									getMainTabContainer.style.display = "block";
									getMainTabContainer.style.zIndex = "100";			
								var getSubTabButton = document.getElementById("capcisMainWC_st" + mainColumnFinder.toString() + subColumnFinder.toString());
									getSubTabButton.style.visibility = "visible";
									getSubTabButton.style.display = "block";
									getSubTabButton.style.zIndex = "101";
									getSubTabButton.style.top = subColumnPosTop[subColumnFinder] + "px";
									getSubTabButton.style.left = "0px";
								var getSubTabX = document.getElementById("capcisMainWC_stc" + mainColumnFinder.toString() + subColumnFinder.toString());   //set the subtab X button config
									getSubTabX.style.visibility = "visible";
									getSubTabX.style.display = "block";
									getSubTabX.style.zIndex = "102";
									getSubTabX.style.top = subColumnPosTop[subColumnFinder] + "px";
									getSubTabX.style.left = "85px";
								var getSubTabComponent = document.getElementById("capcisMainWC_sc" +  mainColumnFinder.toString() + subColumnFinder.toString());    	//set the sub tab config   
									getSubTabComponent.style.visibility = "visible";
									WAF.loadComponent ( {																			
										id: 	'capcisMainWC_sc' + mainColumnFinder.toString() + subColumnFinder.toString(), 				
										path: 	myWCName[0].WebComponentName																				
									});
								if (currentVisibleSubComponent[mainColumnFinder] !== "")
								{
									var hideCurrentVisibleSubComponent = document.getElementById(currentVisibleSubComponent[mainColumnFinder]);
										hideCurrentVisibleSubComponent.style.visibility = "hidden";
								}
									
								currentVisibleSubComponent[mainColumnFinder] = "capcisMainWC_sc" + mainColumnFinder.toString() + subColumnFinder.toString();
	    						currentVisibleMainTabNumber = mainColumnFinder;
	    						currentVisibleMainContainerId = "capcisMainWC_mc" + mainColumnFinder.toString();
	    						return;	    									
	    					}
	    					if (subColumnFinder === 9)
	    					{
	    						return("error")
	    					}
	    				}
	    			}
	    			for (var foundWebComponentName = 0; foundWebComponentName <= 9; foundWebComponentName ++)
	    			{	    				
	    				if (tabColumnTracking[mainColumnFinder].subColumnWebComponentName[foundWebComponentName] === myWCName[0].WebComponentName)
	    				{
	    					var getMainTabButton = document.getElementById("capcisMainWC_mt" + mainColumnFinder.toString());   // set the main tab visible
		    					getMainTabButton.style.visibility = "visible";
		    					getMainTabButton.display = "block";
		    					getMainTabButton.style.top = "0px";
		    					getMainTabButton.style.left = mainColumnPosLeft[mainColumnFinder] + "px";
		    					getMainTabButton.innerText = myWCName[0].PrimaryHeaderOption;
							var getMainTabX = document.getElementById("capcisMainWC_mtc" + mainColumnFinder.toString());
								getMainTabX.style.visibility = "visible";
								getMainTabX.style.display = "block";
								getMainTabX.style.top = "0px";
								getMainTabX.style.left = mainColumnPosLeftX[mainColumnFinder] + "px";	
							
							if (currentVisibleMainContainerId !== "")
	    					{
	    	 					var hideCurrentVisibleMainContainer = document.getElementById(currentVisibleMainContainerId);	    	 
	    	 						hideCurrentVisibleMainContainer.style.display = "none";
	    	 						hideCurrentVisibleMainContainer.style.zIndex = "0";	    	 
	    					}
							var getMainTabContainer = document.getElementById("capcisMainWC_mc" + mainColumnFinder.toString());  //set the main container visible
								getMainTabContainer.style.display = "block";
								getMainTabContainer.style.zIndex = "100";	//set subcontainer visible
							
							if (currentVisibleSubComponent[mainColumnFinder] !== "")
							{
								var hideCurrentVisibleSubComponent = document.getElementById(currentVisibleSubComponent[mainColumnFinder]);
									hideCurrentVisibleSubComponent.style.visibility = "hidden";
							}
							var getSubTabComponent = document.getElementById("capcisMainWC_sc" +  mainColumnFinder.toString() + foundWebComponentName.toString());    	//set the sub tab config   
								getSubTabComponent.style.visibility = "visible";
							
							currentVisibleMainTabNumber = mainColumnFinder;
							currentVisibleMainContainerId = "capcisMainWC_mc" + mainColumnFinder.toString();	
							currentVisibleSubComponent[mainColumnFinder] = "capcisMainWC_sc" + mainColumnFinder.toString() + foundWebComponentName.toString();
	    							
	    						// set the previous viewed tab invisible
	    					return;
	    				}
	    			} 		
	    			
	    		}
	    		if (mainColumnFinder === 9) 			// IF NO EXISTING TAB FOR THIS TYPE EXIST THEN CREATE ONE
	    		{
	    			for (var mainColumnFinder = 0; mainColumnFinder <= 9; mainColumnFinder++)
	    			{
	    				if (tabColumnTracking[mainColumnFinder].mainColumnName === "")
	    				{	  
	    					var getMainTabButton = document.getElementById("capcisMainWC_mt" + mainColumnFinder.toString());   // set the main tab visible
		    					getMainTabButton.style.visibility = "visible";
		    					getMainTabButton.style.display = "block";		    					
		    					getMainTabButton.style.zIndex = "100";
		    					getMainTabButton.style.top = "0px";
		    					getMainTabButton.style.left = mainColumnPosLeft[mainColumnFinder] + "px";
		    					getMainTabButton.innerText = myWCName[0].PrimaryHeaderOption;
							var getMainTabX = document.getElementById("capcisMainWC_mtc" + mainColumnFinder.toString()); 		// set the main tab x vixible
								getMainTabX.style.visibility = "visible";
								getMainTabX.style.display = "block";
								getMainTabX.style.zIndex = "101";
								getMainTabX.style.top = "0px";
								getMainTabX.style.left = mainColumnPosLeftX[mainColumnFinder] + "px";								
								if (currentVisibleMainContainerId !== "")
	    						{
	    	 						var hideCurrentVisibleMainContainer = document.getElementById(currentVisibleMainContainerId);	    	 
	    	 							hideCurrentVisibleMainContainer.style.display = "none";
	    	 							hideCurrentVisibleMainContainer.style.zIndex = "0";	    	 
	    						}
	    					var getMainTabContainer = document.getElementById("capcisMainWC_mc" + mainColumnFinder.toString());  //set the main container visible
								getMainTabContainer.style.display = "block";
								getMainTabContainer.style.zIndex = "100";		    						
	    						
	    						// FIND THE SUB TAB TO USE
	    							for (var subColumnFinder = 0; subColumnFinder <= 9; subColumnFinder++)
	    							{
	    								if (tabColumnTracking[mainColumnFinder].subColumnOpen[subColumnFinder] === false)
	    								{
	    									tabColumnTracking[mainColumnFinder].mainColumnOpen = true;
	    									tabColumnTracking[mainColumnFinder].mainColumnTabID = mainColumnFinder;
	    									tabColumnTracking[mainColumnFinder].subColumnOpen[subColumnFinder] = true;
	    									tabColumnTracking[mainColumnFinder].subColumnTabID[subColumnFinder] = subColumnFinder;
	    									tabColumnTracking[mainColumnFinder].mainColumnName = myWCName[0].PrimaryHeaderOption;
	    									tabColumnTracking[mainColumnFinder].subColumnWebComponentName[subColumnFinder] = myWCName[0].WebComponentName;
	    										    									
	    									var getSubTabButton = document.getElementById("capcisMainWC_st" + mainColumnFinder.toString() + subColumnFinder.toString());
	    										getSubTabButton.style.visibility = "visible";
	    										getSubTabButton.style.display = "block";
	    										getSubTabButton.style.zIndex = "101";
	    										getSubTabButton.style.top = subColumnPosTop[subColumnFinder] + "px";
	    										getSubTabButton.style.left = "0px";
	    									var getSubTabX = document.getElementById("capcisMainWC_stc" + mainColumnFinder.toString() + subColumnFinder.toString());   //set the subtab X button config
	    										getSubTabX.style.visibility = "visible";
	    										getSubTabX.style.display = "block";
	    										getSubTabX.style.zIndex = "102";
	    										getSubTabX.style.top = subColumnPosTop[subColumnFinder] + "px";
	    										getSubTabX.style.left = "85px";
											var getSubTabComponent = document.getElementById("capcisMainWC_sc" +  mainColumnFinder.toString() + subColumnFinder.toString());    	//set the sub tab config   
												WAF.loadComponent ( {																			
													id: 	'capcisMainWC_sc' + mainColumnFinder.toString() + subColumnFinder.toString(), 				
													path: 	myWCName[0].WebComponentName																				
												});
												if (currentVisibleSubComponent[mainColumnFinder] !== "")
												{
													var hideCurrentVisibleSubComponent = document.getElementById(currentVisibleSubComponent[mainColumnFinder]);
														hideCurrentVisibleSubComponent.style.visibility = "hidden";
												}
												getSubTabComponent.style.visibility = "visible";
												currentVisibleSubComponent[mainColumnFinder] = "capcisMainWC_sc" + mainColumnFinder.toString() + subColumnFinder.toString();
	    										currentVisibleMainTabNumber = mainColumnFinder;
	    										currentVisibleMainContainerId = "capcisMainWC_mc" + mainColumnFinder.toString();
	    										return;
	    									
	    									
	    								}
	    								if (subColumnFinder === 9)
	    								{
	    									return("error")
	    								}
	    							}
									return;	    				
	    				}
	    			}
	    		}
	    	}
	    
		/*
		var mainColumnNumber = openOrFindMainColumn(myWCName[0].PrimaryHeaderOption);  //go find an open main column
		var mainTabNumber = openOrFindMainTab(myWCName[0].PrimaryHeaderOption);      //go find a main tab to use and return the array number(position)	    
	    
	    
		
		var getMainTabButton = document.getElementById("capcisMainWC_mt" + mainTabNumber.toString());   //set the main button config
	    	getMainTabButton.style.top = "0px";
	    	getMainTabButton.style.left = mainColumnPosLeft[mainColumnNumber] + "px";
	    	getMainTabButton.style.visibility = "visible";
	    	getMainTabButton.style.display = "block";
	    	getMainTabButton.innerText = myWCName[0].PrimaryHeaderOption;
	    	tabColumnTracking[mainColumnNumber].mainColumnButtonID = "capcisMainWC_mt" + mainTabNumber.toString();  //set the button name in the column tracker
	    	tabColumnTracking[mainColumnNumber].mainColumnOpen = true;
	    	tabColumnTracking[mainColumnNumber].mainColumnMasterTabArrayNumber = mainTabNumber;
	    	masterTabArray[mainTabNumber].colNumber = mainColumnNumber;
	    	
	    var getMainTabContainer = document.getElementById("capcisMainWC_mc" + mainTabNumber.toString()); //set the main container visible and current active	    	    
	    	if (currentVisibleMainContainerId !== "")
	    	{
	    	 	var hideCurrentVisibleMainContainer = document.getElementById(currentVisibleMainContainerId);	    	 
	    	 	hideCurrentVisibleMainContainer.style.display = "none";
	    	 	hideCurrentVisibleMainContainer.style.zIndex = "0";	    	 
	    	}
	    	getMainTabContainer.style.display = "block";
	    	getMainTabContainer.style.zIndex = "100";
	    	currentVisibleMainContainerId = "capcisMainWC_mc" + mainTabNumber.toString();
	    	currentVisibleMainTabNumber = mainTabNumber;
	    	    
	    var getMainTabX = document.getElementById("capcisMainWC_mtc" + mainTabNumber.toString());     //set the main X button config
	    	getMainTabX.style.top = "0px";
	    	getMainTabX.style.left = mainColumnPosLeftX[mainColumnNumber] + "px";
	    	getMainTabX.style.visibility = "visible";
	    	getMainTabX.style.display = "block";
	    	getMainTabX.style.zIndex = "101";
	    */
	//Sub Tab Section 		   	   
	    if (myWCName[0].WebComponentName !== "no page")
	    {
			var subColumnNumber = openOrFindSubColumn(mainColumnNumber);  //go find an open sub column	    
	    	var subTabNumber = openOrFindSubTab(mainTabNumber);     //go find a sub tab to use and return the array number(position)	    
			
		/*
			var getSubTabButton = document.getElementById("capcisMainWC_st" + mainTabNumber.toString() + subTabNumber.toString());  //set the subtab button config
	    		getSubTabButton.style.visibility = "visible";
	    		getSubTabButton.style.display = "block";
	    		getSubTabButton.style.zIndex = "101";
	    		getSubTabButton.style.top = subColumnPosTop[subColumnNumber] + "px";
	    		getSubTabButton.style.left = "0px";
	    		tabColumnTracking[mainColumnNumber].subColumnButtonID[subColumnNumber] = "capcisMainWC_st" + mainTabNumber.toString() + subTabNumber.toString();
	    		masterTabArray[mainTabNumber].subTab[subTabNumber][1] = subColumnNumber;
	    		tabColumnTracking[mainColumnNumber].subColumnMasterTabArraySubTabNumber[subColumnNumber] = subTabNumber;
	    	var getSubTabComponent = document.getElementById("capcisMainWC_sc" +  mainTabNumber.toString() + subTabNumber.toString());    	//set the sub tab config   
				WAF.loadComponent ( {																			
					id: 	'capcisMainWC_sc' + mainTabNumber.toString() + subTabNumber.toString(), 				
					path: 	myWCName[0].WebComponentName																				
				});
				if (currentVisibleSubComponent[mainTabNumber] !== "")
				{
					var hideCurrentVisibleSubComponent = document.getElementById(currentVisibleSubComponent[mainTabNumber]);
					hideCurrentVisibleSubComponent.style.visibility = "hidden";
				}
				getSubTabComponent.style.visibility = "visible";
				currentVisibleSubComponent[mainTabNumber] = "capcisMainWC_sc" + mainTabNumber.toString() + subTabNumber.toString();
	    	var getSubTabX = document.getElementById("capcisMainWC_stc" + mainTabNumber.toString() + subTabNumber.toString());   //set the subtab X button config
	    		getSubTabX.style.visibility = "visible";
	    		getSubTabX.style.display = "block";
	    		getSubTabX.style.zIndex = "102";
	    		getSubTabX.style.top = subColumnPosTop[subColumnNumber] + "px";
	    		getSubTabX.style.left = "85px";
		
	     */
		}
	    
	    function openOrFindMainTab (wcIdToCheck)
	    {
	    	for (var x = 0; x <= 9; x++)
	    	{
	    		if (masterTabArray[x].tabName === wcIdToCheck)
	    		{
	    			return(x);
	    		}
	    		if (x === 9)
	    		{
	    			for (var x = 0; x <= 9; x++)
	    			{
	    				if (masterTabArray[x].tabName === "")
	    				{	  
	    					masterTabArray[x].tabName = wcIdToCheck;   //set the name as used in the mastertabarray
	    					  					
	    					return(x);	    				
	    				}
	    			}
	    		}
	    	}
	    };
	    function openOrFindSubTab (mainTabNumber)
	    {
	    	for (x = 0; x <=9; x++)
	    	{
	    		if (masterTabArray[mainTabNumber].subTab[x][0] === false)
	    		{
	    			masterTabArray[mainTabNumber].subTab[x][0] = true;   //set the subtab as used in the mastertabarray
	    			return(x);
	    		}
	    		if (x === 9)
	    		{	    			
	    			return("error");
	    		}
	    	}
	    };
	    function openOrFindMainColumn (wcIdToCheck)
	    {
	    	for (var x = 0; x <= 9; x++)
	    	{
	    		if (tabColumnTracking[x].mainColumnName === wcIdToCheck)
	    		{
	    			return(x);
	    		}
	    		if (x === 9)
	    		{
	    			for (var x = 0; x <= 9; x++)
	    			{
	    				if (tabColumnTracking[x].mainColumnName === "")
	    				{	 
	    					tabColumnTracking[x].mainColumnName = wcIdToCheck;   					
	    					return(x);	    				
	    				}
	    				if (x === 9)
	    				{
	    					return("error");
	    				}
	    			}
	    		}
	    	}
	    };
	    function openOrFindSubColumn (mainColumnNumber)
	    {
	    	for (var x = 0; x <= 9; x++)
	    	{
	    		if (tabColumnTracking[mainColumnNumber].subColumnOpen[x] === false)
	    		{
	    			tabColumnTracking[mainColumnNumber].subColumnOpen[x] = true;
	    			return(x);
	    		}
	    		if (x === 9)
	    		{
	    			return("error")
	    		}
	    	}
	    };
	    
	    
	    
	    
	    
	    
	    /*
	    for (var x = 0; x <= 9; x++)
	    {
	    	//Find a tab already open with this category
	    	if (masterTabArray[x].tabName === id.innerText)
	    	{
	    		for (var y = 0; y <= 9; y++)
	    		{
	    			if (masterTabArray[x].subTab[y][0] === false)
	    			{	    				
	    				masterTabArray[x].subTab[y][0] = true;
	    				
	    				for (var mainOpenColumn = 0; mainOpenColumn  < 9; mainOpenColumn++)
	    				{
	    					if (tabColumnTracking[mainOpenColumn].mainColumnOpen = false)   //Found an open column Here
	    					{
	    						tabColumnTracking[mainOpenColumn].mainColumnOpen = true;	    //mark this column used						
	    						var getMainTabButton = document.getElementById("capcisMainWC_mt" + masterTabArray[x].toString());
	    						getMainTabButton.style.visibility = "visible";
	    						getMainTabButton.style.top = "250px";
	    						getMainTabObj.style.left = mainColumnPosLeft[mainOpenColumn];
	    						
	    						for (var subOpenTab = 0; subOpenTab < 9; subOpenTab++)
	    						{
	    							if (tabPosTracking[mainOpenColumn].subTabOpen[subOpenTab] = false)
	    							{
	    								tabPosTracking[mainOpenColumn].subTabOpen[subOpenTab] = true;
	    									
	    							}
	    						}
	    					}
	    				}
	    				//$$("capcisMainWC_subTab"+(x+1)+(y+1)).toggle();  //+(x+1)+(y+1)
	    				//$$("capcisMainWC_subTab"+(x+1)+(y+1)).focus();	    				
	    				//$$("capcisMainWC_tabView").selectTab(x+1);
	    				//$$("capcisMainWC_subTabView"+(x+1)).selectTab(y+1);   				
						
						//WAF.loadComponent({											//load webcomponent into this page component1 element
						//id: 	"capcisMainWC_tabComponent"+(x+1)+(y+1), 											//designate the component to load into
						//path: 	myWCName[0].WebComponentName 				//designate the webcomponent to load						
						//});
						//return
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
	    	//Find a blank tab to use
	    	if (masterTabArray[x].tabName ==="")
	    	{
	    		var mainTabCount = 0;
	    		var subTabCount = 0;
	    		var availBut;
	    		var colCount = 0;
	    		var colNumberFound;	    		
	    		for (;mainTabCount < 10; mainTabCount++)  //loop threw main tab array
				{
					if (masterTabArray[mainTabCount].tabName === "")  //if this tab is blank it is available
					{
						for (availBut = 0; availBut < 10; availBut++)  //loop threw the buttons to find an available one
						{
							if (masterTabArray[availBut].butName === "")  //if this button is blank use it and set all the variables for the main button
							{
								masterTabArray[availBut].butName = "mt" + availBut.toString();  //set the value in the main tab array to the button name
								
								for (;colCount < 10; colCount++) 		//loop threw coloumns to find an open one
								{			
									colNumberFound = 0;						
									for (var mycounter = 0; mycounter < 10; mycounter++)   
									{										
										if (masterTabArray[mycounter].colNumber === colCount)   //check mastertabarray column numbers to find last loaded
										{
											colNumberFound = 1;												
										}										
																				
									}
									if (colNumberFound != 1)
									{
										var getMainTabObj = document.getElementById("capcisMainWC_mt" + availBut.toString());   //Move Button into this column	
										getMainTabObj.style.top = "250px";
										getMainTabObj.style.left = mainColumnPosLeft[colCount];
										masterTabArray[mainTabCount].colNumber = colCount;
										getMainTabObj;
										return;
									}		
								}
							}	
						}
						masterTabArray[mainTabCount].tabName = id.innerText
						
					}
				}
	    		
	    		
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
	 	
	 	//sources.myMenuButtons.sync();
		
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
