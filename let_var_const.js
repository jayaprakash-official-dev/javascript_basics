//var 

var a = 10;
console.log(a);

if (true) {
    a = 20;
    var f = 100;  //can access outside the block
    console.log(a);
}
console.log(f);


//let 

let b = 20;
console.log(b);

if (true) {
    b = 30 //no problem
    let c = 80;
    console.log(b);
    console.log(c);
}
// console.log(c);  //let wont work on outside blocks

///const varibale

const jp = 100;
console.log('const variable :' + jp); //its work
/* now i am trying to change the value of jp */
jp = 200;
// console.log(jp);   //wont work
