import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
mongoose.set("strictQuery", false);
let URI = process.env.DB_URL;
if (process.env.DB_MODE === "GA") URI = "mongodb://root:toor@mongo:27017/";
mongoose.connect(URI);
const connector = mongoose;
export default connector;
