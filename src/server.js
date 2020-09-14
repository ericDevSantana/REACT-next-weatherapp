import React, {Component, useEffect, useState} from "react";

function App() {
    const [data, setData] = useState("");
    
    useEffect(() => {
        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=16.68&lon=49.2&exclude=current,minutely,hourly&appid="+process.env.REACT_APP_API_KEY, {
        })
            .then(response => response.json())
            .then(data => setData(Math.floor(data.daily[0].temp.max-273)));
    }, []);

    return data;
}

export default App;