// Basic JavaScript Assaignmet 2 
// ---------------------------------------------
// ------------------------------------


// 1 - Write a function to convert Celsius to Fahrenheit. The function should take a single argument, which is the temperature in Celsius.
// ------------------------------
// ==============================

// এক্সপ্লেইন ঃ 
// Celsius to Fahrenheit এই সূত্র আগে পরছি বলে মনে হয়নি তাই প্রথমে বোজতে একটু সমস্যা হচ্ছিল, কিন্তু এখন বোজতে পারছি এটা কিভাবে কাজ করতেছে ।
// Formula for Fahrenheit to Celsius is: °C = (°F - 32) × 5/9; 

// এক্সাম্পল ঃ 
// function celsiusToFahrenheit(celsius) {
//     return (celsius * 9/5) + 32;
//   }
  
//   console.log(celsiusToFahrenheit(0)); // 32
//   console.log(celsiusToFahrenheit(25)); // 77



// 2 - Write a function to check if a number is even. The function should take a single argument, which is the number to check.
// ------------------------------
// ==============================

// এক্সপ্লেইন ঃ
// একটি function জোড় কিনা তা দেখতে আমরা isEven use করি । এটি modulas oparetor use করে পরিক্ষা করে দেখে যে ২ দ্বারা ভাগ করলে অবশিষ্ট ০ হয় কিনা ।
// true হলে even আর না হলে odd ।


// এক্সাম্পল ঃ 
// function isEven(num){
//     return num % 2 === 0;
// }

// console.log(isEven(4)); // true
// console.log(isEven(7)); // false



// 3 - Write a function to sum two numbers. The function should take two arguments, which are the numbers to sum.
// ------------------------------
// ==============================

// এক্সপ্লেইন ঃ
// Chapter 7 এর প্রথম ভিডিওতে আমরা return keyword এর usecase দেখতে পেয়েছিলাম ।


// এক্সাম্পল ঃ 
// function sum(a, b) {
//     return a + b;
// }
  
// console.log(sum(3, 4)); // 7
// console.log(sum(10, 20)); // 30



// 4 - Write a function to find the smallest number in an array. The function should take a single argument, which is the array to search.
// ------------------------------
// ==============================


// এক্সাম্পল ঃ 
// function findSmallestNum(array){
//     let smallEst = array[0];

//     for(i = 1; i < array.length; i++){
//         if(array[i] < smallEst){
//             smallEst = array[i]
//         }
//     }
//     return smallEst;
// }

// console.log(findSmallestNum([3, 5, 1, 9])); // 1
// console.log(findSmallestNum([-1, -5, 0, 10])); // -5


// 5 - Write a function to count the number of vowels in a string. The function should take a single argument, which is the string to search.
// ------------------------------
// ==============================

// এক্সপ্লেইন ঃ


// এক্সাম্পল ঃ 
// function countVowels(str) {
//     let vowels = 'aeiouAEIOU';
    
//     let count = 0;
//     for(let i = 0; i < str.length; i++){
//         if(vowels.includes(str[i])){
//             count++
//         }
//     }
//     return count;
//   }
  
//   console.log(countVowels("hello world")); // 3
//   console.log(countVowels("Javascript")); // 3



// 6 - Write a function to get the first element of an array. The function should take a single argument, which is the array.
// ------------------------------
// ==============================


// এক্সাম্পল ঃ
// function getFirstElement(arr) {
//     if(arr.length > 0){
//         return arr[0];
//     }else {
//         return undefined;
//     }
//   }
  
//   console.log(getFirstElement([1, 2, 3])); // 1
//   console.log(getFirstElement(["a", "b", "c"])); // "a"



// 7 - Write a function to check if an array is empty. The function should take a single argument, which is the array.
// ------------------------------
// ==============================


// function isArrayEmpty(arr) {
//     return arr.length === 0; // check the length is exactly 0
// }
  
// console.log(isArrayEmpty([])); // true
// console.log(isArrayEmpty([1, 2, 3])); // false



// 8 - Write a function to return the factorial of a number. The function should take a single argument, which is the number.
// ------------------------------
// ==============================


// এক্সাম্পল ঃ 
// function factorialize(num) {
//     if (num === 0 || num === 1) return 1;

//     let result = 1;
//     for(i = 1; i <= num; i++){
//         result *= i;
//     }
//     return result;
//   }
  
//   console.log(factorialize(5)); // 120
//   console.log(factorialize(7)); // 5040
  


// 9 - Write a function to reverse a string. The function should take a single argument, which is the string to reverse.
// ------------------------------
// ==============================


// এক্সাম্পল ঃ 
// function reverseString(str) {
//     let splitString = str.split("");

//     let reverseArray = splitString.reverse();

//     let reverseString = reverseArray.join("");

//     return reverseString;
//   }
  
//   console.log(reverseString("hello")); // "olleh"
//   console.log(reverseString("world")); // "dlrow"



// 10 - Write a function to convert a string to lowercase. The function should take a single argument, which is the string to convert.
// ------------------------------
// ==============================


// function toLowerCase(str) {
//   return str.toLowerCase();
// }

// console.log(toLowerCase("HELLO WORLD")); // "hello world"
// console.log(toLowerCase("JavaScript")); // "javascript"



// 11 - Write a function to find the length of a string. The function should take a single argument, which is the string.
// ------------------------------
// ==============================


// function stringLength(str) {
//   return str.length;
// }

// console.log(stringLength("hello")); // 5
// console.log(stringLength("world")); // 5



// 12 - Write a function to merge two arrays. The function should take two arguments, which are the arrays to merge.
// ------------------------------
// ==============================


// function mergeArrays(arr1, arr2) {
//   return arr2.concat(arr2);
// }

// console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
// console.log(mergeArrays(["a", "b"], ["c", "d"])); // ["a", "b", "c", "d"]


// 13 -  Write a function to get the last element of an array. The function should take a single argument, which is the array.
// ------------------------------
// ==============================


// function getLastElement(arr) {
//   return arr[arr.length - 1];
// }

// console.log(getLastElement([1, 2, 3])); // 3
// console.log(getLastElement(["a", "b", "c"])); // "c"


// 14 - Write a function to get the first character of a string. The function should take a single argument, which is the string.
// ------------------------------
// ==============================


// function getFirstCharacter(str) {
//   return str.charAt(0)
// }

// console.log(getFirstCharacter("hello")); // "h"
// console.log(getFirstCharacter("world")); // "w"



// 15 - Write a function to find the sum of all elements in an array. The function should take a single argument, which is the array.
// function sumArray(arr) {
//   return arr.reduce((sum, current) => sum + current, 0)
// }

// console.log(sumArray([1, 2, 3, 4])); // 10
// console.log(sumArray([-1, -2, -3, -4])); // -10
// console.log(sumArray([1.5, 2.5, 3.5])); // 7.5