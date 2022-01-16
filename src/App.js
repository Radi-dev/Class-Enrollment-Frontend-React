import React from "react";
import Home from "./components/home";
import About from "./components/about";
import Courses from "./components/courses";
import Details from "./components/course_detail";
import Admin from "./components/admin";
import Students from "./components/students";
import Tutors from "./components/tutors";
import Enroll from "./components/enroll";
import NotFound from "./components/404";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
//import { dataRequest, links, dummyCourseData as cd } from "./data/Data";
import {
  dataRequest,
  links,
  dummyCourseData as cd,
  dummyCourseOutlines as co,
} from "./data/Data";

const courseDetails = () => {
  const courseData = dataRequest(cd, links.courses); // remove links.courses to use dummy data. No api call will be made
  const courseOutlines = dataRequest(co, links.outlines); // remove links.outlines to use dummy data. No api call will be made
  return !courseData || !courseOutlines
    ? null
    : { courseData: courseData, courseOutlines: courseOutlines };
};

export default function App() {
  const courseData = dataRequest(cd, links.courses); //remove links.courses to use dummy data. No api call will be made
  const details = courseDetails();

  return (
    <main className="bg-prim1 cursor-default bg -white relative min-h-screen w-screen overflow-x-hidden m-0">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="courses" element={<Courses data={courseData} />} />
          <Route path="courses/:id" element={<Details data={details} />} />
          <Route path="admin" element={<Admin />} />
          <Route path="about-us" element={<About />} />
          <Route path="enroll" element={<Enroll />} />
          <Route path="admin/tutors" element={<Tutors />} />
          <Route path="admin/students" element={<Students />} />
          <Route path="nn" element={<NotFound />} />
        </Routes>
      </Router>
    </main>
  );
}
