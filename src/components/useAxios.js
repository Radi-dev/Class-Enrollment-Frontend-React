import axios from "axios"; // new
import { useEffect, useState } from "react";

export default function AxiosGet(link) {
  const [data1, setData1] = useState(null);

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
} /* axios
      .get(site+"api/profiles/150")
      .then((res) => {
        this.setState({
          todo: res.data,
        });
        //console.log(this.state.todo)
      })
      .catch((err) => {
        //console.log(err);
      });
  
      let item = this.state.todos;
      let ite = this.state.todo;
    //item && item.orders && (console.log(item.orders[0].amount));
    //console.log(j.user.first_name)
    let jf = item && item.name//item.orders && item.orders[0] && item.orders[0].amount;
    let j = ite && ite.user
    //console.log(this.state.todos)
    return (
      <div>
        {jf}, {j && ite.user.username}
        <p className="p-5 rounded-lg bg-gray-300">
         <a href={item.photo}> <img src={item.thumb_photo} alt="" /></a> </p>
         <div>
         {j && ite.user.email}
         </div>
         <div>
         {j && ite.display_name}
         </div>
      </div>
    );
  }
}*/
