const user = {
    name: "pranav",
    age: 18,

    fun: function (){
        console.log(this.name)
        console.log(this)//"this" refers to current context
    }
}

user.fun()
//console.log(this)//here there is no current context to consider so it returns empty object
user.name = "bablu"
user.fun()

function call(){
    console.log(this)
}
call()

function call1(){
    let username = "virri"
    console.log(this.username)//here it will show undefined because we can't use "this" in function like this
}
call1()

const chai = () => {
    console.log(this)//here u will get empty object unlike what you have observed in call()
}
chai()

const chaii = () => ({username: "pranav"}) // this is called as implicit return type where you don't mention
                                           // return type but u use curly braces inside ()
console.log(chaii())

const ch = (num1,num2) => (num1+num2)//here no need to use {} because you are not returning any object type
console.log(ch(3,4));

//IIFE is used to prevent global scope pollution and it's immediately gets executed
//one way:
(function pr1(){
    console.log(`welcome one`)
})();

//another way:(if you use two iife then keeping ; after first iife is madatory)
((firstname) => {
    console.log(firstname)
    console.log("5")
})("pranav")