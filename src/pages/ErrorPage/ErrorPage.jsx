import { Link } from "react-router-dom";
import errorImg from "../../assets/errorImg.jpg";
const ErrorPage = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <img
          className="w-5/12 h-[400px] mt-12 rounded-xl"
          src={errorImg}
          alt=""
        />
      </div>
      <div className="text-center">
      <Link to='/'><button className=" bg-[#E972A0] text-2xl px-4 py-3 rounded-xl mt-4">Back to Home</button></Link>
      </div>
    </div>
  );
};

export default ErrorPage;
