const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num)
}

const map = new Map()
map.set(1,"a")
map.set(2,"b")
map.set(3,"c")

console.log(map)

for (const it of map) {
    console.log(it[1]);
}

for (const [it1,it2] of map) {
    console.log(it1,':->' ,it2)
}//if you iterate over objects like this by taking it1,it2 u will get error

//we use forin for objects
const obj = {
    name: "pranav",
    age: 19
} 

for (const key in obj) {
    console.log(key,':->',obj[key])
}
//it's better to use "forin" for arrays and objects but note that key gives 'keys' obj[key] gives 'values' respectively in "forin"
//when we use "forin" and "key" incase if map ,it will not print anything

const code=[1,2,3]

code.forEach((val) => {
    console.log(val);
})

code.forEach((val,index,arr) => {
    console.log(val,index,arr);
})

const newarr = [//this is a common practice that data comes from database in form of array
    {
        name: "pranav",
        age: 19
    },
    {
        name: "virri",
        age: 100
    }
]

newarr.forEach((item) => {//u can access them like this in an instant
    console.log(item.name);//but u cannot return values from forEach() so we use filter()
})

let res = code.filter((num) => {
    return num>1;
})

console.log(res);

res = newarr.filter((item) => item.name == "pranav")
console.log(res)

//.map() is similar to .filter()

const result = code.reduce((acc,curr) => acc+curr,0)
console.log(result);//.reduce() is widely used when summing up of values is needed.