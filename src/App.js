import { useSelector, useDispatch } from 'react-redux'

function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const increment = () => {
    dispatch({ type: 'INCREMENT' })
  }
  const decrement = () => {
    dispatch({ type: 'DECREMENT' })
  }
  const add10 = () => {
    dispatch({ type: 'ADD10', payload: 10 })
  }

  return (
    <div>
      <h1>Counter app</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={add10}>10+</button>
    </div>
  );
}

export default App;
