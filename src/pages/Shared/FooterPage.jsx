import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import volunteerLogo from "../../assets/volunteerLogo.jpg";
import { FaSquarePhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const FooterPage = () => {
  return (
    <div className="pb-12">
      <footer className="footer bg-green-300 text-neutral-content p-10">
        <nav>
          <div className="flex items-center gap-2">
            <img
              className="w-8 h-8 md:w-12 md:h-12 rounded-full"
              src={volunteerLogo}
              alt="logo"
            />
            <h1 className="text:xl lg:text-2xl font-bold ml-2 text-gray-700">
              Volunteer Management
            </h1>
          </div>
          <p className="text-black">support people worldwide and keep</p> 
            <p className="text-black">an eye in the future Support.</p>
          <div className="flex gap-6">
            <Link to="https://www.facebook.com/" target="_blank"><FaFacebookF className="text-xl w-9 h-9 bg-white text-black p-2 rounded-full hover:text-white hover:bg-green-500" /></Link>
            <Link to="https://x.com/?lang=en&mx=2" target="_blank"><FaTwitter className="text-xl w-9 h-9 bg-white text-black p-2 rounded-full hover:text-white hover:bg-green-500" /></Link>
            
            <Link to="https://www.instagram.com/" target="_blank"><FaInstagram className="text-xl w-9 h-9 bg-white text-black p-2 rounded-full hover:text-white hover:bg-green-500" /></Link>
            <Link to="https://www.linkedin.com/" target="_blank"><FaLinkedin className="text-xl w-9 h-9 bg-white text-black p-2 rounded-full hover:text-white hover:bg-green-500" /></Link>
          </div>
        </nav>
        <nav>
          <h6 className="text-xl text-black">Stay Up to Date</h6>
          <a href="/#contact" className="link link-hover text-black">Contact Us</a>
          <a href="/#blogs" className="link link-hover text-black">Blogs</a>
          <a href="/#reviews" className="link link-hover text-black">Reviews</a>
          <a href="/#faq" className="link link-hover text-black">FAQ's</a>
        </nav>
        <nav>
          <h6 className="text-xl  text-black">Contact us</h6>
          <p className="flex items-center gap-3 text-gray-500"><FaSquarePhoneFlip size={20}/> <small className="text-xl font-bold text-gray-500">01738283277</small></p>
          <p className="flex items-center gap-3 text-gray-500"><MdEmail size={20}/> <small className="text-xl font-bold text-gray-500">shahidulislamshohid7@gmail.com</small></p>
        </nav>
      </footer>
    </div>
  );
};

export default FooterPage;
