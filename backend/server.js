import express from "express";
import dotenv from 'dotenv';
import authRoutes from "./routes/AuthRoutes.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";



dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json()); // allows you to parse the body of the request
app.use(cookieParser()); // allows you to parse cookies


app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
console.log("Server is running on http://localhost:" + PORT);
connectDB();
});
