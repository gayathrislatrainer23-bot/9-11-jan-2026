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
