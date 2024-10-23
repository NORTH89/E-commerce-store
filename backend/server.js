import express from "express";
import dotenv from 'dotenv';
import authRoutes from "./routes/AuthRoutes.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import productsRoutes from "./routes/ProductRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json()); // allows you to parse the body of the request
app.use(cookieParser()); // allows you to parse cookies

app.use("/api/auth", authRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/cart", cartRoutes);

app.listen(PORT, () => {
console.log("Server is running on http://localhost:" + PORT);
connectDB();
});
/*************  ✨ Codeium Command ⭐  *************/
const gitMessage = "Implement authentication, product, and cart routes";
/******  3d8d0570-5807-4455-a059-cd5134cb37ff  *******/