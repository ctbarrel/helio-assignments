import React from 'react'

const LoggedInContext = React.createContext()

function LoggedInProvider (props) {

    let [users, setUsers] = React.useState([])
    let [loggedIn, setLoggedIn] = React.useState(false)

    //function to update password | if user exists, set new pass
    const updatePass = (username, password) => {

        let rtnVal = false
        let foundUser = users.findIndex( user => user.username === username)
        
        if (foundUser !==  -1) {
            //is found
            //copy array
            let tempUsers = [...users]

            //update password
            tempUsers[foundUser].password = password
        
            //set new state
            setUsers(tempUsers)

            rtnVal = true
        }

        return rtnVal
    }

    //function to check user
    const checkUser = (username, password) => {

        let rtnVal = false
        //if user/pass match, return true
        let found = users.findIndex(user => user.username === username && user.password === password)

        if (found !== -1) {
            setLoggedIn(true)
            rtnVal = true
        }

        return rtnVal
    }

    //function to add user    
    const addUser = (username,password) => {

        let rtnValue = false
        //check if user exists
        if(users.findIndex(element => username = element.username) === -1) {
            //if user is not found

            let tempUsers = [...users]
            tempUsers.push({username,password})
            setUsers(tempUsers)
            rtnValue = true
        } else {
            throw new Error("User already exists")
        }

        return rtnValue
    }

    return (
        <LoggedInContext.Provider value={{users, loggedIn, updatePass, checkUser, addUser}}>
            {props.children}
        </LoggedInContext.Provider>
    )
}

const LoggedInConsumer = LoggedInContext.Consumer
export {LoggedInContext, LoggedInProvider, LoggedInConsumer}