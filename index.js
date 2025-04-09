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


function getrecursion(nr){
    if(nr == 0){
    return;
    }

    console.log(nr)
    getrecursion(--nr)
    

}
function logrecursive(nr){
    console.log('started function ')
}
getrecursion(3)
funct
// testavailblity()
// console.log(globalscope)
// console.log('not availble ',y)