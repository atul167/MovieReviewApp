import express from "express";
const router = express.Router();
import Movie from "../models/movieModel.js";

router.get("/", async (req, res) => {
  const allmovies = await Movie.find({});
  return res.status(200).json({
    msg: "Movies received!!!",
    data: allmovies,
  });
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // const isValidId = mongoose.Types.ObjectId.isValid(id);
    // if (!isValidId) {
    //   return res.status(400).json({ error: "Invalid movie ID format" });
    // }
    const movie = await Movie.findById(id);
    return res.status(200).json({
      msg: "Movie received!",
      data: movie,
    });
  } catch (e) {
    return res.status(400).send("Movie with id not there in db");
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, year, review, score } = req.body;
  // console.log(id);
  if (!name || !year || !review || !score) {
    return res.status(400).json({
      error: "Please provide name, year, review and score for updating review",
    });
  }
  const result = await Movie.findByIdAndUpdate(id, {
    name,
    year,
    review,
    score,
  });

  if (!result) {
    res.status(400).send("Movie with id not there in db");
  } else {
    res.status(200).json({
      msg: "Movie updated successfully",
      data: result,
    });
  }
});

router.post("/", async (req, res) => {
  const bd = req.body;
  const { name, year, review, score } = req.body;
  // Destructuring the damn object
  if (!name || !year || !review || !score) {
    return res.status(400).json({
      error: "Please provide name, year, review and score",
    });
  }
  try {
    const newMovie = await Movie.create({ name, year, review, score });
    return res.status(201).json({
      msg: "Movie record created successfully",
      data: newMovie,
    });
  } catch (e) {
    return res.status(500).json({ error: "Error creating movie" });
  }
});

export default router;
