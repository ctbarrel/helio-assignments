//this consumes (uses) a promise
let {isEven} = require('./promise')

let prom1 = isEven(8)

//if promise resolves, use .then to get value
//.then calls function, accepts 1 param
//the value of the promise is passed into param
prom1
.then((value) => {
    console.log(value)
})

let prom2 = isEven(45)

prom2
.then((value) => {
    console.log(value)
})
.catch((err) => {
    console.log(err)
})

//async and await functions
//await must be used in async functions
async function wait() {

    let ans = await isEven(42)

    console.log(ans)
}

async function waitError() {

    try {
        let answer = await isEven(47)
        console.log(answer)
    }
    catch(error) {
        console.log(error)
    }
}

//call async function
wait()
waitError()
//third built-in function...
// finally adds it after the result of the previous
isEven(15)
.then(resVal => {
    console.log(resVal)
})
.catch(err => {
    console.log(err)
})
.finally(res => {
    console.log('cleanup')
})