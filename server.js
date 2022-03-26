// Setup empty JS object to act as endpoint for all routes
const projectData = {}

// Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Dependencies */
/* Middleware*/
const bodyParser = require("body-parser")
const cors = require("cors");


//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Cors for cross origin allowance
app.use(cors())

// Initialize the main project folder
app.use(express.static('website'));

// Spin up the server
const port = 3000;

// Callback to debug
app.listen(port, () => console.log(`Webhook Server is listening on port ${port}`))

// Initialize all route with a callback function
app.get("/all", sendData)
app.post("/all", postData)

// Callback function to complete GET '/all'
function sendData(req, res) {
    req.send(projectData);
}

// Post Route
function postData(req, res) {
    const data = req.body;
    data.temperature = projectData.temperature;
    data.date = projectData.date;
    data.uresponse = projectData.uresponse;
    res.send(projectData)
}

// Importing the Express librabry in the project
// Creating instantiates inside the app variable