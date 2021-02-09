import React from 'react';
import { useState } from 'react';

const axios = require("axios");

function EditProfile() {

    let userId = 0;
    if (localStorage.getItem("user-id")) {
        userId = JSON.parse(localStorage.getItem("user-id"));
    }

    const [firstname, setFirstname] = useState({ firstname: "" });
    const [lastname, setLastname] = useState({ lastname: "" });
    const [desc, setDesc] = useState({ desc: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`https://finsta-v2.herokuapp.com/api/users/${userId}`, {
            firstname: firstname.firstname,
            lastname: lastname.lastname,
            desc: desc.desc
        })

        setFirstname({ firstname: "" });
        setLastname({ lastname: "" });
        setDesc({ desc: "" });
    };
    
    function firstnameChange(e) {
        const userInput = e.target.value;
        setFirstname((prevState) => {
            return({
                ...prevState,
                firstname: userInput
            });
        })
    }

    function lastnameChange(e) {
        const userInput = e.target.value;
        setLastname((prevState) => {
            return({
                ...prevState,
                lastname: userInput
            });
        })
    }

    function descChange(e) {
        const userInput = e.target.value;
        setDesc((prevState) => {
            return({
                ...prevState,
                desc: userInput
            });
        })
    }

    return (
        <div className="EditProfile">
            <h1>Update Your Profile</h1>
            <form className="form-horizontal">
                <div className="form-group">
                    <label for="inputFirstname" className="col-sm-2 col-form-label float-left">Firstname</label>
                    <div className="col-sm-4">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Firstname"
                            value={firstname.firstname}
                            onChange={firstnameChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputLastname" className="col-sm-2 col-form-label float-left">Lastname</label>
                    <div className="col-sm-4">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Lastname"
                            value={lastname.lastname}
                            onChange={lastnameChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputDesc" className="col-sm-2 col-form-label float-left">Description</label>
                    <div className="col-sm-6">
                    <textarea 
                        className="form-control" 
                        cols="10" 
                        rows="5"
                        placeholder="Give a small description of yourself"
                        value={desc.desc}
                        onChange={descChange}
                    />
                    </div>
                </div>
                <button 
                    type="submit"
                    className="btn btn-secondary btn-lg active float-left"
                    onClick={handleSubmit}
                >Submit Changes</button>
            </form>
        </div>
    );
}

export default EditProfile;