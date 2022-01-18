import { useParams } from "react-router";
import Header from "./header";
import Footer from "./footer";

export default function Enroll({ data, ...props }) {
  const params = useParams();
  const id = Number(params.id);
  const courseData = data;
  const course = courseData[id - 1];
  return (
    <>
      <Header />

      <div>Enroll {course.title} </div>
      <Footer />
    </>
  );
}
