import React from "react"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"
// import "../style/muiButton.css"

function MuiButton() {
  return (
    <div>
      <div id="muiButton">
        <Button variant="contained">sii olema njupp</Button>
      </div>
      <Link to="/">Home</Link>
    </div>
  )
}

export default MuiButton
