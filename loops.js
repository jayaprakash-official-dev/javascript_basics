//loops

//FOR LOOP

const watch =['time','date','alarm','stopwatch'] //array

x= watch.length;
console.log(`this is my length : ${x}`);

for (let index = 0; index < watch.length; index++) {
    const element = watch[index];
    console.log(`These ara all my  ${index} arrays ${element}`);
}

for (let index = 0; index <= 100; index++) {
    x=index;
    const myArray = [];
    myArray.push(x);
    console.log(myArray)
}

//FOR EACH LOOP

const myLoop = ['jp','kk','kamal','hari','sharan'];
  
myLoop.forEach(function(name,index){
    console.log(`${name} and ${index}`);
    
})

//particeing

const testData = [];
testData.unshift('google')
testData.unshift('yahoo')
testData.unshift('duckduck')
testData.unshift('tor')
console.log(testData);
///using for loop
// for (let i=0;i<testData.length;i++){
//     x=testData[i];
//     console.log(`This is my ${i+1} search engin : ${x}`)
// }

testData.forEach (function(search,index){
    x=search
    console.log(`This is my ${index+1} search engin : ${x}`);
})