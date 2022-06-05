import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=chris`);
      setUser(res.data);
    };
    fetchUser();
  }, []);


  return (
    <div>
       <>
    <div className="profile">
      <Topbar/>
    </div>
    </>
    </div>
  )
}
