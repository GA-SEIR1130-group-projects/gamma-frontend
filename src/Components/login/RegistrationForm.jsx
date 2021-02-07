import React, {useState} from "react"
// const axios = require('axios');
import axios from "axios"


export default function RegistrationForm() {
    const [info, setInfo] = useState({
        firstname: "",
        lastname: "",
        username: "",
        password: ""
    })
    console.log("This is working")


    const clicked = () => {
        console.log("clicked")
    }    
    const handleSubmitClick = e => {
        clicked()
        e.preventDefault()
        sendDetailsToServer()

    }

    console.log(info)
    const sendDetailsToServer = () => {
        console.log("Starting process...")
        
        if(info.firstname.length && info.lastname.length && info.username.length && info.password.length) {
            console.log("Connecting to url")
            axios.post("http://localhost:2000/users", info)
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


    return(
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center" >
            <form>
            <small id="usernameHelp" className="form-text text-muted" >We never share personal information, this is a safe space.</small>

                <div className="form-group">
                    <label htmlFor="Fname">First name here</label>
                    <input type="text"
                           className="form-control"
                           id="firstname"
                           placeholder="First Name Here"
                           onChange={handleChange}
                    />
                    <label htmlFor="Lname">Last name here</label>
                    <input type="text"
                           className="form-control"
                           id="lastname"
                           placeholder="Last Name Here"
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
                        //    value={Username}
                           onChange={handleChange}
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleinputPassword">Confirm Password</label>
                    <input type="password"
                           className="form-control"
                           id="password"
                           placeholder="Confirm Password"
                        //    value={Password}
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