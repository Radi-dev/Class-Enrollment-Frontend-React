import { courseData, courseOutlines } from "../dummyData/Data";
import { useParams } from "react-router";
import ImgOrAlt from "./ImgOrAlt";

export default function Details() {
  const params = useParams();
  const id = Number(params.id);
  const course = courseData[id - 1];
  const outlines = courseOutlines.filter((outline) => outline.course === id);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            {course.title}
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them.
          </p>
        </div>
        <div className=" grid md:grid-cols-2 ">
          <ol className="p-2  w-full overflow-auto">
            {outlines.map((outline, i) => (
              <li
                key={i}
                className=" m-2 relative transition-all overflow-clip duration-1000 max-h-10 hover:max-h-96 border-fuchsia-300 bg-purple-200 border-2 rounded-lg"
              >
                <div className="abs olute top-0 w-full m-0 inset-x-0 pl-2 h-10 bg-white flex items-center border-fuchsia-300 border-2 rounded-lg">
                  <h2 className="text-gray-900 title-font font-medium">
                    {outline.title}
                  </h2>
                </div>
                <p className="text-gray-500 p-2">{outline.description}</p>
              </li>
            ))}
          </ol>
          <div className="Tutor border rounded-lg border-fuchsia-300 m-4">
            <div className="flex items-center flex-col text-center w-full mb-20">
              <h1 className="text-lg font-medium title-font mb-4 text-gray-900">
                Taught By
              </h1>
              {course.tutor ? (
                <>
                  <div className=" mx -auto  w-48 h-48 overflow-hidden rounded-full">
                    <ImgOrAlt
                      src={course.tutor.thumb_photo}
                      alt={course.tutor.name}
                      className="w-full"
                    />
                  </div>

                  <p className="mx-auto leading-relaxed text-base">
                    {course.tutor.name}
                  </p>
                  <p className="mx-auto leading-relaxed text-base">
                    {course.tutor.about}
                  </p>
                </>
              ) : (
                <p>Not yet assigned</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
