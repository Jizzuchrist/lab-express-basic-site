const express = require('express');

const app = express();

// link the folder with the entire app
app.use(express.static("public"))
app.get("/home", (request,response) => {
    response.sendFile(__dirname + "/views/index.html");
})
app.get("/profile", (request,response) => {
    response.sendFile(__dirname + "/views/profile.html");
})

app.listen(3000)