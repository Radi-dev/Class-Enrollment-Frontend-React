import { dataRequest, links, courseData as cd } from "../dummyData/Data";
import ImgOrAlt from "./ImgOrAlt";

function Courses() {
  const courseData = dataRequest(cd, links.courses);
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
        <div className=" grid gap-2 md:grid-cols-2 lg:grid-cols-3">
          {courseData ? (
            courseData.map((course, i) => (
              <div key={i} className=" h-32 ">
                <div className=" relat ive overflow-clip h-full flex items-center border-fuchsia-300 bg-purple-100 border-2 rounded-lg">
                  <div className="float-left w-3/12 h-full bg-purple-100 overflow-clip m-0 mr-2">
                    <ImgOrAlt
                      alt={course.title}
                      className=" h-full w-full object-cover object-center"
                      src={course.thumb_photo}
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
            ))
          ) : (
            <p>fetching data...</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Courses;
