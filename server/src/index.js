import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user.js";
import { recipesRouter } from "./routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

// Add this line to remove the warning
mongoose.set('strictQuery', false);

mongoose.connect(
  "mongodb+srv://Jagrati:UX6KWNW-G7V84aU@cluster0.mcl0x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(
    console.log("DB connected sucessfully ...")
  )

app.listen(3001, () => console.log("Server started successfully!!!"));
