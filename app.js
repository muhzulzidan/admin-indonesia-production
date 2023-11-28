const express = require('express');
const app = express();

app.use(express.json()); // Middleware for parsing JSON bodies

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

const signinRoute = require('./auth/signin/route');
app.use('/signin', signinRoute);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
