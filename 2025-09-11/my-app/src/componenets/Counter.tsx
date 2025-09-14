import { useState } from "react"
import "../App.css"

function Counter() {
  const [count, setCount] = useState(0)

  function increaseCounter(number: number) {
    setCount(count => count + number)
  }
  return (
    <>
      <h1>Vite + Reactaaaa</h1>
      <div className="card">
        {/* <button onClick={() => setCount(count => count + 1)}> */}
        <button onClick={() => increaseCounter(1)}>+1</button>
        <button onClick={() => increaseCounter(25)}>+25</button>
        <button onClick={() => increaseCounter(50)}>+50</button>
        <button onClick={() => increaseCounter(100)}>+100</button>
        <br />
        <button onClick={() => increaseCounter(-1)}>-1</button>
        <button onClick={() => increaseCounter(-25)}>-25</button>
        <button onClick={() => increaseCounter(-50)}>-50</button>
        <button onClick={() => increaseCounter(-100)}>-100</button>
        <br />
        count is {count}
      </div>
    </>
  )
}

export default Counter
