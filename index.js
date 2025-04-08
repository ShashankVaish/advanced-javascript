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
let addtwonumber = (x,y)=>{
    // console.log(x+y)
    return x+y

}

for(let i = 0;i<=10;i++){
    let result = addtwonumber(i,i*2)

}
// console.log(addtwonumber(89,90))

// vio.hitsh()
// let g = ['so','lo','uolo']
// let arr =['i ','am',...g]
function name  (...arr){
    arr.reduce((total,nums)=>{ 
        console.log(nums)

     })
    console.log()

}
