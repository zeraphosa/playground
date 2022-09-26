import { Icon } from "Icons";
import { useState } from "react";

export default function Sidebar() {
  const [open, set_open] = useState(true);

  return (
    <div className={`${open ? "w-72" : "w-20"} p-5 pt-8 duration-300 h-screen bg-backdrop relative`}>
      <div className="flex items-center justify-center absolute cursor-pointer -right-3 top-9 w-7 h-7 bg-primary rounded-full" onClick={() => set_open(!open)}>
        {open ? <Icon size={20} name="prev" /> : <Icon size={20} name="next" />}
      </div>
      <div className="flex flex-col gap-y-6">
        {pages.map((page, idx) => (
          <div key={idx} className="flex gap-x-4 items-center">
            <Icon size={28} name={page.name} />
            <h1 className="cursor-pointer duration-500">{page.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

const pages = [
  { title: "Tasks", name: "tasks" },
  { title: "Notes", name: "notes" },
  { title: "Accounts", name: "accounts" },
  { title: "Projects", name: "projects" },
  { title: "WatchList", name: "watchlist" },
];
