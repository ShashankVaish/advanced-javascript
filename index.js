// const teacher = {
//     name:"shashank"
// }
// const teachersupport={
//     isavailable:false

// }
// const TAsupport={                                                                                                
//     active:false
// }
// const chai = teacher()
// const code = TAsupport()
// Object.prototype.code=teacher
// console.log(teacher);
// // console.log(code.teacher());
// const tea = ['shashank','vaish']
// const vio = {
//     name:"vivian",
//     surname:"dsouja"
// }
// Object.prototype.hitsh = function(){
//     console.log("this is hitsh inject the function in object")
// }
// Array.prototype.lol = function(){
//     console.log("this array injecter")
// }
// let addtwonumber = (x,y)=>{
//     // console.log(x+y)
//     return x+y

// }

// for(let i = 0;i<=10;i++){
//     let result = addtwonumber(i,i*2)

// }
// // console.log(addtwonumber(89,90))

// // vio.hitsh()
// // let g = ['so','lo','uolo']
// // let arr =['i ','am',...g]
// function name  (...arr){
//     arr.reduce((total,nums)=>{ 
//         console.log(nums)

//      })
//     console.log()

// }
// variable scope in function 
//  function test (){
//     let y = "shashnak"

//     console.log("avaible here ",y)

    
// }
// let globalscope = "here we"
// function testavailblity(){
    
//     if(true){
//         var x = "local"

//     }
//     console.log(x)
//     console.log(uilo)

//     var uilo = 89

// }
// function testavailblity(){
    
//     if(true){
//         var x = "local"

//     }
    
//     console.log(x)
//     console.log(globalscope)

    

// }
// function testavailblity(){
//     let globalscope = "shashank vaish"
//     console.log(globalscope)
// }
// //constant scope 
// function doingstuff(x){
//     console.log(x)

// }
// doingstuff("param")
// function confuseReader(){
//     x = "guess my scope"// here goes global scope 
//     console.log("inside the function ",x)
// }
// confuseReader()
// console.log("outside the scope ",x)
// (()=>{
//     console.log("here ")
// })()
// (()=>{
//     console.log("we are different type ")
// })()
//recursive function 


// function getrecursion(nr){
//     if(nr == 0){
//     return;
//     }

//     console.log(nr)
//     getrecursion(--nr)
    

// }
// function logrecursive(nr){
//     console.log('started function ')
// }
// getrecursion(3)

// testavailblity()
// console.log(globalscope)
// console.log('not availble ',y)




// variable scope in function 

/*function testAvailability(x){
    console.log("available here",x);
    
}
testAvailability("Hi!");
console.log("not avilable here",x);

//********************************************** */

/*function testAvailability(){
    let y="local variable";
    console.log("available here",y);  
}
testAvailability();
console.log("not avilable here",y);*/

//*****************************************************************

/*function testAvailability(){
    let y="I'll return ";
    console.log("available here",y);  
    return y;
}
z=testAvailability();
console.log("outside the function ",z);
console.log("not available here",y);
*/

//********************************************************************************

// var
/*function doingstuff(){
    if(true){
        var x="local";

    }
    console.log(x);  
}
doingstuff();
*/

//************************
 

/*function doingstuff(){
    if(true){
        console.log(x);
        let x="local";
    }    
}
doingstuff();
*/

/*function doingstuff(){
    if(true){
        console.log(x);
        var x="local";
    }    
}
doingstuff();
*/

/*
function doingstuff(){
    if(true){
       
        const x="local";
    }    
    console.log(x);
}
doingstuff();
*/

//global variable  ********************************
/*
let globalvar="accessible averywhere";
console.log("outside function ", globalvar);
function creatingNewScope(x){
    console.log("accessible in function",globalvar);
    
}
creatingNewScope();
console.log("ousidde functon",globalvar);
*/

//*************************** */
/*
let x="global";
function doingstuff(){
    let x="local";
    console.log(x);
    

}
doingstuff();
console.log(x);
*/

//********************** */
/*let x="global";
function doingstuff(){
    x="local";
    console.log(x);
    

}
doingstuff();
console.log(x);

*/
//********************************* */
/*
let x="global";
function doingstuff(x){
    console.log(x);
    
}
doingstuff("parameter");
*/
//******************** */
/*
function confusereader(){
    x="guess my scope.......";
    console.log("inside function: ",x);
}

confusereader();
console.log("outside the function:",x);
*/

//*************************** **********************************/
//IIFE ===   Immediately invoked function  expression without name

/*
(function(){
    console.log("IIFE!");
    
})();
*/

// arrow function as an anonymous function 

/*
(()=>{
    console.log("run right away");
})();
*/

//*Recursion functions******************************************************************************

/*
function getRecursion(nr){
    console.log(nr);
    if(nr>0)
    getRecursion(--nr);
}

getRecursion(3);
*/

/*
function logRecursion(nr){
    console.log("startred function :",nr);
    if(nr>0){
        logRecursion(nr-1);

    }
    else{
        console.log("done with recursion ");
        
    }
    console.log("ended function :",nr);
    
}
logRecursion(3);
*/
//*/

// function getRecursion(nr){
//     if(nr>0){
//         getRecursion(--nr);

//     }
//     console.log(nr);
    

// }
// getRecursion(3);

// /*************************** */
// function logRecursive(nr){
//     console.log("started function",nr);
//     if(nr>0){
//         logRecursive(nr-1);
//         }
//     else{
//         console.log("donee with recursion");
        
//     }
//     console.log("ended function ",nr);
    
    
// }
// logRecursive(3);

// //performance of recursion is slightly worse than performance of iteration
// /*********************************************************************   Nested function ************************************** */
// function doouterfunction(){
//     console.log("outer function")
//     doinnerfunction(x){
//         console.log(x+7)
//         console.table('i can access outer function ',)
//     }
// }
// function doflexiblestuff(executestuff){
//     executestuff();
//     console.log("inside the executed stuff ")
// }
// let youGotThis = function(){
//     console.log("you are doing really well for the knows as ")

// }
// setTimeout(youGotThis,5000)
// let testFunction = function(){

// }
// (function (){
//     console.log("welcome")
// })();
// (function(){
//     let firstname 
// })
// class Person {
//     constructor(firstname,lastname){
//         this.firstname = firstname
//         // this.lastname = lastname

//     }
//     greet(){
//         console.log("hi there ")

//     }
//     compliment(name,object){
//         return "That's a wonderful"+object +","+name
//     }
// }
// let p  = new Person("shashank","Gupta")
// p.greet()
// console.log(p.compliment())

// class Person {
//     #firstname
//     #lastname
//     constructor(firstname,lastname){
//         this.#firstname = firstname
//         this.#lastname = lastname

//     }
//     greet(){
//         console.log("hi there ")

//     }
//     compliment(name,object){
//         return "That's a wonderful"+object +","+name
//     }
// }
// let p  = new Person("shashank","Gupta")
// p.greet()
// console.log(p.compliment())


// get or set method 


class Person{
    #firstname
    #lastname
    constructor(firstname,lastname){
        this.#firstname = firstname
        this.#lastname = lastname

    }
    get firstname(){
        return this.#firstname
    }
    set firstname(firstname){
        return this.#firstname = firstname
    }

}
let j = new Person("shashank","Gupta")
console.log(j.firstname)
console.log(j.firstname="saksham")


