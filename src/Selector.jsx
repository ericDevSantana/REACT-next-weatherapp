import React from "react";

function Selector() {
    return (
        <div class="dropdown">
            <button
                class="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Choose a city
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">London</a>
                <a class="dropdown-item" href="#">Goiania</a>
                <a class="dropdown-item" href="#">Nevada</a>
            </div>
        </div>
    )
}

export default Selector;