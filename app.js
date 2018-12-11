function Person (firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
};
Person.prototype.greet = function(){
    console.log("Hello "+ this.firstname + " " + this.lastname)
};

Person.prototype.address = "Johar";

let name = new Person('John', 'Doe');
name.greet();
console.log(name.address);