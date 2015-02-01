
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'capcisPrimary';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var mtc9 = {};	// @button
	var mtc8 = {};	// @button
	var mtc7 = {};	// @button
	var mtc6 = {};	// @button
	var mtc5 = {};	// @button
	var mtc4 = {};	// @button
	var mtc3 = {};	// @button
	var mtc2 = {};	// @button
	var mtc1 = {};	// @button
	var mtc0 = {};	// @button
	var mt9 = {};	// @button
	var mt8 = {};	// @button
	var mt7 = {};	// @button
	var mt6 = {};	// @button
	var mt5 = {};	// @button
	var mt4 = {};	// @button
	var mt3 = {};	// @button
	var mt2 = {};	// @button
	var mt1 = {};	// @button
	var mt0 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	mtc9.click = function mtc9_click (event)// @startlock
	{// @endlock
		mainTabXClick(this.id);
	};// @lock

	mtc8.click = function mtc8_click (event)// @startlock
	{// @endlock
		mainTabXClick(this.id);
	};// @lock

	mtc7.click = function mtc7_click (event)// @startlock
	{// @endlock
		mainTabXClick(this.id);
	};// @lock

	mtc6.click = function mtc6_click (event)// @startlock
	{// @endlock
		mainTabXClick(this.id);
	};// @lock

	mtc5.click = function mtc5_click (event)// @startlock
	{// @endlock
		mainTabXClick(this.id);
	};// @lock

	mtc4.click = function mtc4_click (event)// @startlock
	{// @endlock
		mainTabXClick(this.id);
	};// @lock

	mtc3.click = function mtc3_click (event)// @startlock
	{// @endlock
		mainTabXClick(this.id);
	};// @lock

	mtc2.click = function mtc2_click (event)// @startlock
	{// @endlock
		mainTabXClick(this.id);
	};// @lock

	mtc1.click = function mtc1_click (event)// @startlock
	{// @endlock
		mainTabXClick(this.id);
	};// @lock

	mtc0.click = function mtc0_click (event)// @startlock
	{// @endlock
		mainTabXClick(this.id);
	};// @lock

	mt9.click = function mt9_click (event)// @startlock
	{// @endlock
		mainTabClick(this.id);
	};// @lock

	mt8.click = function mt8_click (event)// @startlock
	{// @endlock
		mainTabClick(this.id);
	};// @lock

	mt7.click = function mt7_click (event)// @startlock
	{// @endlock
		mainTabClick(this.id);
	};// @lock

	mt6.click = function mt6_click (event)// @startlock
	{// @endlock
		mainTabClick(this.id);
	};// @lock

	mt5.click = function mt5_click (event)// @startlock
	{// @endlock
		mainTabClick(this.id);
	};// @lock

	mt4.click = function mt4_click (event)// @startlock
	{// @endlock
		mainTabClick(this.id);
	};// @lock

	mt3.click = function mt3_click (event)// @startlock
	{// @endlock
		mainTabClick(this.id);
	};// @lock

	mt2.click = function mt2_click (event)// @startlock
	{// @endlock
		mainTabClick(this.id);
	};// @lock

	mt1.click = function mt1_click (event)// @startlock
	{// @endlock
		mainTabClick(this.id);
	};// @lock

	mt0.click = function mt0_click (event)// @startlock
	{// @endlock
		mainTabClick(this.id);
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_mtc9", "click", mtc9.click, "WAF");
	WAF.addListener(this.id + "_mtc8", "click", mtc8.click, "WAF");
	WAF.addListener(this.id + "_mtc7", "click", mtc7.click, "WAF");
	WAF.addListener(this.id + "_mtc6", "click", mtc6.click, "WAF");
	WAF.addListener(this.id + "_mtc5", "click", mtc5.click, "WAF");
	WAF.addListener(this.id + "_mtc4", "click", mtc4.click, "WAF");
	WAF.addListener(this.id + "_mtc3", "click", mtc3.click, "WAF");
	WAF.addListener(this.id + "_mtc2", "click", mtc2.click, "WAF");
	WAF.addListener(this.id + "_mtc1", "click", mtc1.click, "WAF");
	WAF.addListener(this.id + "_mtc0", "click", mtc0.click, "WAF");
	WAF.addListener(this.id + "_mt9", "click", mt9.click, "WAF");
	WAF.addListener(this.id + "_mt8", "click", mt8.click, "WAF");
	WAF.addListener(this.id + "_mt7", "click", mt7.click, "WAF");
	WAF.addListener(this.id + "_mt6", "click", mt6.click, "WAF");
	WAF.addListener(this.id + "_mt5", "click", mt5.click, "WAF");
	WAF.addListener(this.id + "_mt4", "click", mt4.click, "WAF");
	WAF.addListener(this.id + "_mt3", "click", mt3.click, "WAF");
	WAF.addListener(this.id + "_mt2", "click", mt2.click, "WAF");
	WAF.addListener(this.id + "_mt1", "click", mt1.click, "WAF");
	WAF.addListener(this.id + "_mt0", "click", mt0.click, "WAF");
	// @endregion// @endlock

	};// @lock

	function mainTabClick(clickedMainTabId)
	{
	debugger;
	for (var myMasterTabButtonNumber = 0; myMasterTabButtonNumber <= (masterTabArray.length - 1); myMasterTabButtonNumber++)
	{
		if (clickedMainTabId === "capcisMainWC_mt" + myMasterTabButtonNumber)
		{
			if (clickedMainTabId !== "capcisMainWC_mt" + currentVisibleMainTabNumber)
			{
				var hideCurrentVisibleMainContainer = document.getElementById(currentVisibleMainContainerId);
				var getMainTabContainer = document.getElementById("capcisMainWC_mc" + myMasterTabButtonNumber);	    	 
	    		hideCurrentVisibleMainContainer.style.display = "none";
	    		hideCurrentVisibleMainContainer.style.zIndex = "0";
	    		getMainTabContainer.style.display = "block";
	    		getMainTabContainer.style.zIndex = "100";
	    		currentVisibleMainContainerId = "capcisMainWC_mc" + myMasterTabButtonNumber;
	    		currentVisibleMainTabNumber = myMasterTabButtonNumber.toString();
	    		return;
			}	
		}
	}
	
	
	};
	function mainTabXClick(clickedMainTabXId)
	{
		debugger;
		masterTabArray;
		
		for (var myMainTabXButtonNumber = 0; myMainTabXButtonNumber <= (masterTabArray.length - 1); myMainTabXButtonNumber++)
		{
			if (clickedMainTabXId === "capcisMainWC_mtc" + myMainTabXButtonNumber)
			{
				var myMainTabButtonColumn = masterTabArray[myMainTabXButtonNumber].colNumber;
				var hideMainTabXButtonClicked = document.getElementById(clickedMainTabXId);
				var hideMainTabButtonClicked = document.getElementById("capcisMainWC_mt" + myMainTabXButtonNumber);
				var hideMainTabContainer = document.getElementById("capcisMainWC_mc" + myMainTabXButtonNumber);
				hideMainTabXButtonClicked.style.visibility = "hidden";    //hide the x button
				hideMainTabButtonClicked.style.visibility = "hidden";     //hide the tab button
				hideMainTabContainer.style.display = "none";
				var getCurrentColNumber = masterTabArray[myMainTabXButtonNumber].colNumber;
				masterTabArray[myMainTabXButtonNumber].tabName = "";			//clear the tabName				
				masterTabArray[myMainTabXButtonNumber].colNumber = "";			//clear the colNumber
				masterTabArray[myMainTabXButtonNumber].butName = ""; 			//clear the butName				
				masterTabArray[myMainTabXButtonNumber].subTab = [[false],[false],[false],[false],[false],[false],[false],[false],[false],[false]];
				tabColumnTracking[getCurrentColNumber].mainColumnOpen = false;				//clear tabsPos Array
				tabColumnTracking[getCurrentColNumber].mainColumnName = ""; 					//clear tabsPos Array
				tabColumnTracking[getCurrentColNumber].mainColumnButtonID = ""; 				//clear tabsPos Array
					for (x = 0; x <= (masterTabArray[myMainTabXButtonNumber].subTab.length -1); x++) 	//clear subTab[] array
					{
						
						for (y = 0; y <= (masterTabArray[myMainTabXButtonNumber].subTab[x].length - 1); y++) 	//clear subTab[][] array
						{
							masterTabArray[myMainTabXButtonNumber].subTab[x].length = 0;
							masterTabArray[myMainTabXButtonNumber].subTab[x].push(false);
						}						
					}
					for (x = myMainTabButtonColumn; x <= (masterTabArray.length - 1); x++) 			//find the next tabs to the right and bring them down one
					{
						if (masterTabArray[x].tabName !== "")
						{
							thisMasterTabsColNumber = masterTabArray[x].colNumber; 		//get this masterTabArray Column Number							
							masterTabArray[x].colNumber = x - 1;					//set the new column Number 1 to the left in masterTabArray
							tabColumnTracking[thisMasterTabsColNumber].mainColumnOpen = false;				//clear tabsPos Array
							var oldTabsPosMainColumnName = tabColumnTracking[thisMasterTabsColNumber].mainColumnName;
							tabColumnTracking[thisMasterTabsColNumber].mainColumnName = ""; 					//clear tabsPos Array
							var oldTabsPosMainColumnButtonID = tabColumnTracking[thisMasterTabsColNumber].mainColumnButtonID;
							tabColumnTracking[thisMasterTabsColNumber].mainColumnButtonID = ""; 				//clear tabsPos Array
							var oldTabsPosSubColumnOpen = tabColumnTracking[thisMasterTabsColNumber].subColumnOpen;
							tabColumnTracking[thisMasterTabsColNumber].subColumnOpen = [false,false,false,false,false,false,false,false,false,false];
							var oldTabsPossubColumnButtonID = tabColumnTracking[thisMasterTabsColNumber].subColumnButtonID;
							tabColumnTracking[thisMasterTabsColNumber].subColumnButtonID = ["","","","","","","","","",""];
							var nextRightTabButton = document.getElementById("capcisMainWC_mt" + x);
							var nextRightTabXButton = document.getElementById("capcisMainWC_mtc" + x);
							//set the next right tab variables and position
							thisMasterTabsColNumber = thisMasterTabsColNumber - 1;
							tabColumnTracking[thisMasterTabsColNumber].mainColumnOpen = true;
							tabColumnTracking[thisMasterTabsColNumber].mainColumnName = oldTabsPosMainColumnName;
							tabColumnTracking[thisMasterTabsColNumber].mainColumnButtonID = oldTabsPosMainColumnButtonID;
							tabColumnTracking[thisMasterTabsColNumber].subColumnOpen = oldTabsPosSubColumnOpen;
							tabColumnTracking[thisMasterTabsColNumber].subColumnButtonID = oldTabsPossubColumnButtonID;
							nextRightTabButton.style.left = mainColumnPosLeft[thisMasterTabsColNumber] + "px";
							nextRightTabXButton.style.left = mainColumnPosLeft[thisMasterTabsColNumber] + "px";
						}
					} 
					if (tabColumnTracking[getCurrentColNumber].mainColumnOpen !== false)   			//find the current column and set it visible
					{
						for (findThisColumnTabNumber = 0; findThisColumnTabNumber <= (tabColumnTracking.length -1); findThisColumnTabNumber)
						{
							if (tabColumnTracking[getCurrentColNumber].mainColumnButtonID = "capcisMainWC_mt" + findThisColumnTabNumber)
							{
								//show the tab,x,and container
							}
						}
					}
				return;				
			}
		}
	};
}// @startlock
return constructor;
})();// @endlock
