
// use const variable for declearing an array becos its wont change by other function are values assignment

const bag = ['box','books','notes','watercan'];
bag.push('pencil')
console.log(bag);
console.log(bag.length);
console.log(bag[0]); //finding the value by using an index
console.log(bag[2]);
//finding the last value in array 
console.log(bag[bag.length-1]);
x=bag.length;
//this one way to show all thing
console.log('totally ' +x+ ' things');
//another way
console.log(`totally ${x} things`);

