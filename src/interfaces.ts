//interfaces define the structure of an object

//functions and Interfaces
//type Addfn = (a: number, b: number) => number

interface Addfn {
    (a: number, b: number): number
}

let Add: Addfn;

Add = (n1: number, n2: number) => {
    return n1 + n2
}

interface PersonName {
    readonly name: string;
   

    greet(phrase: string): void
}

interface PersonAge extends PersonName {
    age: number;
}

//classes and interfaces
class User implements PersonName {
    name: string;
    age = 25;

    constructor(n: string){
        this.name = n;
    }

    greet(phrase: string){
        console.log(phrase +  ' ' + this.name)
    }
}

let user1: PersonAge;
//let user1: User;

user1 = new User('Ndets')

//cannot be reassigned due to the readonly property
//user1.name = 'gg'

user1 = {
    name: 'Susan',
    age: 24,

    greet(phrase: string){
        console.log(phrase +  ' ' + this.name)
    }
};

user1.greet('Welcome');
console.log(user1)