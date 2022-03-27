/* Global Variables 

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

const { get } = require("http");
const { getEnvironmentData } = require("worker_threads");
 */

/*Write an async function in app.js that uses fetch() to make a GET request to the OpenWeatherMap API. */
/* Inside that callback function call your async GET request with the parameters:base url, user entered zip code (see input in html with id zip), personal API key*/
async function getData() {
    try {
        const zipCode = document.getElementById("zip").value;
        const personalAPIKey = '532d4540aaa725b5502a16c2c292e664';
        const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${zipCode},de&appid=${personalAPIKey}&units=metric `
        const fetchedData = await fetch(baseURL);
        const weatherData = await fetchedData.json();
        console.log(weatherData);
        return weatherData
    } catch (error) {
        console.log(error, "getting data didnt work!");
    }
}

/*Create an event listener for the element with the id: generate, with a callback function to execute when it is clicked.*/
const generateBtn = document.getElementById("generate");
generateBtn.addEventListener("click", getData);

/*You will need to write another async function to make this POST request.*/
async function postData(url = "", data = {}) {
    const response = await fetch(url, {
        method: "POST",
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    try {
        const JSONData = response.json();
        console.log(JSONData);
        return JSONData;
    } catch (error) {
        console.log(error, "posting Data didnt work")
    }
}

async function updateUI() {
    try {
        const response = await getData();
        const dateElement = document.getElementById("date");
        const tempElement = document.getElementById("temp");
        const contentElement = document.getElementById("content");
        dateElement.innerHTML = response.date;
        tempElement.innerHTML = `${response.temp}`;
        contentElement.innerHTML = `${response.content}`;
    } catch (error) {
        console.log(error, 'updating UI didnt work')
    }
}

















// Personal API Key for OpenWeatherMap API

// Event listener to add function to existing HTML DOM element

/* Function called by event listener */

/* Function to GET Web API Data*/

/* Function to POST data */

/* Function to GET Project Data */