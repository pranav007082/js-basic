const Promiseone = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("HI THERE !!");
        resolve({username: "pranav",age: 19});//u can pass anything here
    },2000)
})

Promiseone.then(function(user){//resolve() has connection to then() // catch() has connection to reject
    console.log("Promise consumed");
    console.log(user);
})

const Promisetwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"virri" ,age: 18})
        }else{
            reject('ERROR!!');
        }
    },2000)
})

//here i will use chaining which indicates that the value returned from first fucntion 
//will be used by second fucntion

Promisetwo.then(function(user){
    console.log("Promise consumed 2");
    return user.username
}).then(function(myusername){
    console.log(myusername);
}).catch(function(err){
    console.log(err);
})

//instead of then() and catch() we can use async and await with try and catch.
//.fetch(some url)->it returns promise

async function newfunc(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("error");
    }
}

newfunc();

//above approach and this approach is same
fetch('https://jsonplaceholder.typicode.com/todos/1').then(function(response){
    return response.json();
}).then(function(data){
    console.log(data);
}).catch((error) => console.log(error))

//using fetch() will leads to seperate priority queue of callbacks in webapi's so we will get
//fetch function ka content before settimeout();