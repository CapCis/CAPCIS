
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'clientPictures';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var button10 = {};	// @button
	var fileUpload2 = {};	// @fileUpload
	// @endregion// @endlock

	// eventHandlers// @lock

	button10.click = function button10_click (event)// @startlock
	{// @endlock
		debugger;
		var test = $comp.id;
		var fName = $$($comp.id + '_fileUpload2').getFiles();
		var fNamefound = fName[0].name;
		$$($comp.id + '_textField2').setValue(fNamefound);
		fNamefound = fNamefound;
	};// @lock

	fileUpload2.filesUploaded = function fileUpload2_filesUploaded (event)// @startlock
	{// @endlock
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button10", "click", button10.click, "WAF");
	WAF.addListener(this.id + "_fileUpload2", "filesUploaded", fileUpload2.filesUploaded, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
