require('dotenv').config();
const express = require('express');
const app = express();

const userRoutes = require('./routes/user.js');

app.use(express.urlencoded({ extended: true })); // Parse incoming request bodies

// express middleware
app.use(userRoutes);

const PORT = 3001;
 
app.listen(PORT, function(err) {
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})

