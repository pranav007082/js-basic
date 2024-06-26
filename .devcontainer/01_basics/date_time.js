let mydate = new Date()
console.log(mydate)
console.log(mydate.toString())
console.log(mydate.toLocaleString())

let newdate = new Date(2024,5,4)
console.log(newdate.toDateString())

let new_date = new Date("04-14-2024")
console.log(new_date.toLocaleString())

let d = new_date.getTime()
let y = d/(1000*60*60*24*365)
console.log(y)//number of years from 1970 to current day