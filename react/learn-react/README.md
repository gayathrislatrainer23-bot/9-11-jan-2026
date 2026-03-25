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

25/3/2026

