/*	In order to make the helloWorld() function available client-side, you have to add a reference to the 'rpcGetReports' module in the GUI Designer.
	The helloWorld() function can be executed from your JS file as follows:
	alert(rpcGetReports.helloWorld());
	
	For more information, refer to http://doc.wakanda.org/Wakanda0.Beta/help/Title/en/page1516.html
*/
exports.getReport = function getReport () 
{
   var xhr, headers, result, resultObj, URLText, URLJson;
  
 	//URLJson = "http://127.0.0.1:8081/rest/$catalog"; // REST query to a Wakanda server
 	URLText = "http://localhost:8888/jasperserver/rest_v2/reports/reports/dickReport2.pdf?whereFilter=9"; // connect to an HTTP server
 	var headersObj = {};
   
 	xhr = new XMLHttpRequest(); // instanciate the xhr object
    // you could pass a proxy parameter if you do not want to use your default proxy settings
   
 	xhr.onreadystatechange = function() 
	{ // event handler
	    var state = this.readyState;  
     	if (state !== 4) 
		{ // while the status event is not Done we continue
    	    //authstr = 'Basic ' + ("jasperadmin:jasperadmin").toString("base64"); 	
    		//xhr.setRequestHeader('Authorization',authstr);
    	    return;
    	}
    	
    	var headers = this.getAllResponseHeaders(); //get the headers of the response
   	  	//var result = this.responseText;  //get the contents of the response
   	  	var result = this.response;
   	  	
     	/*var headersArray = headers.split('\n'); // split and format the headers string in an array
     	headersArray.forEach(function(header, index, headersArray) 
     	{
        	var name, indexSeparator, value;
 
        	if (header.indexOf('HTTP/1.1') === 0) 
			{ // this is not a header but a status          
        	     return; // filter it
         	}
  
        	indexSeparator = header.indexOf(':'); 
        	name = header.substr(0,indexSeparator);
        	if (name === "") 
        	{
            	return;
        	}
        	value = header.substr(indexSeparator + 1).trim(); // clean up the header attribute
        	headersObj[name] = value; // fills an object with the headers
     	});
     	
     	if (headersObj['Content-Type'] && headersObj['Content-Type'].indexOf('json') !== -1) 
     	{  
             // JSON response, parse it as objects
         	resultObj = JSON.parse(result);
     	} 
		else 
		{ // not JSON, return text
         	resultTxt = result;
     	}
     	*/
 		};
 	    
 	xhr.open('GET', URLText); // to connect to a Web site
   	// or xhr.open('GET', URLJson) to send a REST query to a Wakanda server
    //authstr = 'Basic ' + btoa('jasperadmin:jasperadmin'); 	
    //xhr.setRequestHeader('Authorization',authstr);
    var myString = 'jasperadmin:jasperadmin';
    var myBuffer = new Buffer(myString);
    var myCreds = myBuffer.toString('base64');
    authstr = 'Basic ' + myCreds;//'jasperadmin:jasperadmin'.toString('base64'); 	
    xhr.setRequestHeader('Authorization',authstr);
    xhr.responseType = 'blob';
 	xhr.send(); // send the request


    
	var myPDFBuffer = xhr.response.toBuffer();
	var myPDFString = myPDFBuffer.toString('utf8');
	//var myAwsomeFile = File("c:/temp/awsomefile.txt");
	var myAwsomeFile = new TextStream("c:/Temp/awsomefile.txt","Overwrite",7);
	myAwsomeFile.write(myPDFString);	
    myAwsomeFile.close();
    
	//myAwsomeFile.create();	
	
	create(myAwsomeFile);
	return (xhr.response);
	
};
