import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./reset.css"
import "./App.min.css"
import { Detail } from "./components/Detail/container"
import { Keisyo } from "./components/Keisyo/container"
import { NotFound } from "./components/NotFound/presenter"

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Keisyo />} />
        <Route path={"/detail/:id"} element={<Detail />} />
        <Route path={"/*"} element={<NotFound />} />
        {/* <Route path={"/test"} element={<Test />} /> */}
      </Routes>
    </BrowserRouter>
  )
}
