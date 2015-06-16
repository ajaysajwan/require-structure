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
	this.name = 'Another Singh';
	this.age = '30';
};

callme.prototype.city = 'pune';
var objCallme = new callme('Wow Singh', 34);

console.log(objCallme.name, " ::: "+objCallme.age);
