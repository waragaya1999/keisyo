import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./reset.css"
import "./App.css"
import { Detail } from "./components/Detail/container"
import { Keisyo } from "./components/Keisyo/container"

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Keisyo />} />
        <Route path={"/detail/:id"} element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}
