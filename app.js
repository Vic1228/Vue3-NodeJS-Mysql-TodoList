const express = require("express");
const app = express;
const mysql = require("mysql");

var config = {
  host: "localhost",
  user: "root",
  password: "root",
  database: "test",
};

const conn = new mysql.createConnection(config);

conn.connect(function (error) {
  if (!!error) {
    console.log("連結失敗！");
    console.log(error);
  } else {
    console.log("已成功連結資料庫！");
  }
});
