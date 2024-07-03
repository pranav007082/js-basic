//if you include a new function in object prototype then it will get accessed by arrays,strings and functions too
//but not vice versa

const myarr = [1,2,3,4];

const myobj = {
    name: "pranav",
    age: 18
}

Object.prototype.pranav = function(){
    console.log("Pranav says hi!!");
}

Array.prototype.pr = function(){
    console.log("hey!");
}

console.log(myobj.pranav());
console.log(myarr.pranav());
console.log(myarr.pr());
//console.log(myobj.pr());//this gives error as mentioned above

//Object.setPrototypeOf(user1,user2) // this line ensures that user1 has access to properties of user2 this is knwon as prototype inheritance

//use of call function:
function f2(name){
    this.name = name
}

function f1(name,age,sex){
    f2.call(this,name);//different from f2(name)->if i use this then only age and sex gets printed.
    this.age = age,
    this.sex = sex

}

const p1 = new f1("pranav",19,"male")
console.log(p1);