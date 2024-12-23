import { useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";
import axios from "axios";

const ManageMyPostPage = () => {
  const { user } = useAuth();
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
    <div className="my-12">
      <h3 className="text-4xl text-center text-white font-bold mb-6">
        My Reviews
      </h3>
      <div className="bg-[#F4F3F0] rounded-xl py-6 lg:w-8/12 mx-auto">
        <div className="overflow-x-auto ">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="text-black text-lg">Photo</th>
                <th className="text-black text-lg">Title</th>
                <th className="text-black text-lg">Name</th>
                <th className="text-black text-lg hidden lg:flex">Email</th>
              </tr>
            </thead>
            <tbody>
              {/* {myReviewsData?.map((reviewData) => (
                <MyReviewTable
                  key={reviewData._id}
                  reviewData={reviewData}
                  myReviewsData={myReviewsData}
                  setMyReviewsData={setMyReviewsData}
                ></MyReviewTable>
              ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageMyPostPage;
