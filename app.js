function greet(){
    console.log("hello");
}
greet();
function logGreet(fn){
    fn();
}
logGreet(greet);

var a = function(){
    console.log("hellow world")
}
logGreet(a);

logGreet(function(){
    console.log("Hello Final");
});

