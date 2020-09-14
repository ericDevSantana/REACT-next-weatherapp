import React from 'react';
import ReactDOM from 'react-dom';
import App from "./server";
import Selector from "./Selector";

ReactDOM.render(
    <div>
        <Selector />
        <App />
</div>, document.getElementById('root'));
