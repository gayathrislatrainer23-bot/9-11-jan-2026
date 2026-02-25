// 1. Replace the second element in the array [5, 10, 15] with 20.

let arr1 = [5, 10, 15]
arr1[1] = 20
console.log('arr1:', arr1)

// 2.Add the elements 7 and 8 at the end of the array [1, 2, 3, 4, 5].
let arr2 = [1, 2, 3, 4, 5]
arr2.push(7, 8)
console.log('arr2:', arr2)

//3.Insert the element 99 at the beginning of the array [10, 20, 30].
let arr3 = [10, 20, 30]
arr3.unshift(99);
console.log("arr3:", arr3)

//4. Remove the last element from the array [2, 4, 6, 8, 10].
let arr4 = [2, 4, 6, 8, 10];
arr4.pop();
console.log('arr4: ', arr4);

// 5 Given the array [3, 6, 9, 12, 15], insert 0 at index 2.
let arr5 = [3, 6, 9, 12, 15];
arr5[2] = 0;
console.log("arr5:", arr5);

//6Replace the last element in the array [1, 2, 3, 4, 5] with 10.
let arr6 = [1, 2, 3, 4, 5];
arr6[arr6.length - 1] = 10;
console.log("arr6:", arr6);

//  Add the elements 8, 9, and 10 at the beginning of the array [1, 2, 3, 4, 5].

let arr7 = [1, 2, 3, 4, 5]
arr7.unshift(8, 9, 10)
console.log("arr7", arr7)

//Insert the elements 25 and 30 at the end of the array [10, 20].

let arr8 = [10, 20];
arr8.push(25, 30);
console.log("arr8", arr8)

//9.Add the elements 100 and 200 at the beginning of the array [300, 400, 500]

let arr9 = [300, 400, 500];
arr9.unshift(100, 200);
console.log("arr9:", arr9)

// 10.Insert the element 7 at the end of the array [1, 2, 3, 4, 5, 6].

let arr10 = [1, 2, 3, 4, 5, 6];
arr10.push(7);
console.log("arr10", arr10)

// Remove all elements from the array [11, 22, 33, 44, 55]
let arr11 = [11, 22, 33, 44, 55];
// arr11=[];
arr11.length = 0
console.log("arr11", arr11)

// Replace the first element in the array [7, 14, 21] with 10.
let arr12 = [7, 14, 21];
arr12[0] = 10;
console.log("arr12", arr12);
//Add the elements 1 and 2 at the end of the array [3, 4, 5].
let arr13 = [3, 4, 5];
arr13.push(1, 2)
console.log("arr13:", arr13)


let nums = [1, 2, 3, 4]

let double = nums.map((num) => num * 2)
console.log('double:', double)
// [2,4,6,8]
console.log('nums', nums)

//  add 2 to each element

let addTwo = nums.map((x) => x + 2)
console.log('addTwo:', addTwo)



//  [3,4,5,6]

let small = nums.filter((a) => a < 3)
console.log('small:', small)

let first = nums.find(num => num < 3)
// 1
console.log('first:', first)

let nums2 = [10, 20, 30]

let newNums2 = nums2.map((y) => y / 10)
console.log("newNums2", newNums2);

// Create an array [3, 6, 9, 12, 15].find the  double of numbers greater than 6.

let arr14 = [3, 6, 9, 12, 15]
let result14 = arr14.filter((x)=>x>6)
                     .map((y)=>y*2)
console.log('result14', result14);


// reduce

let arr15 = [3,4]

let sum =arr15.reduce((acc,element)=> acc+element)
console.log("sum",sum)
let avg = sum/arr15.length
console.log("avg",avg)


let product = arr15.reduce((product, n)=>product*n)
console.log("product",product)

let arr16 = ["Apple", "Banana","Orange"]

console.log("indexOf",arr16.indexOf("Banana"))

console.log("include",arr16.includes("Apple"))
console.log("include cherry",arr16.includes("Cherry"))

if(!arr16.includes("Cherry")){
    arr16.push("Cherry")
}
console.log("arr16",arr16);
let arr17 = [5,10,15,20,25,30]
// slice
const sliced = arr17.slice(1,4)
const sliced1 = arr17.slice(0,1)

// console.log("sliced",sliced)
// console.log("sliced1",sliced1)

// splice

let arr18 = [45,67,89,12,23,45]
// arr18.splice(0,1)
// arr18.splice(1,2)
arr18.splice(2,0,90)
console.log('arr18',arr18)

let color = ['green', 'red', 'yellow']
color.splice(1,1,'blue')

console.log('color',color)

