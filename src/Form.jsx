import React from "react";
import Card from "./Card";

function Form() {
    const [city,
        setCity] = React.useState("");

    const [isReady,
        setReady] = React.useState(false);

    function handleSubmit(event) {
        setReady(true);
        event.preventDefault();
    }

    function handleChange(event) {
        setReady(false);
        setCity(event.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>City:</label>

                    <div className="input-group mb-3">
                        <input
                            onChange={handleChange}
                            type="text"
                            className="form-control"
                            placeholder="London, Goiania, Miami..."/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="submit">Search</button>
                        </div>
                    </div>
                </div>
            </form>

            {isReady && <Card name={city} />}
        </div>
    )
}

export default Form;