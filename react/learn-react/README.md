12/3/2026

1.React- js library
2.vite && cra
terminal ---  ctrl+j

3. work flow
node-module --> store dependencies

4. public- static files
5. index.html - entry point, single page
6. src - dynamic folder
7. package.json - meta data

8. comp is building block of react
   2 types comp
   1. class comp and  functional comp
1. functional comp
    --> js fun it returns jsx


    function BoxModel(){

        return (
jsx
        )
    }


jsx -- js xml , html like syntax

13/3/2026

props : 

16/3/3036

ternary opertor  login and $$ operator
1. weather app ==> temp : 30 hot else cold
 1. need input filed 
 2. temp enter (0-55)
 3. temp bellow + image  --> && 



1. Bom
   dom
2. React
3. Library
4. Npm- node 
5. node 
6. node installation
7. create react app 
8. Babel -- compailer/ transpailer -convert jsx to pure js
9. statc and dynamic website

1. file structucture

 work flow and folder structure of react
project/
node-module -- store dependencies
index.html -- entry html file -- Single page
src-- dynamic folder -- changes occurs
main.jsx -- app entry point
App.jsx -- main react component -- parsel casing
package.json -- keep meta data of dependencies

2. comp  --  1. class
              2. fun comp
3. fun comp : js fun returns jsx element
4. jsx  - js xml
          html like syntax
5.  jsx rules
        1.retrun only one parent element
        2. embaded js using {}
        3.inline styles -- {{}}
        4. className intea of class
6. create a comp folder and file      import it in app
7. props : data passing from parent comp to child comp



Hooks
special fun by react --> state management, life cycle methods, sideEffect
state : state is special memory inside a comp that hold data which can change over time 

useState() 
import {useState }from react
           hook
          [ currentState , setState ] = useState(0)
            

currentState --> 0

            click (setState(10))
increment limit 100
reset - 0

usEffect -- > hook in react -- handling side effect 

 login --> post ---> api
navigate to dashboard
--> render --> side effect  --> products api -->

useEffect ??
syntax:

useEffect(()=>{
  <!-- side effect code -->
})

case: 1 --> run after all renders
useEffect(()=>{
  <!-- side effect code -->

})

case: 2 --> run after initial render

useEffect(()=>{
  <!-- side effect code -->
},[])

dependancy - array - second argument in useEffect

case: 3 --> run after state change  render

const [name, setNAme] =useState("")

useEffect(()=>{
  <!-- side effect code -->
},[name,age])

 console : 1.you are logged in  all  // dashboard
 alert : 2. the page is loaded   []
 alert : 3.you are loggedin / you are not loggedin  [state] logout btn 

2/4/2026

<!-- Bootstrap -->

 1. Introduction to Bootstrap

 What is Bootstrap?
Bootstrap is a CSS framework that helps us design websites quickly.

 Why use Bootstrap?

* No need to write full CSS
* Easy responsive design 
* Pre-built components (buttons, cards, navbar)


 How to use Bootstrap?

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">


 2. Bootstrap Containers

  What is Container?

Container is used to wrap content with proper spacing**


Types of Containers

1. `.container`

* Fixed width


<div class="container bg-light">
  <h1>Hello Students</h1>
</div>


 2. `.container-fluid`

* Full width (100%)

<div class="container-fluid bg-warning">
  <h1>Full Width</h1>
</div>



---

Grid System (Very Important)

 Bootstrap grid = 12 columns

 Screen is divided into 12 parts

---

 Basic Structure:

<div class="container">
  <div class="row">
    <div class="col">1</div>
    <div class="col">2</div>
    <div class="col">3</div>
  </div>
</div>


 Example 1: Equal columns


<div class="row">
  <div class="col">A</div>
  <div class="col">B</div>
</div>


 Example 2: Different sizes


<div class="row">
  <div class="col-4">Left</div>
  <div class="col-8">Right</div>
</div>


 Example 3: Responsive


<div class="row">
  <div class="col-sm-6 col-md-4">Box</div>
</div>

Typography

Used for text styling


Headings


<h1>Heading 1</h1>
<h2>Heading 2</h2>

 Bootstrap classes


<p class="text-primary">Blue text</p>
<p class="text-danger">Red text</p>
<p class="fw-bold">Bold text</p>
<p class="text-center">Center text</p>



<p class="text-success fw-bold text-center">
  Welcome Students
</p>


 5. Utilities (Shortcut Classes)

 What are utilities?

Small helper classes for:

* spacing
* colors
* alignment



 Spacing (margin & padding)


<div class="m-3 p-3 bg-light">Box</div>


| Class | Meaning |
| ----- | ------- |
| m-3   | margin  |
| p-3   | padding |



 Colors

<div class="bg-primary text-white">Hello</div>

Display


<div class="d-none">Hidden</div>
<div class="d-block">Visible</div>



Flex in Bootstrap (VERY IMPORTANT)

Bootstrap uses Flexbox internally

Enable flex


<div class="d-flex">
  <div>1</div>
  <div>2</div>
</div>


 Justify content (horizontal)


<div class="d-flex justify-content-between">
  <div>A</div>
  <div>B</div>
</div>


Options:

* `justify-content-start`
* `justify-content-center`
* `justify-content-between`
* `justify-content-around`


Align items (vertical)


<div class="d-flex align-items-center" style="height:100px;">
  <div>Centered</div>
</div>

Flex direction


<div class="d-flex flex-column">
  <div>Top</div>
  <div>Bottom</div>
</div>





