class User {
    constructor(username, email, password){
        this.username = username,
        this.email = email,
        this.password = password
    }

    encryptPassword() {
        return `aZyKi${this.password}@343!798*37`
    }
}

const userOne = new User('Vikas', 'v@mail.com', 123)
console.log(userOne.encryptPassword())
