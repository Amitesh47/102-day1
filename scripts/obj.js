function f1(){};
function f2(){};
function f3(){};



f3.prototype = Object.create(f1.prototype);




var ins = new f3();
var ins1 = new f1();

console.log(f1.prototype.isPrototypeOf(ins1));
console.log(f3.prototype.isPrototypeOf(f1)); 