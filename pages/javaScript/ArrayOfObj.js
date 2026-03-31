const users=[
    {id:1,name:"Alice",age:25},
    {id:2,name:"Bobby",age:26},
];

//Acessing Data
  console.log(users[0]);
  console.log(users[1].name);

  //Looping through Array Of objects
  users.forEach(user=>
  {
    console.log(user.name);
  });

  //Filtering
  const adult=users.filter(user=>user.age>=25);
  console.log(adult);
  //sort by age(ascending)
  users.sort((a,b)=>a.age-b.age);
  console.log(users);
  //sort by descending
   users.sort((a,b)=>b.age-a.age);
   console.log(users);

   const myPromise=new Promise((resolve,reject)=>
   {
     let success=true;
     if(success)
{       resolve("Data received");}
else{
    reject("Error occoured");
}
   });

   //displaying .then,.catch
   myPromise
   .then(result=>
   {
    console.log(result);
   })
   .catch(error=>
   {
    console.log(error);
   }
   )


   