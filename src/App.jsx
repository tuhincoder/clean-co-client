import { Outlet } from "react-router-dom"
import MainLayOut from "./LayOuts/MainLayOut/MainLayOut"

function App() {
  return (
    <div>
      <MainLayOut>
        <Outlet></Outlet>
      </MainLayOut>
    </div>
  )
}

export default App
