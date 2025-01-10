import { Link } from "react-router-dom";
const Blogs = ({item}) => {
  const {id, image, title, description} = item
  return (
    <div>
      <div>
          <div className="w-full h-[280px]">
            <img className="w-full h-[280px]" src={image} alt="" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-black mt-2">
              {title}
            </h3>
            <p className="text-white">
              {description}
            </p>
            <Link to={`/blogs/${id}`}>
              <button className="btn bg-green-500 text-lg border-green-500 hover:text-black text-white mt-3">
                See More
              </button>
            </Link>
          </div>
        </div>
    </div>
  );
};

export default Blogs;
