

function sayHello(name = 'Mario', age = 0) {

  const greeting = `Hello world function! ${name} age ${age}`

  return greeting
}


const result = sayHello('Mario', 22)

console.log(result)