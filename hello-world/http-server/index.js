// import { ESLint } from "eslint";
// ESLint.apply

// const http = require ("http");
// const fs = require("fs");
// const server =http.createServer( (req,res)=>{
//     const stream = fs.createReadStream("sample.txt")
//     stream.pipe(res);

// });
// server.listen(3000)
const http = require("http");
const fs = require("fs");

let homeContent = "";
let projectContent = "";
let registrationContent = "";

// Read home.html
fs.readFile("home.html", (err, home) => {
  if (err) throw err;
  homeContent = home;
});

// Read project.html
fs.readFile("project.html", (err, project) => {
  if (err) throw err;
  projectContent = project;
});

// ✅ Corrected readFile with proper syntax
fs.readFile("registration.html", (err, registration) => {
  if (err) throw err;
  registrationContent = registration;
});

// Create server
http.createServer((request, response) => {
  let url = request.url;
  response.writeHead(200, { "Content-Type": "text/html" });

  switch (url) {
    case "/project":
      response.write(projectContent);
      break;
    case "/registration":
      response.write(registrationContent);
      break;
    default:
      response.write(homeContent);
      break;
  }

  response.end();
}).listen(3014);
