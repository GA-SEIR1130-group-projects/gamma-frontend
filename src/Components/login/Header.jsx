import React, { useState } from "react"
import { Link } from "react-router-dom"
import axois from "axios"

export default function Header() {
    const [signIn, setSign] = useState({
        username: "",
        password: ""
    })

    console.log(signIn)
    const Signin = () => {
        console.log("Starting login...")
        axois.post("http://localhost:2010/users/login", signIn)
        .then(res => {
            console.log(res.data)
            console.log("Signin complete")
        })
    }

    // const handleUsername = event => {
    //     const userInput = event.target.value
    //     setSign(prevState => {
    //         return {
    //             ...prevState,
    //             username: userInput
    //         }
    //     })
    // }

    const handlePassword = event => {
        const userInput = event.target.value
        setSign(prevState => {
            return {
                ...prevState,
                password: userInput
            }
        })
    }

    const handleChange = event => {
        const {id , value} = event.target
        setSign(prestate => ({
            ...prestate,
            [id] : value
        }))
    }

    return(
        <nav className="navbar navbar-dark bg-primary" >
            <div className="row col-12 flex-column justify-content-center text-white">
                <span className="h3" >Login Here:</span>
                <div className="card login-card hv-center bg-secondary d-flex justify-content-center">
                    <form className=" p-2 m-3">
                        <label className="m-1 mr-2">Username:</label>
                        <input type="text"
                                id="username"
                                placeholder="Username"
                                onChange={handleChange}
                        />
                        
                        <label className="m-1 mr-2">Password:</label>
                        <input type="password"
                                id="password"
                                placeholder="Password"
                                onChange={handleChange}

                        />

                    </form>
                    <button
                        className="d-flex justify-content-center"
                        onClick={Signin}
                    >
                        Login
                    </button>
                    Not a member? <Link to={"/Register"} className="text-warning">
                        Register here
                    </Link>
                </div>

            </div>
        </nav>
    )
}