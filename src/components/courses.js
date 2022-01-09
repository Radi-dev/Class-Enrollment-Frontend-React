import { courseData } from "../dummyData/courseData";
import ImgOrAlt from "./ImgOrAlt";
function Courses() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Our Team
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them.
          </p>
        </div>
        <div className="flex flex-wrap -m-2">
          {courseData.map((course, i) => (
            <div key={i} className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="relat ive overflow-clip h-full flex items-center border-purple-300 bg-purple-100 border-2 rounded-lg">
                <div className="float-left w-3/12 h-full bg-gray-400 overflow-clip m-0 mr-2">
                  <ImgOrAlt
                    alt={course.title}
                    className="object-cover object-center"
                    src="http://127.0.0.1:8000/media/profile_pics/Tumblr.jfif"
                  />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    {course.title}
                  </h2>
                  <p className="text-gray-500">{course.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
