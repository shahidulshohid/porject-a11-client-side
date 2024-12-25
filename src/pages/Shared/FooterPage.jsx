import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import volunteerLogo from "../../assets/volunteerLogo.jpg";
import { FaSquarePhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const FooterPage = () => {
  return (
    <div className="pb-12">
      <footer className="footer bg-neutral text-neutral-content p-10">
        <nav>
          <div className="flex items-center gap-2">
            <img
              className="w-8 h-8 md:w-12 md:h-12 rounded-full"
              src={volunteerLogo}
              alt="logo"
            />
            <h1 className="text:xl lg:text-2xl font-bold ml-2">
              Volunteer Management
            </h1>
          </div>
          <p>support people worldwide and keep</p> 
            <p>an eye in the future Support.</p>
          <div className="flex gap-6">
            <FaFacebookF className="text-xl w-9 h-9 bg-white text-black p-2 rounded-full hover:text-white hover:bg-green-500" />
            <FaTwitter className="text-xl w-9 h-9 bg-white text-black p-2 rounded-full hover:text-white hover:bg-green-500" />
            <FaInstagram className="text-xl w-9 h-9 bg-white text-black p-2 rounded-full hover:text-white hover:bg-green-500" />
            <FaLinkedin className="text-xl w-9 h-9 bg-white text-black p-2 rounded-full hover:text-white hover:bg-green-500" />
          </div>
        </nav>
        <nav>
          <h6 className="text-xl text-white">Stay Up to Date</h6>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Organization</a>
          <a className="link link-hover">Public Relations</a>
          <a className="link link-hover">Dept History</a>
          <a className="link link-hover">FAQ's</a>
        </nav>
        <nav>
          <h6 className="text-xl text-white">Contact us</h6>
          <p className="flex items-center gap-3"><FaSquarePhoneFlip size={20}/> <small className="text-xl font-bold">555 624 862</small></p>
          <p className="flex items-center gap-3"><MdEmail size={20}/> <small className="text-xl font-bold">555 624 862</small></p>
        </nav>
      </footer>
    </div>
  );
};

export default FooterPage;
