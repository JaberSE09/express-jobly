"use strict";
/** Database setup for jobly. */
const { Client } = require("pg");
const { getDatabaseUri } = require("./config");

let db;

  db = new Client({
      user:"sajid" ,
      password: "root",
      database: "jobly",
        ssl: {
      rejectUnauthorized: false
    }
  });

db.connect();

module.exports = db;