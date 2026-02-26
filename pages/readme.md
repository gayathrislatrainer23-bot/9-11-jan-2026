2/4/2026
<!-- way to use css -->
1. inline css
<p style= 'color: red; background-color:  blue> Hello css</p>

2. Internal css

-->html
-->head
<style>
p{
   color: red; 
   background-color:blue
}
</style>
3. external css
.css is the file extention


5/2/2026
selector
1. element selector
2.class selector
3.id selector
4. group selector
5. universal selector
6. Atribute selector

<!-- JS -->
Data types
Number
String
boolean
undefined 
null

var item1-price =1
var item1-price;
var item1-price=null;

1vh = 1% of browser hieght
100vh =100%

1vw = 1% of browser width

16/2/2026
<!-- Arithamatic operators -->
let num1 = 5;
let num2 = 10;
 let sum = num1 + num2
 <!-- 15 -->

 <!-- logical operators -->

 1. &&
 2. !
 3. ||

 Logical operators

   && --> admin--> username and password 
            username === "admin" && password === "1234"

    || -->    username === "admin" || password === "1234"      

    !  --> !true
&&
    T+T --> T 
    T + F --> F 
    F + T --> F 
     F+F --> F  
||
    T+T --> T 
    T + F --> T 
    F + T --> T 
     F+F --> F  

     !

    T+T --> F
    T + F --> T 
    F + T --> T
     F+F --> T  

3. comparison operators

   ==  --> equal(loose )
   === -->  equal(strict )
   !=  --->not equal
   !== ---> stric not equal
   > --> greater than
   < --> less than 
   >= -- >greater than or equal to
   <= -- >less than than or equal to

num1
num2
num1 == num2
num1 === num2 
js let a = 5
let b = "5"
a == b 
a === b
!= 
5 != 3 = T
5 == 3 = F

5 !==  "3"
5 > 3
5< 3 f

 x <= 5
 y >= 0

 x >= 0 && x <= 10

      4. Assignment operator

     = --> a=5
     += -->  a=a+2    a+=2
     -= ---> a=a-2    a-=2
     *= ---> a=a*2    a*=2
     /= ---> a=a/2    a/=2
     

17/2/2026
day-15
1. if(condition){
    <!--   -->
}

2.   if(condition){
    <!--  condition: true -->
}else{
 <!--  condition: false -->
}
<!-- else if ladder -->

3. if(condition1){
    <!--  condition1: true -->   
}else if(condition2){
    <!--  condition2: true -->   
}else if(condition3){
        <!--  condition3: true -->   
}else{
    <!--  condition all : false --> 
}

4. nested condition

 if(condition1){
 if(condition2){
    <!--   condition1 && condition2: true -->     
}
}

<!-- ternary operator -->

condition ? true : false

task :  print the number is even or odd.


age>=18 ? "allow to enter" : "not allow"

 console.log(5 + "3");
 console.log("5" - 2);
 console.log(10 == "10");
 console.log(10 === "10");
 console.log(true + 1);
 console.log(false + 5);
 console.log("4" * 2);
 console.log(5 > 3 && 2 > 1);
 console.log(5 > 3 && 2 < 1);
 console.log(3 < 2);

 day-16
 18/2/2026

 1. switch
 let num = 4

 switch(num){
    case value1:
    <!-- code console.log() -->
    break;
    case value2:
    <!--  -->
    break;
    case value3 :
    <!-- 4 -->
    <!--console.log(4)  -->
    break;
    case value4:
    <!-- console.log(5) -->

 }

 
 switch(num){
    case 3:
    <!-- code console.log() -->
    break;
    case 2:
    <!--  -->
    break;
    case 4 :
    <!-- 4 -->
    <!--console.log(4)  -->
    break;
    case 5:
    <!-- console.log(5) -->
    default:
    <!-- console.log('no value') -->

 }
 2. loop


a++ - post-increment
++a - pre-increment

 a= 5
b= a
b=5
b=a++
a =6
b= 5

c= 8
d= ++c
c= 9
d=9


1. for loop

for(initialization;condition;increment){
    console.log(...)
}
1,2,3,4

ffor(let i = 0; i<4;i++){
    console.log(i)
}
<!-- first itration -->
i=0
print 0
check condition 0<4 ===> true
i++ --> i=0+1=1
<!-- 2nd itration -->

print 1
i=1
check condition 1<4 ===>true
i++ --> i=1+1=2
<!-- 3rd itration -->

print 2
i=2
check condition 2<4 ===>true
i++ --> i=2+1=3
<!-- 4rd itration -->

print 3
i=3
check condition 3<4 ===>true
i++ --> i=3+1=4
<!-- 5rd itration -->

print 4
i=4
check condition 4<4 ===>false

out

class- task: print even number 1 to 15
for(let i=1; i<=15;i++){
    if(i%2===0){
        console.log(i)
    }
}

<!-- while loop -->

while(condition){
    <!-- code -->
}

let i = 1
while(i<2){
console.log(i)
    i++;
}
do{
    <!-- code -->
}while(condition)

 let bigNum = 123456
 //find the digit of this number

 block scoped- {} let, const
 function scoped /Global
 global scope - var


20/2/2026
 function--> block of code used for specific task;

function nameOfFunction(name){e
    console.log('hello' , name)
}
nameOfFunction(Raju)


arrow fun

const name  =()=>{
<!-- code -->
}

Array

let arr = [1,2,3,4];
let str =['hello', 'welcome', 'Balu'];

let mix = [1,3.4,'hi',true]
let students = ["Manu","Balu","Raju"]



index start from 0,1,2
arr.length =3
last element index = 2

let student1 =arr[0]

<!-- manu -->

<!-- push -->

arr.push(5)
[1,2,3,4,5]
<!-- pop-->
arr.pop()
[1,2,3,4]

<!-- unshift -->

arr.unshift(0)

[0,1,2,3,4]

<!-- shift  -->
[1,2,3,4]


24/2/2026
<!-- map -->
let nums = [1,2,3,4]

let double =nums.map((num)=>num*2)
[2,4,6,8]
nums.map(
    function (num) {
        num*2
    }
)

[2,]=[1,2,3,4].map(
    (1)=>{
1*2
    }
)

[2,4]=[1,2,3,4].map(
    (2)=>{
2*2
    }
)
[2,4,6]=[1,2,3,4].map(
    (3)=>{
3*2
    }
)
[2,4,6,8]=[1,2,3,4].map(
    (4)=>{
4*2
    }
)
<!--  -->

[1,2]=nums.filter((a)=> a<3)


 <!-- find -->

nums.find(num => num<3)

<!-- reduce -->
arr.reducer((acc,element)=>{

})

let sum=arr.reduce((total,n)=>total+n)

<!-- object -->
let obj
=
{
key1: value1,
key2: value2,

}