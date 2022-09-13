const express = require('express');

const app = express();

app.get("/vartica",(req,res) => {   //getting the request and calling it
    res.status(200).send("Hello vartica!");     // response : sending the response to user
});

app.listen(7000, () => {
    console.log("Server is listening on port 7000.");
});

