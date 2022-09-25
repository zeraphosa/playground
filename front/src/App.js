import { Icon } from "Icons";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  const [open, set_open] = useState(true);
  return (
    <Router>
      <div className="flex bg-gray-800">
        <div className={`${open ? "w-72" : "w-20"} p-5 pt-8 duration-300 h-screen bg-backdrop relative`}>
          <div className="flex items-center justify-center absolute cursor-pointer -right-3 top-9 w-7 h-7 bg-primary rounded-full" onClick={() => set_open(!open)}>
            {open ? <Icon size={20} name="prev" /> : <Icon size={20} name="next" />}
          </div>
          <div className="flex flex-col gap-y-6">
            <div className="flex gap-x-4 items-center">
              <div className={`cursor-pointer duration-500`}>
                <Icon name="tasks" />
              </div>
              <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}>Tasks</h1>
            </div>
            <div className="flex gap-x-4 items-center">
              <div className={`cursor-pointer duration-500`}>
                <Icon name="notes" />
              </div>
              <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}>Notes</h1>
            </div>
            <div className="flex gap-x-4 items-center">
              <div className={`cursor-pointer duration-500`}>
                <Icon name="accounts" />
              </div>
              <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}>Accounts</h1>
            </div>
            <div className="flex gap-x-4 items-center">
              <div className={`cursor-pointer duration-500`}>
                <Icon name="projects" />
              </div>
              <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}>Projects</h1>
            </div>
            <div className="flex gap-x-4 items-center">
              <div className={`cursor-pointer duration-500`}>
                <Icon name="watchlist" />
              </div>
              <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}>WatchList</h1>
            </div>
          </div>
        </div>
        <div className="p-7 text-2xl font-semibold flex-1 h-screen">Main page</div>
      </div>
    </Router>
  );
}
