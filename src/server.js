import {useEffect, useState} from "react";

function App(city) {
    
    const [data,
        setData] = useState({
            name: "",
            tempCelsius: "",
            tempFarenheit: "",
            weather: ""
        });

    useEffect(() => {
        fetch("http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=" + process.env.REACT_APP_API_KEY, {})
            .then(response => response.json())
            .then(data => {

                setData({
                    name: data.name,
                    tempCelsius: Math.floor(data.main.temp - 273),
                    tempFarenheit: Math.floor((data.main.temp - 273) * (9 / 5) + 32),
                    weather: data.weather[0].main
                })
            })
            .catch(error => {
                console.log("Error: " + error);
            });
    }, []);

    return data;
}

export default App;