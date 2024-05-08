// prmitive:- stack memory -> copy of variable is generated
//non primitive: - heap memory-> reference of variable is obtained, thus any change in calue will reflect permanently

let myname = "Akhiljha";
let anothername = myname;
console.log(anothername)
anothername = "vshdfjsjsh";
console.log(anothername);
console.log(myname);

// object in heap memory
let userone = {
    email:"abc@gmail.com",
    upi:"abc@ybl"
}

let usertwo = userone;
usertwo.email = "akhil@gmail.com"
console.log(userone.email)