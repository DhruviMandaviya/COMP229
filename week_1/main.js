import { halfof, multiply } from "./lib.js";
import doSomething from "./doSomething.js";
import { flag, touch } from './validator.js';

console.log("Half of 50 is: "+halfof(50));
console.log("Multiplication of 30 and 20 is: "+multiply(30,20));
doSomething();
console.log(flag);
touch();
console.log(flag);