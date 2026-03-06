//  smallest element

let nums = [23,45,999,45]

function smallestElement(arr){
let smallest = arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]<smallest){
        smallest= arr[i]
    }
}
return smallest

}
let numsSmallest = smallestElement(nums)

console.log(numsSmallest)

const colors = ['green','blue','red']
let [color1,color2,color3]= colors
 let [,a,] = colors

console.log(color1,'c1')
console.log(a,'a')

const student = {
    name : 'Arun',
    age:25
}

let { name : userName , age } = student
console.log(userName)

let nums1 = [23,4,7,8]
const newnums = [...nums1] 
console.log(newnums);

// merge using spread operator
let c = [2,3,4,5,7]
let d = [8,9,10]

let e  = [...c,...d]
console.log(e)

let updatedStudent ={
    ...student,
    marks: 450
}

let [first,...otherElement] =c


console.log(first,'c -first')
console.log(otherElement,'c -otherElement')

function sum(...numbers){
let total =0
console.log(numbers)
for(let i=0; i<numbers.length;i++){

    total += numbers[i]
}
return total
}

console.log(sum(1,2,7),'sum')

// console.log(updatedStudent)

// Reverse an array 

function reverseArray(arr){
    let rev =[];
    j=0
    for(i=arr.length-1;i>=0;i--){
        // rev.push(arr[i])  
            rev[j]=arr[i]
            j++;
        
    }
return rev

}

console.log(reverseArray([1,2,3]))