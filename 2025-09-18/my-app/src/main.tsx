import { createRoot } from "react-dom/client"
import "./index.css"
import { createHashRouter, RouterProvider } from "react-router-dom"
import MuiButton from "./components/MuiButton.tsx"
import Something from "./components/Something.tsx"
import About from "./components/About.tsx"
import Home from "./components/Home.tsx"
import App from "./App.tsx"
import { createTheme, ThemeProvider } from "@mui/material"
import { deepPurple } from "@mui/material/colors"

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "button",
        element: <MuiButton />,
      },
      {
        path: "something",
        element: <Something />,
      },
      {
        path: "about",
        element: <About />,
      },
      { path: "", element: <Home /> },
    ],
  },
])

const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500],
    },
  },
})

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>,
)
