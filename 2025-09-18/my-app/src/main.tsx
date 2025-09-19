import { createRoot } from "react-dom/client"
import "./index.css"
import { createHashRouter, RouterProvider } from "react-router-dom"
import MuiButton from "./components/MuiButton.tsx"
import Something from "./components/Something.tsx"
import About from "./components/About.tsx"
import Home from "./components/Home.tsx"
import Navbar from "./components/Navbar.tsx"
import App from "./App.tsx"

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "muiButton",
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
      {
        path: "navbar",
        element: <Navbar />,
      },
      {path: "",
        element: <Home />
      }
    ],
  },
  
])

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
)
