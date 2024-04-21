"use strict"; //treat all js code as newer version

//alert(3+3) // we are using nodejs not the browser

// generally we don't write semicolon(;)
console.log(3+3); console.log("Akhil") // readibility is not good

// code readibility should be high
// original documentation:-tc36.es/ecma262 and mdn 

let name = "Akhil"
let age = 25
let isloggedin = true


////////////////premitive datatypes///////////////////
//number =>2^53
//bigint
//string = ""
//boolean = true/false
//null = standalone value
/* for example;   let temperature = null
i want the temperature to be shown null if it is not registered. we cann't show zero. As zero temp is possible */

//undefuned = > variable declared but undefined

//symbol => uniqueness


//////////////object datatypes//////////////////////
console.log(typeof age)
console.log(typeof null) // object
console.log(typeof undefined) // undefined