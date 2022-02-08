const http = require("http");

const {index, about, contact, products, subscribe, fourofour, fouroneeight} = require('./routes');



const server = http.createServer((request, response) => {
  let path = "./views/";
  console.log(request.url, request.method);
  switch (request.url) {
    case "/":
      path += "index.html";
      response.statusCode = 200;
      index(path, response);
      break;
    case "/about":
      path += "about.html";
      response.statusCode = 200;
      about(path, response);
      break;
    case "/contact":
      path += "contact.html";
      response.statusCode = 200;
      contact(path, response);
      break;
    case "/products":
      path += "products.html";
      response.statusCode = 200;
      products(path, response);
      break;
    case "/subscribe":
      path += "subscribe.html";
      response.statusCode = 200;
      subscribe(path, response);
      break;
    case "/aboutMe":
        response.statusCode = 301;
        response.setHeader('Location', '/about');
        response.end();
        break; 
    case "/fouroneeight":
        path += "fouroneeight.html";
        response.statusCode = 418;
        fouroneeight(path, response);
        break; 
    default:
      path += "fourofour.html";
      response.statusCode = 404;
      fourofour(path, response);
      break;
  }
  
});

server.listen(3000, "localhost", () => {
  console.log("listening on port 3000.");
});
