const element = document.getElementById('msg')
const classElement = document.getElementsByClassName('intro')
const tagElement = document.getElementsByTagName('p')
console.log("element:",element)
console.log("classElement:",classElement)
console.log("tagElement:",tagElement)

let idQuery = document.querySelector('#msg')
let classQuery = document.querySelector(".intro")
let classQueryAll = document.querySelectorAll('.intro')
console.log("idQuery:",idQuery)
console.log("classQuery:",classQuery)
console.log("classQueryAll:",classQueryAll)

let fruit = 'Apple'
// element.innerHTML = fruit
element.textContent   = fruit
document.getElementById('box').innerHTML = '<h1>this is a box </h1>'

element.style.color = 'red'
element.style.background = 'green'
