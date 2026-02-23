// 🟢 Level: Very Easy
// Write a function that prints numbers from 1 to n using for loop and if to print only even numbers.

function printnumber(n){
    for(let i=1 ; i<=n ; i++){
         if(i %2 ===0)
            {
            console.log("this is an even number",i)
        }
    }
}
    // printnumber(20);
    // printnumber(30)
    




// Write a function that prints numbers from 1 to n using while loop and if to print only odd numbers.
function oddNumbers(n){
    for(let i = 1; i<=n; i++){
        if(i%2!==0){
            console.log(i);
            
        }
    }
}
oddNumbers(20)

// Write a function that checks if a number is positive or negative using if else.
function findPositiveNum(n){
        if(n>0){
        console.log("this number is positive");
            

        }
    }

// findPositiveNum(20)

// Write a function that prints numbers from n to 1 using for loop and if to skip number 5.
function printNumbers(n){
    for(i=n;i>=1;i--){
    if(i === 5){
        continue;
    }
    console.log(i)
}
}
// printNumbers(10)

// Write a function that prints all multiples of 3 from 1 to n using for loop and if.
function printMultiplesOfThree(n){
    for(let i=1;i<=n;i++){
        if(i%3==0){
             console.log(i)
        }

    }
        
}
// printMultiplesOfThree(10)
// 🟡 Level: Easy
// Write a function that counts how many even numbers are in an array using for loop and if.

// Write a function that counts how many odd numbers are in an array using while loop and if.

// Write a function that prints only positive numbers from an array using for loop and if.

// Write a function that prints numbers from 1 to 50 using for loop and if to print only numbers divisible by 5.

// Write a function that checks if a number is divisible by 10 using if else.

// 🟠 Level: Medium (still beginner)
// Write a function that finds the sum of even numbers from 1 to n using for loop and if.

// Write a function that finds the sum of odd numbers from 1 to n using while loop and if.

// Write a function that prints numbers from 1 to n using for loop and if to skip odd numbers.

// Write a function that prints all numbers greater than 10 from an array using for loop and if.

// Write a function that counts how many numbers are greater than 20 in an array using for loop and if.

// 🟣 Level: Array + Condition + Loop
// Write a function that prints only vowels from a string using for loop and if.

// Write a function that counts how many vowels are in a string using for loop and if.

// Write a function that prints only capital letters from a string using for loop and if.

// Write a function that prints only numbers from an array using for loop and if.

// Write a function that checks if all numbers in an array are positive using for loop and if else.

// 🔵 Level: Slight Thinking
// Write a function that finds the largest number in an array using for loop and if.

// Write a function that finds the smallest number in an array using for loop and if.

// Write a function that counts how many times 5 appears in an array using for loop and if.

// Write a function that prints numbers from 1 to n using for loop and if to print only numbers divisible by both 2 and 3.

// Write a function that checks whether a number is prime using for loop and if.

// 🟤 Real-Life Style Beginner Tasks
// Write a function that prints "Pass" if marks are ≥ 40 else "Fail" using if else.

// Write a function that prints "Child" if age < 18 else "Adult" using if else.

// Write a function that counts how many students scored above 60 from an array using for loop and if.

// Write a function that prints only long words (length > 5) from an array using for loop and if.

// Write a function that checks if a number is a multiple of 7 using if else.