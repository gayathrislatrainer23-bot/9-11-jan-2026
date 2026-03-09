// function parent (name,callback){

// callback(name)
// }
// let greet = (userName)=>{
//     console.log(`wlcome ${userName}`)
// }


// parent('Manu', greet)


// setTimeout(()=>{
//     console.log('haii')
// },5000)


// let id =setInterval(()=>{
//     console.log('run every 1s')
// },1000)

// setTimeout(()=>{
// clearInterval(id)
// },5000)


let count = 10
let countdown = setInterval(()=>{
    console.log(count)
    count--
    if(count<0){
        clearInterval(countdown)
    }
},1000)

async function get (){
    try{
    let res = await  fetch('https://dummyjson.com/test')
    data = await res.json()
    console.log(data)

    }catch(err){
      console.log(err)
    }

}
get()
