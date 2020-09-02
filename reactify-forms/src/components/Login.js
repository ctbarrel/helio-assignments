import React from 'react'

export default function Login () {
    return (
        
        <div>
            <h1>Login Page</h1>
            <form>
                <input id="email" type="email" placeholder="Enter Email Address"></input>
                <br></br>
                <input id="password" type="password" placeholder="Enter Password"></input>
                <br></br>
                <button type="submit">Log In</button>
                <br></br>
                <a href="./">Go Home</a>
            </form>
        </div>
    )
}