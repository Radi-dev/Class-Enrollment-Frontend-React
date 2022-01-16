import React from "react";
import { NavData } from "./NavData";
import { Link } from "react-router-dom";
//import { HashLink as Link2 } from "react-router-hash-link";

function Navbar({ action }) {
  //let link = "#";

  return (
    <div className="w-1/3 min-w-max shadow-lg z-[100] py-10 h-full absolute right-0 bg-gray-100 ">
      <ul className="text-center flex flex-col gap-y-10">
        {NavData.map((val, i) => (
          <li className="px-8 bg-white" onClick={action} key={i}>
            <Link to={val.link}>{val.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
