import { BrowserRouter, Routes, Route} from "react-router-dom"
import "./App.css"
import { Search1 } from "./components/Search/container"
import { Test } from "./test"

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Test />} />
        <Route path={`search`} element={<Search1 />} />
      </Routes>
    </BrowserRouter>
  )
}
