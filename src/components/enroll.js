import { useParams } from "react-router";
import Header from "./header";
import Footer from "./footer";

export default function Enroll({ data, ...props }) {
  const params = useParams();
  const id = Number(params.id);
  const courseData = data;
  const course = courseData ? courseData[id - 1] : null;
  return (
    <>
      <Header />
      {course ? (
        <div className="text-center">Enroll {course.title} </div>
      ) : (
        <div className="text-center">Fetching data ... </div>
      )}

      <Footer />
    </>
  );
}
