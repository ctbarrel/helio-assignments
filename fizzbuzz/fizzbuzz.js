for (let fb=1; fb <=100; fb++) {
    if (Number.isInteger(fb/3)) {
        if (Number.isInteger(fb/5)) {
            console.log(`Fizzbuzz`)
        } else {
            console.log(`Fizz`)
        }
    } else if (Number.isInteger(fb/5)) {
        console.log(`Buzz`)
    } else {
        console.log(fb)
    }
}