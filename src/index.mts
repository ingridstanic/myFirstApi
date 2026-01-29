import express from "express";
import { myGameList } from "./data/gameList.mjs";

//app är mitt api
const app = express();

app.get("/game", (req, res) => {
  const { search } = req.query;

  let filteredList = myGameList;

  if (search) {
    filteredList = myGameList.filter((game) => {
      game.title.toLowerCase().includes(search.toString());
    });
  }
  res.status(200).json("Ingrids first API says HELLO" + filteredList);
});

app.listen(3000, () => {
  console.log("API is up and running on port: 3000");
});
