
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralJudgesCorrespondenceView';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var button5 = {};	// @button
	var correspondanceGrid = {};	// @dataGrid
	var correspondanceActiveBox = {};	// @combobox
	var voidCorrespondanceCheck = {};	// @checkbox
	// @endregion// @endlock

	// eventHandlers// @lock
	function fillCorrespondance()
	{
		var currentCorrespondenceActiveSelected = $$(getHtmlId('correspondanceActiveBox')).getValue();
    	if (currentCorrespondenceActiveSelected == "All")
    	{
    		var myObject2 = {token: userConfigObj.secToken,id: userConfigObj.userID,major: 3,minor: 42,data1: sources.judgeList.JudgesID}; 
        	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				
						judgeCorespondance = result;
						sources.judgeCorespondance.sync();
					},
					'onError': function(error){
						
						console.log(error);
					},
					'params': [myObject2]
				});
    	}
    	else
    	{
    		var myObject2 = {token: userConfigObj.secToken,id: userConfigObj.userID,major: 3,minor: 43,data1: sources.judgeList.JudgesID,data2: currentCorrespondenceActiveSelected};
        	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				
						judgeCorespondance = result;
						sources.judgeCorespondance.sync();
					},
					'onError': function(error){
						
						console.log(error);
					},
					'params': [myObject2]
				});
    
    	}
	}
	button5.click = function button5_click (event)// @startlock
	{// @endlock
		var myBlog = $$(getHtmlId("newCorrespondanceField")).getValue();
		if (myBlog != "")
		{		
			var x = $$(getHtmlId("newCorrespondanceField"));
			var myObject8 = 
			{
				token:userConfigObj.secToken ,id:userConfigObj.userID,major:3,minor:8,
				data1:myBlog,
				data2:sources.judgeList.JudgesID
			}; //dontf
			
			rpcDInsert.setInsertAsync({
		 			'onSuccess': function(result){
						fillCorrespondance();
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject8]
				});
			
			$$(getHtmlId('newCorrespondanceField')).setValue("");
		}
	};// @lock

	correspondanceGrid.onRowClick = function correspondanceGrid_onRowClick (event)// @startlock
	{// @endlock
		
	};// @lock

	correspondanceActiveBox.change = function correspondanceActiveBox_change (event)// @startlock
	{// @endlock
		fillCorrespondance();
		
	};// @lock

	voidCorrespondanceCheck.change = function voidCorrespondanceCheck_change (event)// @startlock
	{// @endlock
		
		var status = $$(getHtmlId("voidCorrespondanceCheck")).getValue();
		var id = sources.judgeCorespondance.JudgeCorrespondenceID;
		//var id  = $$(getHtmlId('attHiddenCorrId')).getValue();
		var myObject8 = 
			{
				token:'7836140170460568' ,id:'1',major:3,minor:8,
				data2:status,
				data3: id
			}; //dontf
			
			
			rpcDUpdate.setUpdateAsync({
		 			'onSuccess': function(result){
						fillCorrespondance();
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject8]
				});

	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button5", "click", button5.click, "WAF");
	WAF.addListener(this.id + "_correspondanceGrid", "onRowClick", correspondanceGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_correspondanceActiveBox", "change", correspondanceActiveBox.change, "WAF");
	WAF.addListener(this.id + "_voidCorrespondanceCheck", "change", voidCorrespondanceCheck.change, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
