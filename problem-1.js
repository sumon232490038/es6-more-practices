// const numbers = [1,3,5,7,9]

// let evenitA = []

// for(let i=0;i<=numbers.length;i++){
//     if(numbers[i]){
//     evenitA.push(numbers[i]+1) 
   

//     }
// }

// console.log(evenitA)

// const evenitFA = numbers.map(num => num + 1)
// console.log(evenitFA)


const numbers = [33,50,79,78,90,101,30]
// const divisible5 = numbers.filter(num => num% 5 == 0)
// console.log(divisible5)
const finds = numbers.find(num => num%5 == 0 )

console.log(finds)

// it will be the return is first element which is divide by 5 but in this filer method it will be return all element which is devide by 5