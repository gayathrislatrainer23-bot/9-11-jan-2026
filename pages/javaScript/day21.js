let arr = [2,3,4,5]
console.log(arr)
console.log(typeof(arr))

const person ={
    name: "Rahul",
    age:23,
    city: "Chennai",

}

// dot Notation
// object.key = value
console.log(person.name)

// bracket notation 

console.log(person["age"]);

// add
person.gender = "male"
console.log(person.gender)
person.age = 30
// update
console.log(person.age)

// delete
delete person.city

console.log(person)

// loop in object

for( let key in person){
    console.log(key+":"+ ' ' + person[key])
}

// methods

const student = {
    name: "Manu",
    // mark: 89,
    subject:['maths','physics'],
    marks :{
     maths : 56,
     pysics :67
    },
    msg : function (){
        console.log('hello your mark is '+ this.marks.maths )

    }
}
student.msg()
console.log(student.marks.maths)

// object utility methods

console.log(Object.keys(student))
console.log(Object.values(student))
console.log(Object.entries(student))
// [["name","Manu"],["subject",['maths','physics']],]




