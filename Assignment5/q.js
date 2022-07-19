let Employee={
    name: 'Ary',
    email: 'ece.20becb63@silicon.ac.in',
    phone: '7735438422',
    basic_salary: 95000,
    total_salary:function () {
        const hra=this.basic_salary * 0.15;
        const spa=this.basic_salary* 0.2;
        var salary =this.basic_salary+ hra+spa;
        if (this.basic_salary > 40000 && this.basic_salary < 50000) {
            salary = (salary - salary * 0.1);
        }
        if (this.basic_salary > 50000 && this.basic_salary < 70000) {
            salary = (salary - salary * 0.15);
        }
        if (this.basic_salary > 70000 && this.basic_salary < 80000) {
            salary = (salary - salary * 0.2);
        }
        if (this.basic_salary> 80000) {
            salary = (salary - salary * 0.3);
        }
        return salary;
    }
}
console.log(Employee.name);
console.log(Employee.email);
console.log(Employee.phone);
console.log(Employee.basic_salary);
console.log(Employee.total_salary());