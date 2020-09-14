import React from "react";
import WeatherIcon from "./WeatherIcon";
import App from "./server";

function Card(props) {

    const name = App();
    return (
        <div
            className="card bg-dark text-white mb-3 rounder"
            style={{
            width: "18rem"
        }}>
            <div className="card-header">
                <h1 style={{
                    float: "left"
                }}>{props.city}</h1><WeatherIcon name={props.weather} color="primary"/>
            </div>
            <div className="card-body">
                <h5 className="card-title">Temperature</h5>
                <h1 className="card-text">{name} °C</h1>
            </div>
        </div>
    )

}

export default Card;