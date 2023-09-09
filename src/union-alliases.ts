//union types and literal types

//alliases custom types
type Combined = number | string;
type Conversion = 'as-number' | 'as-text';

function combine(
    input1: Combined, 
    input2: Combined, 
    resultConversion: Conversion){

    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
        result = +input1 + +input2;
    } else{
        result = input1.toString() + input2.toString() 
    }
    return result
}

const combineAges = combine(30,40, 'as-number')
console.log(combineAges)

const combineStringAges = combine('30', '50', 'as-number')
console.log(combineStringAges)

const combineNames = combine('Isaac', ' Wyclif', 'as-text')
console.log(combineNames)