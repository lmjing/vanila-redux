import { createStore } from "redux"

const minusBtn = document.getElementById('minus')
const plusBtn = document.getElementById('plus')
const number = document.querySelector('span')

const reducer = (count = 0, action) => {
  const { type } = action

  if (type === 'PLUS') return count + 1
  if (type === 'MINUS') return count - 1
  return count
}
const countStore = createStore(reducer)

countStore.dispatch({type: 'PLUS'})
countStore.dispatch({type: 'PLUS'})
countStore.dispatch({type: 'PLUS'})
countStore.dispatch({type: 'PLUS'})
countStore.dispatch({type: 'MINUS'})

console.log(countStore.getState())