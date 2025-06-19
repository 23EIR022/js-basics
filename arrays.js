let fruits = ["apple","watermelon","grapes"];
console.log("Original Array:");
console.log(fruits);

fruits.push("kiwi");
console.log("Array after Push operations:");
console.log(fruits);

fruits.pop();
console.log("Array after pop operation:");
console.log(fruits);
 
console.log("Accessing the 1st & last Element:");
console.log(fruits[0]);
let size = fruits.length;
console.log(fruits[size-1]);

console.log("Array after unshift operation:");
fruits.unshift("cherry");
console.log(fruits);

console.log("Array after shift operation:");
fruits.shift();
console.log(fruits);

console.log("Array after splice operation:");
let removerElement = fruits.splice(1,1);
console.log(fruits);

fruits.push("Orange");
fruits.push("Banana");
fruits.push("Mango");
console.log("Accessing an array using loops:")
for(let i=0; i<fruits.length;i++) {
    console.log(fruits[i]);
}
