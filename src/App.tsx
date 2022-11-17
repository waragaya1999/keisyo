import { BrowserRouter, Routes, Route} from "react-router-dom"
import "./App.css"
import { Keisyo } from "./components/Keisyo/container"
import { Search1 } from "./components/Search/container"
import { Test } from "./test"

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Keisyo />} />
        <Route path={`search`} element={<Search1 />} />
      </Routes>
    </BrowserRouter>
  )
}
