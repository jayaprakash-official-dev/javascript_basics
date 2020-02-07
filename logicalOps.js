//all pass are not using logical operators
let maths = 60;
let phy = 47;
let chemistry = 48;
let basicPass =50;

if (basicPass<maths && basicPass<phy && basicPass<chemistry) {
    console.log ('All PASS');
}else if (basicPass>maths) {
    console.log('YOU FAILD IN MATHS');
    
}else if (basicPass>phy) {
    console.log('YOU FAILD IN PHY');
    
} else if (basicPass>chemistry) {
    console.log(('YOU FAILD IN CHEMISTRY'));
    
}else{
    console.log('NOT ALL SUBJECTS PASS');   
}