\// any type, we can change types

let age: any;

age = 35;
age = true;
console.log(true);

age = "hello";
console.log(age);

let mixedArray: any[] = [];

// use with caution

let ninja: {
  name: any;
  age: any;
};
