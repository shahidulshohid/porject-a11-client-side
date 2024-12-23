import axios from "axios";
import { useEffect, useState } from "react";
import ShowAllVolunteerPostPage from "../../components/ShowAllVolunteerPostPage/ShowAllVolunteerPostPage";

const AllVoNeePostPage = () => {
  const [volunteerNeedsData, setVolunteerNeedsData] = useState([]);
  const [search, setSearch] = useState("");
  console.log(search)

  useEffect(() => {
    const fetchVolunteerNeedsData = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/all-volunteer-needs?search=${search}`
      );
      setVolunteerNeedsData(data);
    };
    fetchVolunteerNeedsData();
  }, [search]);

  const resetFn = () => {
    setSearch('')
  }
  return (
    <div className="my-12">
      <div className="flex justify-between items-center">
        <h3 className="text-3xl text-white font-bold">All Volunteer Needs Post</h3>
        <div className="flex p-1 overflow-hidden focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
          <input
            className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent rounded-l-md"
            type="text"
            name="search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Post Title"
            aria-label="Post Title"
          />

          <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-r-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
            Search
          </button>
          <button onClick={resetFn} className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md ml-3 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
            Reset
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-3 gap-5">
        {volunteerNeedsData?.map((data) => (
          <ShowAllVolunteerPostPage
            key={data._id}
            data={data}
          ></ShowAllVolunteerPostPage>
        ))}
      </div>
    </div>
  );
};

export default AllVoNeePostPage;
