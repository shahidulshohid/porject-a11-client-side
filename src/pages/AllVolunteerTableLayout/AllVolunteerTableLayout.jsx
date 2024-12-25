import { Link } from "react-router-dom";

const AllVolunteerTableLayout = ({ data }) => {
  const { _id, thumbnail, title, email, name } = data;
  return (
    <>
      <tr>
        <th>
          <img className="w-12 h-12 rounded-lg" src={thumbnail} alt="" />
        </th>
        <th>{title}</th>
        <th className="hidden lg:flex">{email}</th>
        <th>
          <Link to={`/volunteerNeedDetails/${_id}`}>
            <button className="text-lg bg-green-500 py-1 md:py-2 px-2 md:px-4 rounded-lg mt-2 text-black">
              Details
            </button>
          </Link>
        </th>
      </tr>
    </>
  );
};

export default AllVolunteerTableLayout;
