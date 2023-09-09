//function types

function sum (n1: number, n2: number){
    return n1 + n2;
}

//callback functions
function addAndHandle (n2: number, n3: number, cb: (num: number) => void){
    const marks = n2 + n3;
    cb(marks)
}

function result(num: number){
    console.log('Result: ' + num)
}

result(sum(8,12))


let combinedValues: (a:number, b: number) => number;

combinedValues = sum;

console.log(combinedValues(15,15))

addAndHandle(50,70 , (marks) =>{
    console.log(marks)
})