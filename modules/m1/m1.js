'use strict'
console.log('Main JS File');
//Create a function
function hello(fName,lName){
	console.log('Hello World !!!');
	console.log('Constructor ::: ', fName, lName);
};

var obj = new hello();
obj.fName = 'This is First Name';
obj.lName = 'This is Last Name';

console.log(obj.fName, " - ", obj.lName);

var obj2 = new hello('Welcome','Singh');

function callme(name, age){
	this.name = name;
	this.age = age;
	console.log("callme()", this.name, " - ", this.age);
};

callme.prototype.city = 'pune';
callme.prototype.pin = 123123;

var objCallme = new callme('Wow Singh', 34);
console.log(objCallme.name, objCallme.age, objCallme.city, objCallme.pin);

var anotherObj = new callme('You Singh',43);

//var bodyObj = console.log(document.getElementsByClassName("main"));
//bodyObj.setStyle('background-color','red');