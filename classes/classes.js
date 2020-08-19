class Animal {
    
    constructor (name, sound) {
        this.name = name
        this.sound = sound
    }

    speak () {
        console.log(this.sound)
    }

    sayName () {
        console.log(this.name)
    }
}

class Dog extends Animal {

    constructor (name, sound) {
        super(name, sound)
    }
}

let fido = new Dog("Fido", "Woof")
console.log(fido)
fido.speak()

var newName = 'Spot'

this.name = {

    get rename() {
        return this.name
    },

    set rename(newName) {
        this.name = newName
    }
}
fido.sayName()