import {
  ac,
  ce,
  integer,
  operand,
  times,
  division,
  plus,
  minus,
  maxChars,
} from "./constants"

export function handleNumpad(calculator, button) {
  const { clearAll, clearLast, setValue, getValue } = calculator

  // clear buttons
  if (button.value === ac) return clearAll()
  if (button.value === ce) return clearLast()

  // integer and operands
  if (button.type === integer || button.type === operand) {
    if (calculator.acc === 0) return setValue(button.value)
    if (button.type === operand) return setValue(button.value)
    if (String(getValue.length >= maxChars)) return
    if (button.type === integer) return setValue(button.value)
  }
}

const operations = {
  [plus]: function(a, b) {
    return a + b
  },
  [minus]: function(a, b) {
    return a - b
  },
  [division]: function(a, b) {
    if (a !== 0) return a / b
  },
  [times]: function(a, b) {
    return a * b
  },
}

const canClearAll = state => ({
  clearAll: () => {
    state.acc = 0
    state.operand = null

    return "0"
  },
})

const canClearLast = state => ({
  clearLast: () => {
    const currentNumber = String(state.acc).trim()
    const numberWithoutLastDigit = currentNumber.slice(
      0,
      currentNumber.length - 1
    )

    if (numberWithoutLastDigit === "") {
      console.log(currentNumber, numberWithoutLastDigit)
      state.acc = 0
      return "0"
    }

    state.acc = numberWithoutLastDigit
    return numberWithoutLastDigit
  },
})

const canSetOperand = state => ({
  setOperand: oper => {
    state.operand = oper
    return oper
  },
})

// getOperand: () => {
//   return this.operand
// }

// setValue: val => {
//   if (this.operand) {
//     const result = operations[this.operand](this.acc, val)
//     this.acc = result
//     return result
//   }

//   let value = String(this.acc) + String(val)
//   this.acc = Number(value)
//   return value
// }

// getValue: () => {
//   return this.acc
// }

export const calculator = function(defaultValue) {
  const data = {
    acc: Number(defaultValue) || 0,
    operand: null,
  }

  return Object.assign(data, canClearAll(data), canClearLast(data))

  // return Object.assign(data, calculatorMethods.bind(this))
}
