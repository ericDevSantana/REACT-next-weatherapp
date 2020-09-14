import React from "react";

function Selector() {
    return (
        <div className="dropdown">
            <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Choose a city
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">London</a>
                <a className="dropdown-item" href="#">Goiania</a>
                <a className="dropdown-item" href="#">Nevada</a>
            </div>
        </div>
    )
}

export default Selector;