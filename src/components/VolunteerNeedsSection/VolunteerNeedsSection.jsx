import axios from "axios";
import { useEffect, useState } from "react";
import ShowVolunteerNeedsSection from "../ShowVolunteerNeedsSection/ShowVolunteerNeedsSection";

const VolunteerNeedsSection = () => {
    const [volunteerNeedsData, setVolunteerNeedsData] = useState([])
    useEffect(()=> {
        const fetchVolunteerNeedsData = async() => {
          const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/volunteer-needs`)
          setVolunteerNeedsData(data)
        }
          fetchVolunteerNeedsData()
        }, [])

  return (
    <div className="my-12">
        <h3 className="text-3xl text-center text-white font-bold">Volunteer Needs </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 mb-12  gap-5">
            {
                volunteerNeedsData?.map(data => <ShowVolunteerNeedsSection key={data._id} data={data}></ShowVolunteerNeedsSection>)
            }
        </div>
    </div>
  );
};

export default VolunteerNeedsSection;
