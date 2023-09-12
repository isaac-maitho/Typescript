//intersection of object types
type Admin = {
    name: string;
    priviledges: string [];
}

type Employee = {
    name: string;
    date: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Gaucho',
    priviledges: ['create-server'],
    date: new Date
}

//intersection of union types

type Combinable = number | string;
type Numeric = string | number;

type Universal = Combinable & Numeric
