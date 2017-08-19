"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
var greeter_1 = require("./entities/greeter");
var greeter = new greeter_1.default("world!");
var msg = greeter.greet();
$("body").html("<h1>" + msg + "</h1>");
