class User {
    constructor(username, email, password){
        this.username = username,
        this.email = email,
        this.password = password
    }

    encryptPassword() {
        return `aZyKi${this.password}@343!798*37`
    }

    // Static methods are functions that belong to a class rather than to an instance of that class. They can be called directly using the class name, without the need to create an object of the class. Instance can't access this method.
    static createId() {
        return `${Math.floor(Math.random() * 10000 + 1)}`
    }
}

const userOne = new User('Vikas', 'v@mail.com', 123) // When a class is instanced, then constructor calls immediately automatically
console.log(userOne.encryptPassword())

/*
// Behind The Scene of Class Syntax

function User(username, email, password) {
    this.username = username,
    this.email = email,
    this.password = password
}

User.prototype.encryptPassword = function () {
    return `aZyKi${this.password}@343!798*37` 
}

const userOne = new User('Vikas', 'v@mail.com', 123)
console.log(userOne.encryptPassword())
*/

// Inheritence
class Teacher extends User {
    constructor(username, email, password, salary, subject){
        super(username, email, password) // super() calls the constructor of parent
        this.salary = salary
        this.subject = subject
    }

    teaching() {
        return `${this.username} sir/ma'am teaches ${this.subject} subject.`
    }
}

const teacherOne = new Teacher('Sangeeta', 's@mail.com', 54654, 40000, 'biology')
console.log(teacherOne instanceof User)
console.log(teacherOne.encryptPassword())
console.log(teacherOne.teaching())