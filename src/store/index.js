import { createStore } from 'redux'

const reducer = (state = {counter: 0}, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return { counter: state.counter + 1 }
    case 'DECREMENT':
      return { counter: state.counter - 1 }
    case 'ADD10':
      return { counter: state.counter + action.payload }
    default:
      return state
  }
}

const store = createStore(reducer)

export default store