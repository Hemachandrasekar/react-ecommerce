import { useEffect, useState } from "react";
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { userRequest } from "../../requestMethod";

export default function WidgetSm() {
  const [user, setUser] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get('/user')
        setUser(res.data)
      } catch (error) {
        console.log("Error occur while fetching the user")
      }

    }
    getUsers()
  }, [])

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {user.map(item => (

          <li className="widgetSmListItem" key={item._id}>
            <img
              src={item.img || "https://p.kindpng.com/picc/s/22-223863_no-avatar-png-circle-transparent-png.png"}
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{item.username}</span>
              {/* <span className="widgetSmUserTitle">Software Engineer</span> */}
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}

      </ul>
    </div>
  );
}
