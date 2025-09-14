import React, { useState } from 'react'



function Dice() {
    const [dieNum, setDie] = useState(1)
    function rollDice(){
        setDie(Math.floor(Math.random()*7))
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