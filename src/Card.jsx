import React from "react";
import WeatherIcon from "./WeatherIcon";

function Card() {

    return (
        <div
            className="card bg-light mb-3 rounder"
            style={{
            width: "18rem"
        }}>
            <div className="card-header">
                <h1 style={{float: "left" }}>London</h1><WeatherIcon name="cloud" color="primary" />
            </div>
            <div className="card-body">
                <h5 className="card-title">Temperature</h5>
                <h1 className="card-text">105 °F</h1>
            </div>
        </div>
    )

}

export default Card;