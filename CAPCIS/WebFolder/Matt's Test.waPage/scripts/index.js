
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
	var dataGrid1 = {};	// @dataGrid
	var textField1 = {};	// @textField
// @endregion// @endlock

// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
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

	dataGrid1.onRowClick = function dataGrid1_onRowClick (event)// @startlock
	{// @endlock
		var grid = document.getElementById(getHtmlId('comboboxGrid'));
		grid.style.display = 'none';
		
		var recValue = $$(getHtmlId('comboboxGrid')).sourceAtt.getValue();
		$$(getHtmlId('comboBoxTextInput')).setValue(recValue);
	};// @lock

	textField1.keyup = function textField1_keyup (event)// @startlock
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

// @region eventManager// @startlock
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("dataGrid1", "onRowClick", dataGrid1.onRowClick, "WAF");
	WAF.addListener("textField1", "keyup", textField1.keyup, "WAF");
// @endregion
};// @endlock
