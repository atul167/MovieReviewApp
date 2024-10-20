import { mongoose } from "mongoose";
const movieSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    year: {
      type: Number,
    },
    review: {
      type: String,
    },
    score: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);
 const Movie = mongoose.model("Movie", movieSchema);
 export default Movie