import { createStore } from "redux"

const minusBtn = document.getElementById('minus')
const plusBtn = document.getElementById('plus')
const number = document.querySelector('span')

const reducer = (count = 0, action) => {
  const { type } = action
  console.log(count, type)

  if (type === 'PLUS') return count + 1
  if (type === 'MINUS') return count - 1
  return count
}

const countStore = createStore(reducer)

const onChange = () => {
  number.innerText = countStore.getState()
}
countStore.subscribe(onChange)

const handleMinus = () => {
  countStore.dispatch({type: 'MINUS'})
}

const handlePlus = () => {
  countStore.dispatch({type: 'PLUS'})
}

minusBtn.addEventListener('click', handleMinus)
plusBtn.addEventListener('click', handlePlus)

console.log(countStore.getState())