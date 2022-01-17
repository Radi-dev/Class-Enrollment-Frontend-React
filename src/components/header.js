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

export default function Header({ dark, bgImage, ...props }) {
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
    <header className=" header h-32 sm:h-40 flex items-center z- 10 w-full bg-t ransparent font-Comfortaa">
      {bgImage ? (
        <>
          <div className=" headerBg h-32 sm:h-40 absolute bg-black  inset-x-0 opacity-30"></div>
          <div
            className=" headerBg h-32 sm:h-40 absolute bg-center bg-cover bg-no-repeat inset-x-0 opacity-30"
            style={{
              backgroundImage: `url(${bgImage})`,
            }}
          ></div>
        </>
      ) : (
        <></>
      )}

      <div className="container h-full  mx-auto px-6 flex items-center z-50 justify-between">
        <Link to="/">
          {dark ? (
            <div className="flex items-center h-28 sm:h-32 uppercase text-prim1 text- white font-black">
              <ImgOrAlt src="Logo.png" className="text-xs h-3/4" />
              <div>{brandNameShort}</div>
            </div>
          ) : (
            <div className="flex items-center h-28 sm:h-32 uppercase text-gray-800  font-black">
              <ImgOrAlt src="Logo.png" className="text-xs h-3/4" />
              <div>{brandNameShort}</div>
            </div>
          )}
        </Link>

        {dark ? (
          <div className="flex items-center ">
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
          <div className="flex items-center ">
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
