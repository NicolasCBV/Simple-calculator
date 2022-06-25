const expression = 0

let screen = document.getElementById('screen')
const seeResults = document.getElementById('finish')
const del = document.getElementById('DEL')
const C = document.getElementById('C')
let equation = []


for (let index = 0; index < 15; index++) {
  const button = document.getElementById(index)

  button.addEventListener('click', () => {
    const buttonValue = button.textContent
    equation.push(buttonValue)
    screen.textContent = String(equation).replace(/,/g, '')
  })
}

seeResults.addEventListener('click', () => {
  const stringResult = String(equation)
  try {
    let result = eval(stringResult.replace(/,/g, ''))
    screen.textContent = result
  } catch (error) {
    screen.textContent = error.name
  }
  equation = []
})

C.addEventListener('click', () => {
  equation = []
  screen.textContent = "Digite um número..."
})
del.addEventListener('click', () => {
  equation.pop();
  screen.textContent = String(equation).replace(/,/g, '')
  if(equation.length <= 0) 
   screen.textContent = "Digite um número..."
})

