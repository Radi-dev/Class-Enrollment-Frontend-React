import React from "react";
import Home from "./components/home";
import About from "./components/about";
import Courses from "./components/courses";
import Details from "./components/course_detail";
import Footer from "./components/footer";
import Admin from "./components/admin";
import Students from "./components/students";
import Tutors from "./components/tutors";
import Enroll from "./components/enroll";
import NotFound from "./components/404";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <main className="bg-prim1 cursor-default bg -white relative min-h-screen m-0">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="courses/:id" element={<Details />} />
          <Route path="admin" element={<Admin />} />
          <Route path="about-us" element={<About />} />
          <Route path="enroll" element={<Enroll />} />
          <Route path="admin/tutors" element={<Tutors />} />
          <Route path="admin/students" element={<Students />} />
          <Route path="nn" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </main>
  );
}
