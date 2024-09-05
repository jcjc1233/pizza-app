const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const pizzaRoutes = require("./routes/pizzaroutes"); // Import pizza routes

dotenv.config(); // Load environment variables from .env

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Use pizza routes
app.use("/api/pizzas", pizzaRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
