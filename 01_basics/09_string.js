const name = "Akhil"
const repocount = 4

console.log(name+repocount+"value")//not recommended
// recommended to use backticks
console.log(`Hello my name is ${name} and my repocount is ${repocount}`);

const gamename = new String("Akhiljha")//gives string object
console.log(gamename)
console.log(gamename[0])
console.log(gamename[5])
console.log(gamename.length)
console.log(gamename.toUpperCase())
console.log(gamename.charAt('5'))
console.log(gamename.indexOf('k'))

console.log(gamename.substring(0,4))// ignores -ve values
console.log(gamename.slice(-5,4))// Accepts -ve values