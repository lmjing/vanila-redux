import { createStore } from "redux"

const form = document.querySelector("form")
const input = document.querySelector("input")
const ul = document.querySelector("ul")

const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"

const reducer = (todos = [], action) => {
  const { type } = action

  if (type === ADD_TODO) return todos
  if (type === DELETE_TODO) return todos
  return todos
}

const store = createStore(reducer)

const onSubmit = e => {
  e.preventDefault()
  const todo = input.value
  console.log(todo)
  store.dispatch({type: ADD_TODO, text: todo})
}

form.addEventListener("submit", onSubmit)