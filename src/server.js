import React, {Component, useEffect} from "react";

function App() {
    
    useEffect(() => {
        fetch("http://api.openweathermap.org/data/2.5/forecast?q=nevada&appid="+process.env.REACT_APP_API_KEY, {
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => console.log(data));
    }, []);

    return (
        <h1>Hi</h1>
    )
}

export default App;