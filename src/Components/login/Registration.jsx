import React, {useState} from "react"
import axios from "axios"


export default function RegistrationForm() {
    const [Username, setUser] = useState("")
    const [Password, setPassword] = useState("")
    console.log("This is working")


    const clicked = () => {
        console.log("clicked")
    }    
    const handleSubmitClick = e => {
        clicked()
        e.preventDefault()
        sendDetailsToServer()
    }

    const user = {
        username: Username,
        password: Password
    }
    console.log(user)
    const sendDetailsToServer = () => {
        console.log("Starting process...")
            console.log("Connecting to url")
            
            if(Username.length && Password.length) {
            axios.post("http://localhost:2000/users", user)
            .then(res => {
                console.log(res)
            }, err => {
                console.log(err)
            })}
    }

    const handleUsername = event => {
        const userInput = event.target.value.toLowerCase()
        setUser(userInput)
    }

    const handlePassword = event => {
        const userInput = event.target.value.toLowerCase()
        setPassword(userInput)
    }

    return(
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center" >
            <form>
            <small id="usernameHelp" className="form-text text-muted" >We never share personal information, this is a safe space.</small>

                <div className="form-group text-left" >
                    <label htmlFor="exampleinputusername">Username </label>
                    <input type="username"
                           className="form-conrol"
                           id="username"
                           aria-describedby="usernameHelp"
                           placeholder="Enter username"
                           value={Username}
                           onChange={handleUsername}
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleinputPassword">Confirm Password</label>
                    <input type="text"
                           className="form-control"
                           id="confirmPassword"
                           placeholder="Confirm Password"
                           value={Password}
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