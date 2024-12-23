import { format } from "date-fns";
import { Link } from "react-router-dom";

const ShowVolunteerNeedsSection = ({ data }) => {
  const {_id, thumbnail, title, category, deadline } = data;
  
  return (
    <div className="bg-white rounded-xl p-4">
      <div className="w-full">
        <img className="rounded-t-xl mb-4" src={thumbnail} alt="" />
      </div>
      <div className="space-y-1">
        <h3 className="text-xl font-semibold">Title: {title}</h3>
        <h4 className="text-lg">Category: {category}</h4>
        <p className="text-lg">Deadline: {format(new Date(deadline), "P")}</p>
        <div className="flex justify-between items-center">
          <Link to={`/volunteerNeedDetails/${_id}`}>
            <button className="text-lg bg-green-500 py-2 px-4 rounded-lg mt-2 text-black">
              View Details
            </button>
          </Link>
          <Link to='/allVoNeePost'>
            <button className="text-lg bg-green-500 py-2 px-4 rounded-lg mt-2 text-black">
              See all
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowVolunteerNeedsSection;
