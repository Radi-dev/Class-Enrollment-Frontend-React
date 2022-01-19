import axios from "axios"; // new
import { useEffect, useState } from "react";

export function AxiosPost(link, item) {
  // const [result, setResult] = useState();
  console.log("axios post");

  //useEffect(() => {
  console.log("item is: " + item);
  axios
    .post(link, item)
    //   .then((res) => setResult(res))
    .then((res) => console.log("res is: " + res.data.id))
    .catch(function (error) {
      console.log(error);
    });
  // }, []);
  // if (!result) return null;
  // return result;
}

export default function AxiosGet(link) {
  const [data1, setData1] = useState();

  useEffect(() => {
    axios
      .get(link, { headers: { "Content-Type": "application/json" } })
      .then((res) => {
        setData1(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // new

  if (!data1) return null;
  return data1;
}
