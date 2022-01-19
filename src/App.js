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
import { links } from "./data/Data";
import AxiosGet from "./components/useAxios";

const courseDetails = () => {
  const courseData = AxiosGet(links.courses);
  const courseOutlines = AxiosGet(links.outlines);
  return !courseData || !courseOutlines
    ? null
    : { courseData: courseData, courseOutlines: courseOutlines };
};

export default function App() {
  const courseData = AxiosGet(links.courses);
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
          <Route
            path="courses/:id/enroll"
            element={<Enroll data={courseData} />}
          />
          <Route path="admin/tutors" element={<Tutors />} />
          <Route path="admin/students" element={<Students />} />
          <Route path="nn" element={<NotFound />} />
        </Routes>
      </Router>
    </main>
  );
}
