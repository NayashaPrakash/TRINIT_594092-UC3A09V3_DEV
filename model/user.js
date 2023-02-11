const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();



const userSchema = new mongoose.Schema({
    userName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    preference1: {
        type: String
    },
    preference2: {
        type: String
    },
    preference3: {
        type: String
    },
    reg_no: {
        type: String
    },

});

const User = mongoose.model('User', userSchema);
module.exports = User;