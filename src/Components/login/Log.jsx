import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axois from "axios"
import axios from "axios"
import { fireEvent } from "@testing-library/react"

import UserProfile from '../UserProfile';

export default function Header() {
    
    const initialSignIn = {
        username: "",
        password: ""
    }
    
    const [signIn, setSign] = useState(initialSignIn)

    const [users, setUsers] = useState([])
    const [profile, setProfile] = useState(null);


    useEffect(() => {
        fetch("https://finsta-v2.herokuapp.com/api/users")
            .then(res => res.json())
            .then(res => {
                setUsers(res)
            })

    }, [])


    console.log(signIn)

    const Signin = (event) => {
        event.preventDefault()

        users.forEach(user => {

            if(
                user.username === signIn.username &&
                user.password === signIn.password
            ) {
                // axios.get(`https://finsta-v2.herokuapp.com/api/users/${user._id}`)
                // .then(res => {
                //     setProfile(res.data);
                // })

                localStorage.setItem('user-id', JSON.stringify(user._id))
            }
        })
        
        setSign(initialSignIn);
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
                                id='username'
                                placeholder="Username"
                                value={signIn.username}
                                onChange={handleChange}
                        />
                        
                        <label className="m-1 mr-2">Password:</label>
                        <input type="password" 
                                id='password'
                                placeholder="Password"
                                value={signIn.password}
                                onChange={handleChange}
                        />
                    </form>
                    
                    <button
                        className="d-flex justify-content-center"
                        type="submit"
                        onClick={Signin}
                    > 
                        <Link to="/userprofile">Login</Link>
                    </button>
                    Not a member? <Link to="/register" className="text-warning">
                        Register here
                    </Link>
                </div>
            </div>
        </nav>
    )
}