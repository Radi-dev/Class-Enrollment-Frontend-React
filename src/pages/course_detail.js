//import { dataRequest,links,dummyCourseData as cd,dummyCourseOutlines as co,} from "../data/Data";
import { useParams } from "react-router";
import ImgOrAlt from "../components/ImgOrAlt";
import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import { Cacarousel } from "../components/carousel";

/*const courseDetails = () => {
  const courseData = dataRequest(cd, links.courses); // remove links.courses to use dummy data. No api call will be made
  const courseOutlines = dataRequest(co, links.outlines); // remove links.outlines to use dummy data. No api call will be made
  return !courseData || !courseOutlines
    ? null
    : { courseData: courseData, courseOutlines: courseOutlines };
};*/

export default function Details({ data, ...props }) {
  const params = useParams();
  const id = Number(params.id);
  //const details = courseDetails();
  const details = data;
  const course = details ? details.courseData.find((a) => a.id === id) : null;
  const outlines = details
    ? details.courseOutlines.filter((outline) => outline.course === course.id)
    : null;
  const imagesArray = details
    ? details.courseImages.filter((image) => image.course === course.id)
    : null;
  return (
    <>
      {course ? <Header bgImage={course.photo} /> : <Header />}
      <section className="details text-gray-600 body-font">
        {course ? (
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                {course.title}
              </h1>

              <div className="h- 52 w-full lg:w-2/3 mx-auto ">
                <Cacarousel
                  images={imagesArray}
                  video={course.intro_video_embed_id}
                />
              </div>

              <p className=" w-full lg:w-2/3 mt-10 mx-auto leadi ng-relaxed text-center">
                {course.description}
              </p>
            </div>
            <div className=" grid md:grid-cols-2 ">
              <ol className="p-2 pt-0 w-full overflow-y-auto">
                <h1 className="text-center font-bold underline text-2xl">
                  Course Outline
                </h1>
                {outlines.map((outline, i) => (
                  <li
                    key={i}
                    className=" border-x-2 m-2 relative transition-all overflow-clip duration-200 max-h-10 hover:max-h-96 hover:pt-11 border-blue-300 bor der shadow-md bg-white rounded-lg"
                  >
                    <div className="absolute text-cyan-700 top-0 w-full  px-2 h-9 my-auto flex justify-between items-center border-blue-300 shadow-md bg-white rounded-lg">
                      <h2 className=" title-font font-medium">
                        {outline.title}
                      </h2>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-500 p-2">{outline.description}</p>
                  </li>
                ))}
                <Link to={"enroll/"}>
                  <div className="button p-1 rounded text-center bg-highl-hov mx-3 mt-6 ring-1 ring-white shadow-lg text-white">
                    Enroll
                  </div>
                </Link>
              </ol>

              <div className="Tutor rounded-lg shadow-md mx-aut o mx-3 bg-white mb-12">
                <div className="flex items-center p-2 flex-col text-base text-center w-full mb-8 h-max">
                  <h1 className="text-lg font-medium title-font mb-4 text-gray-900">
                    Instructor
                  </h1>
                  {course.tutor ? (
                    <>
                      <div className="text-center mb-4 opacity-90">
                        <a
                          href={course.tutor.photo}
                          rel="noreferrer"
                          target={"_blank"}
                          className="block relat ive"
                        >
                          <ImgOrAlt
                            src={course.tutor.thumb_photo}
                            alt={course.tutor.name}
                            className="mx-auto object-right-top object-cover rounded-full h-40 w-40 "
                          />
                        </a>
                      </div>

                      <p className="mx-auto leading-relaxed font-bold text-base">
                        {course.tutor.name}
                      </p>
                      <div className=" h-80 overflow-y-scroll px-1">
                        <p className="mx-auto leading-relaxed text-base">
                          {course.tutor.about}
                        </p>
                      </div>
                    </>
                  ) : (
                    <p>Not yet assigned</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <section className="m-4 mb-32">
            <div className="bg-white mb-6 w-96 mx-auto rounded-2xl">
              <div className="bg-gray-200 h-48 p-3 overflow-hidden animate-pulse"></div>
              <div className="h- p-3">
                <div className="grid grid-cols-3 gap-4 mt-2">
                  <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-8 col-span-2 bg-gray-200 rounded animate-pulse"></div>
                  <div className=" h-8 bg-gray-200 rounded animate-pulse"></div>
                  <div className="..."></div>
                  <div className="col-span-2 ..."></div>
                </div>
              </div>
            </div>

            <div className="mb-12 shad ow rounded-md p-4 max-w-sm w-full mx-auto">
              <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-gray-200 h-10 w-10"></div>
                <div className="flex-1 space-y-6 py-1">
                  <div className="h-2 bg-gray-200 rounded"></div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-gray-200 rounded col-span-2"></div>
                      <div className="h-2 bg-gray-200 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </section>
      <Footer />
    </>
  );
}
