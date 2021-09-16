import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Signup() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')

    useEffect(() => {

        document.getElementById('signup-form').onsubmit = (e) => {
            e.preventDefault()
            if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
                document.getElementById('signup-msg').style.color = 'red'
                return document.getElementById('signup-msg').innerHTML = 'Please enter a valid email.'
            } else if (!/^[a-z0-9_\.]+$/i.test(username)) {
                document.getElementById('signup-msg').style.color = 'red'
                return document.getElementById('signup-msg').innerHTML = 'Usernames can only contain small letters, numbers, dots and underscores.'
            }
            const data = {
                email,
                password,
                name: `${firstName} ${lastName}`,
                username,
                profile_picture: `https://init-svg.herokuapp.com/svg/${firstName}/${lastName}/000000/animate`,
                bio: ''
            }
            console.log(data);
            fetch('http://localhost:5000/signup', {
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
                        document.getElementById('signup-msg').style.color = 'green'
                        document.getElementById('signup-msg').innerHTML = data.message
                        history.push('/Login')
                    } else {
                        document.getElementById('signup-msg').style.color = 'red'
                        document.getElementById('signup-msg').innerHTML = data.message
                    }
                })
                .catch(err => {
                    console.log(err);
                    document.getElementById('signup-msg').style.color = 'red'
                    document.getElementById('signup-msg').innerHTML = 'Something went wrong.';
                })
        }
    }, [history, firstName, lastName, email, password, username])

    return (
        <div className="login">
            <Navbar />
            <div className="card-container">
                <div className="card login-card input-field">
                    <h2 style={{ fontFamily: "Grand Hotel" }}>Instagram</h2>
                    <form id="signup-form">
                        <input type="text" placeholder="First Name" defaultValue={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
                        <input type="text" placeholder="LastName" defaultValue={lastName} onChange={(e) => { setLastName(e.target.value) }} />
                        <input type="email" placeholder="Email" defaultValue={email} onChange={(e) => { setEmail(e.target.value) }} />
                        <input type="text" placeholder="Username" defaultValue={username} onChange={(e) => { setUsername(e.target.value) }} />
                        <input type="password" placeholder="Password" defaultValue={password} onChange={(e) => { setPassword(e.target.value) }} />
                        <span id='signup-msg'></span>
                        <button className="btn waves-effect waves-light submit-btn" type="submit" name="action">
                            Sign Up
                        </button>
                        <p style={{ marginTop: '15px' }}>Already have an account? <Link to="/Login">Log in</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}
