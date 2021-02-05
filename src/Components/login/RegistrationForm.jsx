import React, {useState} from "react"
const axios = require('axios');


console.log("Hello this is working, revised")
export default function RegistrationForm() {
    const url = "https://finsta-v2.herokuapp.com/api/users"
    const [Username, setUser] = useState("")
    const [Password, setPassword] = useState("")
    const [somedata, setData] = useState([])
    console.log("Hello this is working2")

    
    const handleSubmitClick = e => {
        e.preventDefault()
        if(Password === Password.confirmPassword) {
            sendDetailsToServer()
        }
        //  else {
        //     props.showError("Passwords do not match")
        // }
    }
    const clicked = () => {
        console.log(clicked)
    }

    const sendDetailsToServer = () => {
        console.log("clicked")
        if(Username.length && Password.length) {
            // props.showError(null)
            const payload={
                "username":Username,
                "password":Password,
            }
            const url2 = "http://localhost:2000/users"
            axios.post(url2, payload)
            console.log("some new text")
                .then(function(res) {
                    if(res.status === 200) {
                        setPassword(obj => ({
                            ...obj,
                            "successMessage": "Registration successful. Redirecting to home page..."
                        }))
                    console.log(Password)
                    // props.showError(null)
                    }
                    //  else {
                    //     props.showError("an error has ocurred")
                    // }
                })
                .catch(function(err) {
                    console.log(err)
                })
        } else {
            // props.showError("Please enter valid username and password")
        }
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
                <div className="form-group text-left" >
                    <label htmlFor="exampleinputusername">username address</label>
                    <input type="username"
                           className="form-conrol"
                           id="username"
                           aria-describedby="usernameHelp"
                           placeholder="Enter username"
                           value={Username}
                           onChange={handleUsername}
                    />
                    <small id="usernameHelp" className="form-text text-muted" >We'll never share your username with anyone else.</small>
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
                    <input type="text"
                            value={Password}
                    />
                </div>
                <button type="submit"
                        className="btn btn-primary"
                        onClick={handleSubmitClick}
                >
                    Register
                </button>
                <button onClick={clicked} >New Button</button>
            </form>
        </div>
    )
}