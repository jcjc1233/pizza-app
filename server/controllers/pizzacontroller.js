const Pizza = require('../models/pizza');

// Get all pizzas
exports.getAllPizzas = async (req, res) => {
    try {
        const pizzas = await Pizza.find();
        res.json(pizzas);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching pizzas', error });
    }
};

// Add a new pizza
exports.addPizza = async (req, res) => {
    const { name, ingredients, price } = req.body;

    try {
        const newPizza = new Pizza({ name, ingredients, price });
        await newPizza.save();
        res.status(201).json(newPizza);
    } catch (error) {
        res.status(500).json({ message: 'Error adding pizza', error });
    }
};
