require('dotenv').config()
const { MongoClient, Cursor } = require("mongodb")
let client
let usersCollection

function connect() {
    
    const uri = `mongodb+srv://ctbarrel:${process.env.DBPASS}@cluster0.dnyub.mongodb.net/Helio?retryWrites=true&w=majority`

    client = new MongoClient(uri, {useUnifiedTopology: true})

    return client.connect()
    .then(() => {

        console.log('Connected successfully to server')
        
        return client.db('Helio').collection('Users')
    })
    .then (collection => {
        usersCollection = collection
    })
    .catch ((err) => {
        console.log(err)
    })
}

function newUser() {

    return usersCollection.insertOne({
        username: "MonkeyBoy",
        password: "temp-work",
        email: "example@outlook"
    })
}

function readAll() {
    
    let rtnVal = usersCollection.find({}).toArray()

    return rtnVal
}

function findOne() {
    let monkey = usersCollection.findOne(
        {username: "MonkeyBoy"}
    )
    return monkey
}

function updateOne() {

    return usersCollection.findOneAndReplace(
        {username: { $eq: "MonkeyBoy"}},{
            username: "Curious George",
            password: "p4ssw0rd",
            email: "example@work.address"
        }
    )
}

function deleteOne() {

    return usersCollection.findOneAndDelete(
        {username: { $eq: "Curious George"}}
    )
    
}

function close() {
    
    client.close()
}

module.exports.connect = connect
module.exports.newUser = newUser
module.exports.readAll = readAll
module.exports.findOne = findOne
module.exports.updateOne = updateOne
module.exports.deleteOne = deleteOne
module.exports.close = close