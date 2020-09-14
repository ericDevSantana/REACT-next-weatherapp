import React, {Component, useEffect, useState} from "react";

function App() {
    const [data,
        setData] = useState({
            name: "",
            tempCelsius: "",
            tempFarenheit: "",
            weather: ""
        });

    useEffect(() => {
        fetch("http://api.openweathermap.org/data/2.5/weather?q=miami&appid=" + process.env.REACT_APP_API_KEY, {})
            .then(response => response.json())
            .then(data => {
                // setData(Math.floor(data.main.temp - 273))
                setData({
                    name: data.name,
                    tempCelsius: Math.floor(data.main.temp - 273),
                    tempFarenheit: Math.floor(data.main.temp - 273)*(9/5) + 32,
                    weather: data.weather[0].main
                })
            });
    }, []);

    return data;
}

export default App;