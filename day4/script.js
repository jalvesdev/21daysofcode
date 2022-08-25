const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.keys')
const display = document.getElementById('display')

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.value
    const previousKeyType = calculator.dataset.previousKeyType

    if (!action) {
      if (displayedNum === '0' || previousKeyType ==='operator') {
        display.value = keyContent
      } else {
        display.value = displayedNum + keyContent
      }
    }

    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'invert' ||
      action === 'divide'
    ) {
      calculator.dataset.firstValue = displayedNum
      calculator.dataset.operation = action
      calculator.dataset.previousKeyType = 'operator'

    } else {
      calculator.dataset.previousKeyType = 'number'
    }

    if (action === 'decimal') {
      display.value = displayedNum + "."
    } 

    if (action === 'backspace') {
      console.log('teste')
      display.value = displayedNum.substring(0,  displayedNum.length - 1)
    } 

    if (action === 'clear') {
      display.value = '0'
    }

    if (action === 'calculate' || action === 'invert') {
      const firstValue = calculator.dataset.firstValue
      const secondValue = displayedNum
      const operation = calculator.dataset.operation
      display.textContent = calculate(firstValue, operation, secondValue)
      display.value = display.textContent
      calculator.dataset.previousKeyType = 'operator'
    }

  }
 })

 const calculate = (n1, operation, n2) => {
  let result = ''
  if (operation === 'add'){
      result = parseFloat(n1) + parseFloat(n2)
  }
  if (operation === 'subtract'){
    result = parseFloat(n1) - parseFloat(n2)
  }
  if (operation === 'multiply'){
    result = parseFloat(n1) * parseFloat(n2)
  }
  if (operation === 'divide'){
    result = parseFloat(n1) / parseFloat(n2)
  }
  if (operation === 'invert'){
    result = parseFloat(n1) * -1
  }

  return result

 }

//  https://www.freecodecamp.org/portuguese/news/como-construir-uma-calculadora-html-do-zero-usando-javascript/