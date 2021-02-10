import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';

function DeleteProfile() {

    let userId = 0;

    if (localStorage.getItem("user-id")) {
        userId = JSON.parse(localStorage.getItem("user-id"));
    }

    const [info, setInfo] = useState({
        username: "",
        password: ""
    })

    const [profileInfo, setProfileInfo] = useState({
        username: "",
        password: "",
    })

    useEffect(() => {

        axios.get(`https://finsta-v2.herokuapp.com/api/users/${userId}`)
            .then(res => {
                setProfileInfo({
                    username: res.data.username,
                    password: res.data.password
                })
            })

    }, [])

    function handleSubmit(event) {
        event.preventDefault()

        if(
            profileInfo.username === info.username &&
            profileInfo.password === info.password
        ) {
            axios.delete(`https://finsta-v2.herokuapp.com/api/users/${userId}`)
        }

        setInfo({
            username: "",
            password: ""
        })

        setProfileInfo({
            username: "",
            password: ""
        })

        localStorage.clear();
    }

    function changeUsername(event) {
        const userInput = event.target.value;
        setInfo((prevState) => {
            return({
                ...prevState,
                username: userInput
            });
        })
    }

    function changePassword(event) {
        const userInput = event.target.value;
        setInfo((prevState) => {
            return({
                ...prevState,
                password: userInput
            });
        })
    }

    return (
        <div className="DeleteProfile">
            <form>
                <div className="form-group">
                    <label>Username</label>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="username"
                        value={info.username}
                        onChange={changeUsername}/>
                </div>
                <div class="form-group">
                    <label>Password</label>
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="Authenticate Password"
                            value={info.password}
                            onChange={changePassword}/>
                </div>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#deleteUserModal">
                    Authentication
                </button>
            </form>

            <div className="modal fade" id="deleteUserModal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">Goodbye!</div>
                        <div className="modal-body">
                            Thank you for using our platform, please reccomend us to your friends! 
                        </div>
                        <div className="modal-footer">
                            <button
                                type="submit"
                                className="btn btn-dark"
                                data-dismiss="modal"
                                onClick={handleSubmit}>
                                Delete Account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteProfile;