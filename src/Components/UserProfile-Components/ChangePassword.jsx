import React from 'react';
import { useState } from 'react';

const axios = require("axios");

function ChangePassword() {
    let userId = 0;
    if (localStorage.getItem("user-id")) {
        userId = JSON.parse(localStorage.getItem("user-id"));
    }

    const [username, setUsername] = useState({ username: "" });
    const [password, setPassword] = useState({ password: "" });

    function handleUsername(e) {
        e.preventDefault();
        axios.put(`https://finsta-v2.herokuapp.com/api/users/${userId}`, {
            username: username.username
        })

        alert(`username updated to: ${username.username}`);
        setUsername({ username: "" })
    }

    const changeUsername = (e) => {
        const userInput = e.target.value;
        setUsername((prevState) => {
            return({
                ...prevState,
                username: userInput
            });
        })
    }

    return (
        <div>
            <h1>Change Password</h1>

            <div class="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Update Password"
                    value={username.username}
                    onChange={changeUsername}
                />
                <div className="input-group-append">
                    <button 
                        type="submit"
                        className="btn btn-secondary"
                        onClick={handleUsername}
                    >Update Username</button>
                </div>
            </div>

            <button
                type="button"
                className="btn btn-dark"
                data-toggle="modal"
                data-target="#passwordModal"
            >Change Password</button>

            <div className="modal fade" id="passwordModal" tabindex="-1" aria-labelledby="passwordModalTitle" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-header">Title</div>
                    <div className="modal-body">Body</div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-dark">Change Password</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChangePassword;