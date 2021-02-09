import React, { useState } from "react"
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

    const handleChange = event => {
        const {id , value} = event.target
        setInfo(prestate => ({
            ...prestate,
            [id] : value
        }))
    }  

    // className="card col-12 col-lg-4 login-card mt-2 hv-center"
    return(
        <div className="Registration card col-10 login-card mt-2 hv-center">
            <form>
                <small id="usernameHelp" className="form-text text-muted">
                    We never share personal information, this is a safe space.
                </small>

                <div className="form-group">
                    <label htmlFor="Fname">First name here</label>
                    <input type="text"
                           id="firstname"
                           className="form-control"
                           placeholder="First Name Here"
                           value={info.firstname}
                           onChange={handleChange}
                    />
                    <label htmlFor="Lname">Last name here</label>
                    <input type="text"
                           id="lastname"
                           className="form-control"
                           placeholder="Last Name Here"
                           value={info.lastname}
                           onChange={handleChange}
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
                           onChange={handleChange}
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleinputPassword">Password</label>
                    <input type="password"
                           className="form-control"
                           id="password"
                           placeholder="Confirm Password"
                           value={info.password}
                           onChange={handleChange}
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