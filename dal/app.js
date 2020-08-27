const db = require("./dal")

db.connect()
.then(() => {
    
    db.newUser()
})
.then(() => {
    
    return db.readAll()
})
.then(users => {
    
    console.log(users)
})
.then(() => {

    return db.findOne()
})
.then(found => {
    console.log(found)
})
.then(() => {

    db.updateOne()
})
.then(() => {
    
    return db.readAll()
})
.then(users => {

    console.log(users)
})
.then(() => {

    db.deleteOne()
})
.then(() => {
    
    return db.readAll()
})
.then(users => {

    console.log(users)
})
.then(() => {

    db.close
})