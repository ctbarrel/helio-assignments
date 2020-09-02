import React from 'react'

export default function SignUp () {
    return (
        
        <div>
            <h1>Sign Up Page</h1>
            <form>
                <input id="fName" type="text" placeholder="Enter First Name"></input>
                <br></br>
                <input id="lName" type="text" placeholder="Enter Last Name"></input>
                <br></br>
                <input id="age" type="number" placeholder="Enter Age"></input>
                <br></br>
                <input id="email" type="email" placeholder="Enter Email"></input>
                <br></br>
                <input id="phone number" type="phone" placeholder="Enter Phone Number"></input>
                <br></br>
                <input id="password" type="password" placeholder="Create Password"></input>
                <br></br>
                <input id="confirmPass" type="password" placeholder="Confirm Password"></input>
                <br></br>
                <button type="submit">Log In</button>
                <br></br>
                <a href="./">Go Home</a>

            </form>
        </div>
    )
}