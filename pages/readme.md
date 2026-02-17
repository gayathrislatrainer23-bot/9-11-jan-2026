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