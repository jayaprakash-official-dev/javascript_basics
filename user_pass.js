let userName = 'jayaprakwerew';
let password = '12345678';

x=userName.length;
y=password.length;
console.log(x);
console.log(y);
//using if else
if (x<=8 && y<=8) {
    console.log('successfully Registered');
} else {
    console.log('Invalid');
}
//using function

let gmail='jp@gmail';
let key ='12';

let check= function(param){
    if ((param.includes('@gmail')) && (param.length<=8)) {
     console.log('success');
    }
    else{
        console.log("fail");
        
    }
}
check(gmail);
check(key);