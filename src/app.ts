class Department {
    //name: string;
    //private readonly id: string;
    //private employees: string[] = [];

    //changed it to protected to make it accessible to other extended classes
    protected employees: string[] = [];
    
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

//inheritance
class ITDepartment extends Department {
    constructor(id: string, public amins: string[]){
        super(id, 'IT')
    }

    addEmployee(employee: string): void {
        this.employees.push(employee)
    }
}

class AccountingDepartment extends Department{
    constructor(id: string, private reports: string[]){
        super(id, 'Accounting')
    }

    addReports(text: string){
        this.reports.push(text)
    }

    printReports(){
        console.log(this.reports)
    }
}

const Job = new Department('Developer', 'D1')
const it = new ITDepartment('CT1', ['Maitho'])
const Accounts = new AccountingDepartment('A1', ['REPORT 1'])

Job.addEmployee('Isaac')
Job.addEmployee('wyclif')

it.addEmployee('Matata')
it.printEmployeeInfo()

Accounts.addReports('One report Added')
Accounts.printReports()
// cannot work since employees property is private
//Job.employees [2] = 'Anna'

Job.printEmployeeInfo()
Job.describe()

console.log(Job)
console.log(it)