import { useState } from "react"
import "../App.css"

function Counter() {
  const [count, setCount] = useState(0)


  function increaseCounter(number: number){
    setCount(count=>count+number)
  }
  return (
    <>
      <h1>Vite + Reactaaaa</h1>
      <div className="card">
        {/* <button onClick={() => setCount(count => count + 1)}> */}
        <button onClick={() => increaseCounter(10)}>
          count is {count}
        </button>
        </div>
    </>
  )
}

export default Counter
