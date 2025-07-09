import { Outlet } from "react-router-dom";


export default function DashboardLayout() {
  return (
    <div className="flex gap-16">
      <div className="max-w-sm">
        <ul>
            {
                [1,2,3,4,5].map(el => <li>lorem2 {el}</li>)
            }
        </ul>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  )
}
