require('dotenv').config()
const axios = require('axios')

var obj;
var objone;

let year = Math.floor(Math.random() * 8) + 2014
let month= Math.floor(Math.random() * 11)+ 1
let day = Math.floor(Math.random() * 25)+ 1
let r = Math.floor(Math.random() * 3)

const start = `${year}-0${month}-${day}`
const apikey = process.env.API_KEY;
const apiurl = 'https://api.nasa.gov/';
const path = [`mars-photos/api/v1/rovers/curiosity/photos?camera=fhaz&earth_date=${start}&api_key=${apikey}`]

console.log(apiurl+ path)
axios.get(apiurl + path).then((res)=> res.data.photos[r].img_src).then(data => obj = data).then(() => console.log(obj)).catch((error) => console.log(error))


setTimeout(() => {

require('dotenv').config()
const ip = require('ip')
const ipAddress = ip.address()
console.log(ipAddress)
const http = require('http');
const html = `<image src="${obj}"/>`
const hostname = ipAddress;
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(html);
});

server.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});
}, 4000);

