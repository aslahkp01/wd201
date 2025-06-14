// import { ESLint } from "eslint";
// ESLint.apply

// const http = require ("http");
// const fs = require("fs");
// const server =http.createServer( (req,res)=>{
//     const stream = fs.createReadStream("sample.txt")
//     stream.pipe(res);

// });
// server.listen(3000)
const http = require('http');
const fs = require('fs');
const minimist = require('minimist');
const args = minimist(process.argv.slice(2));

const port = parseInt(args.port);

let homeContent = "";
let projectContent = "";
let registrationContent = "";


fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  homeContent = home;
});

fs.readFile("project.html", (err, project) => {
  if (err) {
    throw err;
  }
  projectContent = project;
});

fs.readFile("registration.html", (err, registration) => {
  if (err) {
    throw err;
  }
  registrationContent = registration;
});

fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  http
  .createServer((request, response) => {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/project":
        response.write(projectContent);
        response.end();
        break;
      case "/registration":
        response.write(registrationContent);
        response.end();
        break;
      default:
        response.write(homeContent);
        response.end();
        break;
    }
  })
  .listen(args.port);                
});
