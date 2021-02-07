import React, { useState } from "react"
// const axios = require('axios');
import axios from "axios"


export default function RegistrationForm() {
    
    const initialInfo = {
        firstname: "",
        lastname: "",
        username: "",
        password: ""
    }

    const [info, setInfo] = useState(initialInfo)
    console.log("This is working")


    const clicked = () => {
        console.log("clicked")
    }    
    const handleSubmitClick = e => {
        clicked()
        e.preventDefault()
        sendDetailsToServer()
        setInfo(initialInfo)
    }

    console.log(info)
    const sendDetailsToServer = () => {
        console.log("Starting process...")
        
        if(
            info.firstname.length && 
            info.lastname.length && 
            info.username.length && 
            info.password.length
        ) {
            console.log("Connecting to url")
            axios.post("https://finsta-v2.herokuapp.com/api/users", info)
            .then(res => {
                console.log(res)
            }, err => {
                console.log(err)
            })
        }
    }

    const handleLast = event => {
        const userInput = event.target.value.toLowerCase()
        setInfo(prevState => {
            return {
                ...prevState,
                lastname: userInput
            }
        })
    }

    const handleFirst = event => {
        const userInput = event.target.value.toLowerCase()
        setInfo(prevState => {
            return {
                ...prevState,
                firstname: userInput
            }
        })
    }

    const handleUsername = event => {
        const userInput = event.target.value.toLowerCase()
        setInfo(prevState => {
            return {
                ...prevState,
                username: userInput
            }
        })
    }

    const handlePassword = event => {
        const userInput = event.target.value.toLowerCase()
        setInfo(prevState => {
            return {
                ...prevState,
                password: userInput
            }
        })
    }

    // className="card col-12 col-lg-4 login-card mt-2 hv-center"
    return(
        <div className="card col-10 login-card mt-2 hv-center">
            <form>
                <small id="usernameHelp" className="form-text text-muted">
                    We never share personal information, this is a safe space.
                </small>

                <div className="form-group">
                    <label htmlFor="Fname">First name here</label>
                    <input type="text"
                           className="form-control"
                           placeholder="First Name Here"
                           value={info.firstname}
                           onChange={handleFirst}
                    />
                    <label htmlFor="Lname">Last name here</label>
                    <input type="text"
                           className="form-control"
                           placeholder="Last Name Here"
                           value={info.lastname}
                           onChange={handleLast}
                    />
                </div>
                <div className="form-group text-left" >
                    <label htmlFor="exampleinputusername">Username </label>
                    <input type="text"
                           className="form-conrol"
                           id="username"
                           aria-describedby="usernameHelp"
                           placeholder="Enter username"
                           value={info.username}
                           onChange={handleUsername}
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleinputPassword">Password</label>
                    <input type="password"
                           className="form-control"
                           id="confirmPassword"
                           placeholder="Confirm Password"
                           value={info.password}
                           onChange={handlePassword}
                    />
                </div>
                <button type="submit"
                        className="btn btn-primary"
                        onClick={handleSubmitClick}
                >
                    Complete Registration
                </button>
            </form>
        </div>
    )
}