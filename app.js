const http = require('http');
const fs = require('fs');
const {parse} = require('querystring');
const users = require('user_log.js');// i'm using a seprate js file but a json file would probably be more practical. mongo the the most practical.

let username= '';
let logout = false;
let message = '';
let access = false;
let message_log = '';

const server = http.createServer('/',(req,res)=>{
	fs.readFile('index.html',(err,html)=>{
		res.write(html);
		if(req.method === 'POST'){
			let body = '';
			req.on('data',chunk=>{

				//gathering form information
				body = parse(body+=chunk);
				message = body.message;
				if(body.logout === 'true'){
					logout = true;
				}else{
					logout = false;
				}
				
				for(var i =0; i < users.info.total && !access;++i){
					if(body.name === users.info.names[i] && body.password === users.info.passwords[i]){
							username = body.name;
							access = true;			
							break;
					}
				}

				if(logout){
					access = false;
				}
				//console.log(username + ' ' + message)
				if(access){
					res.write('<style>#login{display:none}</style>')
					if(message.length > 0 ){
						message_log += username + ': ' + message + '<br>';
					}
					res.write(message_log)
					console.log(message_log.length)
					res.end();
				}else{
					res.write('<style>#compose,#logoutButton{display:none}</style>');
					res.end();
				}
			})

		}else{
			res.write('<style>#compose,#logoutButton{display:none}</style>');
			res.end();
		}

	})

  server.getConnections(function(err, count) {
     console.log("Connections: " + count);
  });

});

server.listen(3000,'10.0.0.114');	

