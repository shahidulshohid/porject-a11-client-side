import { useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";
import axios from "axios";

const ManageMyPostPage = () => {
    const {user} = useAuth()
    const [manageData, setManageData] = useState([]);
    useEffect(() => {
      fetchManageData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);
    console.log(manageData);
  
    const fetchManageData = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/getManageData/${user?.email}`
      );
      setManageData(data);
    };
    return (
        <div>
            <h3>Manage my post</h3>
        </div>
    );
};

export default ManageMyPostPage;