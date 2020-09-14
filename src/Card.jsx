import React from "react";
import WeatherIcon from "./WeatherIcon";
import App from "./server";

function Card(props) {

    const data = App();
    console.log(data.weather);

    return (
        <div
            className="card bg-dark text-white mb-3 rounder"
            style={{
            width: "18rem"
        }}>
            <div className="card-header">
                <h1 style={{
                    float: "left"
                }}>{data.name}</h1><WeatherIcon name={data.weather} color="primary"/>
            </div>
            <div className="card-body">
                <h5 className="card-title">Temperature</h5>
                <h1 className="card-text">{data.temp} °C</h1>
            </div>
        </div>
    )

}

export default Card;