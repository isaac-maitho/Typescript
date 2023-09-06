//function types

function add (n1: number, n2: number){
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

result(add(8,12))


let combinedValues: (a:number, b: number) => number;

combinedValues = add;

console.log(combinedValues(15,15))

addAndHandle(50,70 , (marks) =>{
    console.log(marks)
})