"use strict"
class Student{
    name = 'vaibhav';
    getName= ()=> this;
    getNameFn(){
        return this;
    }
};

const v = new Student();
let fn = v.getNameFn;
console.log('fn: ', fn());// the this key is refers to globel or window object or If strict mode refers to undefined.
let arrowFn = v.getName;
console.log('arrowFn: ', arrowFn());// the this key is refers to student 

// console.log('v.getName', v.getName());
// console.log('v.getNameFn', v.getNameFn());
