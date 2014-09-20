/**
 * New node file
 * To get Rest service result.
 * 2014-0919
 * Peter.Leung
 */
function exeRestQuery(params, callback){
	var http = require('http');
	var equal = require('assert').equal;
	console.log("restexeQuery============>1" ); 
	var restOptions = require('./requestOptions').options;
	console.log("restOptions.pathbefore============>" +restOptions.path); 
//	var a=restOptions.path;
	
	restOptions.path=restOptions.path.concat(params[0]);
	console.log("restOptions.path=====>" + restOptions.path); 
	if(params[1]!=null){
		restOptions.method='PUT';
	}
	var req = http.request(restOptions, function (res) {
	    console.log('STATUS: ' + res.statusCode);
	    equal(200, res.statusCode);
	    console.log('HEADERS: ' + JSON.stringify(res.headers));
	 
	    res.on('data',function (chunk) {
	         console.log('BODY: ' + chunk);
	         var contact = JSON.parse(chunk);          
	         var plen=params.length;
	         if(plen>0){
	        	 console.log("count============>" + contact); 
	        	 callback(false, contact);
	         }else{
	        	 
	         }
	    });
	});
	 
	req.on('error', function(e) {
	  console.log('problem with request: ' + e.message);
	  callback(e, true);
	});	 	 
	req.end();	
}

exports.exeRestQuery=exeRestQuery;
