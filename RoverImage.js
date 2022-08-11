require('dotenv').config()
const axios = require('axios')

var obj;
var objone;
//randomize the query parameters
let year = Math.floor(Math.random() * 8) + 2014
let month= Math.floor(Math.random() * 11)+ 1
let day = Math.floor(Math.random() * 25)+ 1
let r = Math.floor(Math.random() * 3)

//api data
const start = `${year}-0${month}-${day}`
const apikey = process.env.API_KEY;
const apiurl = 'https://api.nasa.gov/';
const path = `mars-photos/api/v1/rovers/curiosity/photos?camera=fhaz&earth_date=${start}&api_key=${apikey}`

//store the data in global scope variable
console.log(apiurl+ path)
axios.get(apiurl + path).then((res)=> res.data.photos[r].img_src).then(data => obj = data).then(() => console.log(obj)).catch((error) => console.log(error))

// delay do the api can return the values on time [else undfined]
setTimeout(() => {

//get the local ip address [Not supported when using proxy services]
const ip = require('ip')
const ipAddress = ip.address()
console.log(ipAddress)
  
//compose the request
const http = require('http');
const hostname = ipAddress;
const port = 8080;
const html = `<image src="${obj}"/>`

//initialize the server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(html);
});
//confirm the server it's being deployed and specify the port and hostname
server.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});
}, 4000);

