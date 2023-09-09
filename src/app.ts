class Department {
    //name: string;
    //private readonly id: string;
    private employees: string[] = [];
    
    //shorthand initialization & readonly keyword
    constructor(private readonly id: string, public name: string){
        //this.name = n;
    }

    describe(this: Department){
        console.log(`Department: (${this.id}) : ${this.name}`)
    }

    addEmployee(employee: string){
        this.employees.push(employee)
    }

    printEmployeeInfo(){
        console.log(this.employees)
        console.log(this.employees.length)
    }
}

const Job = new Department('Developer', 'D1')

Job.addEmployee('Isaac')
Job.addEmployee('wyclif')

// cannot work since employees property is private
//Job.employees [2] = 'Anna'

Job.printEmployeeInfo()
Job.describe()

console.log(Job)