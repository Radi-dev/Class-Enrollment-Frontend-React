import ImgOrAlt from "./ImgOrAlt";
import { useState, useRef, useEffect } from "react";
import Navbar from "./Navbar";
import { NavData } from "./NavData";
import { Link } from "react-router-dom";
import { brandNameShort } from "../data/settings";

function OnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export default function Header({ dark, ...props }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const menuClick = () => setOpen(!open);
  const navJsx = NavData.map((val, i) => (
    <div
      key={i}
      href="#"
      className=" transform py-2 px-6 flex hover:scale-y-110"
    >
      <Link to={val.link}>{val.title}</Link>
    </div>
  ));
  OnClickOutside(ref, () => setOpen(false));
  return (
    <header className=" header h-32 sm:h-40 flex items-center z-30 w-full bg-green-200 bg-t ransparent font-Comfortaa">
      <div className="container  mx-auto px-6 flex items-center justify-between">
        <Link to="/">
          {dark ? (
            <div className="uppercase text- prim1 font-black z-50">
              <ImgOrAlt src="#" alt={brandNameShort} className="text-sm" />
            </div>
          ) : (
            <div className="uppercase text-gray-800  font-black">
              <ImgOrAlt src="#" alt={brandNameShort} className="text-sm" />
            </div>
          )}
        </Link>

        {dark ? (
          <div className="flex items-center z-50">
            <nav className="font-sen text-prim1 uppercase text-lg lg:flex items-center hidden">
              {navJsx}
            </nav>
            <button
              className="lg:hidden flex flex-col ml-4 rounded-lg hover:border-2 p-2 "
              onClick={menuClick}
            >
              <span className="w-6 h-1 bg-prim1 mb-1"></span>
              <span className="w-6 h-1 bg-prim1 mb-1"></span>
              <span className="w-6 h-1 bg-prim1"></span>
            </button>
          </div>
        ) : (
          <div className="flex items-center z-50">
            <nav className="font-sen text-gray-800 uppercase text-lg lg:flex items-center hidden">
              {navJsx}
            </nav>
            <button
              className="lg:hidden flex flex-col ml-4 rounded-lg hover:border-2 border-gray-800 p-2 "
              onClick={menuClick}
            >
              <span className="w-6 h-1 bg-gray-800  mb-1"></span>
              <span className="w-6 h-1 bg-gray-800  mb-1"></span>
              <span className="w-6 h-1 bg-gray-800 "></span>
            </button>
          </div>
        )}
        {open ? (
          <div ref={ref} className="navbar p-0 right-0 ">
            <Navbar action={menuClick} />
          </div>
        ) : (
          <div ref={ref} className="navbar p-0 -right-96 ">
            <Navbar action={menuClick} />
          </div>
        )}
      </div>
    </header>
  );
}
