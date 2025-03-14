const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8000;

// Middleware
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
    res.json({
        message: "Hello World"
    });
});

app.get("/about", (req, res) => {
    res.json({
        message: "This is the about page"
    });
});

app.post("/data", (req, res) => {
    const data = req.body;
    res.json({
        message: "Data received",
        data: data
    });
});

app.put("/data/:id", (req, res) => {
    const id = req.params.id;
    const data = req.body;
    res.json({
        message: `Data with id ${id} updated`,
        data: data
    });
});

app.delete("/data/:id", (req, res) => {
    const id = req.params.id;
    res.json({
        message: `Data with id ${id} deleted`
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});