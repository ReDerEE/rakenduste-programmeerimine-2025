import { Button } from "@mui/material"
// import { useState } from "react"
import useLocalStorage from "../functions/useLocalStorage"
// import "../style/muiButton.css"

function MuiButton() {
  const [counter, setCounter] = useLocalStorage<number>("counter", 0)
  return (
    <div>
      <div id="muiButton">
        <Button
          variant="contained"
          onClick={() => setCounter(counter + 1)}
        >
          sii olema njupp
        </Button>
        <br />
        {counter}
      </div>
    </div>
  )
}


export default MuiButton
