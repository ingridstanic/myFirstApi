import express from "express";
import { myGameList } from "./data/gameList.mjs";
import { Game } from "./modules/Game.mjs";

//app är mitt api
const app = express();

app.get("/game", (req, res) => {
  const { search } = req.query;

  let filteredList = myGameList;

  if (search) {
    console.log("req.query:", req.query);

    filteredList = myGameList.filter((game) =>
      game.title.toLowerCase().includes(search.toString()),
    );
  }
  if (filteredList.length === 0) {
    res.status(400).json({ message: "Search not found." });
  }
  res.status(200).json(filteredList);
});

app.get("/game/:id", (req, res) => {
  const { id } = req.params;

  const found = myGameList.find((game) => game.id === +id);

  if (found) {
    res.status(200).json(found);
  } else {
    res
      .status(400)
      .json({ message: "Game with id: " + id + " was not found." });
  }
});

app.listen(3000, () => {
  console.log("API is up and running on port: 3000");
});
