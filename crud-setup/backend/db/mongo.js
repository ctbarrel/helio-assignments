require('dotenv').config()
const {MongoClient} = require('mongodb')
const ObjectID = require('mongodb').ObjectID

let client

function connect(locals) {

    const uri = `+srv://ctbarrel:${process.env.DBPASS}@cluster0.dnyub.mongodb.net/${DBDB}?retryWrites=true&w=majority`

    client = new MongoClient(uri, {useUnifiedTopology: true})

    return client.connect()
    .then(connection => {
        locals.collectionChars = connection.db(`${DBDB}`).collection('Characters')
        locals.collectionSpells = connection.db(`${DBDB}`).collection('Spells')
        locals.collectionUsers = connection.db(`${DBDB}`).collection('Users')
    })
    .catch (err => {
        console.log(err)
        process.exit()
    })
}