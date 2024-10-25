const instructor = [
    {name: 'Nodi', age: 28, position: 'Senior'},
    {name: 'Akil', age: 26, position: 'Junior'},
    {name: 'Shobuj', age:30, position:'Senior' },
    ]

    const filterit = instructor.filter(ins => ins.position ==='Senior')

    // console.log(filterit)


const people = [ 
    {name:'Meena',age: 20},
    {name:'Rina',age: 15},
    {name:'Suchorita',age: 22},
]

const sumit1 = people.reduce((num1,num) => num1 + num.age,0)
// console.log(sumit1)

 let sum = 0 
for(let i = 0 ; i <= people.length ; i++){
    if(people[i]){
        sum = sum + people[i].age
    }
}
console.log(sum)