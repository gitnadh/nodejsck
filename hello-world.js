// task one
console.log("Hello world")
//task two
var http = require ("http")
http.createServer(function (request, response) {
response.writeHead(200, {'Content-Type': 'text/plain'});
      response.end(`Hello Node!!!!`);
}).listen(3000);
console.log('You can redirect from this link here => http://localhost:3000');
//task three
var fs = require('fs');

fs.appendFile('welcome.txt', 'Hello Node', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
////
fs.appendFile('hello.txt',"bonjour",function(){
    if (err) throw err
    console.log('Done')
})
//task four
//in file password generator
// last task
//in file email-sender



