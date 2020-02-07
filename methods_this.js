//inside the class its called as methods
//outside the class its called as function

let bag={
    panNo:2190,
    name:'kumar',
    time:12.0,
    quality:function(){
        var c=10+20
        console.log(c);
    }
}
console.log(bag.quality());

/// .this KEYWORD

let phone ={
    data:20,
    apps:43,
    version:'Its a ColorOs',
    title:function(){
        console.log(this.apps)
    }
}

phone.title();

function a(  ){
 console.log("HIII");
}

a();



