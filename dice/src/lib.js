//factory function to make a die
export function makeDie(sides) {
    return {
        sides
    }
}

export function randomNumber(min, max) {
    return Math.floor(Math.random() * max)+min;

    //Old Code, put it back if doesn't work
    //Math.random() * (max - min) + min
}