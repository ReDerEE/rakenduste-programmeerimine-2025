import { useState } from "react"

function Dice() {
  const [dieNum, setDie] = useState(1)
  function rollDice() {
    setDie(Math.ceil(Math.random() * 6))
  }

  return (
    <div>
      <button onClick={rollDice}>Roll the dice</button>
      <br />
      {dieNum}
    </div>
  )
}

export default Dice
