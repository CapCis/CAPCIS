
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
				
		var myObject = {token:userConfigObj.secToken ,id:userConfigObj.userID,major:2,minor:9}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
		 		rpcDSelects.getSelectAsync({
		 			'onSuccess': function(result){
		 				
						itemListeSuccess(result);
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

		today = mm+'/'+dd+'/'+yyyy;
		$$(getHtmlId('receiptDate')).setValue(today);
	 	
	// @region namespaceDeclaration// @startlock
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

	button5.click = function button5_click (event)// @startlock
	{// @endlock
		var paid = $$($comp.id+'_amountPaidField').getValue();
		$$($comp.id+'_amountPaidBottom').setValue(paid.toFixed(2));
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
		currentCharges = (Number(currentCharges) - Number(sources.cart.ItemPrice));
		currentCharges = currentCharges.toFixed(2);
		$$(getHtmlId("currentChargesField")).setValue(currentCharges);
		sources.cart.removeCurrent();
	};// @lock

	dataGrid4.onRowClick = function dataGrid4_onRowClick (event)// @startlock
	{// @endlock
		debugger;
		var notInArray = true;
		
		for(var x = 0; x < cart.length ; x++)
		{
			if(cart[x].ItemPriceListID === sources.itemList.ItemPriceListID)
			{
				notInArray = false;
			}
		}
		
		if(notInArray)
		{
			cart.push({
				Item: sources.itemList.Item,
				ItemPriceListID: sources.itemList.ItemPriceListID,
				ItemPrice: sources.itemList.ItemPrice,
				ItemDescription: sources.itemList.ItemDescription,
				TT_TestingTypeID: sources.itemList.TT_TestingTypeID,
				IsClass: sources.itemList.IsClass
			});
			sources.cart.sync();
			
			currentCharges = (Number(currentCharges) + Number(sources.itemList.ItemPrice));
			currentCharges = currentCharges.toFixed(2);
			$$(getHtmlId("currentChargesField")).setValue(currentCharges);
		}
		
	};// @lock

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
		
		$$(getHtmlId('muClassRosterMainCont')).setSplitPosition(600);
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
		
		//var reciept = document.getElementById(getHtmlId('classRosterRecieptCont'));
		//reciept.style.left = '150px';
		currentBal = sources.myRosterList.CurrentBalence.toFixed(2);
		$$(getHtmlId("backBalenceField")).setValue(currentBal);
		
		$$(getHtmlId('classRosterMainCont')).setSplitPosition(600);
		
		
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

	// @region eventManager// @startlock
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
