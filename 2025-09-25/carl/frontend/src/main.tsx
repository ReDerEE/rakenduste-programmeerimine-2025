import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Todo from "./components/TODO/Todo.tsx"
import TodoAdmin from "./components/TODO/TodoAdmin.tsx"
import PropDrilling from "./components/PropDrilling.jsx"
import Context from "./components/Context.jsx"

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<Todo />}
      />
      <Route
        path="/admin"
        element={<TodoAdmin />}
      />
      <Route
        path="/drilling"
        element={<PropDrilling />}
      />
      <Route path="/context" element={<Context />}
      />
    </Routes>
  </BrowserRouter>,
)
