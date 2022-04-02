const generateBtn = document.getElementById("generate");

const getData = async(zip) => {
    try {
        const zipCode = zip;
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

const postData = async(url, data) => {
    console.log(url, data)
    const response = await fetch(url, {
        method: "POST",
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    try {
        const JSONData = await response.json();
        return JSONData;

    } catch (error) {
        console.log(error, "posting Data didnt work")
    }
}

const updateDOM = async(temp, date, feel) => {
    try {
        /*  const fetchUIData = await fetch('http://localhost:3000/all');
         const response = await fetchUIData.json(); */
        const dateElement = document.getElementById("date");
        const tempElement = document.getElementById("temp");
        const contentElement = document.getElementById("content");
        dateElement.innerHTML = date;
        tempElement.innerHTML = `${temp}°C`;
        contentElement.innerHTML = `Feelings this day: ${feel}`;
        console.log(temp, date, feel);
    } catch (error) {
        console.log(error, 'updating UI didnt work')
    }
}

const generatingResults = async() => {
    try {
        const zip = document.getElementById("zip").value;
        const weather = await getData(zip);
        const temperature = weather.main.temp;
        const d = new Date();
        const date = `${d.getDate()}.${d.getMonth()+1}.${d.getFullYear()}`;
        const feelings = document.getElementById("feelings").value;
        postData("/all", data = { date: date, temp: temperature, content: feelings });
        console.log(date, feelings, temperature);
        updateDOM(temperature, date, feelings);
    } catch (error) {
        console.log(error, "generatingResults didnt")
    }
}

generateBtn.addEventListener("click", () => {
    generatingResults();
});