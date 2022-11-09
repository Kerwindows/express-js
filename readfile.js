const fs = require("fs");

//READ FILE ASYNC 1
fs.readFile("./hello.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log("1 Async", data.toString("utf8"));
});

//READ FILE SYNC
//Read the file, wait until I'm done then load everything else
const file = fs.readFileSync("./hello.txt");
console.log("2 Sync", file.toString());

/*------------- Note: Output 1 will show after 2 ------------------*/

//APPEND
//Each time this file runs it appends to the file
fs.appendFile("./hello.txt", " This is so cool", (err) => {
  if (err) {
    console.log(err);
  }
});
// This will add lines to a to the file

//WRITE
