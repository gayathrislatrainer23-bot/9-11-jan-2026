// Write a program to check if a number is even or odd.
function CheckOddEven(num){
    if (num%2===0){
        console.log("even")
     } else {
        console.log("odd")
     }
}

CheckOddEven(2)

// Print numbers from 1 to 10.
// let number=10;
// for(let i=0;i<=10;i++;){
//     console.log("number");
// }

function toFindZero(arr){
    let container = [];
    for(let i = 0 ; i<= arr.length ; i++){
        if(arr[i] === 0){
            container.push(arr[i])
        }
    }
    console.log(container.length);
    
}
toFindZero([1,0,0]);

// Reverse the array [10, 20, 30].
// function ReverseArr(arr3){
//     for (let i = 0; i > arr3; i--){
//         console.log(i)
//     }
// }
// reverseArray([10,20,30]);


// Check if a number is positive or negative.

// function positiveOrNegative()
//  if (let 0)
//     console.log("positive");
    
// {else{
//     console.log(negative);
    
// }

// }

// Print numbers from 10 to 1.


// Change city in { name: "Ravi", city: "Chennai" } to "Madurai".

// let student{
//     name:"ravi"
//     City:"chennai"

// }

// Find the smallest number in [5, 2, 9, 1].

// let arr =[5,2,9,1]
// for(let i=0;i<arr.length;i--){
//     if(i<arr[0]){
//         console.log("Smallest Num")
//     }
// }

// Find the sum of [2, 4, 6].
// let numbers = [2,4,6]
// function sumNum(arr){
// for(let i = 0; i < arr.length; i++){
//  console.log(arr);
 
// }
// }
// console.log(sumNum(numbers));


// Print numbers from 10 to 1.

// function printnumbers(num){
//     for(i=10;i>0;i--)
//         console.log(i)
// }
// printnumbers(10)

// Check if 10 is divisible by 5.

// function chechValue(num){
//     if(num%5==0){

//     }
    
// }
// console.log((checkValue(10)))



// find elements in array  is divisible by 5.

// const arr = [10,20,22,24]

// function checkDiv(arr){
//     let div = []
//     for(let i = 0; i < arr.length;i++){ 
//         div += i;
//         if(i % 5 == 0){
//             console.log(i)
//         }
//     }
//     return 
// }

// console.log(checkDiv([10,20,22,24]))

// // Add 5 to each element of [1, 2, 3].
// const arr=[1,2,3];
// for(let i=0;i<arr.length;i++){
//     arr[i]+=5;
// }
// console.log(arr);

// Check if a person is eligible to vote (age ≥ 18).

// function printAge(){
//     let age = 18;
    
//     if(18){
//         console.log("eligible")

//     }
//     else if("its not 18"){
//         console.log("not eligible")
//     }

//     console.log(age);
  
// };
// printAge();


// Count how many even numbers are in [1,2,3,4,5,6].
let a=[1,2,3,4,5,6];
let count=0;
for(i=0;i<a.length;i++){
   if(a[i]%2==0){
     count++;
     
   }
}
console.log("countof even numbers",count);


// Print numbers from 1 to 10.

// Count how many times 3 appears in [1,3,4,3,5,3].

// Reverse the array [10, 20, 30].

// Check if a number is positive or negative.

// Find the sum of [2, 4, 6].

// Print numbers from 10 to 1.

// Check if "a" is a vowel or consonant.

// Count how many numbers are in [4, 6, 8, 10].

// Find the largest number in [3, 7, 1].

// Check if a person is eligible to vote (age ≥ 18).

// Add 5 to each element of [1, 2, 3].

// Reverse the string "hello".

// Count how many even numbers are in [1,2,3,4,5,6].

// Find the value of price from { product: "Book", price: 50 }.

// Change city in { name: "Ravi", city: "Chennai" } to "Madurai".

// Check if 10 is divisible by 5.

// Print each element of [7, 8, 9].

// Find the smallest number in [12, 4, 6].

// Count how many properties are in { a:1, b:2, c:3 }.

// Create an array with only odd numbers from [1,2,3,4,5].

// Check if "name" exists in { name:"Anu", age:20 }.

// Find the sum of numbers from 1 to 5.

// Reverse [5, 15, 25, 35].

// Count how many times "a" appears in "banana".

// Find the greater number between 8 and 3.

// Print all even numbers between 1 and 10.

// Find the smallest number in [9, 3, 7, 2].

// Reverse the string "world".