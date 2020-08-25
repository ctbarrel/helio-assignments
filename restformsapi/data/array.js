let users = [];

function getUser(username, password) {

    let user=users.find(element => {

        return (element.username === username && element.password === password)
    })
    return user
}

function addUser(username, password) {
    
    let user={username,password}
    users.push(user)
    return user
}

function changePassword(username, oldPassword, password) {

    let user=getUser(username, oldPassword, password)
    
    if (user != undefined) {
        user.password = password
    }

    return user
}


module.exports.getUser = getUser
module.exports.addUser = addUser
module.exports.changePassword = changePassword