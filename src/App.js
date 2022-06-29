import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, addBy } from './features/counter/counterSlice'

function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Counter app</h1>
      <h2>{counter}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(addBy(10))}>10+</button>
    </div>
  );
}

export default App;
