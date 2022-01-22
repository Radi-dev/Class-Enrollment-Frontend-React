import React from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Courses from "./pages/courses";
import Details from "./pages/course_detail";
import Admin from "./pages/admin";
import Students from "./pages/students";
import Tutors from "./pages/tutors";
import Enroll from "./pages/enroll";
import NotFound from "./pages/404";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { links } from "./data/Data";
import AxiosGet from "./components/useAxios";

const courseDetails = () => {
  const courseData = AxiosGet(links.courses);
  const courseOutlines = AxiosGet(links.outlines);
  const courseImages = AxiosGet(links.gallery);
  return !courseData || !courseOutlines || !courseImages
    ? null
    : {
        courseData: courseData,
        courseOutlines: courseOutlines,
        courseImages: courseImages,
      };
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </main>
  );
}
