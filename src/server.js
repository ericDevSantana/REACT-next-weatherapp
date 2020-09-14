import React, {Component, useEffect, useState} from "react";

function App() {
    const [data, setData] = useState("");
    
    useEffect(() => {
        fetch("http://api.openweathermap.org/data/2.5/weather?q=London&appid="+process.env.REACT_APP_API_KEY, {
        })
            .then(response => response.json())
            .then(data => setData(Math.floor(data.main.temp-273)));
    }, []);

    return data;
}

export default App;