function getMyReport (request, response) {        
	debugger;
	var xhr, headers, result, resultObj, URLText, URLJson;
	URLText = "http://localhost:8888/jasperserver/rest_v2/reports/reports/dickReport2.pdf?whereFilter=9"; // connect to an HTTP server
 	var headersObj = {};
    
 	xhr = new XMLHttpRequest(); // instanciate the xhr object
 	
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
     	
 	};
 	  
 	xhr.open('GET', URLText); // to connect to a Web site / xhr.open('GET', URLJson) to send a REST query to a Wakanda server
    
    var myString = 'jasperadmin:jasperadmin';
    var myBuffer = new Buffer(myString);
    var myCreds = myBuffer.toString('base64');
    authstr = 'Basic ' + myCreds;//'jasperadmin:jasperadmin'.toString('base64'); 	
    xhr.setRequestHeader('Authorization',authstr);
    xhr.responseType = 'blob'; //'blob';
 	xhr.send(); // send the request	    
    //response.headers['content-disposition'] = 'attachement; filename=testPDF.pdf';   //Forces Browser Download
    response.contentType = "application/pdf";  //response to send back to the client from this function
    return(xhr.response);
    
    
    //var myPDFBuffer = xhr.response.toBuffer();  // get the response and set it to a buffer
	//var myBufferBackToBlob = myPDFBuffer.toBlob();
	//var myPDFString = myPDFBuffer.toString();
	//var myPDFBlobString = myBufferBackToBlob.toString('utf16');
	//var myAwsomeFile = File("c:/temp/awsomefile.txt");
	//var myAwsomeFile = new TextStream("c:/Temp/awsomefile.txt","Overwrite",7);
	//myAwsomeFile.write(myPDFString);	
    //myAwsomeFile.close();
}

function getPic (request, response)
{
	debugger;
	var myArray = request.body.split(",");
	var myToken = myArray[0];
	var myUserID = myArray[1];
	var myCIID = myArray[2];
	
	
	var serverUtil = require('serverUtilities');
	var dBQueryBuilder = require('dSelectsQuery');
	//add code to check token recievd from body of xhr request
	//add code to get the CIID from the body of xhr request
	var selectStatement = 'SELECT ClientPicture FROM clientpicture WHERE FK_ClientInformation_CIID = "'+myCIID+'"';; 		//build query for client pictures
	var connection = serverUtil.getDBConnectionCapcisClientPicture();
	var result = connection.execute(selectStatement);
	var myResults = result.getAllRows();
	var myPicBlob = myResults[0].ClientPicture;
	connection.close;
	response.contentType = "image/jpeg";
	//response.body = myPicBlob;
	return(myPicBlob);
	
}
