// singleton
// object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name : "hitesh",
    "full name": "Hitesh choudhary",
    [mySym]: "mykey1",
    age : 18,
    location: "Jaipur",
    email: "hitesh@oogle.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturday"]

}

// myArray = ["h", "i"]
// myArray

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgbt.com" 
// object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com" 
// console.log(JsUser0);

JsUser.greeting = function() {
    console.log("Hello JS user");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

