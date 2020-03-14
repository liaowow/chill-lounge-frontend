import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Auth() {
    const user = useSelector(state => state.user)
    console.log('user from the store =============> ', user);

    const [login, setLogin] = useState(true)
    const [form, setForm] = useState({ username: "", password: "" })
    const dispatch = useDispatch()

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

        fetch("http://localhost:3000/" + endpoint, config)
            .then(r => r.json())
            .then(userData => {
                localStorage.token = userData.token
                dispatch({
                    type: "SET_USER",
                    payload: userData
                })
            })
    }

    function changeFormBtn() {
        return login ? (
            <button onClick={() => setLogin(false)}>
                First time here? Please sign up! 
            </button>
        ) : (
            <button onClick={() => setLogin(true)}>
                Already have an account with the Flatiron Chill Lounge? Log in here
            </button>
        )
    }

    return (
        <div className="form-page">
            <h1>{login ? "Log In" : "Sign Up"}</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                       name="username"
                       placeholder="Enter your username"
                       value={form.username}
                       onChange={handleChange}/>
                <input type="password" 
                       name="password"
                       placeholder="Enter your password"
                       value={form.password}
                       onChange={handleChange}/>
                <input type="submit" />
            </form>
            {changeFormBtn()}
        </div>
    )

}