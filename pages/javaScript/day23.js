// const element = document.getElementById('msg')
// const classElement = document.getElementsByClassName('intro')
// const tagElement = document.getElementsByTagName('p')
// console.log("element:",element)
// console.log("classElement:",classElement)
// console.log("tagElement:",tagElement)

// let idQuery = document.querySelector('#msg')
// let classQuery = document.querySelector(".intro")
// let classQueryAll = document.querySelectorAll('.intro')
// console.log("idQuery:",idQuery)
// console.log("classQuery:",classQuery)
// console.log("classQueryAll:",classQueryAll)

// let fruit = 'Apple'
// // element.innerHTML = fruit
// element.textContent   = fruit
// document.getElementById('box').innerHTML = '<h1>this is a box </h1>'

// element.style.color = 'red'
// element.style.background = 'green'


// day-24

let btn = document.getElementById('btn')

btn.addEventListener('click',(event)=>{
    // alert('button clicked')
    console.log("event:",event)
    event.target.style.backgroundColor = 'red'
    event.target.style.color = 'yellow'
    event.target.innerHTML = 'clicked'

})

btn.addEventListener('mouseover', (e)=>{
// e.target.innerHTML ='hello'
e.target.style.color = 'blue' 
})


btn.addEventListener('mouseout', (e)=>{
// e.target.innerHTML ='hello'
e.target.style.color = 'red' 
})


let search = document.querySelector("#search")

let value 
search.addEventListener('input',(e)=>{
    value = e.target.value
    // console.log('event:', e.target.value)
    console.log('value', value)
})

