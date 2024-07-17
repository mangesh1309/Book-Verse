import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import bookRoute from "./routes/book_route.js";
import userRoute from "./routes/user_route.js";
import contactRoute from "./routes/contact_route.js";

const app = express();
const PORT = process.env.PORT || 3000;
const URI = process.env.DB_URI;

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());

// Database connectivity
const connectDB = async () => {
    try {
        await mongoose.connect(URI, {
        });
        // console.log("Database Connected Successfully");
    } catch (error) {
        // console.error("Database connection error:", error);
    }
};

// Define routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use('/contact', contactRoute);


// Start server and connect to the database
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
    connectDB();
});
