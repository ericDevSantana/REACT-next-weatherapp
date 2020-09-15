import React from "react";

function Form() {
    return (
        <form>
            <div class="form-group">
                <label for="exampleFormControlInput1">City:</label>
                
                <div class="input-group mb-3">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="London, Goiania, Miami..."/>
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button">Search</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Form;