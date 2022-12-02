import {roll} from "./lib/roll.js";
import minimist from "minimist";
import { Express } from "express";

let args = minimist(process.argv.slice(2));
let expressApp = Express();

var port = args.port || 5000;

expressApp.use(Express.urlencoded({ extended: true }));
expressApp.listen(port);

