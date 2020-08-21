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

    set rename(name2) {
        this.name = name2
    }

    get rename() {
        return this.name
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

fido.rename = `Spot`

fido.sayName()