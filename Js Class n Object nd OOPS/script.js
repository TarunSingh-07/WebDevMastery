// let obj = {
//     a: 1,
//     b: "Tarun"
// }
// console.log(obj);

// let animal = {
//     eats: true
// }
// let rabbit = {
//     jumps: true
// }

// rabbit.__proto__ = animal // sets rabbit.[[Prototype]] = animal


class Animal {
    constructor(name){
        this.name = name
        console.log('Object is created.....');
    }
    eats(){
        console.log('Kha rha hu');
    }
    jumps(){
        console.log('Kood raha hoon');
    }
}


class Lion extends Animal{
    constructor(name){
        super(name)
        console.log('Object is created and he is a lion...');
    }
    eats(){
        super.eats()
        console.log('Kha rha hu roarrrr');
    }
}

let a = new Animal("Bunny")
console.log(a)

let l = new Lion('Shera')
console.log(l)



