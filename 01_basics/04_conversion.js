let score = 33
console.log(typeof score);
console.log(typeof score );

let Score = "33abc"
let valueinnumner = Number(Score);
console.log(typeof valueinnumner);
console.log(valueinnumner)
//gives NaN while typeof gives number

//"33"=>33
//"33abc"=>NaN
//true=>1,false=>0

let num = null
let new_num = Number(num);
console.log(typeof new_num);
console.log(new_num)

let num1 = undefined
let new_num1 = Number(num);
console.log(typeof new_num1);
console.log(new_num1)

let isloggedin = true
let booleantype = Number(isloggedin)
console.log(typeof isloggedin);
console.log(booleantype)

//1 => true;0=>false
//"" => false
//"Akhil" => true

//conversion in string

let s = 33
let stringnum = String(s)
console.log(stringnum)
console.log(typeof stringnum)