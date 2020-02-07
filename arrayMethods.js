// const box = ['pencil', 'pen', 'eraser', 'sharpner'];
// let total = box.length;
// box.push('scale');
// box[1] = 'google';
// console.log(total);
// console.log(box);
// var i;
// for (i = 0; i < box.length; i++) 

// { 
//     console.log(`this is the ${i} ${box[i]}`);
// }


//array methodes
const myArray = ['one','two','three','four','five','six']
store=myArray.length;
console.log(myArray);
console.log(store);

//START OF ARRAY

//shift method
s=myArray.shift()   //remove the first item
console.log(s);
console.log(myArray);
//unShift method
uS=myArray.unshift('jo')  //it will add items in begin
console.log(uS);
console.log(myArray)

//END OF ARRAY

//pop method
po=myArray.pop();
console.log(po);
console.log(myArray);
//push method
pu=myArray.push('seven');
console.log(pu);
console.log(myArray);


//MIDDLE OF ARRAY
//splice
sp=myArray.splice(2,1,'amma')  // start value,delete length,string''
console.log(myArray);

//RANDOM METHODS
//tostring
st=myArray.toString();
console.log(st);
//reverse
re=myArray.reverse();
console.log(re);

  




