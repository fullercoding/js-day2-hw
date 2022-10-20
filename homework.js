//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for(let key in person3){
    if(person3[key] instanceof Object){
        if(person3[key][0] instanceof Object){
            for(let key2 in person3[key][0]){
                console.log(person3[key][0][key2])
            }
        }else{
            for(let key3 in person3[key]){
                console.log(person3[key][key3])
            }
        }
    }else{
        console.log(person3[key])
    }
}

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
console.log("=====================================================")

function Person(name,age){
        this.name = name;
        this.age = age;

        this.printInfo= function(){
            return `${this.name} is currently ${this.age}`
    }
        this.increaseAge= function(){
            this.age += 1
    }
}

const Marco = new Person("Marco", 3)
const Marcus = new Person("Marcus", 29)
console.log(Marco.printInfo())
console.log(Marcus.printInfo())
Marco.increaseAge("Marco")
Marco.increaseAge("Marco")
Marco.increaseAge("Marco")
console.log(Marco.printInfo())


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function checkS(s){
    return new Promise((resolve,reject)=>{
        if (s.length >= 10){
            resolve(true)
        }else{
            reject(false)
        }
    })
}

checkS("The quick brown fox jumped over something").then(()=>{console.log("Big Word")}).catch(()=>{console.log("Small World")})
checkS("1234567").then(()=>{console.log("Big Word")}).catch(()=>{console.log("Small Word")})