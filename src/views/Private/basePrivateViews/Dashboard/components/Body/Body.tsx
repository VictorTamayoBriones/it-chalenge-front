import { Outlet } from "react-router-dom"
import "./style.scss"

function Body() {
  return (
    <main>
      <Outlet/>
    </main>
  )
}
export default Body