class User {
    constructor(username){
        this.username = username;
    }

    hi(){
        console.log(`hello ${this.username}!`);
    }
}

const user = new User("pranav");
user.hi();

class Teacher extends User {
    constructor(username,email,password){
        super(username);
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course is added by ${this.username}`);
    }
}

const teacher = new Teacher("Prabhavati","pb@gmail.com","123");
teacher.addCourse()

console.log(teacher === Teacher);
console.log(teacher instanceof Teacher)
//when you use static both child and parent can't access that static function