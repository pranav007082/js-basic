function user(name,age,sex){
    this.name = name
    this.age = age
    this.sex = sex

    return this
}

const userone = new user("pranav",19,"male")//if i don't use new keyword then usertwo will override userone
                                        //so using new keyword will created new instance(object) and insert values
                                        //mentioned in the function in this object and returns them.
const usertwo = new user("virri",18,"male")//so new is like a function constructor
console.log(userone);
console.log(usertwo);