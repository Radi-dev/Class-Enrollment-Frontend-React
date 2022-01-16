import Header from "./header";
import Footer from "./footer";
import { Link } from "react-router-dom";
export default function Home(params) {
  const linksJsx = (
    <>
      <Link
        to="courses"
        className="uppercase py-2 px-4 rounded-lg  border-2 border-transparent text-white text-md mr-4 bg-highl-hov border-highl"
      >
        Get started
      </Link>
      <Link
        to="about-us"
        className="uppercase py-2 px-4 rounded-lg  border-2 border-highl bg-highl-hov bg-transparent text-highl hover:text-white text-md"
      >
        Read more
      </Link>
    </>
  );
  return (
    <>
      <Header dark />
      <div className="home box-border h-screen80 w-full flex z-20 items-center overflow-hidden">
        <div className="home-bg absolute inset-0 z-1 0 opacity-40  h-full w-full "></div>

        <div className="home-bg2 bg-fixed absolute inset-0 z-0 opacity-70 bg-black h-full w-full "></div>
        <div className="container mx-auto px-6 flex">
          <div className="sm:w-2/3 lg:w-2/5 flex flex-col z-20">
            <span className="w-20 h-2 bg-gray-400 mb-12"></span>
            <h1 className="font-bebas-neue uppercase text-5xl sm:text-4xl font-black flex flex-col leading-none text-gray-400">
              Your Journey
              <span className="text-3xl sm:text-4xl">Begins here</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-400">
              There is no limit to your learning.
            </p>
            <p className="text-sm sm:text-base text-gray-400">
              We help you acquire new skills with our broad collection of degree
              courses. And yes, you'll get a certificate at the completion of
              any of our courses
            </p>
            <div className="flex mt-8 md:hidden">{linksJsx}</div>
          </div>
          <div className="hidden md:block sm:w-1/3 lg:w-3/5 relative">
            <div className="flex mt-8">{linksJsx}</div>
          </div>
        </div>
      </div>
      <Footer dark />
    </>
  );
}
