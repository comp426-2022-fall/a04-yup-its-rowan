import {roll} from "./lib/roll.js";
import minimist from "minimist";
import express  from "express";

let args = minimist(process.argv.slice(2));
let expressApp = express();

var port = args.port || 5000; //either the port or 5000

expressApp.use(express.urlencoded({ extended: true })); //extending to url encoded or json doesn't matter and then listen
expressApp.listen(port);

expressApp.get("/app", (req, res) => { //get request
  res.status(200).send("200 OK"); //send 200 OK for the first thing
});

expressApp.get("/app/roll", (req, res) => {
    let result = roll(); 
    res.status(200).send(JSON.stringify(result)); //send the result
});


    //now for some of the harder ones 

expressApp.post("/app/roll", (req, res) => {
    let result = roll(parseInt(req.body.sides), parseInt(req.body.dice), parseInt(req.body.rolls));
    res.status(200).send(JSON.stringify(result)); 
});