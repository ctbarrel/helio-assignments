//the function returns a promise
//don't use .then methods in regular objects
    //that word belongs to promises

//this function checks if numbers are even.
//even resolves, odd rejects
function isEven(number) {
    
    //create promise
    let prom = new Promise((resolve, reject) => {
        
        //the number is within scope, b/c inheritance
        //check if even using modulus operator
        if (number % 2 === 0) {
            resolve(`${number} is an even number`)
        } else {
            reject(`${number} is an odd number`)
        }
    })

    return prom
}

module.exports.isEven = isEven