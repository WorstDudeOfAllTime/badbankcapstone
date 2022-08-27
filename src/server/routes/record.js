const express = require("express");
const recordRoutes = express.Router();

const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.route("/all/").get((req, result) => {
  let db_connect = dbo.getDb();
  db_connect
    .collection("users")
    .findOne(
      { email: req.params.email, password: req.params.password },
      (err, res) => {
        if (err) throw err;
        result.json(res);
      }
    );
  console.log("YUP");
});

recordRoutes.route("/login/:email/:password").get((req, res) => {
  let loginInfo = { email: req.params.email, password: req.params.password };
  console.log(loginInfo);
  let db_connect = dbo.getDb();
  db_connect.collection("users").findOne(loginInfo, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});
recordRoutes.route("/withdraw/:amount").post((req, res) => {
  let db_connect = dbo.getDb();
  db_connect;
});

recordRoutes.route("/createUser").post((req, response) => {
  const personObj = {
    email: req.body.email,
    password: req.body.password,
    balance: "10,000",
  };

  let db_connect = dbo.getDb();
  db_connect.collection("users").insertOne(personObj, (err, res) => {
    if (err) throw err;
    response.json(res);
  });
});

module.exports = recordRoutes;
