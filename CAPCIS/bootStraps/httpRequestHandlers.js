addHttpRequestHandler(
      '/makeMyReportBitch',               // (string) regex used to filter the requests to be intercepted
      'C:/Users/Tim/Documents/Wakanda/CAPCIS/CAPCIS/Modules/httpRequestHandlerResponses.js',  // (string) name of the file where the request handler function is specified
      'getMyReport'         // (string) name of the request handler function
);

addHttpRequestHandler(
      '/1.getClientPicture',               // (string) regex used to filter the requests to be intercepted
      'C:/Users/Tim/Documents/Wakanda/CAPCIS/CAPCIS/Modules/httpRequestHandlerResponses.js',  // (string) name of the file where the request handler function is specified  LAPTOP
      //'C:/Users/CAPCIS-004/Documents/Wakanda/CAPCIS/CAPCIS/Modules/httpRequestHandlerResponses.js',  // (string) name of the file where the request handler function is specified
      'getClientPic'         // (string) name of the request handler function
);