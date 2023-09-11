abstract class Department {
    //static properties
    static Year = 2023;
    //name: string;
    //private readonly id: string;
    //private employees: string[] = [];

    //changed it to protected to make it accessible to other extended classes
    protected employees: string[] = [];
    
    //shorthand initialization & readonly keyword
    constructor(protected readonly id: string, public name: string){
        //this.name = n;
    }

    //static methods
    static createEmployee(name: string){
        return {name: name}
    }

    //absract
    abstract describe(this: Department) : void;
       // console.log(`Department: (${this.id}) : ${this.name}`)
    

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
    describe() {
        console.log('IT Department:' + this.id)
    }
}

class AccountingDepartment extends Department{
    private lastReport: string;

    //getters
    get mostRecentReport(){
        if(this.lastReport){
            return this.lastReport
        }
        throw new Error('No report found')
        
    }

    //setters
    set mostRecentReport(value: string){
        if(!value){
            throw new Error('Please pass in a valid value')
        }
        this.addReports(value);
    }
    describe() {
        console.log('AccountingDeparmrnt ID: ' + this.id)
    }

    constructor(id: string, private reports: string[]){
        super(id, 'Accounting')
        this.lastReport = reports[0]
    }

    addReports(text: string){
        this.reports.push(text)
        this.lastReport = text;
    }

    printReports(){
        console.log(this.reports)
    }
}

const newEmployee = Department.createEmployee('Badman')
console.log(newEmployee, Department.Year)

//Abstract classes cannot be instantiated
//const Job = new Department('Developer', 'D1')
const it = new ITDepartment('CT1', ['Maitho'])

const Accounts = new AccountingDepartment('A1', ['REPORT 1'])
Accounts.describe()
//setters
Accounts.mostRecentReport = 'Year End Report'
it.describe()


// Job.addEmployee('Isaac')
// Job.addEmployee('wyclif')

it.addEmployee('Matata')
it.printEmployeeInfo()

Accounts.addReports('One report Added')
Accounts.printReports()
console.log(Accounts.mostRecentReport)

// cannot work since employees property is private
//Job.employees [2] = 'Anna'

// Job.printEmployeeInfo()
// Job.describe()

// console.log(Job)
console.log(it)