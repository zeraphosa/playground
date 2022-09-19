import { Icon } from "Icons";
import { useState } from "react";

export default function Navbar() {
  const [btn, set_btn] = useState(false);
  function handleMenu() {
    set_btn(true);
  }
  return (
    <nav className="w-[100%] h-[7vh] px-[10%] rounded bg-gray-900 flex items-center">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">CMK</span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          onClick={handleMenu}
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
         <Icon size={25} name="logo"/>
        </button>
        <div className={`${btn ? "flex" : "hidden"} w-[100%] md:block md:w-auto z-10`} id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="/" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Pricing
              </a>
            </li>
            <li>
              <a href="/" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
