import express from "express";

//app är mitt api
const app = express();

app.get("/", (_, res) => {
  res.status(200).send("Ingrids first API says HELLO");
});

app.listen(3000, () => {
  console.log("API is up and running on port: 3000");
});
