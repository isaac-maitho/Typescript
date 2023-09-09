//unknown type

let userInput: unknown;
let userName: string;

userInput = 'Isaac';
userInput = 5;

if(typeof userInput === 'string'){
    userName = userInput;
}

//never type

function generateError(message: string, code: number): never{
    throw{ message: message, errorCode: code }
}
//prints nothing thats why its of type 'never'
console.log(generateError('A 404 error occurred', 404))