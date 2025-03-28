const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000 

app.get("/fruit", function (req, res) {
    const fruitname = req.query.fruitname; // Extracting the fruit name
    const fruitnames=[fruitname];
    console.log(fruitnames);
    const output = [`YOU HAVE ENTERED A FRUIT NAME CALLED ${fruitname}`]; // Adding the message to an array
    res.send(output); // Sending the array as a response
});

app.listen(PORT, function () {
    console.log("Server Started.............");
});