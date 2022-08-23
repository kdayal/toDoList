require('dotenv').config();
const express = require('express');
const helmet = require("helmet");
const app = express();

const userRoutes = require('./routes/user.js');
const listRoutes = require('./routes/list.js');
const listItemRoutes = require('./routes/listItem.js');
const listItemCommentsRoutes = require('./routes/listItemComments.js');

app.use(express.urlencoded({ extended: true })); // Parse incoming request bodies

//express middleware
app.use(helmet());
app.use(userRoutes);
app.use(listRoutes);
app.use(listItemRoutes);
app.use(listItemCommentsRoutes);
const PORT = 3001;
 
app.listen(PORT, function(err) {
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})

