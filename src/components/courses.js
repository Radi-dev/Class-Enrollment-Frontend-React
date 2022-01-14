import { dataRequest, links, dummyCourseData as cd } from "../data/Data";
import ImgOrAlt from "./ImgOrAlt";
import { Link } from "react-router-dom";
import Header from "./header";

function Courses() {
  const courseData = dataRequest(cd, links.courses); //remove links.courses to use dummy data. No api call will be made
  return (
    <section className="text-gray-500 body-font">
      <Header />
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-600">
            All Courses
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Find the right online degree program to kick off your new skill
            aquisition.
          </p>
        </div>
        <div className=" grid gap-2 md:grid-cols-2 lg:grid-cols-3">
          {courseData ? (
            courseData.map((course, i) => (
              <Link to={`${course.id}`}>
                <div
                  key={i}
                  className="transform m-2 transition-all scale-100 hover:scale-y-105 h-32 "
                >
                  <div className=" overflow-clip h-full flex items-center border-highl bg-white border-x-2 rounded-md shadow-lg">
                    <div className="float-left w-3/12 h-full bg-purple-100 overflow-clip m-0 mr-2">
                      <ImgOrAlt
                        alt={course.title}
                        className=" h-full w-full object-cover object-center"
                        src={course.thumb_photo}
                      />
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-blue-600 title-font font-medium">
                        {course.title}
                      </h2>
                      <p className="text-gray-500">
                        {course.description.slice(0, 50)}...
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <>
              <div className="w-60 h-24 border-2 rounded-md mx-auto mb-4">
                <div className="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
                  <div className="w-12 bg-gray-300 h-12 rounded-full "></div>
                  <div className="flex flex-col space-y-3">
                    <div className="w-36 bg-gray-300 h-6 rounded-md "></div>
                    <div className="w-24 bg-gray-300 h-6 rounded-md "></div>
                  </div>
                </div>
              </div>

              <div className="w-60 h-24 border-2 rounded-md mx-auto mb-4">
                <div className="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
                  <div className="w-12 bg-gray-300 h-12 rounded-full "></div>
                  <div className="flex flex-col space-y-3">
                    <div className="w-36 bg-gray-300 h-6 rounded-md "></div>
                    <div className="w-24 bg-gray-300 h-6 rounded-md "></div>
                  </div>
                </div>
              </div>

              <div className="w-60 h-24 border-2 rounded-md mx-auto mb-4">
                <div className="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
                  <div className="w-12 bg-gray-300 h-12 rounded-full "></div>
                  <div className="flex flex-col space-y-3">
                    <div className="w-36 bg-gray-300 h-6 rounded-md "></div>
                    <div className="w-24 bg-gray-300 h-6 rounded-md "></div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Courses;
