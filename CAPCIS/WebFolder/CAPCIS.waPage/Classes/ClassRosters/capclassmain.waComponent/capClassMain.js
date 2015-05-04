
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'capclassmain';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
		currentCharges = 0.0;
		var whatsVisible = 'full';
		fillFullView();
		$$(getHtmlId('classFullViewCont')).$domNode.css('overflow','auto');
		var myObject = {token:'7836140170460568' ,id:'1',major:2,minor:1}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	myPrograms = rpcDSelects.getSelect(myObject);
	 	var filterMatrix = document.getElementById(getHtmlId('matrix4'));
	 	filterMatrix.style.display = 'none';
	 	
	 	sources.myPrograms.sync();
	 	
	 	
	 	var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:2,minor:7}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				
						recieptPurposeSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
				
		
				
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1; //January is 0!
		var yyyy = today.getFullYear();

		if(dd<10) {
	    dd='0'+dd;
		} 

		if(mm<10) {
	    mm='0'+mm;
		} 

		today = yyyy+'-'+mm+'-'+dd;
		$$(getHtmlId('receiptDate')).setValue(today);
		$$(getHtmlId('muReceiptDate')).setValue(today);
	 	
	// @region namespaceDeclaration// @startlock
	var button7 = {};	// @button
	var submitButton = {};	// @button
	var textField60 = {};	// @textField
	var dataGrid7 = {};	// @dataGrid
	var button9 = {};	// @button
	var dataGrid3 = {};	// @dataGrid
	var dataGrid2 = {};	// @dataGrid
	var muCurrentCharges = {};	// @textField
	var muAmountPaid = {};	// @textField
	var textField52 = {};	// @textField
	var textField50 = {};	// @textField
	var textField51 = {};	// @textField
	var textField49 = {};	// @textField
	var textField48 = {};	// @textField
	var textField47 = {};	// @textField
	var textField46 = {};	// @textField
	var textField45 = {};	// @textField
	var textField56 = {};	// @textField
	var textField44 = {};	// @textField
	var textField53 = {};	// @textField
	var textField55 = {};	// @textField
	var textField43 = {};	// @textField
	var textField54 = {};	// @textField
	var textField41 = {};	// @textField
	var textField40 = {};	// @textField
	var textField39 = {};	// @textField
	var textField38 = {};	// @textField
	var textField37 = {};	// @textField
	var textField36 = {};	// @textField
	var textField42 = {};	// @textField
	var currentChargesField = {};	// @textField
	var amountPaidField = {};	// @textField
	var button5 = {};	// @button
	var field100 = {};	// @textField
	var field95 = {};	// @textField
	var field90 = {};	// @textField
	var field85 = {};	// @textField
	var field80 = {};	// @textField
	var field75 = {};	// @textField
	var field70 = {};	// @textField
	var field65 = {};	// @textField
	var field60 = {};	// @textField
	var field55 = {};	// @textField
	var field50 = {};	// @textField
	var field45 = {};	// @textField
	var field40 = {};	// @textField
	var field35 = {};	// @textField
	var field30 = {};	// @textField
	var field25 = {};	// @textField
	var field20 = {};	// @textField
	var field15 = {};	// @textField
	var field10 = {};	// @textField
	var field5 = {};	// @textField
	var field0 = {};	// @textField
	var dataGrid5 = {};	// @dataGrid
	var dataGrid4 = {};	// @dataGrid
	var comboBoxTextInput = {};	// @textField
	var comboboxGrid = {};	// @dataGrid
	var comboboxButton = {};	// @button
	var button2 = {};	// @button
	var muClassRosterDG = {};	// @dataGrid
	var button1 = {};	// @button
	var dataGrid1 = {};	// @dataGrid
	var matrix4 = {};	// @matrix
	var classFilterMatrix = {};	// @richText
	var filterButton = {};	// @button
	var button4 = {};	// @button
	var fullButton = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	button7.click = function button7_click (event)// @startlock
	{// @endlock
		var cartConcat ="";
		var testingTypeId;
		for(var x = 0 ; x< cart.length ; x++)
		{
			cartConcat = cartConcat + cart[x].ItemPriceListID + "," + cart[x].ItemPrice + ",";
			if(cart[x].TT_TestingTypeID != null)
			{
				
				testigTypeId = cart[x].TT_TestingTypeID;
			}	
		}
		
		var myObject = {
			token:userConfigObj.secToken ,
			id:userConfigObj.userID,
			major:2,
			minor:0,
			todayDate:today,
			CIID:sources.myMURosterList.ClientInformation_CIID,
			CRID:sources.myMURosterList.ClientRequirementsID,
			testintStatus:$$(getHtmlId('muTestStatus')).getValue(),
			cartContent:cartConcat,
			amountCharged: $$(getHtmlId('muCurrentCharges')).getValue(),
			amountPaid: $$(getHtmlId('muAmountPaidBottom')).getValue(),
			balence: $$(getHtmlId('muNewBalence')).getValue(),
			attendedClass:$$(getHtmlId('muAttendedCheckBox')).getValue(),
			classAttended: $$(getHtmlId('muVenue')).getValue(),
			testingTypePerformed:$$(getHtmlId('muTestType')).getValue(),
			recieptPurpose:$$(getHtmlId('textField60')).getValue(),
			receiptNotes:$$(getHtmlId('textField57')).getValue(),
			testingTypeId:testigTypeId
		};
		rpcDInsert.setInsertAsync({
		 			'onSuccess': function(result){	
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
				cart.clear();
	};// @lock

	submitButton.click = function submitButton_click (event)// @startlock
	{// @endlock
		
		var cartConcat ="";
		var testingTypeId;
		for(var x = 0 ; x< cart.length ; x++)
		{
			cartConcat = cartConcat + cart[x].ItemPriceListID + "," + cart[x].ItemPrice + ",";
			if(cart[x].TT_TestingTypeID != null)
			{
				
				testigTypeId = cart[x].TT_TestingTypeID;
			}	
		}
		
		var myObject = {
			token:userConfigObj.secToken ,
			id:userConfigObj.userID,
			major:2,
			minor:0,
			todayDate:today,
			CIID:sources.myRosterList.ClientInformation_CIID,
			CRID:sources.myRosterList.ClientRequirementsID,
			testintStatus:$$(getHtmlId('testStatus')).getValue(),
			cartContent:cartConcat,
			amountCharged: $$(getHtmlId('currentChargesField')).getValue(),
			amountPaid: $$(getHtmlId('amountPaidBottom')).getValue(),
			balence: $$(getHtmlId('newBalenceField')).getValue(),
			attendedClass:$$(getHtmlId('attendedCheckBox')).getValue(),
			classAttended: $$(getHtmlId('textField1')).getValue(),
			testingTypePerformed:$$(getHtmlId('testType')).getValue(),
			recieptPurpose:$$(getHtmlId('comboBoxTextInput')).getValue(),
			receiptNotes:$$(getHtmlId('receiptNotes')).getValue(),
			testingTypeId:testigTypeId
		};
		rpcDInsert.setInsertAsync({
		 			'onSuccess': function(result){	
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
		
		cart.clear();
	};// @lock

	textField60.keyup = function textField60_keyup (event)// @startlock
	{// @endlock
		if(event.keyCode ===13)
		{
			
			$$($comp.id+'_textField60').setValue(sources.receiptPurpose.ReceiptPurpose);
			var grid = document.getElementById($comp.id+'_dataGrid7');
			grid.style.display = 'none';
		}
		else
		{
			receiptPurpose=tempStore;
			sources.receiptPurpose.sync();

			var grid = document.getElementById($comp.id+'_dataGrid7');
			grid.style.display = 'block';

			var currentInput = $$($comp.id+'_textField60').getValue();//textInput.value;
			sources.receiptPurpose.query('ReceiptPurpose = :1 order by ReceiptPurpose', { params: [currentInput + "*"]});
		}
	};// @lock

	dataGrid7.onRowClick = function dataGrid7_onRowClick (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('dataGrid7'));
		grid.style.display = 'none';
		
		var recValue = $$(getHtmlId('dataGrid7')).sourceAtt.getValue();
		$$(getHtmlId('textField60')).setValue(recValue);
	};// @lock

	button9.click = function button9_click (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('dataGrid7'));
		if(grid.style.display == 'none')
		{
			grid.style.display = 'block';
		}
		else
		{
			grid.style.display = 'none';
		}
		
	};// @lock

	dataGrid3.onRowClick = function dataGrid3_onRowClick (event)// @startlock
	{// @endlock
		removeFromMUCart(sources.cart.ItemPriceListID);
	};// @lock

	dataGrid2.onRowClick = function dataGrid2_onRowClick (event)// @startlock
	{// @endlock
		addToMUCart(sources.itemList.ItemPriceListID);
	};// @lock

	muCurrentCharges.change = function muCurrentCharges_change (event)// @startlock
	{// @endlock
		changeMUBalence();
	};// @lock

	muAmountPaid.keyup = function muAmountPaid_keyup (event)// @startlock
	{// @endlock
		changeMUBalence();
	};// @lock

	muAmountPaid.change = function muAmountPaid_change (event)// @startlock
	{// @endlock
		changeMUBalence();
	};// @lock

	textField52.click = function textField52_click (event)// @startlock
	{// @endlock
		var value = $$(getHtmlId("textField52")).getValue();
		$$(getHtmlId("muAmountPaid")).setValue(value);
	};// @lock

	textField50.click = function textField50_click (event)// @startlock
	{// @endlock
		var value = $$(getHtmlId("textField50")).getValue();
		$$(getHtmlId("muAmountPaid")).setValue(value);
	};// @lock

	textField51.click = function textField51_click (event)// @startlock
	{// @endlock
		var value = $$(getHtmlId("textField51")).getValue();
		$$(getHtmlId("muAmountPaid")).setValue(value);
	};// @lock

	textField49.click = function textField49_click (event)// @startlock
	{// @endlock
		var value = $$(getHtmlId("textField49")).getValue();
		$$(getHtmlId("muAmountPaid")).setValue(value);
	};// @lock

	textField48.click = function textField48_click (event)// @startlock
	{// @endlock
		var value = $$(getHtmlId("textField48")).getValue();
		$$(getHtmlId("muAmountPaid")).setValue(value);
	};// @lock

	textField47.click = function textField47_click (event)// @startlock
	{// @endlock
		var value = $$(getHtmlId("textField47")).getValue();
		$$(getHtmlId("muAmountPaid")).setValue(value);
	};// @lock

	textField46.click = function textField46_click (event)// @startlock
	{// @endlock
		var value = $$(getHtmlId("textField46")).getValue();
		$$(getHtmlId("muAmountPaid")).setValue(value);
	};// @lock

	textField45.click = function textField45_click (event)// @startlock
	{// @endlock
		var value = $$(getHtmlId("textField45")).getValue();
		$$(getHtmlId("muAmountPaid")).setValue(value);
	};// @lock

	textField56.click = function textField56_click (event)// @startlock
	{// @endlock
		var value = $$(getHtmlId("textField56")).getValue();
		$$(getHtmlId("muAmountPaid")).setValue(value);
	};// @lock

	textField44.click = function textField44_click (event)// @startlock
	{// @endlock
		var value = $$(getHtmlId("textField44")).getValue();
		$$(getHtmlId("muAmountPaid")).setValue(value);
	};// @lock

	textField53.click = function textField53_click (event)// @startlock
	{// @endlock
		var value = $$(getHtmlId("textField53")).getValue();
		$$(getHtmlId("muAmountPaid")).setValue(value);
	};// @lock

	textField55.click = function textField55_click (event)// @startlock
	{// @endlock
		var value = $$(getHtmlId("textField55")).getValue();
		$$(getHtmlId("muAmountPaid")).setValue(value);
	};// @lock

	textField43.click = function textField43_click (event)// @startlock
	{// @endlock
		var value = $$(getHtmlId("textField43")).getValue();
		$$(getHtmlId("muAmountPaid")).setValue(value);
	};// @lock

	textField54.click = function textField54_click (event)// @startlock
	{// @endlock
		var value = $$(getHtmlId("textField54")).getValue();
		$$(getHtmlId("muAmountPaid")).setValue(value);
	};// @lock

	textField41.click = function textField41_click (event)// @startlock
	{// @endlock
		var value = $$(getHtmlId("textField41")).getValue();
		$$(getHtmlId("muAmountPaid")).setValue(value);
	};// @lock

	textField40.click = function textField40_click (event)// @startlock
	{// @endlock
		var value = $$(getHtmlId("textField40")).getValue();
		$$(getHtmlId("muAmountPaid")).setValue(value);
	};// @lock

	textField39.click = function textField39_click (event)// @startlock
	{// @endlock
		var value = $$(getHtmlId("textField39")).getValue();
		$$(getHtmlId("muAmountPaid")).setValue(value);
	};// @lock

	textField38.click = function textField38_click (event)// @startlock
	{// @endlock
		var value = $$(getHtmlId("textField38")).getValue();
		$$(getHtmlId("muAmountPaid")).setValue(value);
	};// @lock

	textField37.click = function textField37_click (event)// @startlock
	{// @endlock
		var value = $$(getHtmlId("textField37")).getValue();
		$$(getHtmlId("muAmountPaid")).setValue(value);
	};// @lock

	textField36.click = function textField36_click (event)// @startlock
	{// @endlock
		var value = $$(getHtmlId("textField36")).getValue();
		$$(getHtmlId("muAmountPaid")).setValue(value);
	};// @lock

	textField42.click = function textField42_click (event)// @startlock
	{// @endlock
		var value = $$(getHtmlId("textField42")).getValue();
		$$(getHtmlId("muAmountPaid")).setValue(value);
	};// @lock

	currentChargesField.change = function currentChargesField_change (event)// @startlock
	{// @endlock
		changeBalence();
	};// @lock

	amountPaidField.keyup = function amountPaidField_keyup (event)// @startlock
	{// @endlock
		changeBalence();
		
	};// @lock

	amountPaidField.change = function amountPaidField_change (event)// @startlock
	{// @endlock
		changeBalence();
	};// @lock
	
	function changeBalence()
	{
		var paid = Number($$(getHtmlId('amountPaidField')).getValue());
		$$($comp.id+'_amountPaidBottom').setValue(paid.toFixed(2));
		
		var backBalence = Number($$(getHtmlId('backBalenceField')).getValue());
		var currentCharges = Number($$(getHtmlId('currentChargesField')).getValue());
		
		var newBalence = (backBalence + currentCharges) - paid;
		$$($comp.id+'_newBalenceField').setValue(newBalence.toFixed(2))
	}
	
	function changeMUBalence()
	{
		var paid = Number($$(getHtmlId('muAmountPaid')).getValue());
		$$($comp.id+'_muAmountPaidBottom').setValue(paid.toFixed(2));
		
		var backBalence = Number($$(getHtmlId('muBackBalence')).getValue());
		var currentCharges = Number($$(getHtmlId('muCurrentCharges')).getValue());
		
		var newBalence = (backBalence + currentCharges) - paid;
		$$($comp.id+'_muNewBalence').setValue(newBalence.toFixed(2))
	}

	button5.click = function button5_click (event)// @startlock
	{// @endlock
		
		
		
	};// @lock

	field100.click = function field100_click (event)// @startlock
	{// @endlock
		var value = $$(getHtmlId("field100")).getValue();
		$$(getHtmlId("amountPaidField")).setValue(value);
	};// @lock

	field95.click = function field95_click (event)// @startlock
	{// @endlock
		var value = $$(getHtmlId("field95")).getValue();
		$$(getHtmlId("amountPaidField")).setValue(value);
	};// @lock

	field90.click = function field90_click (event)// @startlock
	{// @endlock
		var value = $$(getHtmlId("field90")).getValue();
		$$(getHtmlId("amountPaidField")).setValue(value);
	};// @lock

	field85.click = function field85_click (event)// @startlock
	{// @endlock
		var value = $$(getHtmlId("field85")).getValue();
		$$(getHtmlId("amountPaidField")).setValue(value);
	};// @lock

	field80.click = function field80_click (event)// @startlock
	{// @endlock
		var value = $$(getHtmlId("field80")).getValue();
		$$(getHtmlId("amountPaidField")).setValue(value);
	};// @lock

	field75.click = function field75_click (event)// @startlock
	{// @endlock
		var value = $$(getHtmlId("field75")).getValue();
		$$(getHtmlId("amountPaidField")).setValue(value);
	};// @lock

	field70.click = function field70_click (event)// @startlock
	{// @endlock
		var value = $$(getHtmlId("field70")).getValue();
		$$(getHtmlId("amountPaidField")).setValue(value);
	};// @lock

	field65.click = function field65_click (event)// @startlock
	{// @endlock
		var value = $$(getHtmlId("field65")).getValue();
		$$(getHtmlId("amountPaidField")).setValue(value);
	};// @lock

	field60.click = function field60_click (event)// @startlock
	{// @endlock
		var value = $$(getHtmlId("field60")).getValue();
		$$(getHtmlId("amountPaidField")).setValue(value);
	};// @lock

	field55.click = function field55_click (event)// @startlock
	{// @endlock
		var value = $$(getHtmlId("field55")).getValue();
		$$(getHtmlId("amountPaidField")).setValue(value);
	};// @lock

	field50.click = function field50_click (event)// @startlock
	{// @endlock
		var value = $$(getHtmlId("field50")).getValue();
		$$(getHtmlId("amountPaidField")).setValue(value);
	};// @lock

	field45.click = function field45_click (event)// @startlock
	{// @endlock
		var value = $$(getHtmlId("field45")).getValue();
		$$(getHtmlId("amountPaidField")).setValue(value);
	};// @lock

	field40.click = function field40_click (event)// @startlock
	{// @endlock
		var value = $$(getHtmlId("field40")).getValue();
		$$(getHtmlId("amountPaidField")).setValue(value);
	};// @lock

	field35.click = function field35_click (event)// @startlock
	{// @endlock
		var value = $$(getHtmlId("field35")).getValue();
		$$(getHtmlId("amountPaidField")).setValue(value);
	};// @lock

	field30.click = function field30_click (event)// @startlock
	{// @endlock
		var value = $$(getHtmlId("field30")).getValue();
		$$(getHtmlId("amountPaidField")).setValue(value);
	};// @lock

	field25.click = function field25_click (event)// @startlock
	{// @endlock
		var value = $$(getHtmlId("field25")).getValue();
		$$(getHtmlId("amountPaidField")).setValue(value);
	};// @lock

	field20.click = function field20_click (event)// @startlock
	{// @endlock
		var value = $$(getHtmlId("field20")).getValue();
		$$(getHtmlId("amountPaidField")).setValue(value);
	};// @lock

	field15.click = function field15_click (event)// @startlock
	{// @endlock
		var value = $$(getHtmlId("field15")).getValue();
		$$(getHtmlId("amountPaidField")).setValue(value);
	};// @lock

	field10.click = function field10_click (event)// @startlock
	{// @endlock
		var value = $$(getHtmlId("field10")).getValue();
		$$(getHtmlId("amountPaidField")).setValue(value);
	};// @lock

	field5.click = function field5_click (event)// @startlock
	{// @endlock
		var value = $$(getHtmlId("field5")).getValue();
		$$(getHtmlId("amountPaidField")).setValue(value);
	};// @lock

	field0.click = function field0_click (event)// @startlock
	{// @endlock
		var value = $$(getHtmlId("field0")).getValue();
		$$(getHtmlId("amountPaidField")).setValue(value);
	};// @lock

	dataGrid5.onRowClick = function dataGrid5_onRowClick (event)// @startlock
	{// @endlock
		removeFromCart(sources.cart.ItemPriceListID);
	};// @lock

	dataGrid4.onRowClick = function dataGrid4_onRowClick (event)// @startlock
	{// @endlock
		 addToCart(sources.itemList.ItemPriceListID);
					
	};// @lock
	
	function removeFromCart(itemID)
	{
		var itemToRemove;
			for(var x = 0; x < cart.length ; x++)
			{
				if(cart[x].ItemPriceListID === itemID)
				{
					itemToRemove = cart[x];
					//cart[x] = null;
				}
			}
		if(itemToRemove !== null)
		{
			currentCharges = (Number(currentCharges) - Number(itemToRemove.ItemPrice));
			currentCharges = currentCharges.toFixed(2);
			$$(getHtmlId("currentChargesField")).setValue(currentCharges);
			sources.cart.removeCurrent();
			var classNotLeft = true;
			var testNotLeft = true;
			if(itemToRemove.IsClass === 1)
			{
				
				$$(getHtmlId('attendedCheckBox')).setValue(false);			
			}
			
			if(itemToRemove.TT_TestingTypeID !== null)
			{
				$$($comp.id+'_testStatus').setValue('None');
				$$(getHtmlId('testType')).setValue("");				
			}
		}
				
	}
	
	function addToCart(itemID)
	{
		var notInArray = true;
		var itemToAdd;
			for(var x = 0; x < itemList.length ; x++)
			{
				if(itemList[x].ItemPriceListID === itemID)
				{
					itemToAdd = itemList[x];
				}
			}
	if(itemToAdd != null)
	{		
			
		for(var x = 0; x < cart.length ; x++)
		{
			if(itemToAdd.IsClass === 1)
			{
				if(cart[x].IsClass ===1)
				{
					notInArray = false;
				}
			}	
			if(itemToAdd.TT_TestingTypeID !== null)
			{
				if(cart[x].TT_TestingTypeID !== null)
				{
					notInArray = false;
				}
			}
		}
		
		if(notInArray)
		{
			
				cart.push({
				Item: itemToAdd.Item,
				ItemPriceListID: itemToAdd.ItemPriceListID,
				ItemPrice: itemToAdd.ItemPrice,
				ItemDescription: itemToAdd.ItemDescription,
				TT_TestingTypeID: itemToAdd.TT_TestingTypeID,
				IsClass: itemToAdd.IsClass
			});
			sources.cart.sync();
			
			
			
			currentCharges = (Number(currentCharges) + Number(itemToAdd.ItemPrice));
			currentCharges = currentCharges.toFixed(2);
			$$(getHtmlId("currentChargesField")).setValue(currentCharges);
				
			
			
			if(itemToAdd.IsClass === 1)
			{
				$$(getHtmlId('attendedCheckBox')).setValue(true);
				$$(getHtmlId('comboBoxTextInput')).setValue('Class Attendance Receipt');
				
			}
			if(itemToAdd.TT_TestingTypeID !== null)
			{
				$$($comp.id+'_testStatus').setValue('Alert');
				$$(getHtmlId('testType')).setValue(itemToAdd.Item);
								
			}	

		}
	}
	};
	
	function removeFromMUCart(itemID)
	{
		var itemToRemove;
			for(var x = 0; x < cart.length ; x++)
			{
				if(cart[x].ItemPriceListID === itemID)
				{
					itemToRemove = cart[x];
					//cart[x] = null;
				}
			}
		if(itemToRemove !== null)
		{
			currentCharges = (Number(currentCharges) - Number(itemToRemove.ItemPrice));
			currentCharges = currentCharges.toFixed(2);
			$$(getHtmlId("muCurrentCharges")).setValue(currentCharges);
			sources.cart.removeCurrent();
			var classNotLeft = true;
			var testNotLeft = true;
			if(itemToRemove.IsClass === 1)
			{
				
				$$(getHtmlId('muAttendedCheckBox')).setValue(false);			
			}
			
			if(itemToRemove.TT_TestingTypeID !== null)
			{
				$$($comp.id+'_muTestStatus').setValue('None');
				$$(getHtmlId('muTestType')).setValue("");				
			}
		}
				
	}
	
	function addToMUCart(itemID)
	{
		var notInArray = true;
		var itemToAdd;
			for(var x = 0; x < itemList.length ; x++)
			{
				if(itemList[x].ItemPriceListID === itemID)
				{
					itemToAdd = itemList[x];
				}
			}
	if(itemToAdd != null)
	{		
			
		for(var x = 0; x < cart.length ; x++)
		{
			if(itemToAdd.IsClass === 1)
			{
				if(cart[x].IsClass ===1)
				{
					notInArray = false;
				}
			}	
			if(itemToAdd.TT_TestingTypeID !== null)
			{
				if(cart[x].TT_TestingTypeID !== null)
				{
					notInArray = false;
				}
			}
		}
		
		if(notInArray)
		{
			
				cart.push({
				Item: itemToAdd.Item,
				ItemPriceListID: itemToAdd.ItemPriceListID,
				ItemPrice: itemToAdd.ItemPrice,
				ItemDescription: itemToAdd.ItemDescription,
				TT_TestingTypeID: itemToAdd.TT_TestingTypeID,
				IsClass: itemToAdd.IsClass
			});
			sources.cart.sync();
			
			
			
			currentCharges = (Number(currentCharges) + Number(itemToAdd.ItemPrice));
			currentCharges = currentCharges.toFixed(2);
			$$(getHtmlId("muCurrentCharges")).setValue(currentCharges);
				
			
			
			if(itemToAdd.IsClass === 1)
			{
				$$(getHtmlId('muAttendedCheckBox')).setValue(true);
				$$(getHtmlId('textField60')).setValue('Class Attendance Receipt');
				
			}
			if(itemToAdd.TT_TestingTypeID !== null)
			{
				$$($comp.id+'_muTestStatus').setValue('Alert');
				$$(getHtmlId('muTestType')).setValue(itemToAdd.Item);
								
			}	

		}
	}
	};

	comboBoxTextInput.keyup = function comboBoxTextInput_keyup (event)// @startlock
	{// @endlock
		
		if(event.keyCode ===13)
		{
			
			$$($comp.id+'_comboBoxTextInput').setValue(sources.receiptPurpose.ReceiptPurpose);
			var grid = document.getElementById($comp.id+'_comboboxGrid');
			grid.style.display = 'none';
		}
		else
		{
			receiptPurpose=tempStore;
			sources.receiptPurpose.sync();

			var grid = document.getElementById($comp.id+'_comboboxGrid');
			grid.style.display = 'block';

			var currentInput = $$($comp.id+'_comboBoxTextInput').getValue();//textInput.value;
			sources.receiptPurpose.query('ReceiptPurpose = :1 order by ReceiptPurpose', { params: [currentInput + "*"]});
		}
		
		
		
		
	};// @lock

	comboboxGrid.onRowClick = function comboboxGrid_onRowClick (event)// @startlock
	{// @endlock
		
		var grid = document.getElementById(getHtmlId('comboboxGrid'));
		grid.style.display = 'none';
		
		var recValue = $$(getHtmlId('comboboxGrid')).sourceAtt.getValue();
		$$(getHtmlId('comboBoxTextInput')).setValue(recValue);
	};// @lock

	comboboxButton.click = function comboboxButton_click (event)// @startlock
	{// @endlock
		
		var grid = document.getElementById(getHtmlId('comboboxGrid'));
		if(grid.style.display == 'none')
		{
			grid.style.display = 'block';
		}
		else
		{
			grid.style.display = 'none';
		}
		
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('muClassRosterMainCont')).setSplitPosition(1205);
	};// @lock

	muClassRosterDG.onRowDraw = function muClassRosterDG_onRowDraw (event)// @startlock
	{// @endlock
		var item = event.row.cells[2].value;
		if(item != null)
		{
			var y = event.row.cells[1].dom.css("backgroundColor","yellow");
			var y = event.row.cells[2].dom.css("backgroundColor","yellow");
			
		}
		else
		{
			var y = event.row.cells[1].dom.css("backgroundColor","");
			var y = event.row.cells[2].dom.css("backgroundColor","");
		}
	};// @lock

	muClassRosterDG.onRowClick = function muClassRosterDG_onRowClick (event)// @startlock
	{// @endlock
		cart = [];
		$$(getHtmlId('muAttendedCheckBox')).setValue(false);
		currentCharges = 0;	
		$$($comp.id+'_muTestStatus').setValue('None');
		$$(getHtmlId("muAmountPaid")).setValue(null);
			
		

		var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:2,minor:11,data1:sources.myMURosterList.ClientInformation_CIID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				
						flagSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
				
		var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:2,minor:12,
						data1:sources.myMURosterList.ClientInformation_CIID ,weekStartDate:'2014-3-16', weekEndDate:'2014-3-22'}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				
						balenceCarrySuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
				
		var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:2,minor:9,data1:sources.myMURosterList.ClientRequirementsID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				
						itemListeMUSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
		currentBal = Number(sources.myMURosterList.CurrentBalence).toFixed(2);
		$$(getHtmlId("muBackBalence")).setValue(currentBal);
		
		$$(getHtmlId('muClassRosterMainCont')).setSplitPosition(400);
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('classRosterMainCont')).setSplitPosition(1205);
	};// @lock

	dataGrid1.onRowDraw = function dataGrid1_onRowDraw (event)// @startlock
	{// @endlock
		
		
		var item = event.row.cells[2].value;
		if(item != null)
		{
			var y = event.row.cells[1].dom.css("backgroundColor","yellow");
			var y = event.row.cells[2].dom.css("backgroundColor","yellow");
			
		}
		else
		{
			var y = event.row.cells[1].dom.css("backgroundColor","");
			var y = event.row.cells[2].dom.css("backgroundColor","");
		}
		
	};// @lock

	dataGrid1.onRowClick = function dataGrid1_onRowClick (event)// @startlock
	{// @endlock
		var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:2,minor:13,data1:today,data2:sources.myRosterList.ClientRequirementsID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		prevRec = rpcDSelects.getSelect(myObject);
		
		if(prevRec.length !== 0)
		{
			
		}		
		cart = [];
		$$(getHtmlId('attendedCheckBox')).setValue(false);
		currentCharges = 0;	
		$$($comp.id+'_testStatus').setValue('None');
		$$(getHtmlId("amountPaidField")).setValue(null);
			
		xhr = new XMLHttpRequest();
		URLText = userConfigObj.serverDomain + "/1.getClientPicture";  //should be localhost or 127.0.0.1
		xhr.open("POST",URLText,true);		
		xhr.setRequestHeader("Content-type","text/plain");
		xhr.responseType = "blob";    //omit this line in order to recieve string from server
		xhr.send("0,0,1");  //text in body that needs to be parsed on server
		xhr.onreadystatechange = function()
		{
			if (this.readyState === 4)
			{
				myBlob = this.response
				$$($comp.id +'_clientPicture').setValue(URL.createObjectURL(myBlob));
			}
		}

		var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:2,minor:11,data1:sources.myRosterList.ClientInformation_CIID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				
						flagSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
				
		var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:2,minor:12,
						data1:sources.myRosterList.ClientInformation_CIID ,weekStartDate:'2014-3-16', weekEndDate:'2014-3-22'}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				
						balenceCarrySuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
				
		var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:2,minor:9,data1:sources.myRosterList.ClientRequirementsID}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				
						itemListeSuccess(result);
					},
					'onError': function(error){
						console.log(error);
					},
					'params': [myObject]
				});
		currentBal = Number(sources.myRosterList.CurrentBalence).toFixed(2);
		$$(getHtmlId("backBalenceField")).setValue(currentBal);
		
		
		/*
		debugger;
		//-----------------------------how to send a xmlhttprequest with body string !!!!!
		xhr = new XMLHttpRequest();
		URLText = "http://localhost:8082/getPicture";
		xhr.open("POST",URLText,true);		
		xhr.setRequestHeader("Content-type","text/plain");
		xhr.send(userConfigObj.secToken + "," + userConfigObj.userID + "," + sources.myRosterList.ClientInformation_CIID);
		//$$(getHtmlId('clientPicture')).setValue(xhr.response);
		*/
		
		
		
		$$(getHtmlId('classRosterMainCont')).setSplitPosition(400);
		
	};// @lock

	matrix4.click = function matrix4_click (event)// @startlock
	{// @endlock
		
		var htmlID = $comp.id + "_classFilterMatrix";
		var  selectedClass = $$(htmlID).getValue();
		var id = {id:selectedClass};
		pageOpener(id);
		
		
	};// @lock

	classFilterMatrix.click = function classFilterMatrix_click (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock

	filterButton.click = function filterButton_click (event)// @startlock
	{// @endlock
		
		var filter = document.getElementById(getHtmlId('classFilterViewCont'));
		var full = document.getElementById(getHtmlId('classFullViewCont'));
		var ifHidden = filter.style.visibility.toString();
		if(whatsVisible == 'full')
		{
			whatsVisible = 'filter';
			filter.style.display = 'block';
			full.style.display = 'none';
		}
		
			
		
	};// @lock

	button4.click = function button4_click (event)// @startlock
	{// @endlock
		
		var full = document.getElementById(getHtmlId('classFullViewCont'));
		var filter = document.getElementById(getHtmlId('classFilterViewCont'));
		filterMatrix.style.display = 'block';
		var day = $$(getHtmlId('combobox6')).getValue();
		var program = $$(getHtmlId('combobox5')).getValue();
		
		
		
		if(day == "None" && program == "None")
		{
			whatsVisible = 'full';
			filterMatrix.style.display = 'none';
			full.style.display = 'block';
			filter.style.display = 'none';
		
		}
		else if(day == "None")
		{
			
			var myObject3 = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:2,minor:3,data1:program}; //dontforget to add this to token   
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
		
		var full = document.getElementById(getHtmlId('classFullViewCont'));
		var filter = document.getElementById(getHtmlId('classFilterViewCont'));
		var ifHidden = full.style.visibility;
		if(whatsVisible = 'filter')
		{
			whatsVisible = 'full';
			
			filter.style.display = 'none';
			filterMatrix.style.display = 'none';
			full.style.display = 'block';
			full.style.visibility = "visible";
		}
		
		
	};// @lock
	function pageOpenerMU(classTaken)
	 {
	 	//var htmlID = $comp.id + "_classFilterMatrix";
		//var  selectedClass = $$(htmlID).getValue();
		var myObject = {token:'7836140170460568' ,id:'1',major:2,minor:6,data1:classTaken,weekStartDate:'2014-3-16',weekEndDate:'2014-3-22'}; //dont forget to change token and id
	 	myMURosterList = rpcDSelects.getSelect(myObject);
	 	sources.myMURosterList.sync();
	 	
	 };
	 
	 function pageOpener (id) 
	{
	
			
		var myObject = {token:'7836140170460568' ,id:'1',major:2,minor:5,data1:id.id.toString()}; //dont forget to change token and id
	 	myRosterList = rpcDSelects.getSelect(myObject);
	 	sources.myRosterList.sync();
	 	
	 	//$comp.sourcesVar.myRosterList = myRosterList;
	 	
	 	
	 	pageOpenerMU(id.id.toString());
	 	
	
		
	};
	function fillFullView()
	{
		
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
        			textInput1.setAttribute('style','width:60px;height:12px;left:0px;top:0px;position:absolute;font:12px sans-serif;color:rgba(0,27,90,100);font-weight:Normal');
        			textInput1.setAttribute('rel','capcis.css');
        		
        			textInput1.setAttribute('class','waf-widget waf-richText waf-state-default');
        			document.body.appendChild(textInput1); //insert html tag
        		
        			var textField2 = new WAF.widget.RichText({
            			'id': "Class2", // ID 
            			'data-lib': 'WAF',
            			'data-type': 'textField',                         
            			'class': 'waf-widget waf-textField default inherited'
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
        				textInput.setAttribute('style','width:60px;height:12px;left:15px;top:0px;position:absolute;font:12px sans-serif;color:rgba(0,27,90,100);font-weight:Normal');
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
        				textInput2.setAttribute('style','width:60px;height:12px;left:30px;top:0px;position:absolute;font:12px sans-serif;color:rgba(0,27,90,100);font-weight:Normal;cursor:pointer');
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
        			textInput3.setAttribute('style','width:60px;height:12px;left:0px;top:0px;position:absolute;font:12px sans-serif;color:rgba(0,27,90,100);font-weight:Normal');
        			textInput3.setAttribute('rel','capcis.css');
        			textInput3.setAttribute('class','waf-widget waf-richText waf-state-default');
        			document.body.appendChild(textInput3); //insert html tag
        		
        			var textField2 = new WAF.widget.RichText({
           		 		'id': "muClass2", // ID 
          	  			'data-lib': 'WAF',
            			'data-type': 'textField',                        
            			'class': 'waf-widget waf-textField default inherited'
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
        			textInput4.setAttribute('style','width:60px;height:12px;left:15px;top:0px;position:absolute;font:12px sans-serif;color:rgba(0,27,90,100);font-weight:Normal');
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
        			textInput5.setAttribute('style','width:60px;height:12px;left:30px;top:0px;position:absolute;font:12px sans-serif;color:rgba(0,27,90,100);font-weight:normal;cursor:pointer');
        			textInput5.setAttribute('rel','capcis.css');
        			textInput5.addEventListener('click', function(){pageOpener(document.getElementById(this.id))}, false);
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
		
	};
	
	function recieptPurposeSuccess(result)
	{
		receiptPurpose= result;
		tempStore= result;
		sources.receiptPurpose.sync();
	}
	function recieptPurposeError(event)
	{
		var errMessage;
				for (var x = 0;x < event.error.length;x++)
				{
					errMessage += (event.error[x].message + ",");
				}
				alert(errMessage);
	}
	
		
	function itemListeSuccess(result)
	{
		itemList= result;
		tempStore= result;
		sources.itemList.sync();
		addToCart(2);
		addToCart(4);
		addToCart(sources.myRosterList.ItemPriceListID);
	}
	function itemListError(event)
	{
		var errMessage;
				for (var x = 0;x < event.error.length;x++)
				{
					errMessage += (event.error[x].message + ",");
				}
				alert(errMessage);
	}
	function itemListeMUSuccess(result)
	{
		itemList= result;
		tempStore= result;
		sources.itemList.sync();
		addToMUCart(3);
		addToMUCart(5);
		addToMUCart(sources.myMURosterList.ItemPriceListID);
	}
	function itemListMUError(event)
	{
		var errMessage;
				for (var x = 0;x < event.error.length;x++)
				{
					errMessage += (event.error[x].message + ",");
				}
				alert(errMessage);
	}
	function flagSuccess(result)
	{
		
		clientFlag= result;
		
		sources.clientFlag.sync();
	}
	function flagError(event)
	{
		var errMessage;
				for (var x = 0;x < event.error.length;x++)
				{
					errMessage += (event.error[x].message + ",");
				}
				alert(errMessage);
	}
	function balenceCarrySuccess(result)
	{
		carryBalence= result;
		sources.carryBalence.sync();
		$$(getHtmlId('balenceMayCarry')).setValue(Number(sources.carryBalence.ItemPrice).toFixed(2));
	}
	function balenceCarryError(event)
	{
		var errMessage;
				for (var x = 0;x < event.error.length;x++)
				{
					errMessage += (event.error[x].message + ",");
				}
				alert(errMessage);
	}

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button7", "click", button7.click, "WAF");
	WAF.addListener(this.id + "_submitButton", "click", submitButton.click, "WAF");
	WAF.addListener(this.id + "_textField60", "keyup", textField60.keyup, "WAF");
	WAF.addListener(this.id + "_dataGrid7", "onRowClick", dataGrid7.onRowClick, "WAF");
	WAF.addListener(this.id + "_button9", "click", button9.click, "WAF");
	WAF.addListener(this.id + "_dataGrid3", "onRowClick", dataGrid3.onRowClick, "WAF");
	WAF.addListener(this.id + "_dataGrid2", "onRowClick", dataGrid2.onRowClick, "WAF");
	WAF.addListener(this.id + "_muCurrentCharges", "change", muCurrentCharges.change, "WAF");
	WAF.addListener(this.id + "_muAmountPaid", "keyup", muAmountPaid.keyup, "WAF");
	WAF.addListener(this.id + "_muAmountPaid", "change", muAmountPaid.change, "WAF");
	WAF.addListener(this.id + "_textField52", "click", textField52.click, "WAF");
	WAF.addListener(this.id + "_textField50", "click", textField50.click, "WAF");
	WAF.addListener(this.id + "_textField51", "click", textField51.click, "WAF");
	WAF.addListener(this.id + "_textField49", "click", textField49.click, "WAF");
	WAF.addListener(this.id + "_textField48", "click", textField48.click, "WAF");
	WAF.addListener(this.id + "_textField47", "click", textField47.click, "WAF");
	WAF.addListener(this.id + "_textField46", "click", textField46.click, "WAF");
	WAF.addListener(this.id + "_textField45", "click", textField45.click, "WAF");
	WAF.addListener(this.id + "_textField56", "click", textField56.click, "WAF");
	WAF.addListener(this.id + "_textField44", "click", textField44.click, "WAF");
	WAF.addListener(this.id + "_textField53", "click", textField53.click, "WAF");
	WAF.addListener(this.id + "_textField55", "click", textField55.click, "WAF");
	WAF.addListener(this.id + "_textField43", "click", textField43.click, "WAF");
	WAF.addListener(this.id + "_textField54", "click", textField54.click, "WAF");
	WAF.addListener(this.id + "_textField41", "click", textField41.click, "WAF");
	WAF.addListener(this.id + "_textField40", "click", textField40.click, "WAF");
	WAF.addListener(this.id + "_textField39", "click", textField39.click, "WAF");
	WAF.addListener(this.id + "_textField38", "click", textField38.click, "WAF");
	WAF.addListener(this.id + "_textField37", "click", textField37.click, "WAF");
	WAF.addListener(this.id + "_textField36", "click", textField36.click, "WAF");
	WAF.addListener(this.id + "_textField42", "click", textField42.click, "WAF");
	WAF.addListener(this.id + "_currentChargesField", "change", currentChargesField.change, "WAF");
	WAF.addListener(this.id + "_amountPaidField", "keyup", amountPaidField.keyup, "WAF");
	WAF.addListener(this.id + "_amountPaidField", "change", amountPaidField.change, "WAF");
	WAF.addListener(this.id + "_button5", "click", button5.click, "WAF");
	WAF.addListener(this.id + "_field100", "click", field100.click, "WAF");
	WAF.addListener(this.id + "_field95", "click", field95.click, "WAF");
	WAF.addListener(this.id + "_field90", "click", field90.click, "WAF");
	WAF.addListener(this.id + "_field85", "click", field85.click, "WAF");
	WAF.addListener(this.id + "_field80", "click", field80.click, "WAF");
	WAF.addListener(this.id + "_field75", "click", field75.click, "WAF");
	WAF.addListener(this.id + "_field70", "click", field70.click, "WAF");
	WAF.addListener(this.id + "_field65", "click", field65.click, "WAF");
	WAF.addListener(this.id + "_field60", "click", field60.click, "WAF");
	WAF.addListener(this.id + "_field55", "click", field55.click, "WAF");
	WAF.addListener(this.id + "_field50", "click", field50.click, "WAF");
	WAF.addListener(this.id + "_field45", "click", field45.click, "WAF");
	WAF.addListener(this.id + "_field40", "click", field40.click, "WAF");
	WAF.addListener(this.id + "_field35", "click", field35.click, "WAF");
	WAF.addListener(this.id + "_field30", "click", field30.click, "WAF");
	WAF.addListener(this.id + "_field25", "click", field25.click, "WAF");
	WAF.addListener(this.id + "_field20", "click", field20.click, "WAF");
	WAF.addListener(this.id + "_field15", "click", field15.click, "WAF");
	WAF.addListener(this.id + "_field10", "click", field10.click, "WAF");
	WAF.addListener(this.id + "_field5", "click", field5.click, "WAF");
	WAF.addListener(this.id + "_field0", "click", field0.click, "WAF");
	WAF.addListener(this.id + "_dataGrid5", "onRowClick", dataGrid5.onRowClick, "WAF");
	WAF.addListener(this.id + "_dataGrid4", "onRowClick", dataGrid4.onRowClick, "WAF");
	WAF.addListener(this.id + "_comboBoxTextInput", "keyup", comboBoxTextInput.keyup, "WAF");
	WAF.addListener(this.id + "_comboboxGrid", "onRowClick", comboboxGrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_comboboxButton", "click", comboboxButton.click, "WAF");
	WAF.addListener(this.id + "_muClassRosterDG", "onRowDraw", muClassRosterDG.onRowDraw, "WAF");
	WAF.addListener(this.id + "_dataGrid1", "onRowDraw", dataGrid1.onRowDraw, "WAF");
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	WAF.addListener(this.id + "_muClassRosterDG", "onRowClick", muClassRosterDG.onRowClick, "WAF");
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	WAF.addListener(this.id + "_dataGrid1", "onRowClick", dataGrid1.onRowClick, "WAF");
	WAF.addListener(this.id + "_matrix4", "click", matrix4.click, "WAF");
	WAF.addListener(this.id + "_classFilterMatrix", "click", classFilterMatrix.click, "WAF");
	WAF.addListener(this.id + "_filterButton", "click", filterButton.click, "WAF");
	WAF.addListener(this.id + "_button4", "click", button4.click, "WAF");
	WAF.addListener(this.id + "_fullButton", "click", fullButton.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
