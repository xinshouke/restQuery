var restxquery = require('./restQuery');	
var params2=['accounts/count/'];

restxquery.exeRestQuery(params2, function(err, contact) {
	console.log("contact contact:: "+contact);
	if(contact!=''){
		console.log("contact value:: "+contact.count);
	}
});
