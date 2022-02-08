const fs = require("fs");



// define/extend an EventEmitter class
const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}
// initialize an new emitter object
const myEmitter = new MyEmitter();

myEmitter.on("dropby", (level, message) => {
  console.log(' * ' + level.toUpperCase() + ' * ' + message);
});

function index(path, response) {
    myEmitter.emit("dropby", ' info index file', "Welcome to the quote show");
  fetchFile(path, response);
}

function about(path, response) {
    myEmitter.emit("dropby", ' info about file', "Go ahead, make my day.");
  fetchFile(path, response);  
}

function contact(path, response) {
    myEmitter.emit("dropby", ' info contact file', "You can't handle the truth!");
  fetchFile(path, response);
}

function products(path, response) {
    myEmitter.emit("dropby", ' info products file', "I'll be back");
  fetchFile(path, response);
}

function subscribe(path, response) {
    myEmitter.emit("dropby", ' info subscribe file', "You're gonna need a bigger boat.");
  fetchFile(path, response);
}

function fouroneeight(path, response) {
    myEmitter.emit("dropby", ' error 418', "I'm a Little Teapot");
  fetchFile(path, response);
}

function fourofour(path, response) {
    myEmitter.emit("dropby", ' error 404', "Houston, we have a problem.");
  fetchFile(path, response);
}

function fetchFile(path, response) {
  fs.readFile(path, function (err, data) {
    if (err) {
      console.log(err);
      response.end();
    } else {
      console.log("file was served.");
      response.writeHead(response.statusCode, {
        "Content-Type": "text/html",
      });
      response.write(data);
      response.end();
    }
  });
}

module.exports = {
  fetchFile,
  index,
  about,
  contact,
  products,
  subscribe,
  fourofour,
  fouroneeightII
  
}
