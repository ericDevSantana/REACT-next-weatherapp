import React from 'react';
import ReactDOM from 'react-dom';
import WeatherIcon from './WeatherIcon';

ReactDOM.render(
    <div>
    <h1>
            <WeatherIcon name="cloud" fontSize="Large" color="disabled" /> {process.env.API_KEY}</h1>

</div>, document.getElementById('root'));
