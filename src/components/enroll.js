import { useParams } from "react-router";
import Header from "./header";
import Footer from "./footer";
import { useInput } from "./useInput";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState, useEffect } from "react";
import { AxiosPost } from "./useAxios";
import { links } from "../data/Data";
import { EnrollSuccess } from "./alerts";

export default function Enroll({ data, onNewReg = (f) => f, ...props }) {
  const params = useParams();
  const id = Number(params.id);
  const courseData = data;
  const course = courseData ? courseData[id - 1] : null;

  const [firstNameProps, resetFirstName] = useInput("");
  const [lastNameProps, resetLastName] = useInput("");
  const [otherNamesProps, resetOtherNames] = useInput("");
  const [emailProps, resetEmail] = useInput("");
  const [courseProps, resetCourse] = useInput();
  const [phonNum, setPhonNum] = useState("234");
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 4000);

    return () => {
      clearTimeout();
    };
  }, [show]);

  const submit = (e) => {
    e.preventDefault();
    const newRegData = {
      first_name: firstNameProps.value,
      other_name: otherNamesProps.value,
      last_name: lastNameProps.value,
      email: emailProps.value,
      phone_number: phonNum,
      photo: null,
      thumb_photo: null,
      course: [id],
    };

    AxiosPost(links.students, newRegData);
    setShow(true);

    resetFirstName();
    resetLastName();
    resetOtherNames();
    resetEmail();
    resetCourse();
    setPhonNum("234");
  };
  return (
    <>
      <Header />
      {show ? <EnrollSuccess /> : ""}
      {course ? (
        <div className=" mx-auto my-4 flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow da rk:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
          <div className="self-center mb-2 text-xl text-gray-800 sm:text-2xl da rk:text-white">
            Course Enrollment Form
          </div>
          <span className="justify-center text-sm text-center text-gray-500 flex-items-center da rk:text-gray-400">
            {course.title}
          </span>
          <div className="p-6 mt-8">
            <form onSubmit={submit}>
              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <input
                    {...firstNameProps}
                    type="text"
                    placeholder="First Name: required"
                    required
                    id="create-account-firstName"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <input
                    {...otherNamesProps}
                    type="text"
                    placeholder="Other Names"
                    id="create-account-otherNames"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <input
                    {...lastNameProps}
                    type="text"
                    placeholder="Last Name: required"
                    required
                    id="create-account-lastName"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <input
                    {...emailProps}
                    type="email"
                    placeholder="@ email: required"
                    required
                    id="create-account-email"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <input
                    {...courseProps}
                    value={course.title}
                    type="text"
                    placeholder="course option: required"
                    disabled
                    required
                    id={course.title}
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
              </div>

              <PhoneInput
                value={phonNum}
                onChange={(e) => setPhonNum(e)}
                placeholder="Phone Number: required"
              />

              <div className="flex w-full my-4">
                <button className="py-2 px-4  bg-highl-hov focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="text-center">Fetching data ... </div>
      )}

      <Footer />
    </>
  );
}
