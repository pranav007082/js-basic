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


/*Object.defineProperty(Math,"PI",{
    writable: true,
    enumerable: true
})

console.log(Object.getOwnPropertyDescriptor(Math,"PI"));*/
//you cannot change pi value of math becuase it is a static property of math
//in the same way u can change properties of user defined object(Teacher) ka attributes.

const game = {
    name: "coc",
    year: 1990
}

for(let [key,value] of Object.entries(game)){//we can't directly iterate over object so we use entries
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`);
    }
}
// if we modify name ka enumerate property as false then it will not get printed.

//getters and setters basically override parameters into new format which is mentioned
//in get function() and we use different variable compared to passed parameter otherwise
//we would get stack overflow issue

class User1 {
    constructor(name){
        this.name = name;
    }

    get name(){
        return this._name.toUpperCase()
    }

    set name(value){
        this._name = value;//if you use same this.name then we will get stack overflow issue
    }
}

const p = new User1("pranav")
console.log(p.name);
