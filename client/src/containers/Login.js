import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Login() {
    const history = useHistory()
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    useEffect(() => {
        document.getElementById('login-form').onsubmit = (e) => {
            e.preventDefault()
            if (!/^[a-z0-9_\.]+$/i.test(username)) {
                document.getElementById('login-msg').style.color = 'red'
                return document.getElementById('login-msg').innerHTML = 'Invalid Username Format'
            }
            const data = {
                password,
                username,
            }
            document.getElementById('login-submit').innerHTML = 'Loading...'
            fetch('http://localhost:5000/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.success) {
                        document.getElementById('login-msg').style.color = 'green'
                        document.getElementById('login-msg').innerHTML = data.message
                        history.push('/')
                    } else {
                        document.getElementById('login-msg').style.color = 'red'
                        document.getElementById('login-msg').innerHTML = data.message
                        document.getElementById('login-submit').innerHTML = 'Log In'
                    }
                })
                .catch(err => {
                    console.log(err);
                    document.getElementById('login-msg').style.color = 'red'
                    document.getElementById('login-msg').innerHTML = 'Something went wrong.';
                    document.getElementById('login-submit').innerHTML = 'Log In'
                })
        }
    }, [history, password, username])

    return (
        <div className="login">
            <Navbar />
            <div className="card-container">
                <div className="card login-card input-field">
                    <h2 style={{ fontFamily: "Grand Hotel" }}>Instagram</h2>
                    <form id="login-form">
                        <input type="text" placeholder="Username" className="input" defaultValue={username} onChange={(e) => { setUsername(e.target.value) }} required />
                        <input type="password" placeholder="Password" className="input" defaultValue={password} onChange={(e) => { setPassword(e.target.value) }} required />
                        <span id='login-msg'></span>
                        <button className="btn waves-effect waves-light submit-btn" id='login-submit' type="submit" name="action">
                            Log In
                        </button>
                        <p style={{ marginTop: '15px' }}>Don't have an account? <Link to="/Signup">Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}
