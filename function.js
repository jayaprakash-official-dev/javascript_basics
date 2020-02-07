
let run = function(param1,param2,param3){    //parameter fetch
    console.log("This is my function");
    console.log(`My Hero is ${param1}`);     //binding values
    console.log(`My second hero is ${param2}`);
    console.log(`My third hero is ${param3}`); 
}
run('superMan','spiderman','xman');   //parameter injection


//adding two num in funtion
let add = function(param1,param2){  
    let mingle = param1+param2;
    return mingle;
}
add(1,2);
let result = add(1,2);
console.log(`The Result is :  ${result}`)