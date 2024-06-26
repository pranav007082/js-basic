let myarr = [0,1,2,3,4,5]
myarr.push(6)
console.log(myarr)
myarr.pop()
console.log(myarr)
myarr.unshift(9)
console.log(myarr)
myarr.shift()
console.log(myarr)

let m1 = myarr.slice(1,3)
console.log(m1)
console.log(myarr)

let m2 = myarr.splice(1,3)
console.log(m2)
console.log(myarr)
//splice modifies the array but slice does not

const m = [...m1,...m2]//add m2 to m1 ->this method is known as spread
console.log(m)

const newarr = [1,2,3,[4,5,[6,7]]]
const newa = newarr.flat(Infinity)
console.log(newa)

console.log(Array.from("Pranav"))

let s1 = 100
let s2 = 101
console.log(Array.of(s1,s2))