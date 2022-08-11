require('dotenv').config()
const axios = require('axios')

//global scope
var obj;
var title;
var explanation;
const start = '2022-07-22'
const end = '2022-07-22'
const apikey = process.env.API_KEY;
const apiurl = 'https://api.nasa.gov/';
const path = `planetary/apod?api_key=${apikey}`

//pase data and store it in globalscope variales
console.log(apiurl+ path)
axios.get(apiurl + path).then((res)=> res.data.url).then(data => obj = data).then(() => console.log(obj))
axios.get(apiurl + path).then((res)=> res.data.title).then(data => title = data).then(() => console.log(title))
axios.get(apiurl + path).then((res)=> res.data.explanation).then(data => explanation = data).then(() => console.log(explanation))

setTimeout(() => {
//get local ip [proxy => it won't work]
const ip = require('ip')
const ipAddress = ip.address()
console.log(ipAddress)
require('dotenv').config()
//initialize server
const http = require('http');
const html = `<h1>${title}</h1><image src="${obj}"/><p>${explanation}</p>`
const hostname = ipAddress;
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(html);
});

server.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});
}, 6000);
