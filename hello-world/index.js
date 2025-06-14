const fs = require("fs");

let hello = "Hello World!";

returnHello  = () => {
    console.log("Hello Github!");
}

returnHello();

fs.writeFile(
    "sample.txt",
    "Hello World. Welcome to Node.js File System module.",
    (err) => {
      if (err) throw err;
      console.log("File created!");
    }
  );

  fs.readFile("sample.txt", (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  });

  fs.appendFile("sample.txt", " This is my updated content", (err) => {
    if (err) throw err;
    console.log("File updated!");
  });

  fs.rename("sample.txt", "test.txt", (err) => {
    if (err) throw err;
    console.log("File name updated!");
  });
