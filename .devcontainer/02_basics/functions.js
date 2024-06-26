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