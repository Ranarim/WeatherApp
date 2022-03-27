const generateBtn = document.getElementById("generate");

async function getData(zip) {
    try {
        const zipCode = zip;
        const personalAPIKey = '532d4540aaa725b5502a16c2c292e664';
        const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${zipCode},de&appid=${personalAPIKey}&units=metric `
        const fetchedData = await fetch(baseURL);
        const weatherData = await fetchedData.json();
        return weatherData
    } catch (error) {
        console.log(error, "getting data didnt work!");
    }
}

async function postData(url, data) {
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
        return JSONData;

    } catch (error) {
        console.log(error, "posting Data didnt work")
    }
}

async function updateUI() {
    try {
        const fetchUIData = await fetch("/all");
        /*         const response = await fetchUIData.json();
         */
        console.log({ fetchUIData });
        const dateElement = document.getElementById("date");
        const tempElement = document.getElementById("temp");
        const contentElement = document.getElementById("content");
        dateElement.innerHTML = response.date;
        tempElement.innerHTML = `${response.temp}`;
        contentElement.innerHTML = `${response.content}`;
        console.log(response.date, response.temp, response.content)
    } catch (error) {
        console.log(error, 'updating UI didnt work')
    }
}

async function generatingResults() {
    try {
        const zip = document.getElementById("zip").value;
        const weather = await getData(zip);
        const temperature = weather.main.temp;
        const d = new Date();
        const date = `${d.getDate()}.${d.getMonth()+1}.${d.getFullYear()}`;
        const feelings = document.getElementById("feelings").value;
        postData("/all", data = { date: date, temp: temperature, content: feelings });
        console.log(date, feelings, temperature);
        updateUI();
    } catch (error) {
        console.log(error, "generatingResults didnt")
    }
}

generateBtn.addEventListener("click", () => {
    generatingResults();

});




















// Personal API Key for OpenWeatherMap API

// Event listener to add function to existing HTML DOM element

/* Function called by event listener */

/* Function to GET Web API Data*/

/* Function to POST data */

/* Function to GET Project Data */