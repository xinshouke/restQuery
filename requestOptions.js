/**
 * New node file
 * To get Rest service option.
 * 2014-0919
 * Peter.Leung
 */
var username = 'falcon';
var password = '';
var _auth = 'Basic ' + new Buffer(username + ':' + password).toString('base64');
 
var options = {
    host: '0.0.0.0',
    port: 3000,
//    path: '/api/accounts/count/',
    path: '/api/',
    method: 'GET',
    headers:{
        'accept': '*/*',
        'content-type': "application/atom+xml",
        'accept-encoding': 'gzip, deflate',
        'accept-language': 'en-US,en;q=0.9',
        'authorization': _auth,
        'user-agent': 'nodejs rest client'
    }
};

exports.options = options;
