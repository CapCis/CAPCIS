
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'capclassmain';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		

		var whatsVisible = 'full'
		fillFullView();
		$$(getHtmlId('classFullViewCont')).$domNode.css('overflow','auto');
		var myObject = {token:'7836140170460568' ,id:'1',major:2,minor:1}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
	 	myPrograms = rpcDSelects.getSelect(myObject);
	 	var filterMatrix = document.getElementById(getHtmlId('matrix4'));
	 	filterMatrix.style.display = 'none';
	 	sources.myPrograms.sync();
	// @region namespaceDeclaration// @startlock
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
		debugger;
		//var reciept = document.getElementById(getHtmlId('classRosterRecieptCont'));
		//reciept.style.left = '150px';
		$$(getHtmlId('classRosterMainCont')).setSplitPosition(600);
		var x = event.data.cell.value;
		
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
		debugger;
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
		debugger;
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
			
			var myObject3 = {token:'7836140170460568' ,id:'1',major:2,minor:3,data1:program}; //dontforget to add this to token userConfigObj.secToken  userConfigObj.userID
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
		debugger;
		var full = document.getElementById(getHtmlId('classFullViewCont'));
		var filter = document.getElementById(getHtmlId('classFilterViewCont'));
		var ifHidden = full.style.visibility;
		if(whatsVisible = 'filter')
		{
			whatsVisible = 'full';
			full.style.display = 'block';
			filter.style.display = 'none';
			filterMatrix.style.display = 'none';
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
        			textInput1.setAttribute('style','width:60px;height:12px;left:0px;top:0px;position:absolute;font:12px sans-serif;color:rgba(0,27,90,100);font-weight:bold');
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

	// @region eventManager// @startlock
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
