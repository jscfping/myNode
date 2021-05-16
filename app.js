const paras = require("./paras.js");
const express = require("express");
const app = express();
const myLibrary = require("./myLibrary.js");

let jsEditon = paras.jsEditon;

app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/public`));
app.use(express.json());

app.get("/", (req, res) => {
    res.render("site");
});


app.get("/jsEditon/", (req, res) => {
    res.send(`${jsEditon}`);
});

app.put("/jsEditon/", (req, res) => {
    try {
        if(!myLibrary.isNumber(req.body.value)) throw error("invalid value");
        jsEditon = req.body.value;
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(500);
    }
});



app.listen(paras.port, function () {
    console.log(`the server is running on http://localhost:${paras.port}`);
});