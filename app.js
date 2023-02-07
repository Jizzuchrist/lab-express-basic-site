const express = require("express");

const app = express();

// link the folder with the entire app
app.use(express.static("public"));

app.get("/home", (request, response) => {
  response.sendFile(__dirname + "/views/home.html");
});
app.get("/about", (request, response) => {
  response.sendFile(__dirname + "/views/about.html");
});
app.get("/photogallery", (request, response) => {
  response.sendFile(__dirname + "/views/photogallery.html");
});
app.get("/works", (request, response) => {
  response.sendFile(__dirname + "/views/works.html");
});

app.listen(3000);

