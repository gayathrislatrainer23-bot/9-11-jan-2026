function fetchData()
{
return new Promise(resolve=>
{
setTimeout(()=>
{
    resolve("Data loaded");
},2000);
});
}

fetchData().then(result=>
{
    console.log(result);
}
);
async function getData(){
    const result=await fetchData();
    console.log(result);
}
getData();