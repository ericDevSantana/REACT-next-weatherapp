import React from "react";
import CloudIcon from '@material-ui/icons/Cloud';
import CloudOffIcon from '@material-ui/icons/CloudOff';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import GrainIcon from '@material-ui/icons/Grain';

function WeatherIcon(props) {
    switch (props.name) {
        case "Clouds":
            return <CloudIcon style={{ fontSize: 60, float: "right" }} color={props.color} />
        case "Clear":
            return <WbSunnyIcon style={{ fontSize: 60, float: "right" }} color={props.color} />
        case "Rain":
            return <GrainIcon style={{ fontSize: 60, float: "right" }} color={props.color} />
        default:
            return <CloudOffIcon />
    }
}

export default WeatherIcon;