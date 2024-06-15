

const  sayHello = (name = 'Mario', age = 0) => `Hello world function! ${name} age ${age}`
const add = (a = 0, b = 0) => a + b


const result = sayHello('Mario', 22)

console.log(result)
console.log(add(10,5))