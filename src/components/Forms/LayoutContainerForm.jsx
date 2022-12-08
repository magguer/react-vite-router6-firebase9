import { Outlet } from "react-router-dom"

const LayoutContainerForm = () => {
  return (
    <div className="w-80 mx-auto mt-10">
    <Outlet></Outlet>
    </div>
  )
}

export default LayoutContainerForm