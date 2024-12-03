import { useState } from "react";
import { navLinks } from "../constants";
import Strip from "./ui/Strip";

const Sidebar = () => {
  const [filter, setFilter] = useState("Tweets");
  return (
    <aside className="h-full w-[20%] border-r shrink-0 max-md:hidden">
      <div className="flex gap-2 justify-center items-center my-5 bg-purple-100 py-2 px-4 m-2 rounded-lg w-fit mx-auto">
        <img src="/logo.svg" alt="logo" className="w-5 h-5" />
        <h1 className="text-xl text-zinc-700 font-light">
          2<sup className="text-xs">nd</sup> Brain
        </h1>
      </div>
      <hr className="mx-5" />
      <nav className="mt-5">
        <ul className=" flex flex-col gap-5">
          {navLinks.map((link) => (
            <li key={link.name} onClick={() => setFilter(link.name)}>
              <Strip link={link} active={filter === link.name} />
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
