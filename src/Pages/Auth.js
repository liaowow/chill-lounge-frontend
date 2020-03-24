import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function Auth() {

    const dispatch = useDispatch()
    const history = useHistory()

    const [login, setLogin] = useState(true)
    const [form, setForm] = useState({ username: "", password: "", results: [] })

    function handleChange(e) {
        setForm({ 
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        const endpoint = login ? '/login' : '/users'
        const config = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(form)
        }

        fetch("https://secret-cove-14662.herokuapp.com" + endpoint, config)
                .then(r => r.json())
                .then(userData => {
                    // console.log("userdata from fetch ======>", userData)
                    if (userData.errors) {
                        // debugger
                        alert(userData.errors)
                        setForm({ username: "", password: "", results: [] })
                        return history.push("/")
                    }
                    
                    if (userData.token) {

                        localStorage.token = userData.token
                        
                        dispatch({
                            type: "SET_USER",
                            payload: userData.user
                        })
    
                        dispatch({
                            type: "SET_RESULTS",
                            payload: userData.results
                        })
                        
                        history.push("/guide")
                    }

        })

    }
        

    function toggleLogInBtn() {
        return login ? (
            <button className="login-toggle" onClick={() => setLogin(false)}>
                First time here? Click to sign up
            </button>
        ) : (
            <button className="login-toggle" onClick={() => setLogin(true)}>
                Already have an account? Log in here
            </button>
        )
    }

    return (
        <div className="form-page">
            <h1>Flatiron Chill Lounge</h1>
            <form onSubmit={handleSubmit}>
                <h3>{login ? "LOG IN" : "SIGN UP"}</h3>
                <input type="text" 
                       name="username"
                       placeholder="Username"
                       value={form.username}
                       onChange={handleChange}/>
                <input type="password" 
                       name="password"
                       placeholder="Password"
                       value={form.password}
                       onChange={handleChange}/>
                <input type="submit" value="Submit" />
            </form>
            {toggleLogInBtn()}
        </div>
    )

}