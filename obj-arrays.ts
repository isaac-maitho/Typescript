enum Role { ADMIN, USER, AUTHOR}

const person ={
    name: 'ayzzoh',
    age: 24,
    hobbies: ['reading', 'coding'],
    role: Role.ADMIN
}

console.log(person.name)

for (const hobby of person.hobbies){
    console.log(hobby)
}

if(person.role === 0){
    console.log('I am the admin')
}