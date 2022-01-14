import ImgOrAlt from "./ImgOrAlt";
import { useState, useRef, useEffect } from "react";
import Navbar from "./Navbar";

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
  OnClickOutside(ref, () => setOpen(false));
  return (
    <header className=" header h-24 sm:h-32 flex items-center z-30 w-full bg-transparent font-Comfortaa">
      <div className="container  mx-auto px-6 flex items-center justify-between">
        {dark ? (
          <div className="uppercase text-prim1 font-black z-30 text-3xl">
            <ImgOrAlt src="#" alt="OSITA INSTITUTE" className="text-sm" />
          </div>
        ) : (
          <div className="uppercase text-gray-800  font-black text-3xl">
            <ImgOrAlt src="#" alt="OSITA INSTITUTE" className="text-sm" />
          </div>
        )}

        {dark ? (
          <div className="flex items-center z-50">
            <nav className="font-sen text-prim1 uppercase text-lg lg:flex items-center hidden">
              <a href="#" className="py-2 px-6 flex">
                Home
              </a>
              <a href="#" className="py-2 px-6 flex">
                Watch
              </a>
              <a href="#" className="py-2 px-6 flex">
                Product
              </a>
              <a href="#" className="py-2 px-6 flex">
                Contact
              </a>
              <a href="#" className="py-2 px-6 flex">
                Carrer
              </a>
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
              <a href="#" className="py-2 px-6 flex">
                Home
              </a>
              <a href="#" className="py-2 px-6 flex">
                Watch
              </a>
              <a href="#" className="py-2 px-6 flex">
                Product
              </a>
              <a href="#" className="py-2 px-6 flex">
                Contact
              </a>
              <a href="#" className="py-2 px-6 flex">
                Carrer
              </a>
            </nav>
            <button className="lg:hidden flex flex-col ml-4 rounded-lg hover:border-2 border-gray-800   p-2 ">
              <span className="w-6 h-1 bg-gray-800  mb-1"></span>
              <span className="w-6 h-1 bg-gray-800  mb-1"></span>
              <span className="w-6 h-1 bg-gray-800 "></span>
            </button>
          </div>
        )}
        {open ? (
          <div ref={ref} className="navbar p-0 translate-x-0 opacity-100">
            <Navbar action={menuClick} />
          </div>
        ) : (
          <div ref={ref} className="navbar translate-x-full opacity-0">
            <Navbar />
          </div>
        )}
      </div>
    </header>
  );
}
