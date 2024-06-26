const user = {
    name: "Pranav",
    age: 19,
    profession: "student",
    email: "abc@gmail.com"
}

console.log(user.name)
console.log(user["name"])
console.log(`Welcome ${user.name}!!`)
//even though u write const u can still change values of objects attributes
user.age = 18
console.log(user.age)

const user2 = new Object() //singleton object if u print it it will be {}
const user3 = {} //non singleton object if you print it will also be {}

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a",4: "b"}

const obj3 = Object.assign(obj1, obj2)//combining both objects
const obj4 = {...obj1,...obj2}//combining both objects
console.log(obj3)
console.log(obj4);

console.log(Object.keys(user))
console.log(Object.values(user));

//when you deal with data from database it will be like array of objects 

//to check whether a attribute is present or not in an object u can use following syntax:
console.log(user.hasOwnProperty('sex'))

//object destructuring:
const {profession: pf} = user
console.log(pf);
// the only benifit of doing this instead of writing user.profession everywhere 
//you can just destructure it into pf and just use it