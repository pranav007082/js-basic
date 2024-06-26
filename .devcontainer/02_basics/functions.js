function add(n1,n2){//these n1,n2 are parameters
    console.log(n1+n2)
}

const r = add(1,5)//these 1,5 are arguments 
console.log(r);

function add1(n1,n2){
    let l = n1+n2
    return l;
}

const res = add1(1,5)
console.log(res);

function func(username){
    if(!username){//if username is undefined then this block of statement will get executed.
        console.log("Please enter valid username")
    }else{
        console.log(`${username} just logged in!`)
    }
}

func("")
func("pranav")

function printthearray(...nums){//whenever there is ... ->u can consider it like array(it will return like array from that position)
    return nums
}

function printarray(val1,...nums){
    return nums
}

console.log(printthearray(200,300,400,500))
console.log(printarray(200,300,400,500))

const user = {
    name: "Pranav",
    age: 19
}

function fun(object){//passing object as parameter
    console.log(`Username is ${object.name} and age is ${object.age}`)
}

fun(user)

function funcc(getarray){
        return getarray;
}

const arr = [1,2,3,4]
for(let i=0;i<arr.length;i++)
console.log(funcc(arr[i]))