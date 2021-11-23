const minusBtn = document.getElementById('minus')
const plusBtn = document.getElementById('plus')
const number = document.querySelector('span')

let count = 0

const modifyCount = () => {
  number.innerText = count
}

const handleMinus = () => {
  count = count - 1
  modifyCount()
}

const handleAdd = () => {
  count = count + 1
  modifyCount()
}

minusBtn.addEventListener('click', handleMinus)
plusBtn.addEventListener('click', handleAdd)