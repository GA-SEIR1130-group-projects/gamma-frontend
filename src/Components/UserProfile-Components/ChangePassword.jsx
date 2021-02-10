import React from 'react';
import "../../Styling/ChangePassword.css"
import { useState } from 'react';
import { ImKey } from 'react-icons/im'

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

    function handlePassword(e) {
        e.preventDefault();
        axios.put(`https://finsta-v2.herokuapp.com/api/users/${userId}`, {
            password: password.password
        })

        setPassword({ password: "" });
    }

    function changePassword(e) {
        const userInput = e.target.value;
        setPassword((prevState) => {
            return({
                ...prevState,
                password: userInput
            });
        })
    }


    return (
        <div className="ChangePassword">
            <h1>Change Password</h1>

            <button type="button" className="btn btn-dark">
                <a href="#" data-toggle="modal" data-target="#passwordModal">
                    <ImKey></ImKey>
                </a>
            </button>

            <div class="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Update Username"
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

            

            <div className="modal fade" id="passwordModal">
                <div className="modal-dialog model-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1>Change password</h1>
                        </div>
                        <div className="modal-body">
                            <div className="form-group col-sm-2">
                                <input 
                                    type="password"
                                    placeholder="new password"
                                    value={password.password}
                                    onChange={changePassword}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button 
                                type="submit" 
                                className="btn btn-dark" 
                                data-dismiss="modal" 
                                onClick={handlePassword}>
                                Change Password
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChangePassword;