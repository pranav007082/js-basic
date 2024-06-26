function one(){
    const name = "pranav"
    function two(){
        const age = 18
        console.log(name)
    }
    //console.log(age) ->throws error because age has been out of scope

    two()
}

one()
//the function will only gets executed when it's been called.

const addtwo = function(nums){
    return nums+2;
}
console.log(addtwo(2));//if you keep this before function declaration then it will give error,because
                        //before initialization you are trying to access it.

console.log(addone(5));//here you won't face such a problem because it depends on how you declare the function
function addone(nums){
    return nums+1;
}