//if condition

if (true) {
    console.log('this is true');
}

//if esle condition

if (false) {
    console.log('this is ture');
} else {
    console.log('false condition');

}

///if else if ladder

if (false) {
    console.log('false condition');

} else if (false) {
    console.log('false condditin');

} else {
    console.log('works');

}

/////using variables
//age varification in js
let a = 18;
let b = 13;

if (a == b) {
    console.log('just 18');

} else if (a < b) {
    console.log('he is adult')
} else {
    console.log('child');
    
}

//simple grade problem

let gradeMark = 3;

if (gradeMark==10) {
    console.log("Amazing");
    
} else if(gradeMark>5) {
    console.log("good");
    
}else if (3<gradeMark){
    console.log('poor');
    
} else {
    console.log('bad');
    
}



let johnMark = 49;

if (johnMark<50) {
    console.log('FAILED');
}else if (johnMark<60) {
    console.log("E");
}else if (johnMark<70) {
     console.log("D");
}else if (johnMark<80) {
    console.log("C");
}else if (johnMark<90) {
    console.log("B");
}else if (johnMark<100) {
    console.log("A");
}