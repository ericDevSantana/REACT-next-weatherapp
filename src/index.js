import React from 'react';
import ReactDOM from 'react-dom';
import App from "./server";
import Selector from "./Selector";
import Form from "./Form";
import Card from "./Card";

ReactDOM.render(
    <div>
        {/* <Selector /> */}
        <Form />
        <Card />
</div>, document.getElementById('root'));
