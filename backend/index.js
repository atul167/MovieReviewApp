import express from "express";
import mongoose from "mongoose";
import Movie from "./models/movieModel.js";
import dotenv from "dotenv";
import cors from "cors";
import movieRoutes from "./routes/movieRoutes.js";

const app = express();
const PORT = 3000;
dotenv.config();

app.use(express.json());
app.use(cors());
app.use("/movies", movieRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((e) => {
    console.log("Error connecting to MongoDB", e);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
