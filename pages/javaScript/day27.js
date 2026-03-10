function sum(a,b){
    return total =a+b
}

sum(1,2)
sum(3,78)
// isloggin = true;


let p = new Promise((resolve,reject)=>{
    console.log('pending')
    let isloggin  = false;
if(isloggin){
    resolve('you are logged in')
}else{
    reject("failed")
}

})

p.then((data)=>{
    console.log(data)
})
.catch((err)=>{
console.log(err)
})

