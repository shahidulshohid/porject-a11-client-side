
import volunteerLogo from "../../assets/volunteerLogo.jpg";

const FooterPage = () => {
  return (
    <div className="pb-12">
      <footer className="footer bg-neutral text-neutral-content p-10">
        <nav>
          <div className="flex items-center">
            <img
              className="w-8 h-8 md:w-12 md:h-12 rounded-full"
              src={volunteerLogo}
              alt="logo"
            />
            <h1 className="hidden md:flex text:xl lg:text-2xl font-bold ml-2">
              Volunteer Management
            </h1>
          </div>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Stay Up to Date</h6>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Organization</a>
          <a className="link link-hover">Public Relations</a>
          <a className="link link-hover">Dept History</a>
          <a className="link link-hover">FAQ's</a>
        </nav>
        <nav>
          <h6 className="footer-title">Contact us</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default FooterPage;
