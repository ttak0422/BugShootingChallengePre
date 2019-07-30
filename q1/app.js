const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 8888;
const VALID_NAME = "john.doe";
const VALID_RAW_PASSWORD = "w33k_pa55w0rd";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.post("/", function(req, res) {
    const body = req.body;
    const isValid =
        "name" in body &&
        "raw_password" in body &&
        body.name === VALID_NAME &&
        body.raw_password === VALID_RAW_PASSWORD;
    if(isValid) {
        res.send("AC\n");
    } else {
        res.send("WA\n");
    }     
});

app.listen(PORT);
console.log(`Running port on ${PORT}`);