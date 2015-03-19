
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'referralAssessors';
	// @endregion// @endlock

	this.load = function (data) {// @lock
	
				
	$$(getHtmlId('container3')).setSplitPosition(900);
	$$(getHtmlId('container9')).setSplitPosition(1000);
	$$(getHtmlId('container6')).setSplitPosition(1500);
	$$(getHtmlId('mainAssessorCont')).setSplitPosition(1290);
	//mainAssessorCont.style.visibility = 'visible';
	try
	{
	    searchCrit = data.userData.searchCrit;
	    searchType = data.userData.searchType;
	}
	catch (e)
	{}
	fillMainTable();
	
	tempStore= city;
	

function fillMainTable()
{
    try
    {
        if (searchCrit == "" && searchType == 'Active')
        {
            var myObject = {
                token: '7836140170460568',
                id: '1',
                major: 3,
                minor: 0,
                data1: false
            }; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
            rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						mainListSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
        }
        else if (searchCrit == '' && searchType == 'Inactive')
        {
            var myObject = {
                token: '7836140170460568',
                id: '1',
                major: 3,
                minor: 0,
                data1: true
            }; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
            
            rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						mainListSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
        }
        else if (searchCrit == '' && searchType == 'All')
        {
            var myObject = {
                token: '7836140170460568',
                id: '1',
                major: 3,
                minor: 8
            }; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
            rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						mainListSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
        }
        else if (searchCrit != '' && searchType == 'Active')
        {
            var myObject = {
                token: '7836140170460568',
                id: '1',
                major: 3,
                minor: 10,
                data1: searchCrit,
                data2: false
            }; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
            rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						mainListSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
        }
        else if (searchCrit != '' && searchType == 'Inactive')
        {
            var myObject = {
                token: '7836140170460568',
                id: '1',
                major: 3,
                minor: 10,
                data1: searchCrit,
                data2: true
            }; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
            rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						mainListSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
        }
        else if (searchCrit != '' && searchType == 'All')
        {
            var myObject = {
                token: '7836140170460568',
                id: '1',
                major: 3,
                minor: 9,
                data1: searchCrit
            }; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
            rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						mainListSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
        }
    }
    catch (err)
    {
        var myObject = {
            token: '7836140170460568',
            id: '1',
            major: 3,
            minor: 0,
            data1: false
        }; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
        rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						mainListSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
    }
  }
	 	
	 	
	 	
	// @region namespaceDeclaration// @startlock
	var cityComboBox = {};	// @textField
	var cityComboboxGrid = {};	// @dataGrid
	var button3 = {};	// @button
	var correspondanceActiveBox = {};	// @combobox
	var voidCorrespondanceCheck = {};	// @checkbox
	var button5 = {};	// @button
	var submitButton = {};	// @button
	var button1 = {};	// @button
	var button2 = {};	// @button
	var correspondanceGrid = {};	// @dataGrid
	var assesorPreviousGrid = {};	// @dataGrid
	var closeAssesorCurrentButton = {};	// @button
	var closeAssesorPreviousButton = {};	// @button
	var previousVersionButton = {};	// @button
	var assessorFullList = {};	// @dataGrid
	// @endregion// @endlock

	// eventHandlers// @lock

	cityComboBox.blur = function cityComboBox_blur (event)// @startlock
	{// @endlock
		var grid = document.getElementById($comp.id+'_cityComboboxGrid');
			grid.style.display = 'none';
	};// @lock

	cityComboBox.keyup = function cityComboBox_keyup (event)// @startlock
	{// @endlock
		
		if(event.keyCode ===13)
		{
			var currentInput = $$($comp.id+'_cityComboBox').getValue();
			$$($comp.id+'_cityComboBox').setValue(sources.city.CityListing);
			var grid = document.getElementById($comp.id+'_cityComboboxGrid');
			grid.style.display = 'none';
		}
		
		else
		{
			
			city=tempStore;
			sources.city.sync();

			var grid = document.getElementById($comp.id+'_cityComboboxGrid');
			grid.style.display = 'block';

			var currentInput = $$($comp.id+'_cityComboBox').getValue();//textInput.value;
			sources.city.query('CityListing = :1 order by CityListing', { params: [currentInput + "*"]});
		}
	};// @lock

	cityComboboxGrid.onRowClick = function cityComboboxGrid_onRowClick (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('cityComboboxGrid'));
		grid.style.display = 'none';
		
		var recValue = $$(getHtmlId('cityComboboxGrid')).sourceAtt.getValue();
		$$(getHtmlId('cityComboBox')).setValue(recValue);
	};// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('cityComboboxGrid'));
		if(grid.style.display == 'none')
		{
			grid.style.display = 'block';
		}
		else
		{
			grid.style.display = 'none';
		}
	};// @lock

	correspondanceActiveBox.change = function correspondanceActiveBox_change (event)// @startlock
	{// @endlock
		fillCorrespondance();
	};// @lock

	voidCorrespondanceCheck.change = function voidCorrespondanceCheck_change (event)// @startlock
	{// @endlock
		var status = $$(getHtmlId("voidCorrespondanceCheck")).getValue();
	var id = $$(getHtmlId('hiddenCorrId')).getValue();
	var myObject8 = {
	    token: '7836140170460568',
	    id: '1',
	    major: 3,
	    minor: 1,
	    data1: currentCorresondanceDate,
	    data2: status,
	    data3: id
	}; //dontf
	assessorUpdate = rpcDUpdate.setUpdate(myObject8);
	};// @lock
	function fillCorrespondance()
{
    var currentCorrespondenceActiveSelected = $$(getHtmlId('correspondanceActiveBox')).getValue();
    var currentCorrespondanceViewVoided;
    var currentCorrespondanceAll;
    if (currentCorrespondenceActiveSelected == 'Active')
    {
        currentCorrespondanceViewVoided = false;
    }
    else if (currentCorrespondenceActiveSelected == 'Voided')
    {
        currentCorrespondanceViewVoided = true;
    }
    else
    {
        currentCorrespondanceAll = true;
    }
    if (currentCorrespondanceAll != null)
    {
        var myObject2 = {
            token: '7836140170460568',
            id: '1',
            major: 3,
            minor: 7,
            data1: currentName
        }; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
        rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						corrListSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject2]
				});
       
    }
    else
    {
        var myObject2 = {
            token: '7836140170460568',
            id: '1',
            major: 3,
            minor: 2,
            data1: currentName,
            data2: currentCorrespondanceViewVoided
        }; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
        rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						corrListSuccess(result);
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
		
		
			var x = $$(getHtmlId("newCorrespondanceField"));
		var myObject8 = 
			{
				token:'7836140170460568' ,id:'1',major:3,minor:1,
				data1:$$(getHtmlId("newCorrespondanceField")).getValue(),
				data2:currentID
			}; //dontf
			var update = rpcDInsert.setInsert(myObject8);
			/*
			var myObject2 = {token:'7836140170460568' ,id:'1',major:3,minor:2,data1:currentName}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 			assessorCorespondance = rpcDSelects.getSelect(myObject2);
	 			sources.assessorCorespondance.sync();
	 			*/
	 			fillCorrespondance();
	 			x.setValue("");
	};// @lock

	submitButton.click = function submitButton_click (event)// @startlock
	{// @endlock
		var currentCity = $$($comp.id + "_cityComboBox").getValue();
		var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:83,data1:currentCity}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	city = rpcDSelects.getSelect(myObject5);
		
		if( city.length ===0)
		{
			
			var myObject7 = {token:'7836140170460568' ,id:'1',major:3,minor:18,data1:currentCity};
			rpcDInsert.setInsertAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject7]
				});
		}
		
		var myObject7 = {
    token: '7836140170460568',
    id: '1',
    major: 3,
    minor: 0,
    data1: $$(getHtmlId("assessorNameField")).sourceAtt.getValue(),
    data2: $$(getHtmlId("assessorPhoneField")).sourceAtt.getValue(),
    data3: $$(getHtmlId("assesorEmailField")).sourceAtt.getValue(),
    data4: $$(getHtmlId("assesorFaxField")).sourceAtt.getValue(),
    data5: $$(getHtmlId("assesorAddressField")).sourceAtt.getValue(),
    data6: $$(getHtmlId("cityComboBox")).getValue(),
    data7: $$(getHtmlId("assesorStateField")).sourceAtt.getValue(),
    data8: $$(getHtmlId("assesorZipField")).sourceAtt.getValue(),
    data9: $$(getHtmlId("assesorExtField")).sourceAtt.getValue(),
    data10: $$(getHtmlId("assesorMobileField")).sourceAtt.getValue(),
    data11: $$(getHtmlId("assesorNotesField")).sourceAtt.getValue(),
    data12: $$(getHtmlId("assessorFullNameField")).sourceAtt.getValue(),
    data13: $$(getHtmlId("reportingComboBox")).getValue(),
    data14: currentID,
    data15: $$(getHtmlId("assessorInactiveCheckBox")).getValue()
}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID

	rpcDUpdate.setUpdateAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject7]
				});
				
	 		rpcDInsert.setInsertAsync({
		 			'onSuccess': function(result){
						
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject7]
				});

fillMainTable();


var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:5,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						bakListSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject5]
				});
	 	
	 	
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('container3')).setSplitPosition(900);
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		fillCorrespondance();
		$$(getHtmlId('container6')).setSplitPosition(1290);
	};// @lock

	correspondanceGrid.onRowClick = function correspondanceGrid_onRowClick (event)// @startlock
	{// @endlock
		$$(getHtmlId('container6')).setSplitPosition(420);
		$$(getHtmlId('container3')).setSplitPosition(900);
		currentCorresondanceDate = event.data.row.cells[0].value;
	};// @lock

	assesorPreviousGrid.onRowClick = function assesorPreviousGrid_onRowClick (event)// @startlock
	{// @endlock
		
		$$(getHtmlId('container9')).setSplitPosition(250);
		var id = sources.bakAssessorInfo.BAKAssessorInformationID;
		
		
		var myObject6 = {token:'7836140170460568' ,id:'1',major:3,minor:6,data1:id}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						specificBakListSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject6]
				});
	 	
		
	};// @lock

	closeAssesorCurrentButton.click = function closeAssesorCurrentButton_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('mainAssessorCont')).setSplitPosition(1290);
	};// @lock

	closeAssesorPreviousButton.click = function closeAssesorPreviousButton_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('container9')).setSplitPosition(625);
	};// @lock

	previousVersionButton.click = function previousVersionButton_click (event)// @startlock
	{// @endlock
			 
		$$(getHtmlId('container3')).setSplitPosition(420);
		//var name = $$(getHtmlId('assessorNameField')).getValue();
		var myObject5 = {token:'7836140170460568' ,id:'1',major:3,minor:5,data1:currentID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	
	 	rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						bakListSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject5]
				});
	 	
	};// @lock

	assessorFullList.onRowClick = function assessorFullList_onRowClick (event)// @startlock
	{// @endlock

		$$(getHtmlId('mainAssessorCont')).setSplitPosition(450);
		$$(getHtmlId('container3')).setSplitPosition(2000);
	 	$$(getHtmlId('container9')).setSplitPosition(1000);
	 	$$(getHtmlId('container6')).setSplitPosition(420);
		
		
		
		var name = sources.assessorList.AssessorName;
		var city = sources.assessorList.AssessorCity;
		var reportingMethod = sources.assessorList.AssPreferredReportingMethod;
		var ids = sources.assessorList.AssessorInformationID;
		if(city != "" && city != null && city != "null")
		{
			$$(getHtmlId('cityComboBox')).setValue(city);
		}
		else
		{
			$$(getHtmlId('cityComboBox')).setValue("None");
		}
		
		if(reportingMethod != "" && reportingMethod != null)
		{
				
			$$(getHtmlId('reportingComboBox')).setValue(reportingMethod);
		}
		else
		{
				
			$$(getHtmlId('reportingComboBox')).setValue("None");
		}
		
		
		var myObject = {token:'7836140170460568' ,id:'1',major:3,minor:1,data1:ids}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	
		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
						specificListSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
		
		
		///////////////////////////////////////////////////////////get data
		
		currentName = name;
		
		currentID = ids;
		
		
		fillCorrespondance();
		
		
		
		
	};// @lock
	
	function mainListSuccess(result)
	{
		assessorList = result;
		sources.assessorList.sync();
		
	}
	function mainListError(event)
	{
		var errMessage;
				for (var x = 0;x < event.error.length;x++)
				{
					errMessage += (event.error[x].message + ",");
				}
				alert(errMessage);
	}
	function specificListSuccess(result)
	{
		
		specificAssessorList = result;
		sources.specificAssessorList.sync();
	}
	function specificListError(event)
	{
		var errMessage;
				for (var x = 0;x < event.error.length;x++)
				{
					errMessage += (event.error[x].message + ",");
				}
				alert(errMessage);
	}
	function corrListSuccess(result)
	{
		
		assessorCorespondance = result;
		sources.assessorCorespondance.sync();
	}
	function corrListError(event)
	{
		var errMessage;
				for (var x = 0;x < event.error.length;x++)
				{
					errMessage += (event.error[x].message + ",");
				}
				alert(errMessage);
	}
	
	function bakListSuccess(result)
	{
		
		bakAssessorInfo = result;
		sources.bakAssessorInfo.sync();
	}
	function bakListError(event)
	{
		var errMessage;
				for (var x = 0;x < event.error.length;x++)
				{
					errMessage += (event.error[x].message + ",");
				}
				alert(errMessage);
	}
	function specificBakListSuccess(result)
	{
		
		specificBakAssessorList = result;
		sources.specificBakAssessorList.sync();
	}
	function specificBakListError(event)
	{
		var errMessage;
				for (var x = 0;x < event.error.length;x++)
				{
					errMessage += (event.error[x].message + ",");
				}
				alert(errMessage);
	}
	

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_cityComboBox", "blur", cityComboBox.blur, "WAF");
	WAF.addListener(this.id + "_cityComboBox", "keyup", cityComboBox.keyup, "WAF");
	WAF.addListener(this.id + "_cityComboboxGrid", "onRowClick", cityComboboxGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_button3", "click", button3.click, "WAF");
	WAF.addListener(this.id + "_correspondanceActiveBox", "change", correspondanceActiveBox.change, "WAF");
	WAF.addListener(this.id + "_voidCorrespondanceCheck", "change", voidCorrespondanceCheck.change, "WAF");
	WAF.addListener(this.id + "_button5", "click", button5.click, "WAF");
	WAF.addListener(this.id + "_submitButton", "click", submitButton.click, "WAF");
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	WAF.addListener(this.id + "_correspondanceGrid", "onRowClick", correspondanceGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_assesorPreviousGrid", "onRowClick", assesorPreviousGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_closeAssesorCurrentButton", "click", closeAssesorCurrentButton.click, "WAF");
	WAF.addListener(this.id + "_closeAssesorPreviousButton", "click", closeAssesorPreviousButton.click, "WAF");
	WAF.addListener(this.id + "_previousVersionButton", "click", previousVersionButton.click, "WAF");
	WAF.addListener(this.id + "_assessorFullList", "onRowClick", assessorFullList.onRowClick, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
