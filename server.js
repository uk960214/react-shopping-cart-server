const path = require("path");
const express = require("express");
const jsonServer = require("json-server");
const data = require("./data.json");
const port = process.env.PORT || 3000;

const router = jsonServer.router(data); // Express router
const server = jsonServer.create(); // Express server

server.use("/static", express.static(path.join(__dirname, "public")));

// Avoid CORS issue
server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

server.use(router);

server.listen(port);
