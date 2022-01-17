import { Link } from "react-router-dom";
import { brandNameShort, socials } from "../data/settings";
export default function Footer({ dark, ...props }) {
  return (
    <footer className="footer w-full absolute flex items-center bottom-0 flex-col justify-between px-6 py-4 bg-white sm:flex-row">
      <Link to="/">
        {dark ? (
          <div className="uppercase text-sm md:text-xl font-bold text-prim1 hover:text-gray-300">
            {brandNameShort}
          </div>
        ) : (
          <div className="uppercase  text-xl font-bold text-gray-800 hover:text-gray-700 ">
            {brandNameShort}
          </div>
        )}
      </Link>

      {dark ? (
        <p className="py-2 text-prim1 sm:py-0">
          All rights reserved {new Date().getFullYear()}
        </p>
      ) : (
        <p className="py-2 text-gray-800  sm:py-0">
          All rights reserved {new Date().getFullYear()}
        </p>
      )}

      <div className="flex -mx-2">
        {socials.map((val, i) => (
          <Link key={i} to={val.link}>
            {dark ? (
              <div
                className="mx-2 text-gray-300 hover:text-gray-300"
                aria-label={val.name}
              >
                {val.icon}
              </div>
            ) : (
              <div
                className="mx-2 text-gray-600  hover:text-gray-500 "
                aria-label={val.name}
              >
                {val.icon}
              </div>
            )}
          </Link>
        ))}
      </div>
    </footer>
  );
}
