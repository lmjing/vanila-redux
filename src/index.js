import { createStore } from "redux"

const minusBtn = document.getElementById('minus')
const plusBtn = document.getElementById('plus')
const number = document.querySelector('span')

const reducer = (count = 0) => {
  return count
}
const countStore = createStore(reducer)

console.log(countStore.getState())