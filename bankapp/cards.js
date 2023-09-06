"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cards = express.Router();
cards.post("/", function (req, res) {
    res.status(200).json({ msgCards: "welcome to cards module" });
});
exports.default = cards;
