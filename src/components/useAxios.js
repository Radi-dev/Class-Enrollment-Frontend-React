import axios from "axios"; // new
import { useEffect, useState } from "react";

export function AxiosPost(link, item) {
  axios.post(link, item).catch(function (error) {
    console.log(error);
  });
}

export default function AxiosGet(link) {
  const [data1, setData1] = useState();

  useEffect(() => {
    axios
      .get(link, { headers: { "Content-Type": "application/json" } })
      .then((res) => {
        setData1(res.data);
      })
      .catch((err) => {});
  }, []);

  if (!data1) return null;
  return data1;
}
