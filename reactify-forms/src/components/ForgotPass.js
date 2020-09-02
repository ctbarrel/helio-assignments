import React from 'react'

export default function ForgotPass () {
    return (
        
        <div>
            <h1>Forgot Password?</h1>
            <form>
                <input id="email" type="email" placeholder="Enter Email"></input>
                <br></br>
                <input id="newPass" type="password" placeholder="Enter New Password"></input>
                <br></br>
                <input id="confirmNP" type="password" placeholder="Confirm New Password"></input>
                <br></br>
                <button type="submit">Submit</button>
                <br></br>
                <a href="./">Go Home</a>
            </form>
        </div>
    )
}