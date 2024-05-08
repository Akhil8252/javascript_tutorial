//primitive datatypes: 7 types
//String,Number,Boolean,Symbol,Bigint,null,undefined

//Reference type or Non primitive datatypes
//always copied the reference also
//Array,Objects,function

//javascript is a dynamically typed language
// in typescript const score:Number  = 100

const score  = 100//Number
const scorevalue  = 100.5//float
const isloggedin  = false//Boolean
const outtemp  = null//null
let scoreinvalid;//undefined
//typeof string:string
//typeof Number:number
//typeof Boolean:boolean
//typeof Symbol:symbol
//typeof null:object
//typeof undefined:undefined
//Symbol : is used to define unique variable
const x = Symbol('113') 
const y = Symbol('113') ;
console.log(x===y)//false

//Array
const heros = ['Shaktiman','juniorjee']
// for object declaration use {},obj is in the form of key,value pair

let myobject = {
    name:"Akhil",
    age:25 
}

//function 
const myfun = function(){
    console.log("function is called")
}

console.log(typeof myfun)
console.log(typeof myobject)