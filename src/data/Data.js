import AxiosGet from "../components/useAxios";
import { site } from "./settings";

export const dataRequest = (dummy = [], link = null) => {
  const data = link ? AxiosGet(link) : dummy;
  return data;
};
export const links = {
  courses: site + "/courses/",
  students: site + "/students/",
  tutors: site + "/tutors/",
  outlines: site + "/outlines/",
};
export const dummyCourseData = [
  {
    id: 1,
    tutor: null,
    title: "plumbing",
    description: "I teach about plumbing with 2 yrs experience",
    photo: "/media/profile_pics/CleopatraCoverobj.png",
    thumb_photo: "/media/profile_pics_thumbs/CleopatraCoverobj.png",
  },
  {
    id: 2,
    tutor: {
      id: 2,
      name: "Bunni",
      about: "sexy",
      photo: "/media/profile_pics/Tumblr.jfif",
      thumb_photo: "/media/profile_pics_thumbs/Tumblr.jfif",
    },
    title: "fooding",
    description: "How to eat, basically",
    photo: "/media/profile_pics/92ac4b227312d596d39b17906e3c1c48.jpg",
    thumb_photo:
      "/media/profile_pics_thumbs/92ac4b227312d596d39b17906e3c1c48.jpg",
  },
  {
    id: 3,
    tutor: {
      id: 1,
      name: "Radi",
      about: "Developer, Cannot fight",
      photo: "/media/profile_pics/IMG_20210926_0503061.jpg",
      thumb_photo: "/media/profile_pics_thumbs/IMG_20210926_0503061.jpg",
    },
    title: "jambo",
    description: "This is how to jamboree",
    photo: "/media/profile_pics/FASHION_MAGE__Photo.jfif",
    thumb_photo: "/media/profile_pics_thumbs/FASHION_MAGE__Photo.jfif",
  },
  {
    id: 4,
    tutor: null,
    title: "a course",
    description: "Testing permissions",
    photo: "/media/profile_pics/IMG_20211212_090229.png",
    thumb_photo: "/media/profile_pics_thumbs/IMG_20211212_090229.png",
  },

  {
    id: 1,
    tutor: null,
    title: "plumbing",
    description: "I teach about plumbing with 2 yrs experience",
    photo: "/media/profile_pics/CleopatraCoverobj.png",
    thumb_photo: "/media/profile_pics_thumbs/CleopatraCoverobj.png",
  },
  {
    id: 2,
    tutor: {
      id: 2,
      name: "Bunni",
      about: "sexy",
      photo: "/media/profile_pics/Tumblr.jfif",
      thumb_photo: "/media/profile_pics_thumbs/Tumblr.jfif",
    },
    title: "fooding",
    description: "How to eat, basically",
    photo: "/media/profile_pics/92ac4b227312d596d39b17906e3c1c48.jpg",
    thumb_photo:
      "/media/profile_pics_thumbs/92ac4b227312d596d39b17906e3c1c48.jpg",
  },
  {
    id: 3,
    tutor: {
      id: 1,
      name: "Radi",
      about: "Developer, Cannot fight",
      photo: "/media/profile_pics/IMG_20210926_0503061.jpg",
      thumb_photo: "/media/profile_pics_thumbs/IMG_20210926_0503061.jpg",
    },
    title: "jambo",
    description: "This is how to jamboree",
    photo: "/media/profile_pics/FASHION_MAGE__Photo.jfif",
    thumb_photo: "/media/profile_pics_thumbs/FASHION_MAGE__Photo.jfif",
  },
  {
    id: 4,
    tutor: null,
    title: "a course",
    description: "Testing permissions",
    photo: "/media/profile_pics/IMG_20211212_090229.png",
    thumb_photo: "/media/profile_pics_thumbs/IMG_20211212_090229.png",
  },

  {
    id: 1,
    tutor: null,
    title: "plumbing",
    description: "I teach about plumbing with 2 yrs experience",
    photo: "/media/profile_pics/CleopatraCoverobj.png",
    thumb_photo: "/media/profile_pics_thumbs/CleopatraCoverobj.png",
  },
  {
    id: 2,
    tutor: {
      id: 2,
      name: "Bunni",
      about: "sexy",
      photo: "/media/profile_pics/Tumblr.jfif",
      thumb_photo: "/media/profile_pics_thumbs/Tumblr.jfif",
    },
    title: "fooding",
    description: "How to eat, basically",
    photo: "/media/profile_pics/92ac4b227312d596d39b17906e3c1c48.jpg",
    thumb_photo:
      "/media/profile_pics_thumbs/92ac4b227312d596d39b17906e3c1c48.jpg",
  },
  {
    id: 3,
    tutor: {
      id: 1,
      name: "Radi",
      about: "Developer, Cannot fight",
      photo: "/media/profile_pics/IMG_20210926_0503061.jpg",
      thumb_photo: "/media/profile_pics_thumbs/IMG_20210926_0503061.jpg",
    },
    title: "jambo",
    description: "This is how to jamboree",
    photo: "/media/profile_pics/FASHION_MAGE__Photo.jfif",
    thumb_photo: "/media/profile_pics_thumbs/FASHION_MAGE__Photo.jfif",
  },
  {
    id: 4,
    tutor: null,
    title: "a course",
    description: "Testing permissions",
    photo: "/media/profile_pics/IMG_20211212_090229.png",
    thumb_photo: "/media/profile_pics_thumbs/IMG_20211212_090229.png",
  },
];

export const dummyCourseOutlines = [
  {
    course: 1,
    title: "Gathering pipes",
    description: "buy the pipes",
  },
  {
    course: 1,
    title: "decision",
    description: "decide on pipes to get",
  },
  {
    course: 2,
    title: "get food",
    description: "buythe food you need to become a foodie",
  },
  {
    course: 2,
    title: "devour",
    description: "Eat the food like there's no tomorrow",
  },
  {
    course: 2,
    title: "purge",
    description:
      "Remember to go visit the bathroom to pass out excreta...before u shit for sleep Remember to go visit the bathroom to pass out excreta...before u shit for sleepRemember to go visit the bathroom to pass out excreta...before u shit for sleep",
  },
  {
    course: 3,
    title: "chai",
    description: "nothing to say here",
  },
  {
    course: 1,
    title: "another",
    description: "testing outlines",
  },
];
