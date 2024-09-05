const express = require("express");
const router = express.Router();
const pizzaController = require("../controllers/pizzacontroller");

// Route to get all pizzas
router.get("/", pizzaController.getAllPizzas);

// Route to add a new pizza
router.post("/", pizzaController.addPizza);

module.exports = router;
